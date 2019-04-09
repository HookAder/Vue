const mongoose = require('mongoose');

// 用户信息
const userSchema = new mongoose.Schema({
  username: String,
  password: String
})

//食品信息
const foodSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  info: String,
  count: {
    type: Number,
    default: 1
  },
  imgSrc: String
})

module.exports = {
  userSchema,
  foodSchema
};