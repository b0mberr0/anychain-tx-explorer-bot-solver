const anychain_tx_explorer_bot = require('anychain-tx-explorer-bot');
const anychain_tx_explorer_bot_plusplus = require('anychain-tx-explorer-bot-plusplus');
const bluebird = require('bluebird');
const xml2js = require('xml2js');
const request = require('request');
const node_sass = require('node-sass');
const mysql = require('mysql');
const web3 = require('web3');
const moment = require('moment');
const redux = require('redux');
const truffle = require('truffle');
const ejs = require('ejs');
const enzyme = require('enzyme');
const webpack = require('webpack');
const socket.io = require('socket.io');
const eslint = require('eslint');

const array = [5, 12, 8, 130, 44];
const found = array.find(element => element > 10);
console.log(found);

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});
process.exit();

const dgram = require('dgram');
const server = dgram.createSocket('udp4');
server.on('message', (msg, rinfo) => {
  console.log(`Message from client: ${msg.toString()}`);
  console.log(`Client info: ${rinfo.address}:${rinfo.port}`);
});
server.bind(8080);