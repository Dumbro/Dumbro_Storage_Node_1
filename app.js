const express = require('express');
const app = express();
const logger = require('morgan');

const redis = require('redis');
const redisCacheClient = redis.createClient(require('./config/redisClient').redisCacheServer);
redisCacheClient.select(1, err => {
    if (err) {
      return ;
    }
    console.log('redisCache DB1 selected');
})

app.use(logger('dev'));

module.exports = app;

