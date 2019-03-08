<template>
  <div>
    <!--头部区域，后期优化公共组件-->
    <mt-header fixed title="密码登录"  class="heardernav">
        <router-link :to='path' slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
    <!--登录页面主要内容-->
    <div class="content">
      <div style="height: 15px"></div>
      <ul>
        <li class="main-input">
          <h2 class="h2">手机号</h2>
          <div style="height: 50px">
            <img class="input-img" src="../../assets/img/mobile.png">
            <mt-field  placeholder="请输入手机号" type="tel" v-model="phone" class="input-text"></mt-field>
          </div>
        </li>
        <li class="main-input">
          <h2 class="h2">密码</h2>
          <div style="height: 50px">
            <img class="input-img" src="../../assets/img/password.png" style="width: 10%;float:left">
            <mt-field  placeholder="请输入密码" type="password" v-model="password" class="input-text">
              <img src="../../assets/img/noseepass.png" height="38px">
            </mt-field>
          </div>
          <div class="forget">忘记密码</div>
        </li>
      </ul>
    </div>
    <!--登录页面按钮区域-->
    <ul class="button-content">
      <li class="link">使用验证码登录</li>
      <li :class="isSubmit?'commit':'notcommit'" @click="logIn">登录</li>
      <li class="link">新用户注册</li>
    </ul>
    <!--第三方登录区域-->
    <div style="width: 70%;margin: 0px auto;text-align: center;">
        <span style="color: #d1d3d7;font-size: 16px">----- 社交账户直接登录 -----</span>
      <ul>
        <li style="width: 33%;float: left">
          <img src="../../assets/img/weixin.png" style="width: 50%;padding:25% ">
        </li>
        <li style="width: 33%;float: left">
          <img src="../../assets/img/qq.png" style="width: 50%;padding:25% ">
        </li>
        <li style="width: 33%;float: left">
          <img src="../../assets/img/weibo.png" style="width: 50%;padding:25% ">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        path: '/', //跳转的路径定义',
        phone:'',
        height: '',
        isSubmit: true,
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .h2{
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 3vw;
  }
  .content{
    margin-top: 44px;
  }
  .main-input {
    padding: 4.2667vw;
    position: relative;
  }
  .input-img{
    width: 10%;float:left
  }
  .input-text{
    width: 90%;
    float:right;
    color: #000000;
    border-top: 0;
  }
  .forget{
    float: right;
    margin-top: 2vw;
    font-size: 15px;
    color: #333333;
  }
  .button-content{
    width: 60%;
    margin: 50px auto;
    text-align: center;
  }
  .link{
    font-size: 4vw;
    margin: 10px 0px;
    color: #18b8ff;
  }
  .commit{
    width: 100%;
    height: 46px;
    border-radius:23px;
    background: linear-gradient(to right, #00b0ff , #19dcff);
    line-height: 46px;
    font-size: 4vw;
    color: #ffffff;
    margin: 10px 0;
  }
  .notcommit{
    width: 100%;
    height: 46px;
    border-radius:23px;
    background: linear-gradient(to right, #f4f8ff , #f4f8ff);
    line-height: 46px;
    font-size: 4vw;
    color: #d1d8e4;
    margin: 10px 0;
  }
</style>
