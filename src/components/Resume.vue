<template>
    <div class="middle-container">
        <div class="logo-box">
            <img src="../assets/img/resume/resume.png" alt="">
        </div>
        <div class="content">

            <div class="title">
                <img src="../assets/img/resume/resume-logo.png" alt="">
                <div>
                    <h1>职帮帮简历工具</h1>
                    <p>10分钟收货一份专业的简历</p>
                </div>
            </div>
            <h2>北美顶尖商学院优秀职场人求职使用模板，四大经理、咨询顾问、互联网等HR和前辈力荐简历模板，不在花样、而在专业和有效</h2>
            <h5>已有18889人制作专业简历</h5>
            <a href="">在线制作简历</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Resume"
    }
</script>

<style scoped>
    @import "../assets/css/main.css";
    .middle-container{
        padding-top: .4rem;
        padding-bottom:  .4rem;
        display: flex;
        justify-content: space-between;
    }


    .content{
        height: auto;
    }
    .content>a{
        width: 2.82rem;
        height: .6rem;
        background: #E45858;
        border-radius: .08rem;
        color: #FFF;
        font-size: .18rem;
        line-height: .6rem;
        display: block;

        text-decoration: none;
    }
    .content>h5{
        font-size: .4rem;
        color: #E45858;
        line-height: .4rem;
        margin-bottom: .4rem;
        text-align: left;
    }
    .content>h2{
        font-size: .24rem;
        color: #666;
        line-height: .4rem;
        margin-bottom: .3rem;
        margin-top: .4rem;
        text-align: left;
    }
    .title{
        text-align: left;
        height: .86rem;
        width: 100%;
    }
    .title>img{
        float: left;
        margin-right: .25rem;

    }
    .title>div>p{
        font-size: .24rem;
        line-height: .33rem;
        color: #5191E5;
        margin-top: .06rem;

    }
    .title>div{
        float: left;
        height: 100%;

    }
    .title>div>h1{
        font-size: .3rem;
        line-height: .42rem;
        color: #333;
        margin: 0 !important;

    }
    @media (min-width: 1200px) {
        .logo-box{
            width: 5.08rem;
            height: 7.19rem;
            margin-right: .9rem;
        }
        .content{
            width: 5.5rem;
        }
    }
    @media (min-width: 992px) and (max-width: 1200px){
        .logo-box{
            width: 4rem;
            height: auto;
            margin-right: .5rem;
        }
        .content{
            width: 5rem;
        }
        .content>h2{
            font-size: .22rem;
            color: #666;
            line-height: .3rem;
            margin-bottom: .3rem;
            margin-top: .4rem;
            text-align: left;
        }
        .content>h5{
            font-size: .3rem;
            color: #E45858;
            line-height: .3rem;
            margin-bottom: .4rem;
            text-align: left;
        }
    }
    @media (min-width: 767px) and (max-width: 992px){
        .logo-box{
            width: 3rem;
            height: auto;
            margin-right: .5rem;
        }
        .content{
            width: 3rem;
        }
        .content>h2{
            font-size: .2rem;
            color: #666;
            line-height: .28rem;
            margin-bottom: .2rem;
            margin-top: .2rem;
            text-align: left;
        }
        .content>h5{
            font-size: .18rem;
            color: #E45858;
            line-height: .26rem;
            margin-bottom: .4rem;
            text-align: left;
        }
        .title>div>h1{
            font-size: .2rem;
            line-height: .28rem;
            color: #333;

        }
        .title>img{
            float: left;
            margin-right: .25rem;
            width: .55rem;

        }
        .title>div{
            float: left;
            height: 100%;
            width: 2.2rem;

        }
        .title>div>p{
            font-size: .18rem;
            line-height: .24rem;
            color: #5191E5;
            margin-top: .06rem;

        }
    }
    @media (max-width: 767px) {
        .container>div{
            margin: 0 auto;
        }
        .content{
            margin-top: .2rem;
        }
        .content>h2{
            font-size: .2rem;
            color: #666;
            line-height: .28rem;
            margin-bottom: .1rem;
            margin-top: .08rem;
            text-align: left;
        }
        .content>h5{
            font-size: .18rem;
            color: #E45858;
            line-height: .26rem;
            margin-bottom: .4rem;
            text-align: left;
        }
        .title>div>h1{
            font-size: .2rem;
            line-height: .28rem;
            color: #333;

        }
        .title{
            height: .64rem;

        }
        .title>img{
            float: left;
            margin-right: .15rem;
            width: .55rem;

        }
        .title>div{
            float: left;
            height: 100%;
            width: 2.2rem;

        }
        .title>div>p{
            font-size: .18rem;
            line-height: .24rem;
            color: #5191E5;
            margin-top: .06rem;

        }
    }
</style>