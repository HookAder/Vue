import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存放购物车里的数据
    snackData:[],
  },
  mutations: {
    // 删除购物车里指定的数据
    //根据index 下标传值获取snackData的指定数据
    handleRemoveItem(state,index){
      state.snackData.splice(index,1);
    },
    // 添加购物车里的数据
    handlePushSnackData(state,data){
      state.snackData.push(data);
    },
    // 减少一个数量
    handleLessCount(state,index){
      if(state.snackData[index].count <= 1){
        state.snackData[index].count = 1;
      }else{
        state.snackData[index].count --;
      }
    },
    // 增加一个数量
    handleAddCount(state,index){
      state.snackData[index].count ++;
    },
    // 结算事件
    handleSettlement(state){
      state.snackData = [];
    }
  },
  actions: {

  }
})
