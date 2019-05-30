<template>
    <div class="container">
        <h1>账户设置<span><i class="el-icon-arrow-right
"></i>绑定微信</span> </h1>
        <div class="bind-box">
            <div>
                <img src="../../assets/img/wxcode.png" alt="">
            </div>
            <p class="bind-desc">打开微信扫码绑定</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "BindWx"
    }
</script>

<style scoped>
    .container{
        text-align: left;
    }
    .bind-desc{
        color: #4A4A4A;
        font-size: .18rem;
        margin-top: .25rem;
        text-align: center;
        width: 100%;
    }
    .bind-box{
         width: 2rem;
         margin: .7rem auto;
    }
    .bind-box>div{
        height: 1.96rem;
        width: 1.96rem;
        padding: .2rem;
        border: 1px solid #00B700;

    }
    .bind-box>div>img{
        height: 100%;
        width: 100%;

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

    }
</style>
