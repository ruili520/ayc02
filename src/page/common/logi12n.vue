<template>
  <div class="container bgF">
    <mt-header fixed title="密码登录" style="background: #ffffff;color: #000000;height: 40px">
      <router-link to slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- 头部 -->
    <ul class="login-top">
      <li class="mobile">
        <h2>手机号</h2>
        <div class="input">
          <img class="img-l" src="../../assets/img/手机号@2x.png" alt>
          <input type="text" placeholder="请输入11为手机号码" maxlength="11" minlength="11" v-model="name">
        </div>
        <div class="mistake">
          <img src="../../assets/img/！@2x.png" alt>
          <p>手机号码输入不正确</p>
        </div>
      </li>
    </ul>
    <!-- 手机号 -->
    <ul>
      <li class="mobile">
        <h2>密码</h2>
        <div class="input">
          <img class="img-l" src="../../assets/img/密码@2x.png" alt>
          <input type="password" placeholder="请输入6~12英文字符的密码" maxlength="12" v-model="pwd">
          <!--<img class="eye" src="../../assets/img/闭眼@2x.png" alt>-->
        </div>
        <div class="mistake">
          <img src="../../assets/img/！@2x.png" alt>
          <p>密码输入不正确</p>
        </div>
        <div class="sr">忘记密码</div>
      </li>
    </ul>
    <!-- 验证码 -->
    <ul class="select">
      <li class="cipher">
        <p>使用验证码登录</p>
      </li>
      <li class="enter blue" @click="logIn">登录</li>
      <li class="register" @click="$router.push('/reg')">
        <p>新用户注册</p>
      </li>
    </ul>
    <!-- 选择登录 -->
    <ul class="social">
      <li class="direct">
        <div></div>
        <p>社交账户直接登录</p>
        <div></div>
      </li>
      <li>
        <img id="weiboLogin" src="../../assets/img/weibo.png" alt @click="weiboLogin">
        <img id="qqLogin" src="../../assets/img/QQ@2x.png" alt @click="qqLogin">
        <img id="wxLogin" src="../../assets/img/weixin.png" alt @click="wxLogin">
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "login",
    data() {
      return {
        successTarget: "",
        name: "",
        pwd: "",
        showPwd: true, //开关--密码可见
        canvas: {} //存放canvas DOM节点
      };
    },
    created() {
      this.getParams();
    },
    methods: {
      getParams() {
        /*// 取到路由带过来的参数
        console.log(this.$route.query);
        // 将数据放在当前组件的数据内
        this.successTarget = this.$route.query;*/
      },
      logIn() {
        var _this = this;
        var data = {
          mobile: _this.name,
          password: _this.pwd
        };
        _this.AycPost(
          "/api/user/login", data
          , function (data) {
            if (data != null) {
              _this.$router.push("/");
            }
            console.log(data);
          }, function (res) {

          })


        //先做一些简单的判断再提交ajax
        /*if (/^[1][35789][0-9]{9}$/.test(this.name) === false)
          this.$dialog("帐号不正确");
        else if (/^[\d\D]{6,12}$/.test(this.pwd) === false)
          this.$dialog("密码不正确");
        else {
          //先跳到借款首页暂代，后期ajax替换
          this.$router.push("/user");
        }*/

      },
      goCancel() {
        //根据情景不一样，跳转的页面也会不同，暂定跳到我的借款首页
        //...省略
        this.$router.push("/loan");
      },
      sendCode(val) {
        this.code = val;
      },
      weiboLogin() {
        // 微博登录
      },
      qqLogin() {
        // QQ登录
      },
      wxLogin() {
      }
    },
    mounted() {
      var YDB = new YDBOBJ();
      YDB.isWXAppInstalled("installstate");

      function installstate(state) {
        //参数说明：您需要定义处理返回值函数，例如 function installstate(state){/*state返回的是微信客户端安装状态：0未安装 1已安装*/};
        if (state == 0) {
          var wxLogin = document.getElementById("wxLogin");
          // 隐藏
          wxLogin.style.display = "none";
        }
      }
    }
  };
// /*设置*/
//   function setCookie(name, value) {
//     var exp = new Date();
//     exp.setTime(exp.getTime() + 2 * 60 * 60 * 1000);
//     document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
//   }
</script>
<style scoped>
  @import "../../assets/css/login.css";

  .mistake {
    display: none;
  }
</style>
