<template>
  <div class="login">
    <img class="login-bc" src="../../assets/img/login/login-bc.jpg" alt="">
    <div class="login-box">
      <div class="avatar-box">
        <img src="../../assets/img/login/avatar.webp" alt="">
      </div>
      <el-form
        :model="loginForm"
        class="login-form"
        ref="loginFormRef"
        :rules="loginFormRules"
        label-width="70px"
      >
        <el-form-item prop="username" label="用户">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="info" @click="resetLoginForm">重置</el-button>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data(){
    return {
      loginForm :{
        username: '',
        password: '',
      },
      loginFormRules :{
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur'},
          { min: 3, max: 6, message: '长度在3到6个字符', trigger: 'blur'}
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur'},
          { min: 6, max: 9, message: '长度在6到9个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods:{
    resetLoginForm(){
      this.$refs.loginFormRef.resetFields()
    },
    login(){
      console.log("denglu");
    }
  }
}
</script>

<style lang="less" scoped>
.login{
  height: 100%;
  background-color: #bfa;
  .login-bc{
    width: 100%;
    height: 100%;
  }
  .login-box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .avatar-box{
    width: 130px;
    height: 130px;
    border: 1px solid black;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px rgb(29, 11, 70);
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .login-form{
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
  }
  .btns {
    display: flex;
    justify-content: flex-end;
  }
}
</style>>