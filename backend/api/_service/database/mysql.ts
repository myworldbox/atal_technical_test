import * as init from '../../_global/init'

var mysql_node = (request: any) => {
    return request.service.node.replace(/\./g, '/');
}

var mysql_connect = async (request: any) => {

    return init.library.mysql.createConnection({
        host: request.key.mysql.host,
        user: request.key.mysql.user,
        password: request.key.mysql.password,
        database: request.key.mysql.database,
    })
}

function getDataType(value: any): string {
    if (typeof value === 'number') {
        return 'INT';
    } else if (typeof value === 'boolean') {
        return 'BOOLEAN';
    } else if (Array.isArray(value)) {
        return 'JSON';
    } else if (typeof value === 'object') {
        return 'JSON';
    } else {
        return 'TEXT';
    }
}

var sql_schema_query = (request: any): string => {
    let schema = `CREATE TABLE IF NOT EXISTS ${request.service.node} (\n`;

    for (const key in request.data) {
        const value = request.data[key];
        const dataType = getDataType(value);

        schema += `  ${key} ${dataType},\n`;
    }

    schema = schema.slice(0, -2); // Remove the trailing comma and newline
    schema += '\n)';

    return schema;
}

var check_existance = async (request: any) => {
    var unique = await init.intent.validation_to_id(request);
    const results = await mysql_read(request);

    const exists = results.some((value: any) => {
        return unique == value.id;
    });

    return exists;
};

var mysql_create = async (request: any) => {

    var unique = await init.intent.validation_to_id(request)

    request.data = Object.assign({ id: unique }, request.data)

    await init.variable.database[request.service.provider].query(sql_schema_query(request));

    if (await check_existance(request)) {
        return "Data exist."
    }

    request.data = await init.intent.hasher(request)



    const columns = Object.keys(request.data).map(key => `\`${key}\``).join(", ");

    const query = `INSERT INTO ${request.service.node}(${columns}) VALUES (?)`;

    return await init.variable.database[request.service.provider].query(query, [init.intent.json_to_array(request.data)]);
}

var mysql_read = async (request: any) => {
    const query = `SELECT * FROM ${request.key.mysql.database}.${request.service.node}`;

    return (await init.variable.database[request.service.provider].query(query))[0]
}

var mysql_update = async (request: any) => {

    return await mysql_create(request)
}

var mysql_delete = async (request: any) => {

}

export {
    mysql_connect,
    mysql_create,
    mysql_read,
    mysql_update,
    mysql_delete
}