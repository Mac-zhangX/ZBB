<template>
    <div data-backdrop="static"  class="modal fade" id="loginModel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog container" role="document">
            <div class="login-box">
                <img src="../assets/img/login-bg-1.png" alt="" class="bg-img">
                <img src="../assets/img/iconddgb.png" alt="" class="close-img" data-dismiss="modal" aria-label="Close">
                <div class="action-box">
                    <img src="../assets/img/login-topimg.png" alt="">
                    <div class="login-form">
                        <ul class="action-tabs" role="tablist">
                            <li role="presentation" class="active"><a href="#login" aria-controls="login" role="tab" data-toggle="tab">登录账号</a></li>
                            <li role="presentation"><a href="#register" aria-controls="register" role="tab" data-toggle="tab">注册账号</a></li>

                        </ul>

                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="login">
                                <form action="">
                                    <div class="form-item">
                                        <div class="action-logo">
                                            <img src="../assets/img/account-logo.png" alt="">
                                        </div>
                                        <input type="text" name="username" placeholder="邮箱/手机/用户名" autocomplete="off">
                                    </div>
                                    <div class="form-item double-logo">
                                        <div class="action-logo">
                                            <img src="../assets/img/mima-logo.png" alt="">
                                        </div>
                                        <input :type="pwdType" name="password" placeholder="密码" autocomplete="new-password">
                                        <div class="action-logo is-show-pwd" @click="toggleShow()">
                                            <img src="../assets/img/tubiaolunkuo--2.png" alt="">
                                        </div>
                                    </div>
                                    <div class="checkItem">
                                        <el-checkbox label="记住密码" name="type"></el-checkbox>
                                        <a href="" class="find-pwd">找回密码</a>
                                    </div>
                                    <div class="action-btn">
                                        <button @click="loginAct" type="button">登录</button>
                                    </div>
                                    <div class="wechat-login">
                                        <span>第三方微信登录</span>
                                        <img src="../assets/img/icon/wechat.png" alt="">
                                    </div>
                                </form>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="register">
                                <form action="">
                                    <p class="label-reg">手机/邮箱</p>
                                    <div :class="regForm.accountError" @click="resetAccount" >
                                        <input type="text" v-model="regForm.account" placeholder="填写你常用的手机号码或者邮箱作为登录账号" autocomplete="off" @blur="regAccount">
                                    </div>
                                    <p class="label-reg">用户名</p>
                                    <div :class="regForm.usernameError" @click="resetUsername" >
                                        <input type="text" v-model="regForm.username" placeholder="中文、英文皆可，长度控制在10个字符" autocomplete="off" @blur="regUsername">
                                    </div>
                                    <p class="label-reg">密码</p>
                                    <div :class="regForm.passwordError" @click="resetPassword">
                                        <input :type="pwdType" placeholder="5-20位英文、数字、符号、区分大小写" autocomplete="new-password" v-model="regForm.password" @blur="regPassword">
                                    </div>
                                        <p class="label-reg">验证码</p>
                                        <div :class="regForm.codeError" @click="resetCode">
                                            <input type="text"  placeholder="请输入验证码" autocomplete="off" v-model="regForm.code" @blur="regCode">
                                            <a href="javascript:;" @click="send">
                                                <span v-if="!sendMsgDisabled">{{time+'秒后获取'}}</span>
                                                <span v-if="sendMsgDisabled" >获取验证码</span>
                                            </a>

                                        </div>
                                    <div class="action-btn">
                                        <button @click="registerAct">同意服务协议并注册</button>
                                    </div>
                                    <div class="service-info">
                                        详情请阅读
                                        <a href="##">《用户服务协议》</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

    import api from "../fetch/api";
    import utils from "../util/utils";
    export default {
        name: "Login",
        methods : {
            toggleShow(){
                if(this.pwdType === 'password'){
                    this.pwdType = 'text';
                }else{
                    this.pwdType = 'password';
                }
            },
            send() {

                if(this.regAccount() && this.regPassword() && this.regUsername()){
                    let regMobile = /^1[345678]\d{9}$/;
                    let regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
                    if(regMobile.test(this.regForm.account)) {
                        api.MobileCode(this.regForm.account);
                        this.timeLimit();

                    }else if (regEmail.test(this.regForm.account)) {
                        api.EmailCode(this.regForm.account);
                        this.timeLimit();
                    }else{
                        this.regForm.accountError = 'reg-form-item error-active';
                        this.regForm.account = '手机号/邮箱格式错误';
                    }
                }

                return false;
            },
            timeLimit() {
                let me = this;
                this.sendMsgDisabled = false;
                let interval = window.setInterval(function() {
                    if ((me.time--) <= 0) {
                        me.time = 60;
                        me.sendMsgDisabled = true;
                        window.clearInterval(interval);
                    }
                }, 1000);
            },
            resetAccount() {
                let reg = /error-active/;
                if(reg.test(this.regForm.accountError)){
                    this.regForm.account = '';
                    this.regForm.accountError = 'reg-form-item';
                }

            },
            resetUsername() {
                let reg = /error-active/;
                if(reg.test(this.regForm.usernameError)){
                    this.regForm.username = '';
                    this.regForm.usernameError = 'reg-form-item';
                }
            },
            resetPassword() {
                let reg = /error-active/;
                if(reg.test(this.regForm.passwordError)){
                    this.regForm.password = '';
                    this.regForm.passwordError = 'reg-form-item';
                }
            },
            resetCode() {
                let reg = /error-active/;
                if(reg.test(this.regForm.codeError)){
                    this.regForm.code = '';
                    this.regForm.codeError = 'reg-form-item captcha-box';
                }
            },
            registerAct(){
                let data = {
                    account: this.regForm.account,
                    userName: this.regForm.username,
                    password: this.regForm.password,
                    code: this.regForm.code
                };
                api.Register(data).then(res => {
                        // console.log(res);
                        // if (res.success) {
                        //     // let userInfo = Object.assign()
                        //     this.$store.dispatch("setLoadingState", false);
                        //     this.setUserInfo(res.data);
                        //     this.$router.replace("/home");
                        // }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            regAccount() {
                let regMobile = /^1[345678]\d{9}$/;
                let regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
                let type = 0;
                let account = '';
                if(this.regForm.account === ''){
                    this.regForm.accountError = 'reg-form-item error-active';
                    this.regForm.account = '手机号/邮箱不能为空';
                    return false;
                }
                if(regMobile.test(this.regForm.account)) {
                    type = 1;
                    account = '手机号码';
                }
                else if (regEmail.test(this.regForm.account)) {
                    type = 2;
                    account = '邮箱';
                }else{
                    this.regForm.accountError = 'reg-form-item error-active';
                    this.regForm.account = '手机号/邮箱格式错误';
                    return false;
                }
                let data = {
                    code: this.regForm.account,
                    type: type
                };
                api.CheckAccount(data).then(res => {

                    if (res.status === 'n') {
                        this.regForm.accountError = 'reg-form-item error-active';
                        this.regForm.account = '该' + account + '已经被注册';
                        return false;
                    }
                    return true;
                })
                    .catch(error => {
                        console.log(error);
                    });
            },
            regUsername() {
                if(this.regForm.username === ''){
                    this.regForm.usernameError = 'reg-form-item error-active';
                    this.regForm.username = '用户名不能为空';
                    return false;
                }
                let data = {
                    code: this.regForm.username,
                    type: 3
                };
                api.CheckAccount(data).then(res => {
                    // console.log(res);
                    if (res.status === 'n') {
                        this.regForm.usernameError = 'reg-form-item error-active';
                        this.regForm.username = '该用户名已经被注册';
                        return false;
                    }
                })
                    .catch(error => {
                        console.log(error);
                    });
            },
            regPassword() {
                let regPwd = /^([a-zA-Z0-9\.\@\!\#\$\%\^\&\*\(\)]){5,20}$/i;
                if(this.regForm.password === ''){
                    this.regForm.passwordError = 'reg-form-item error-active';
                    this.pwdType = 'text';
                    this.regForm.password = '密码不能为空';
                    return false;
                }
                if(regPwd.test(this.regForm.password)){
                    this.regForm.passwordError = 'reg-form-item error-active';
                    this.pwdType = 'text';
                    this.regForm.password = '密码格式错误';
                    return false;
                }
            },
            regCode() {
                if(this.regForm.code === ''){
                    this.regForm.codeError = 'reg-form-item error-active';
                    this.regForm.code = '验证码不能为空';
                    return false;
                }
            },
            loginAct() {
                let userInfo = {
                    token : '1212121',
                    username : 'chen1996612',
                    avatar : 'https://avatar-static.segmentfault.com/121/429/1214294929-58103505c7038_big64'
                };
                utils.store.setStore('userInfo',userInfo);
                $('#loginModel').modal('hide');
            }
        },
        data(){
            return {
                pwdType : 'password',
                sendMsgDisabled : true,
                time : 60,
                loginForm : {},
                regForm : {
                    account : '',
                    username : '',
                    password : '',
                    code : '',
                    accountError : 'reg-form-item',
                    usernameError : 'reg-form-item',
                    passwordError : 'reg-form-item',
                    codeError : 'reg-form-item captcha-box',
                }
            }
        }
    }
</script>

<style scoped>
    @import "../assets/css/login.css";
</style>
<style>
    .el-checkbox__inner{
        width: .2rem !important;
        height: .2rem !important;
    }
</style>