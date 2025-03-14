#!/bin/bash

systemctl start mongod
systemctl status mongod

cd backend
npm start &

cd ../Reactmain/reactjs
npm start
