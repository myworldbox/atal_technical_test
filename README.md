# atal technical test

mirgator - python

open sourced

backend - typescript - node.js

not fully open sourced at the moment but I can share the entire code face to face

<a href="https://github.com/myworldbox"><img src="https://myworldbox.github.io/resource/image/portrait/VL_0.jpeg" align="left" height="150" width="150" ></a>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## customised typescript api

1. based on [ fastify / express ] framework

2. constructed with [ web socket ] support

3. self-defined and built-in cryptography function

4. crud integration

5. data storage

6. user verification and authentication

## database utility

- firebase : (nd) -> database -> ...

- firestore : (nd) -> collection -> ...

- mongodb : (2d) -> database -> collection

- mysql : (1d) -> table

- postgresql : (1d) -> table

- google sheet : (1d) -> table

- redis : (1d)

## quick start

```bash
# clone repo
git clone https://github.com/myworldbox/myapibox.git

# download module
yarn

# start development
yarn start
```

## useful command

```bash
# quick github commit
yarn commit
```

## api

```bash
# function can be triggered by both GET / POST request
# fill the below variable with json format displayed below
# [ GET ] - req.query.eject
# [ POST ] - req.body

/
# root

/api/auth
# user verification and authentication - ( firebase )

/api/crypto
# crypto
1. hash
2. encryption
3. decryption

/api/database
# database
1. postgresql
2. mongodb
3. firebase
4. firestore
5. google sheet
6. redis

/api/storage
# storage
1. s3
2. gcs
3. azure
4. ibm
5. firebase
6. cloudinary

/api/json
# json visualization
```

## essential json

```json
{
    "service": {
        "provider": "",
        "action": "",
        "password": "",
        "crypto": {
            "name": "aria-128-cfb8",
            "type": "encrypt"
        },
        "hash": [
            "password"
        ],
        "validation": [
            "email"
        ],
        "node": "database.collection.node"
    },
    "data": {},
}
```

## vercel deployment

routes are reduced to suite the 12 serverless function limits of vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/myworldbox/myapibox)
