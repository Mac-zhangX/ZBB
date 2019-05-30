<template>
    <div class="menu-nav">
        <div class="container" style="position: relative">
            <div class="logo-box">
                <router-link to="/" > <img src="../assets/img/logo.png" alt="" class="hidden-xs">
                    <img src="../assets/img/logo.png" alt="" class="visible-xs"></router-link>

            </div>
            <div class="menu-box">
                <ul class="menu-item">
                    <li><router-link to="/practice"  active-class="active">名企实习</router-link></li>
                    <li><router-link to="/class" active-class="active">在线课堂</router-link></li>
                    <li><router-link to="/customization" active-class="active">为你定制</router-link></li>
                    <li><router-link to="/written" active-class="active">笔试题库</router-link></li>
                    <li><router-link to="/resume" active-class="active">制作简历</router-link></li>
                    <li><router-link to="/about" active-class="active">关于我们</router-link></li>
                    <li><router-link to="/company" active-class="active">企业入口</router-link></li>
                </ul>
            </div>
            <div class="toggle-box">
                <i class="glyphicon glyphicon-align-justify" v-on:click="show = !show"></i>
            </div>

            <div class="user-action" @mouseenter="show2" @mouseleave="hide2">
                <a href="javascript:;" data-toggle="modal" data-target="#loginModel" v-if="flag == 1">登录 / 注册</a>
                <a href="javascript:;" v-else class="user-info" @click="jumpAccount">
                    <img :src="userInfo.avatar" alt="">
                    <span>{{userInfo.username}}</span>
                </a>
            </div>
            <!--悬浮-->
            <div class="suspension" v-if="mark" @mouseenter="show2" @mouseleave="hide2"  >
                <img src="../assets/img/Triangle.png" alt="" style="position: absolute;top: -10px;right: 0.85rem">
                <div class="suspension-top">
                    <div class="imgLeft">
                        <img src="../assets/img/avatar.png" alt="">
                    </div>
                    
                    <div class="imgRight">
                        <span class="imgRightName">老埂头</span>
                        <el-progress  color="green" :width="200" :stroke-width="4" :show-text="false"></el-progress>
                        <p><img src="../assets/img/avatar.png" alt="">剩余天数<span>20</span>天</p>
                    </div>
                </div>
                <div class="suspension-content">
                    <ul>
                        <li><img src="../assets/img/noRecord.png" alt=""></li>
                        <li class="line"><img src="../assets/img/noRecord.png" alt=""></li>
                        <li><img src="../assets/img/noRecord.png" alt=""></li>
                    </ul>
                    <ul>
                        <li>我的职业档案</li>
                        <li>我的订单</li>
                        <li>我的测评</li>
                    </ul>
                </div>
                <div class="suspension-bottom">
                    <span @click="" style="float: left">账号设置</span>
                    <span @click="" style="float: right">退出</span>
                </div>
            </div>
        </div>
        <transition name="fade">
            <div class="m-nav" v-if="show">
                <ul>
                    <li><router-link to="/practice"  >名企实习</router-link></li>
                    <li><router-link to="/class" >在线课堂</router-link></li>
                    <li><router-link to="/customization" >为你定制</router-link></li>
                    <li><router-link to="/written" >笔试题库</router-link></li>
                    <li><router-link to="/resume" >制作简历</router-link></li>
                    <li><router-link to="/about" >关于我们</router-link></li>
                    <li><router-link to="/company" >企业入口</router-link></li>
                </ul>
            </div>
        </transition>
    </div>


</template>

<script>
    import utils from '../util/utils'
    export default {
        name: "Header",
        methods:{
            jumpAccount()
            {
                this.$router.push('/account');
            },
            show2() {
                this.mark = true;
            },
            hide2() {
                this.mark = false;
            },
        },
        data() {
            return {
                show: false,
                userInfo : {},
                flag:0,
                mark:false,
            };
            
        },
        mounted(){
            this.userInfo = utils.store.getStore('userInfo');
            if(this.userInfo == {} || this.userInfo == null){
                this.flag = 1;
            }

        },
        
        
        watch: {
            $route: {
                handler: function(val, oldVal){
                    this.show = false;
                },
                // 深度观察监听
                deep: true
            }
        },
    }
</script>

<style scoped>
    @import "../assets/css/header.css";
    .fade-enter-active, .fade-leave-active {
        transition: opacity .8s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .suspension {
        background: #ffffff;
        z-index: 99;
        width: 3.97rem;
        height: 3.1rem;
        position: absolute;
        top: 60px;
        right: 0;
        box-shadow: 0 2px 9px 0 rgba(109, 107, 107, 0.30);
    }
    .suspension-top {
        display: flex;
        border-bottom: 4px solid #F8F8F8;
    }
    .imgLeft {
        width: 1rem;
        height: 1rem;
        text-align: center;
        line-height: 1rem;
        
    }
    .imgLeft img {
        width: 0.63rem;
        height: 0.63rem;
        vertical-align: middle;
    }
    .imgRight {
        flex: 1;
        text-align: left;
        padding: 0 8%;
        font-size: 0.12rem;
        height: 0.63rem;
        margin-top: 0.18rem;
    }
    .imgRight span.imgRightName {
        font-size: 0.18rem;
        color: #000000;
        margin-bottom: 4px;
        line-height: 30px;
    }
    .el-progress {
        margin-top: 4px;
        width: 2rem;
    }
    .imgRight img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
    .imgRight p {
        line-height: 20px;
        margin-top: 5px;
    }
    .suspension-content {
        padding-top: 30px;
    }
    .suspension-content ul {
        display: flex;
    }
    .suspension-content ul:first-child {
        height: 60px;
    }
    .suspension-content ul li.line {
        border-left: 1px solid #DAE9FF;
        border-right: 1px solid #DAE9FF;
    }
    .suspension-content ul li img {
        width: 36px;
        height: 46px;
    }
    .suspension-content ul li {
        flex: 1;
        font-size: 0.14rem;
        color: #9B9B9B;
    }
    .suspension-bottom {
        width: 100%;
        height: 50px;
        position: absolute;
        bottom: 0;
        background: #F8F8F8;
        line-height: 50px;
        padding: 0 0.35rem;
    }
    .suspension-bottom span {
        font-size: 0.14rem;
        color: #4A4A4A;
    }
</style>