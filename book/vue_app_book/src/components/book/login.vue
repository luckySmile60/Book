<template>
  <div class="container" align="center">
    <header class="text-left">
      <router-link to="/Home">
        <img src="../../assets/img/taoshu-logo.jpg" alt />
      </router-link>
      <span class="t1 text-muted">登录</span>
    </header>
    <div class="box">
      <form>
        <div class="box_small">
          <div class="form-group mt-2">
            <h5 class="title mb-3">Book&Store</h5>
          </div>
          <div class="form-group mt-2">
            <label class="mt-2" for="name">用户名：</label>
            <input
              v-model="uname"
              type="text"
              class="form-control"
              id="name"
              placeholder="UserName"
            />
            <span
              id="txtName"
              class="vali_info"
              :class="{'vali_success':isActive,'vali_fail':isActive2}"
            >字母数字汉字2~8位</span>
          </div>
          <div class="form-group mt-2">
            <label class="mt-2" for="upw">密码：</label>
            <input
              v-model="upwd"
              type="password"
              class="form-control ml-3"
              id="name"
              placeholder="upwd"
            />
            <span
              id="txtPwd"
              class="vali_info"
              :class="{'vali_success':isActive,'vali_fail':isActive2}"
            >字母数字6~8位</span>
          </div>
          <div class="form-group mt-2">
            <a href class="text-dark text_small">忘记密码?</a>
          </div>
          <div class="form-group mt-2">
            <div class="f1">
              <button class="btn" @click.prevent="login">登录</button>
              <router-link to="/Register" class="text-dark">立即注册</router-link>
            </div>
          </div>
        </div>
      </form>
    </div>

    <footer>
      <div class="border-top mt-5">
        <span
          class="d-block text_small text-muted mt-2"
          align="center"
        >关于淘书&nbsp;&nbsp;&nbsp;诚征英才&nbsp;&nbsp;&nbsp;图书目录&nbsp;&nbsp;&nbsp;免责条款&nbsp;&nbsp;&nbsp;联系我们</span>
        <span
          class="d-block text_small text-muted mt-2"
          align="center"
        >Copyright © Mint&淘书网 Taoshu.com 版权所有</span>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      isActive: false,
      isActive2: false
    };
  },
  methods: {
    login() {
      // 功能：完成用户登录操作
      // 1：创建匹配用户名的正则表达式
      var reg = /^([a-z0-9\u4e00-\u9fa5]{2,8})$/i;
      // 匹配邮箱的正则表达式
      // var reg1=/^([a-zA-Z\d])(\w|\-)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/;
      // 匹配密码的正则表达式
      var reg1 = /^[a-z0-9]{6,8}$/i;

      // 2:获取用户输入 用户名 密码
      var u = this.uname;
      var p = this.upwd;
      console.log(u + "_" + p);
      // 3：验证用户名不匹配
      if (!reg.test(u)) {
        // alert("用户名输入不正确");
        // txtName.className="vali_fail";
        this.isActive2 = true;

        return;
      } else {
        this.isActive = true;
      }

      if (!reg1.test(p)) {
        //    alert("密码输入不正确");
        this.isActive2 = true;

        return;
      } else {
        this.isActive = true;
      }
      // 4:发送ajax请求完成登录验证
      var url = "login";
      var obj = { uname: u, upwd: p };
      this.axios
        .get(url, { params: obj })
        .then(res => {
          //成功回调
          console.log(res.data.code);
          sessionStorage.setItem("key", "res.data.data.uid");
          // 从sessionStorage获取数据
          sessionStorage.getItem("key");
          if (res.data.code == 1) {
            // alert("登录成功");
            var a = confirm("登录成功");
            console.log(a);
            // this.$router.push("product")
            if (a) {
              this.$router.push("product");
            }
            // 保存数据到sessionStorage
          } else {
            alert("该用户不存在");
          }
        })
        .catch(err => {
          //失败回调
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
@import "../css/comm.css";
.ml-6 {
  margin-left: 6rem;
}
.container {
  margin: 0 auto;
}
.box {
  /* width:1140px;
    height:726px; */
  width: 100%;
  height: 726px;
  background: url("../../assets/img/h.jpeg");
}
.form-group {
  display: flex;
}

.form-control {
  width: 30%;
}
.f1 {
  display: flex;
  justify-content: space-between;
  width: 36%;
}
.btn {
  border: 1px solid #ced4da;
  width: 20%;
  margin-left: 5rem;
}
.box_small {
  width: 90%;
  margin-left: 32%;
  padding-top: 6%;
}
.title {
  margin-left: 14%;
}
.t1 {
  font-family: "华文行楷";
  font-size: 28px;
}
.vali_info {
  display: none;
}
.vali_success {
  background-image: url("../../assets/img/ok.png");
  padding-left: 15px;
  width: 0px;
  height: 15px;
  overflow: hidden;
  display: block;
}
.vali_fail {
  color: rgb(238, 15, 34);
  display: block;
}
span {
  margin-top: 10px;
  margin-left: 8px;
}
</style>


