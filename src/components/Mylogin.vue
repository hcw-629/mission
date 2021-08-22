<template>
  <div class="login_box">
    <div class="login_l_img"><img src="../assets/imgs/login-img.png" /></div>
    <div class="login">
      <div class="login_logo">
        <img src="../assets/imgs/login_logo.png" />
      </div>
      <div class="login_name">
        <p>后台管理系统</p>
      </div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        label-width="150px"
        class="demo-ruleForm"
      >
        <el-form-item label="请输入用户名" prop="username" class="user">
          <el-input
          
            placeholder="请输入用户名"
            prefix-icon="iconfont icon-yonghu"
            v-model.trim="ruleForm.username"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="请输入密码" prop="password" class="pasd">
          <el-input
          
            type="password"
            placeholder="请输入密码"
            prefix-icon="iconfont icon-mima"
            v-model.trim="ruleForm.password"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="info" round @click="reset">重置</el-button>
          <el-button type="success" round @click="logon">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="copyright">有限公司 版权所有©2021</div>
  </div>
</template>

<script>
export default {
  name: "Mylogin",
  data() {
    return {
      ruleForm: {
        username: "hcw",
        password:'666666'
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" },
        ],
         password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    reset() {
      (this.ruleForm.username = ""), (this.ruleForm.password = "");
    },
    logon() {
      if (this.ruleForm.username === "hcw" && this.ruleForm.password === "666666") {
        // 登录成功
        localStorage.setItem("token", "Bearer xxxx");
        this.$router.replace("/homepages");
        this.$message.success("登录成功");
      } else {
        // 登录失败
        localStorage.removeItem("token");
        this.$message.error("用户名，或密码错误");
      }
    },
  },
};
</script>

<style  scoped>
.user{
  margin-bottom: 20px;
}
.pasd{
  margin-bottom: 20px;
}
.btn {
  display: flex;
  justify-content: flex-end;
}
* {
  font: 13px/1.5 "微软雅黑";
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}

img {
  border: none;
}

.login_box {
  width: 1100px;
  margin: 120px auto 0;
}
.login_box .login_l_img {
  float: left;
  width: 432px;
  height: 440px;
  margin-left: 50px;
}
.login_box .login_l_img img {
  width: 500px;
  height: 440px;
}
.login {
  height: 500px;
  width: 450px;
  padding: 50px;
  background-color: #ffffff;
  border-radius: 6px;
  box-sizing: border-box;
  float: right;
  margin-right: 50px;
  position: relative;
  margin-top: 50px;
}
.login_logo {
  width: 120px;
  height: 120px;
  border: 5px solid #93defe;
  border-radius: 100px;
  background: #fff;
  text-align: center;
  line-height: 110px;
  position: absolute;
  top: -60px;
  right: 140px;
}
.login_name {
  width: 100%;
  float: left;
  text-align: center;
  margin-top: 20px;
}
.login_name p {
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: #444;
  padding: 10px 0 20px;
}
.login_logo img {
  width: 60px;
  height: 60px;
  display: inline-block;
  vertical-align: middle;
}

.copyright {
  font-size: 14px;
  color: #fff;
  display: block;
  width: 100%;
  float: left;
  text-align: center;
  margin-top: 60px;
}
</style>