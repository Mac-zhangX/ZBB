<template>
    <div class="container">
        <h1>账户设置<span><i class="el-icon-arrow-right
"></i>绑定手机</span> </h1>
        <div class="bind-box">
            <el-form ref="form" label-width="80px" label-position="top">
                <el-form-item label="账户密码">
                    <el-input  placeholder="请输入您的账号密码"></el-input>
                </el-form-item>
                <el-form-item label="手机号码">
                    <el-input  placeholder="请输入您要绑定的手机号码"></el-input>
                </el-form-item>

                <div class="el-form-item">
                    <label class="el-form-item__label">输入验证码</label>
                    <div class="el-form-item__content">
                        <div class="el-input send-code-box">
                            <input type="text" autocomplete="off" placeholder="验证码将发送至填写的手机号码" class="el-input__inner checkInput">
                            <span class="send-act">
                                获取验证码
                            </span>
                        </div>
                    </div>
                </div>
                <el-form-item>
                    <el-button type="primary" @click="">确认绑定</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script>
    export default {
        name: "BindMobile"
    }
</script>

<style scoped>
    .container{
        text-align: left;
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
        .container>h1>span{
            color: #666;
        }
        .bind-box{
            width: 4.5rem;
            margin: .3rem auto;
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
        .container>h1>span{
            color: #666;
        }
        .bind-box{
            width: 4.5rem;
            margin: .3rem auto;
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
        .container>h1>span{
            color: #666;
        }
        .bind-box{
            width: 4.5rem;
            margin: .3rem auto;
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
        .container>h1>span{
            color: #666;
        }
        .bind-box{
            width: 100%;
            margin: .3rem auto;
        }
    }
</style>
<style>
    .el-form--label-top .el-form-item__label{
        padding: 0;
    }
    .el-form-item__content{
        line-height: .2rem;
    }
    .el-button{
        width: 100%;
        background: #5191E5;
        border-color: #5191E5;
    }


    @media (min-width: 1200px) {
        .checkInput{
            width: 3rem;
            border: none;
            display: inline-block;
            height: .2rem;
        }
        .send-act{
            width: 1.2rem;
            text-align: center;
            /*padding: .06rem;*/
            color: #5191E5;
            display: inline-block;
            border-left: 1px solid #5191E5;
            cursor: pointer;
        }
        .send-code-box{
            border: 1px solid #dcdfe6;
            border-radius: .04rem;
            padding: .1rem;
        }
    }
    @media (min-width: 992px) and (max-width: 1200px){
        .checkInput{
            width: 3rem;
            border: none;
            display: inline-block;
            height: .2rem;
        }
        .send-act{
            width: 1.2rem;
            text-align: center;
            /*padding: .06rem;*/
            color: #5191E5;
            display: inline-block;
            border-left: 1px solid #5191E5;
            cursor: pointer;
        }
        .send-code-box{
            border: 1px solid #dcdfe6;
            border-radius: .04rem;
            padding: .1rem;
        }
    }
    @media (min-width: 767px) and (max-width: 992px){
        .checkInput{
            width: 3rem;
            border: none;
            display: inline-block;
            height: .2rem;
        }
        .send-act{
            width: 1.2rem;
            text-align: center;
            /*padding: .06rem;*/
            color: #5191E5;
            display: inline-block;
            border-left: 1px solid #5191E5;
            cursor: pointer;
        }
        .send-code-box{
            border: 1px solid #dcdfe6;
            border-radius: .04rem;
            padding: .1rem;
        }
    }
    @media (max-width: 767px) {
        .checkInput{
            width: 70%;
            border: none;
            display: inline-block;
            height: .2rem;
        }
        .send-act{
            width: 28%;
            text-align: center;
            color: #5191E5;
            display: inline-block;
            border-left: 1px solid #5191E5;
            cursor: pointer;
        }
        .send-code-box{
            border: 1px solid #dcdfe6;
            border-radius: .04rem;
            padding: .1rem;
        }
    }
</style>