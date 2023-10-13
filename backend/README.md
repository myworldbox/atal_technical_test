# myapibox

Author - myworldbox

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

- postgresql : (3d) -> database -> collection

- mongodb : (3d) -> database -> collection

- firebase : (3d) -> database -> collection

- firestore : (2d) -> collection

- google sheet : (2d) -> tab

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
# hash function
# scrypt
1. scrypt

# bcrypt
1. bcrypt

# sha-3
1. sha3-512
2. sha3-384
3. sha3-256
4. sha3-224

# sha-2
1. sha512
2. sha384
3. sha256
4. sha224

# sha-1
1. sha1

# md5
1. md5

# ripemd
1. ripemd320
2. ripemd160

# whirlpool
1. whirlpool

# blake2
1. blake2b512
2. blake2s256

# shake
1. shake256
2. shake128

# whirlpool
1. whirlpool1
2. whirlpool0

# gost
1. gost2012-512
2. gost2012-256
3. gost2001
4. gost94-test
5. gost94-cryptopro
6. gost94

# encryption + decryption
1. aes-128-cbc [ key - 16 : iv - 16 ]
2. aes-128-ccm [ key - 16 : iv - 12 ]
3. aes-128-cfb [ key - 16 : iv - 16 ]
4. aes-128-cfb1 [ key - 16 : iv - 16 ]
5. aes-128-cfb8 [ key - 16 : iv - 16 ]
6. aes-128-ctr [ key - 16 : iv - 16 ]
7. aes-128-ecb [ key - 16 : iv - not applicable ]
8. aes-128-gcm [ key - 16 : iv - 12 ]
9. aes-128-ocb [ key - 16 : iv - 12 ]
10. aes-128-ofb [ key - 16 : iv - 16 ]
11. aes-128-xts [ key - 32 : iv - 16 ]
12. aes-192-cbc [ key - 24 : iv - 16 ]
13. aes-192-ccm [ key - 24 : iv - 12 ]
14. aes-192-cfb [ key - 24 : iv - 16 ]
15. aes-192-cfb1 [ key - 24 : iv - 16 ]
16. aes-192-cfb8 [ key - 24 : iv - 16 ]
17. aes-192-ctr [ key - 24 : iv - 16 ]
18. aes-192-ecb [ key - 24 : iv - not applicable ]
19. aes-192-gcm [ key - 24 : iv - 12 ]
20. aes-192-ocb [ key - 24 : iv - 12 ]
21. aes-192-ofb [ key - 24 : iv - 16 ]
22. aes-256-cbc [ key - 32 : iv - 16 ]
23. aes-256-cbc-hmac-sha1 [ key - 32 : iv - 16 ]
24. aes-256-cbc-hmac-sha256 [ key - 32 : iv - 16 ]
25. aes-256-ccm [ key - 32 : iv - 12 ]
26. aes-256-cfb [ key - 32 : iv - 16 ]
27. aes-256-cfb1 [ key - 32 : iv - 16 ]
28. aes-256-cfb8 [ key - 32 : iv - 16 ]
29. aes-256-ctr [ key - 32 : iv - 16 ]
30. aes-256-ecb [ key - 32 : iv - not applicable ]
31. aes-256-gcm [ key - 32 : iv - 12 ]
32. aes-256-ocb [ key - 32 : iv - 12 ]
33. aes-256-ofb [ key - 32 : iv - 16 ]
34. aes-256-xts [ key - 64 : iv - 16 ]
35. bf-cbc [ key - 16 : iv - 8 ]
36. bf-cfb [ key - 16 : iv - 8 ]
37. bf-ecb [ key - 16 : iv - not applicable ]
38. bf-ofb [ key - 16 : iv - 8 ]
39. camellia-128-cbc [ key - 16 : iv - 16 ]
40. camellia-128-ccm [ key - 16 : iv - 12 ]
41. camellia-128-cfb [ key - 16 : iv - 16 ]
42. camellia-128-cfb1 [ key - 16 : iv - 16 ]
43. camellia-128-cfb8 [ key - 16 : iv - 16 ]
44. camellia-128-ctr [ key - 16 : iv - 16 ]
45. camellia-128-ecb [ key - 16 : iv - not applicable ]
46. camellia-128-gcm [ key - 16 : iv - 12 ]
47. camellia-128-ocb [ key - 16 : iv - 12 ]
48. camellia-128-ofb [ key - 16 : iv - 16 ]
49. camellia-192-cbc [ key - 24 : iv - 16 ]
50. camellia-192-ccm [ key - 24 : iv - 12 ]
51. camellia-192-cfb [ key - 24 : iv - 16 ]
52. camellia-192-cfb1 [ key - 24 : iv - 16 ]

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
        "password": "2020myworldbox2020",
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
    "key": {
        "mysql": {
            "host": "localhost",
            "user": "root",
            "password": "2020myworldbox2020",
            "database": "mytestbox"
        },
        "firebase": {
            "apiKey": "AIzaSyBfWn-GrC5qtJIp44oyO2qFwVMxmcEOkPU",
            "authDomain": "vlblockchain.firebaseapp.com",
            "databaseURL": "https://vlblockchain-default-rtdb.firebaseio.com",
            "projectId": "vlblockchain",
            "storageBucket": "vlblockchain.appspot.com",
            "messagingSenderId": "894753325454",
            "appId": "1:894753325454:web:50a6218c112c381db1e4df",
            "measurementId": "G-CR75KHHTR0"
        },
        "postgre_sql": {
            "user": "mychessbox_user",
            "host": "dpg-cgrtv29mbg5e4kim5aa0-a.oregon-postgres.render.com",
            "database": "mychessbox",
            "password": "WTmdxXpBITyRzB2qtkdcPGDRYQj2ZEsq"
        },
        "google": {
            "type": "service_account",
            "project_id": "myapibox-384517",
            "private_key_id": "355de443d7640332eb6342aa1aa5f375655dc2fd",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDCSNjz+f8NNA6j\nSaS47l8vqRRJNCic8dQ7skD7xfgltsy/BeAJUCb1AM376g3AM8dzVyAlwbm7rGjO\nGlsS31U4eBbBo9BJ5tAuxNxCjkGdXxH+OGZVJOo28xA/CAsIWrf46OBVt76qHWiu\n3qATL95jseryfC0B0wUFHcxH2OFOu6jVXai4kfbeIz1Ui3bLSn7nbXb1Q8YjXZ3v\nJAkh21FPaYJzTulDCPbCr8+0FZO038f6kQAURb07XINP9uWzOK+FNu/sJcuFrvId\nqjDShSYYam3lhHMsuqvZxtxh19QhOji0oAR/3MA0J0nxjrG+9/0VqxVwFj+4958K\ndT9JM/fvAgMBAAECggEAQSvumujhhaxQvLWXa/GKPJKbG3NDrGHyr5O7+LkP5JbN\nV8bAwF8Csmzyq+53bmHwJeC0B/ZUN4A+J+TvaAVCsQ6Xk50/4Ypri0S+HhVaLVAW\n2RBSQ31+k7A1Yu9vw/2qePSlTBu2+Zmj5AUJ7WXBU+/6wBynfFUs+epk/DTkX2Q9\n2RMfWewVsppgwWmjeedZRWGPwq/BzRI+rJeR/hSf8MGOwi436EqP7W6oimNQInO0\ndCBO5DLEz4m6y+QZcVO1Yk6EC/o4uKXi57IOEBLm5WDVqy2MkXALUiSThMwMuSTj\nRdD5GBJ7AQ54PvubVQmXFuLcK/kuHmH2ldxdySyfAQKBgQDv5YjwVa4P5LDVSxqP\nHV0GaFvz6CPQxkUfrHCxd8J+KBW+Oew90ZIDU2F97TNwdiH8OSrYvzqnUvjZnCE+\ngijJDzTaxWN+o0BT+NBsyIIOUCyQO+EDDKZiOc2aM9y/LhFGU2IjuAAzU5aO2cpE\nFT9H9EoZZM6rZNJ2ZbZdaBrGhQKBgQDPU3/ZBrdgd/SaZD4rdSk92DAxxHd5r5ZO\nk60GLY9YfoGbMNmb5zA9rquYSSrdfsoy4lJebf2Q2a/uwsC5M4R07HXl5BPaRBQe\ni3Qn4WI4SpLiXfTEuaToV39XT4Xe23qYc0PaVzDqjbrqoif87vlnnejGNkGvoRff\nVGiTMFkw4wKBgGtdjGsbvZpJXMcpJMrWdnLOtBC2XYkro3YohAs5MSerIwgO/mcw\nayvn3mMwjOwRQuaSY1W8SDDo1oz17n7+W+iYUKx02TGtOLYcTpPRLTvgsAEhe3QU\n7kZZ3mXcPjimEn8qBGs+B4DxMRnf6UGNTNQURjGVR1W3+uWYYgTt+cXNAoGAC6kg\nma49Bhn5Ee3taThPt4C/RS1NovRzObwokR5i35FN7NKUiqY4GmAGmqwS0x5cdPwx\nscnx5wG3WXBusnvpSUI7Z1CqpS4LC6TARbXxdkULedva9m2SjtbM/LYmS2CAxq5E\n9LTOtYJ/Ls8r/JfcQy2od+15SE2BMDhpIU4o1g0CgYEAhzrPY7JpjnLhAs6oGflc\nmtFy44rCgXWlLbhMOVd7zlQuijRltCLF85H8ivcHG50ut3dqXdhTALqzSzrg2+v8\nlUFmqutby8aGzRDmMantRILgPB7E9e1nX26A9a4IgwFhHtpcqeV9I/X4F6JxCVvA\nYxrHxl5gd6I+RKxhuI6FjfQ=\n-----END PRIVATE KEY-----\n",
            "client_email": "myapibox@myapibox-384517.iam.gserviceaccount.com",
            "client_id": "110818597170097561948",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/myapibox%40myapibox-384517.iam.gserviceaccount.com"
        },
        "mongodb": {
            "url": "mongodb+srv://myworldbox:2020myworldbox2020@cluster0.hy5amt8.mongodb.net/test"
        },
        "redis": {
            "url": "redis://default:5JEH6rfko2r3TXd2TOYG4WqKvTGwkXVs@redis-18435.c57.us-east-1-4.ec2.cloud.redislabs.com:18435"
        }
    }
},
"crypto": {
    "key": {
        "public": {
            "value": "public",
            "length": 32
        },
        "private": {
            "value": "private",
            "length": 16
        }
    },
    "salt": {
        "value": "salt",
        "length": 16
    },
    "iv": {
        "value": "iv",
        "length": 16
    },
    "limit": 5,
    "option": {
        "N": 16384,
        "r": 8,
        "p": 1,
        "maxmem": 33554432
    }
}
```

## vercel deployment

routes are reduced to suite the 12 serverless function limits of vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/myworldbox/myapibox)