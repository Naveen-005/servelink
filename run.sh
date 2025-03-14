#!/bin/bash
apt update
apt install -y nodejs
apt install -y systemctl
apt install -y npm

cd backend
npm install

cd ../Reactmain/reactjs
npm install

apt-get install gnupg curl

curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \
    gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg \
   --dearmor

echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-8.0.list

apt-get update
apt-get install -y mongodb-org

sed -i 's/^  bindIp:.*/  bindIp: 0.0.0.0/' /etc/mongod.conf