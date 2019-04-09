const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//引入mongoose模块操作mongoDB
const mongoose = require('mongoose');

// 引入路由文件
const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');

// 连接数据库
mongoose.connect('mongodb://localhost/vue',{ useNewUrlParser:true })
  .then( () => console.log('连接数据库成功'))
  .catch(err => {
    throw err;
  })


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/build')));

app.use('/api', indexRouter);
app.use('/admin',adminRouter);

module.exports = app;
