# Install
```bash
# cloning the project 
git clone https://github.com/MARK-46/experimental-node-chat.git
cd ./experimental-node-chat

# installing packages
npm install --force

# creating environment file from example
cp configs/.env.example configs/.env
```

Open the configs/.env file and chang db connection details and import sql file to your MySQL database.

~ DB File: ./src/database/experimental.sql

```properties
DB0_HOST="127.0.0.1"
DB0_PORT="10010"
DB0_USERNAME="***YOUR_DB_USERNAME***"
DB0_PASSWORD="***YOUR_DB_PASSWORD***"
DB0_DATABASE="experimental"
```

# Run
```bash
# build all ts files and run index.js from ./build directory
npm start 

# or. install pm2 module globally to run app in background
npm install pm2 -g

# pm2 ecosystem configuration initialization 
#     or deleting an existing configuration
npm run pm2-init
npm run pm2-remove

# start/restart/stop project in background
npm run pm2-start
npm run pm2-stop
npm run pm2-restart
```

# Rest APIs
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/2803724-2b93fea3-9a7f-434e-87de-671ec5a5f882?action=collection%2Ffork&collection-url=entityId%3D2803724-2b93fea3-9a7f-434e-87de-671ec5a5f882%26entityType%3Dcollection%26workspaceId%3Dbe781ae3-7faa-471d-ab5f-62edac5e442b)


To set up the Postman environment, you need to run the gateway api.

```http
GET /api/gateway?version=1.0&platform=web HTTP/1.1
Host: 127.0.0.1:1998
ex-language: en
Accept: application/json
```

Then you need to register a new user.

```http
POST /api/register HTTP/1.1
Host: 127.0.0.1:1998
ex-language: en
Content-Length: 685
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="name"

Mark
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="username"

MARK2
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="password"

admin123456
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="confirm_password"

admin123456
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="email"

mark.2@gmail.com
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="avatar"; filename="/C:/_Mark/cache/logo_mk46.jpg"
Content-Type: image/jpeg

(data)
----WebKitFormBoundary7MA4YWxkTrZu0gW

```

Successful response:

```json
{
  "error": false,
  "message": null,
  "data": {
    "result": {
      "access_token": {
        "token": "08A9C415E9D64B8E91443785DDCF46FEC76D1D3BCE3435DD641DB2EBE5ABB3F8038F135E3630F4E5FA11025076B87A0796115A5C1BE63C20FD529C06E30E325D",
        "expires_at": "2022-10-13T08:14:30.645Z",
        "created_at": "2022-10-10T08:14:30.645Z"
      },
      "refresh_token": {
        "token": "72A2F21466BE41480328A9B5B4B0A1EEE310165E6DC6B8955EAEAE356AD71AAC3209BB87F491A2609231D50FD0404E197638D61F33CAD3310E076A1A5666B822",
        "expires_at": "2022-11-09T08:14:30.554Z",
        "created_at": "2022-10-10T08:14:30.554Z"
      },
      "user": {
        "user_id": "6A0019AC8BE145B0BBBA84577DDAF227",
        "user_role": 4,
        "user_name": "Mark",
        "user_email": "mark.2@gmail.com",
        "user_status": 1,
        "user_username": "MARK2",
        "user_image": "http://185.177.105.151:1998/uploads/4AAFCD00DBDF4B289EEE24D9FE82C839-2022082114552054.jpg",
        "user_created_at": "2022-08-21T14:55:20.542Z",
        "user_updated_at": "2022-08-21T14:55:20.542Z",
        "user_role_label": "User",
        "user_online": false
      }
    }
  }
}
```

Then copy the token from the access_token object.

Open the link [http://127.0.0.1:1998/](http://127.0.0.1:1998/) and paste the token into the request parameter in the open dialog box and click the connect button to test the Socket.IO connection.

![CONNECTION DIALOG](/public/uploads/img1.png)

If you successfully connected to socket.io, you received a socket_id and signal event with your profile data.

![SUCCESS CONNECTION](/public/uploads/img2.png)

End.

Thank you for your attention :)
