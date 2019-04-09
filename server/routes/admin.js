const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const schema = require('./Schema/index');

const userModel = mongoose.model('vue-user',schema.userSchema);
const foodModel = mongoose.model('vue-food',schema.foodSchema);

// 获取用户
// 获取商品
// @ GET
router.get('/get_user_food',(req,res) => {
  const data = {
    status:200,
    msg:'获取数据成功',
    user:0,
    food:0
  };
  userModel.find({},{_id:false,__v:false},(err,docs) => {
    if(!err){
      // 数据库中的user文档给data.user里
      data.user = docs;
      foodModel.find({},{_id:false,__v:false},(err,docs) => {
        if(!err){
          data.food = docs;
          res.status(200).json(data);
        }else{
          throw err;
        }
      })
    }else{
      throw err;
    }
  })
});

// 删除单个数据
// @ POST
// username
router.post('/remove_user',(req,res) => {
  const { username } = req.body;
  userModel.deleteOne({username},err => {
    if(!err){
      res.status(200).json({
        status:200,
        msg:'删除用户成功'
      })
    }else{
      res.status(200).json({
        status:0,
        msg:'操作失败'
      })
    }
  })
})

// 添加一条商品
// @ POST
// title imgSrc price info
router.post('/add_food',(req,res) => {
  const { title,imgSrc,price,info } = req.body;
  foodModel.create({title,imgSrc,price,info,count:1},err => {
    if(!err){
      res.status(200).json({
        status:200,
        msg:'添加数据成功!'
      })
    }else{
      res.status(200).json({
        status:0,
        msg:'添加失败!'
      })
    }
  })
})

// 删除单个商品
// POST
// title
router.post('/remove_food',(req,res) => {
  const { title } = req.body;
  foodModel.deleteOne({title},err => {
    if(!err){
      res.status(200).json({
        status:200,
        msg:'删除成功!'
      })
    }else{
      res.status(200).json({
        status:0,
        msg:'删除失败!'
      })
    }
  })
})

module.exports = router;