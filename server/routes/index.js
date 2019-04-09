const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Schema集合
const schema = require('./Schema/index');

// 创建用户信息模型
const userModel = mongoose.model('vue-user', schema.userSchema);

// 创建应用内食品模型
const foodModel = mongoose.model('vue-food', schema.foodSchema);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// 该函数用于检测账号是否存在数据库当中
const detectionUser = (user, dataBase) => {
  let type;
  for (let i = 0; i < dataBase.length; i++) {
    if (user.username !== dataBase[i].username) {
      type = true;
    } else {
      return false;
    }
  }
  return type;
};

// 注册接口
// @ POST
// @ username,password
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  //存放用户信息对象
  const userInfo = {
    username,
    password
  };
  userModel.find({}, { _id: false, __v: false }, (err, docs) => {
    if (!err) {
      let user = detectionUser(userInfo, docs);
      if (user) {
        //保存用户信息到数据库当中
        userModel.create({ username, password }, () => {
          res.status(200).json({
            status: 200,
            msg: '账号注册成功!'
          })
        });
      } else {
        res.status(200).json({
          status: 0,
          msg: '该账号已存在,请重新注册!'
        })
      }
    } else {
      throw err;
    }
  })
})


//这个函数检测前台发送过来的账号密码,检测数据库中是否存在，且账号密码相等
const detectionPass = (user, dataBase) => {
  for (let i = 0; i < dataBase.length; i++) {
    if (user.username === dataBase[i].username) {
      if (user.password === dataBase[i].password) {
        return true;
      } else {
        return false;
      }
    }
  }
};

// 登录接口
// @ POST
// @ username,password
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const userInfo = {
    username,
    password
  };
  userModel.find({}, { _id: false, __v: false }, (err, docs) => {
    if (!err) {
      let user = detectionPass(userInfo, docs);
      if (user) {
        res.status(200).json({
          status: 200,
          msg: '登录成功!'
        })
      } else {
        res.status(200).json({
          status: 0,
          msg: '账号或密码错误!'
        })
      }
    } else {
      throw err;
    }
  })
});

// 获取食品接口
// @ GET
router.get('/get_food',(req,res) => {
  foodModel.find({},{_id:false,__v:false},(err,docs) => {
    if(!err){
      res.status(200).json({
        status:200,
        msg:'数据获取成功',
        data:docs
      })
    }else{
      throw err;
    }
  })
})


module.exports = router;
