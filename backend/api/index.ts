import * as init from "./_global/init";

(async () => {
    let app: any;

    try {
        switch (init.config.nodejs) {
            case "fastify":
                const Fastify = init.library[init.config.nodejs].default;
                app = Fastify();
                await app.register(require("@fastify/express"));
                break;
            case "express":
                const Express = init.library[init.config.nodejs].default;
                app = Express();
                break;
            default:
                throw new Error(`Invalid Node.js framework: ${init.config.nodejs}`);
        }

        const server = app.listen({ port: init.config.port }, () =>
            console.log(`[ Port <---> ${init.config.port} ]`)
        );

        const applyMiddleware = () => {
            try {
                const middlewareConfig: { [key: string]: any } = init.config.middleware;
                Object.entries(init.middleware).forEach(([key, value]) => {
                    if (middlewareConfig.hasOwnProperty(key)) {
                        console.log(key);
                        app.use(value(middlewareConfig[key]));
                    } else {
                        console.log(key);
                        app.use(value());
                    }
                });
            } catch (error) {
                console.log(error)
            }
        };

        const applyRoutes = () => {
            try {
                Object.entries(init.route).forEach(([key, value]) => {
                    if (init.config.route.includes(key)) {
                        console.log(key);
                        key === "/" ? app.get(key, value) : app.use(key, value);
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }

        const connect_database = async () => {
            try {
                await Promise.all(
                    init.config.connect.database.map(async (value: any) => {

                        if (init.variable.database) {

                            init.digest.service.provider = value;
                            init.digest.service.action = "connect";

                            init.variable.database[value] = await eval(`init.service.database.${value}.${value}_connect`)(init.digest);

                            console.log(value, init.variable.database[value]);
                        }
                    })
                )
            } catch (error) {
                console.log(error)
            }
        }

        applyMiddleware()
        applyRoutes()
        connect_database()

        console.log(init.variable)

        const web_socket = new init.library.ws.WebSocket.Server({ server });

        web_socket.on("connection", (socket) => {
            socket.on("message", (message: string) => {
                socket.send(`web socket message ---> ${message}`);
            });
            socket.send("init.firebase_auth.getAuth");
        });

        console.log("WebSocket server listening");

        server.on("upgrade", (request: any, socket: any, head: any) => {
            web_socket.handleUpgrade(request, socket, head, (socket) => {
                web_socket.emit("connection", socket, request);
            });
        });

    } catch (error) {
        console.error("Error during server initialization:", error);
    }
})();