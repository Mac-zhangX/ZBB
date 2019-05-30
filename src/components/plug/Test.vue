<template>
    <div class="test middle-container">
        <div>
            <img src="../../assets/img/test-1.png" alt="">
            <p>求职竞争力一对一评估</p>
            <a href="javascript:;" @click="test1">立即测评</a>
        </div>
        <div>
            <img src="../../assets/img/test-2.png" alt="">
            <p>优你测试</p>
            <a href="javascript:;" @click="test2">立即测评</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Test",
      data(){
          return {
          
          }
      },
      methods: {
          test1() {
            this.$router.push('/test/personal')
          },
          test2() {
           this.$router.push('/test/optimal')
          },
      }
    }
</script>

<style scoped>
    @import "../../assets/css/main.css";
    @import "../../assets/css/font.css";
    .test{
        display: flex;
        margin: 0 auto;
        justify-content: space-around;
    }
    @media (min-width: 1200px) {

        .test{
            margin-bottom: .50rem !important;
        }
        .test>div{
            height: 4.8rem;
            width: 4.6rem;
            border-radius: .3rem;
            box-shadow: 0 .02rem .2rem 0 rgba(0,0,0,0.08);
        }
        .test>div>img{
            height: 3.4rem;
        }
        .test>div>p{
            height: .2rem;
            line-height: .2rem;
            font-size: .14rem;
            color: #333;
            text-align: center;
            margin: .2rem 0;
            width: 100%;
	        font-family: PingFangSC-Light;
        }
        .test>div>a{
            height: .6rem;
            line-height: .2rem;
            font-size: .14rem;
            color: #FFF;
            text-align: center;
            margin: 0 auto;
            width: 2.64rem;
            padding: .2rem 1.02rem;
            background: #5191E5;;
            border-radius: .2rem;
            text-decoration: none;
            display: block;
        }
    }
    @media (min-width: 992px) and (max-width: 1200px){
        .test{
            margin-bottom: .50rem !important;
        }
        .test>div{
            height: 4.2rem;
            width: 3.2rem;
            border-radius: .3rem;
            box-shadow: 0 .02rem .2rem 0 rgba(0,0,0,0.08);
        }
        .test>div>img{
            height: 2.8rem;
        }
        .test>div>p{
            height: .2rem;
            line-height: .2rem;
            font-size: .14rem;
            color: #333;
            text-align: center;
            margin: .162rem 0;
            width: 100%;
        }
        .test>div>a{
            height: .5rem;
            line-height: .2rem;
            font-size: .14rem;
            color: #FFF;
            text-align: center;
            margin: 0 auto;
            width: 2.64rem;
            padding: .15rem 1.02rem;
            background: #5191E5;;
            border-radius: .2rem;
            text-decoration: none;
            display: block;
        }
    }
    @media (min-width: 767px) and (max-width: 992px){
        .test{
            margin-bottom: .50rem !important;
        }
        .test>div{
            height: 3.2rem;
            width: 2.6rem;
            border-radius: .2rem;
            box-shadow: 0 .02rem .2rem 0 rgba(0,0,0,0.08);
        }
        .test>div>img{
            height: 2rem;
        }
        .test>div>p{
            height: .2rem;
            line-height: .2rem;
            font-size: .14rem;
            color: #333;
            text-align: center;
            margin: .162rem 0;
            width: 100%;
        }
        .test>div>a{
            height: .5rem;
            line-height: .2rem;
            font-size: .14rem;
            color: #FFF;
            text-align: center;
            margin: 0 auto;
            width: 2.64rem;
            padding: .15rem 1.02rem;
            background: #5191E5;;
            border-radius: .2rem;
            text-decoration: none;
            display: block;
        }
    }
    @media (max-width: 767px) {
        .test{
            margin-bottom: .2rem !important;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }
        .test>div{
            height: 3.2rem;
            margin-bottom: .15rem;
            width: 2.6rem;
            border-radius: .2rem;
            box-shadow: 0 .02rem .2rem 0 rgba(0,0,0,0.08);
        }
        .test>div>img{
            height: 2rem;
        }
        .test>div>p{
            height: .2rem;
            line-height: .2rem;
            font-size: .14rem;
            color: #333;
            text-align: center;
            margin: .162rem 0;
            width: 100%;
        }
        .test>div>a{
            height: .5rem;
            line-height: .2rem;
            font-size: .14rem;
            color: #FFF;
            text-align: center;
            margin: 0 auto;
            width: 2.64rem;
            padding: .15rem 1.02rem;
            background: #5191E5;;
            border-radius: .2rem;
            text-decoration: none;
            display: block;
        }
    }
</style>
