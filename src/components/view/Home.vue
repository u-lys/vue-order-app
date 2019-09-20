<template>
  <div class="container">
    <div class="tabbar">
    <!--切换面板列表-->
      <mt-tab-container class="page-tabbar-container" v-model="active">
        <mt-tab-container-item id="index">
          <router-link :to="{path:'/Mine'}">麻辣烫</router-link>
          <router-link :to="{path:'/Home'}">鲜榨西瓜汁</router-link>
          <router-link :to="{path:'/Member'}">真功夫</router-link>
          <router-link to="">米粉</router-link>
          <router-link :to="{path:'/Order'}">饭小满</router-link>
        </mt-tab-container-item>
        <mt-tab-container-item id="member">
          <member></member>
          我的会员
        </mt-tab-container-item>
        <mt-tab-container-item id="order">
          <order></order>
          我的订单
        </mt-tab-container-item>
        <mt-tab-container-item id="mine">
          <mine></mine>
          我的
        </mt-tab-container-item>
      </mt-tab-container>
      <!-- 底部导航条 -->
      <mt-tabbar v-model="active" fixed>
        <mt-tab-item id="index" @click.native="changeState(0)">
          <tabbaricon :selectedImage="require('../../assets/home_selected.png')"
          :normalImage="require('../../assets/home_normal.png')"
          :focused="currentIndex[0].isSelected"
          ></tabbaricon>
          首页</mt-tab-item>
        <mt-tab-item id="member" @click.native="changeState(1)">
          <tabbaricon :selectedImage="require('../../assets/ic_weixin_selected.png')"
          :normalImage="require('../../assets/ic_weixin_normal.png')"
          :focused="currentIndex[1].isSelected" 
          ></tabbaricon>
          会员
        </mt-tab-item>
        <mt-tab-item id="order" @click.native="changeState(2)">
          <tabbaricon :selectedImage="require('../../assets/ic_weixin_selected.png')"
          :normalImage="require('../../assets/ic_weixin_normal.png')"
          :focused="currentIndex[2].isSelected" 
          ></tabbaricon>
          订单</mt-tab-item>
        <mt-tab-item id="mine" @click.native="changeState(3)" >
          <tabbaricon :selectedImage="require('../../assets/ic_me_selected.png')"
          :normalImage="require('../../assets/ic_me_normal.png')"
          :focused="currentIndex[3].isSelected"
          ></tabbaricon>
          我的</mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
import TabBarIcon from '../view/TabBarIcon.vue'
import Member from '../view/Member.vue'
import Order from '../view/Order.vue'
import Mine from '../view/Mine.vue'
export default {
  data() {
    return {
      active:"index",
      currentIndex:[     
        {isSelected:true},
        {isSelected:false},
        {isSelected:false},
        {isSelected:false}
      ]
    }
  },
  methods: {
    member(){
      this.$router.push("/Member");
    },
    order(){
      this.$router.push("/Order");
    },
    mine(){
      this.$router.push("/Mine");
    },
    changeState(index){
      console.log(2222)
      for(var i=0;i<this.currentIndex.length;i++){
        if(index==i){
          this.currentIndex[i].isSelected=true;
        }else{
          this.currentIndex[i].isSelected=false;
        }
      }
    }
  },
  components:{
    "tabbaricon":TabBarIcon,
    "member":Member,
    "order":Order,
    "mine":Mine
  }
}
</script>
<style scoped>
  /*修改 tabbar 默认文字颜色*/
  .mint-tabbar>.mint-tab-item{
    color:#999999;
  }
  /*修改默认tab选中文字样式*/
  .mint-tabbar>.mint-tab-item.is-selected{
    background-color: transparent;
    color:#45c018;
  }
  a{
    text-decoration: none;
    color:black;
    margin-left: 15px;
  }
  .container{
    width: 40%;
    height: 100%;
  }
  .mint-tabbar{
    width: 40%;
  }
</style>