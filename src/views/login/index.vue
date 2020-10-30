<template>
  <div class="login-box">
    <div
      class="login-left"
      :style="{ 'background-image': 'url(' + backLogo + ')' }"
    ><div class="logo"></div>
    </div>
    <div class="login-center">
      <div class="dr">
        <span class="tit">{{ title }}</span>
        <div class="form-con">
          <div class="zhangHao">
            <label for>账号</label>
            <input
              placeholder="请输入账号"
              autocomplete="off"
              type="text"
              class="inputText"
              v-model="loginForm.userName"
            />
          </div>

          <div class="passWord">
            <label for>密码</label>
            <input
              placeholder="请输入密码"
              type="password"
              class="inputText"
              v-model="loginForm.password"
              @keyup.enter="submitBtn"
            />
          </div>
          <button class="submit" @click="submitBtn">登 录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backLogo: require("../../assets/images/bg@2x.png"),
      title: "槜心后台管理系统",
      loginForm: {
        captchaVerification: "",
        userName: "",
        password: "",
      },
    };
  },
  methods: {
    submitBtn() {
      this.$store.commit('user/changeToken', this.loginForm.userName);
      // this.$router.push({name:"Home",params:{user}})
      this.$router.push({name:"Home"})
      
    },
  },
};
</script>

<style scoped lang="scss">
.logo{
  width: 46px;
  height: 46px;
  position: absolute;
  top: 40px;
  left: 40px;
  background: url('../../assets/images/logo.png') no-repeat;
}
.login-box {
  display: flex;
  flex-direction: row;
  background: #fff;
  width: 100%;
  height: 100vh;
  background: #aaa;

  .login-left {
    width: 65%;
    background-size: 100% 100%;
  }
  .login-center {
    height: 100%;
    width: 35%;
    position: absolute;
    right: 0;
    width: 35%;
    min-width: 500px;
    height: 100%;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    .dr {
      height: 95%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .tit {
        display: block;
        color: #000;
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 40px;
        width: 100%;
        padding: 0 15%;
      }
      .form-con {
        display: flex;
        width: 100%;
        padding: 0 15%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .form-con label {
        font-size: 16px;
        width: 11%;
      }
      .inputText {
        background-color: #fff;
        padding: 14px 20px;
        width: 89%;
        border-radius: 4px;
        border: 1px solid #eeeeee;
        outline: none;
        &:focus {
          box-shadow: 0 0 0 2px rgba(45, 140, 240, 0.2);
        }
      }
      .inputText::placeholder {
        color: #b5b5b5;
        font-size: 12px;
      }
      .submit {
        width: 100%;
        height: 56px;
        background-color: #65aa73;
        border-radius: 50px;
        border: none;
        outline: none;
        font-size: 18px;
        color: #fff;
        cursor: pointer;
        padding: 10px;
        margin-top: 70px;
      }
    }
  }
}
.zhangHao {
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 35px;
}
.passWord {
  display: flex;
  width: 100%;
  align-items: center;
}
</style>