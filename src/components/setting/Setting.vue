<template>
    <div class="container">
        <h1>账户设置</h1>
        <div class="bind-box">
            <ul class="bind-list">
                <li>
                    <img src="../../assets/img/icon/info-icon.png" alt="">
                    <span class="bind-type">账户邮箱</span>
                    <span class="bind-desc">账户邮箱用户登录相关产品以及接收重要通知</span>
                    <el-button>立即绑定</el-button>
                </li>
                <li>
                    <img src="../../assets/img/icon/info-icon.png" alt="">
                    <span class="bind-type">账户手机</span>
                    <span class="bind-desc">账户用于用户登录相关产品以及接收重要通知</span>
                    <el-button>立即绑定</el-button>
                </li>
                <li class="no-border">
                    <img src="../../assets/img/icon/info-icon.png" alt="">
                    <span class="bind-type">微信号</span>
                    <span class="bind-desc">微信号用户登录相关产品以及接收重要通知</span>
                    <el-button>立即绑定</el-button>
                </li>
            </ul>
        </div>
        <div class="pwd-box">
            <h1>密码修改</h1>
            <div>
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="当前密码">
                        <el-input  placeholder="请输入当前密码"></el-input>
                    </el-form-item>
                    <el-form-item label="新的密码">
                        <el-input  placeholder="请输入新密码"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码">
                        <el-input  placeholder="请确认新密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="">立即创建</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Setting"
    }
</script>

<style scoped>
    .container{
        text-align: left;
    }
    .pwd-box{
        background: #F8F8F8;
        border-radius: .2rem;
        width: 100%;
    }
    .no-border{
        border: none !important;
    }
    .bind-type{
        color: #4A4A4A;
        display: inline-block;
    }
    @media (min-width: 1200px) {
        .container{
            margin-top: .5rem;
            margin-bottom: .5rem;
            padding: 0 .3rem .4rem .3rem;
            background: #fff;
            box-shadow: 0 2px 9px 0 rgba(109,107,107,0.30);
        }
        .container>h1{
            font-size: .2rem;
            color: #4A4A4A;
            line-height: .28rem;
            padding: .2rem .15rem;
            border-bottom: 1px solid #C3C3C3;
        }
        .pwd-box{
            margin-top: .3rem;
            padding: 0 .25rem;
        }
        .pwd-box>h1{
            border-bottom: 1px solid #D2D7E5;
            line-height: .28rem;
            font-size: .2rem;
            color: #171717;
            padding: .16rem .1rem;
        }
        .pwd-box>div{
            width: 5rem;
            margin-left: 2rem;
            padding: .55rem 0;
        }
        .bind-box{
            padding: .4rem .3rem;
        }
        .bind-list{
            width: 100%;
        }
        .bind-list>li{
            padding: .3rem .2rem .3rem 0;
            border-bottom: 1px solid #EDEDED;
            height: 1rem;
            line-height: .36rem;
        }
        .bind-list img{
            margin: .1rem .3rem;
        }
        .bind-type{
            font-size: .16rem;
            width: .7rem;
        }
        .bind-desc{
            margin-left: .6rem;
            font-size: .16rem;
            color: #9B9B9B;
        }
    }
    @media (min-width: 992px) and (max-width: 1200px){
        .container{
            margin-top: .4rem;
            margin-bottom: .4rem;
            padding: 0 .3rem .4rem .3rem;
            background: #fff;
            box-shadow: 0 2px 9px 0 rgba(109,107,107,0.30);
        }
        .container>h1{
            font-size: .2rem;
            color: #4A4A4A;
            line-height: .28rem;
            padding: .2rem .15rem;
            border-bottom: 1px solid #C3C3C3;
        }
        .pwd-box{
            margin-top: .3rem;
            padding: 0 .25rem;
        }
        .pwd-box>h1{
            border-bottom: 1px solid #D2D7E5;
            line-height: .28rem;
            font-size: .2rem;
            color: #171717;
            padding: .16rem .1rem;
        }
        .pwd-box>div{
            width: 5rem;
            margin-left: 2rem;
            padding: .55rem 0;
        }
        .bind-box{
            padding: .4rem .3rem;
        }
        .bind-list{
            width: 100%;
        }
        .bind-list>li{
            padding: .3rem .2rem .3rem 0;
            border-bottom: 1px solid #EDEDED;
            height: 1rem;
            line-height: .36rem;
        }
        .bind-list img{
            margin: .1rem .3rem;
        }
        .bind-type{
            font-size: .16rem;
            width: .7rem;
        }
        .bind-desc{
            margin-left: .6rem;
            font-size: .16rem;
            color: #9B9B9B;
        }
    }
    @media (min-width: 767px) and (max-width: 992px){
        .container{
            margin-top: .4rem;
            margin-bottom: .4rem;
            padding: 0 .3rem .4rem .3rem;
            background: #fff;
            box-shadow: 0 2px 9px 0 rgba(109,107,107,0.30);
        }
        .container>h1{
            font-size: .2rem;
            color: #4A4A4A;
            line-height: .28rem;
            padding: .2rem .15rem;
            border-bottom: 1px solid #C3C3C3;
        }
        .pwd-box{
            margin-top: .3rem;
            padding: 0 .25rem;
        }
        .pwd-box>h1{
            border-bottom: 1px solid #D2D7E5;
            line-height: .28rem;
            font-size: .2rem;
            color: #171717;
            padding: .16rem .1rem;
        }
        .pwd-box>div{
            width: 5rem;
            margin-left: 1rem;
            padding: .55rem 0;
        }
        .bind-box{
            padding: .2rem .2rem;
        }
        .bind-list{
            width: 100%;
        }
        .bind-list>li{
            padding: .3rem .2rem .3rem 0;
            border-bottom: 1px solid #EDEDED;
            height: 1rem;
            line-height: .36rem;
        }
        .bind-list img{
            margin: .1rem .3rem;
        }
        .bind-type{
            font-size: .14rem;
            width: .6rem;
        }
        .bind-desc{
            margin-left: .3rem;
            font-size: .16rem;
            color: #9B9B9B;
        }
    }
    @media (max-width: 767px) {
        .container{
            margin-top: .4rem;
            margin-bottom: .4rem;
            padding: 0 ;
            background: #fff;
            box-shadow: 0 2px 9px 0 rgba(109,107,107,0.30);
        }
        .container>h1{
            font-size: .2rem;
            color: #4A4A4A;
            line-height: .28rem;
            padding: .2rem .15rem;
            border-bottom: 1px solid #C3C3C3;
        }
        .pwd-box{
            margin-top: .2rem;
            padding: 0 .15rem;
        }
        .pwd-box>h1{
            border-bottom: 1px solid #D2D7E5;
            line-height: .28rem;
            font-size: .16rem;
            color: #171717;
            padding: .1rem .1rem;
        }
        .pwd-box>div{
            width: 100%;
            padding: .1rem 0;
        }
        .bind-box{
            padding: .2rem .2rem;
        }
        .bind-list{
            width: 100%;
        }
        .bind-list>li{
            padding: .1rem;
            border-bottom: 1px solid #EDEDED;
            height: auto;
            line-height: .36rem;
        }
        .bind-list img{
            margin: .1rem .1rem;
        }
        .bind-type{
            font-size: .12rem;

        }
        .bind-desc{
            margin-left: .1rem;
            font-size: .12rem;
            color: #9B9B9B;
            width: 100%;
            display: block;
        }
    }
</style>
<style>
    .el-form-item__label{
        color: #474747;
    }
    .el-button{
        width: 100%;
    }
    .el-button--primary{
        background: #5191E5;
        border-color: #5191E5;
    }

    @media (min-width: 1200px) {
        .bind-list .el-button{
            width: 1rem;
            border: 1px solid #5191E5;
            color: #5191E5;
            float: right;
        }
    }
    @media (min-width: 992px) and (max-width: 1200px){
        .bind-list .el-button{
            width: 1rem;
            border: 1px solid #5191E5;
            color: #5191E5;
            float: right;
        }
    }
    @media (min-width: 767px) and (max-width: 992px){
        .bind-list .el-button{
            width: 1rem;
            border: 1px solid #5191E5;
            color: #5191E5;
            float: right;
        }
    }
    @media (max-width: 767px) {
        .bind-list .el-button{
            width: 1rem;
            border: 1px solid #5191E5;
            color: #5191E5;
            font-size: .12rem;
        }
    }
</style>