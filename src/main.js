import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
//引入第三方组件库mint-ui
//1.1完成引入所有组件
import MintUI from "mint-ui"
//1.2单引入mint-ui样式文件
import'mint-ui/lib/style.css'
//1.3将mint-ui 注册vue
Vue.use(MintUI)
//引入图片字体文件
import './font/iconfont.css'
//引入axios
import axios from 'axios'
//发送请求保存session信息
axios.defaults.withCredentials=true
//配置请求基础路径
axios.defaults.baseURL="http://127.0.0.1:8080/"
//注册
Vue.prototype.axios=axios;
Vue.use(VueRouter)
//1、引入第三方模块vuex
import Vuex from 'vuex'
//2、注册vuex
Vue.use(Vuex)
//3、创建存储对象
var store=new Vuex.Store({
  state:{//集中管理数据方法
    age:23,
    list:[1,2,3,4]
  },
  mutations:{//集中修改数据函数属性
    clear(state){
      state.age=0;
    },
    updateAge(state,age){
      state.age=age;
    }
  },
  getters:{//集中获取数据函数
    getAge(state){//所有函数都有参数
      return state.age;
    },
    getList(state){//集中获取数据函数
      return state.list;
    }
  },
  actions:{//集中保存异步修改数据函数
    modifyAge:(context)=>{
      setTimeout(() => {
        //完成异步修改数据功能
        context.commit("clear");
      },500);
    }
  }
})
//4、为存储对象添加属性
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')


