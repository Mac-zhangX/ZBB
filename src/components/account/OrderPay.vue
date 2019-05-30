<template>
    <div>
        <v-nav></v-nav>

        <div class="content middle-container">
            <div class="title ">
                <h1>订单付款</h1>
            </div>
            <div class="order-box">
                <div class="course-info-box">
                    <h2>
                        <p class="order-num">订单号：1212121212323432432</p>
                        <p class="order-time">2018年12月19日</p>
                    </h2>
                    <div class="course-info">
                        <div class="course-desc">
                            <img src="../../assets/img/home-banner.png" alt=""  class="course-logo">
                            <div class="main-info">
                                <h1>私人订制-飞跃课程</h1>
                                <h2>课程时间 2019.01.03-2019.02.20(共47天）</h2>
                                <h3>说明：以贝莱德、华夏为首的资管企业的组织架构、时下热门交易策略与职业发展道路</h3>
                            </div>
                        </div>
                        <div class="order-info">
                            <p>
                                订单金额：<span class="order-money">￥10000</span>
                            </p>
                            <p>
                                实际金额：<span class="pay-money">￥10000</span>
                            </p>

                        </div>
                    </div>
                </div>
                <div class="pay-box">
                    <p class="money">
                        实付金额: <span>￥10000</span>
                    </p>
                    <h3>支付方式</h3>
                    <div class="pay-type">
                        <div @click="paySuccess">
                            <img src="../../assets/img/tig/wxzf.png" alt="">
                        </div>
                        <div  @click="paySuccess">
                            <img src="../../assets/img/tig/zfbzf.png" alt="">
                        </div>
                    </div>
                    <div class="bank-pay">
                        <div><img src="../../assets/img/tig/bank-gs.png" alt=""></div>
                        <div><img src="../../assets/img/tig/bank-zh.png" alt=""></div>
                        <div><img src="../../assets/img/tig/bank-js.png" alt=""></div>
                        <div><img src="../../assets/img/tig/bank-zs.png" alt=""></div>
                        <div><img src="../../assets/img/tig/bank-zx.png" alt=""></div>
                        <div><img src="../../assets/img/tig/bank-gf.png" alt=""></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import accountMenu from "../../components/plug/accountMenu";
    export default {
        name: "OrderPay",
        data() {
            return {

            };
        },
        methods: {
            closeOrder(id){
                this.$router.push('/orders/close');
            },
            paySuccess(){
                this.$alert('<div class="pay-success-box"><div class="pay-callback"><img src="../../assets/img/tig/tishi.png" alt=""><div class="tigMsg">您已订课成功，赶紧去填写申请表吧~</div>' +
                    '<a href="/orders/apply"  class="go-apply">立即前往</a>' +
                    '<a href="/orders" class="close-modal">稍后再去吧</a>' +
                    '</div></div>', ' ', {
                    dangerouslyUseHTMLString: true
                });
            },
            apply(){
                this.$router.push('/orders/apply')
            }
        },
        components : {
            "v-nav": accountMenu,
        },
        mounted(){

        }
    }
</script>

<style scoped>
    @import "../../assets/css/main.css";
    div{
        width: 100%;
    }

    .content{
        padding: .35rem;
        background: #FFFFFF;
        box-shadow: 0 2px 9px 0 rgba(109,107,107,0.30);
        margin-bottom: 1rem;
    }
    .title{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #C3C3C3;
        padding-bottom: .15rem;
    }
    .title h1{
        font-size: .2rem;
        color: #4A4A4A;
        letter-spacing: 0;
        line-height: .4rem;
        width: 1rem;
        margin-left: .05rem;
    }

    .order-box{
        padding: .4rem .05rem;
    }

    .course-info-box{
        text-align: left;
    }
    .course-info-box>h1{
        font-size: .2rem;
        color: #000;
        line-height: .28rem;
        margin-bottom: .2rem;
        margin-left: .15rem;
    }
    .course-info-box>h2{
        margin-left: .15rem;
        font-size: .14rem;
        line-height: .19rem;
        display: flex;
        justify-content: space-between;
    }
    .order-time{
        color: #4A4A4A;
    }
    .order-num{
        color: #9B9B9B;
    }
    .course-info{
        background: #F3F5F7;
        border-radius: .02rem;
        padding: .2rem .15rem;
        display: flex;
        justify-content: space-between;
        position: relative;
        margin-top: .06rem;

    }

    .course-logo{
        width: 2.02rem;
        height: 1.02rem;
        margin-right: .2rem;
    }
    .course-desc{
        display: flex;
        justify-content: left;
    }
    .main-info>h1{
        font-size: .16rem;
        color: #000;
        line-height: .22rem;
        margin-top: .08rem;
    }
    .main-info>h2{
        font-size: .14rem;
        line-height: .2rem;
        color: #4A4A4A;
        margin-top: .05rem;
    }
    .main-info>h3{
        font-size: .14rem;
        color: #9B9B9B;
        line-height: .2rem;
        margin-top: .15rem;
    }
    .order-info{
        font-size: .14rem;
        line-height: .2rem;
        color: #4A4A4A;
        width: 1.6rem;
        position: absolute;
        right: 0;
        bottom: .3rem;
    }
    .order-money{
        font-size: .14rem;
        color: #9B9B9B;
    }
    .pay-money{
        font-size: .16rem;
        color: #4A4A4A;
    }
    .pay-box{
        margin-top: .24rem;

    }
    .money{
        font-size: .16rem;
        line-height: .22rem;
        color: #4A4A4A;
        font-weight: bold;
    }
    .money>span{
        color: #c33339;
    }
    .pay-box>h3{
        margin-top: .22rem;
        margin-bottom: .14rem;
        font-size: .14rem;
        line-height: .2rem;
        color: #000000;
        text-align: left;
    }
    .pay-type{
        width: 6rem;
        margin: 0 auto .5rem auto;
        display: flex;
        justify-content: space-around;

    }
    .bank-pay{
        border-top: 1px solid #D2D2D2;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: .5rem 2.85rem;
    }
    .bank-pay>div{
        width: 1.5rem;
        height: .4rem;
        margin-bottom: .5rem;
    }

    @media (min-width: 1200px) {

    }
    @media (min-width: 992px) and (max-width: 1200px){
        .main-info>h3{
            width: 5rem;
        }
        .bank-pay{
            padding: .5rem 2rem;
        }
    }
    @media (min-width: 767px) and (max-width: 992px){
        .order-info{
            margin-top: .3rem;
            position: static;
        }
        .course-info{

            display: block;
            position: relative;
            margin-top: .06rem;

        }
        .bank-pay{
            padding: .5rem 1rem;
        }

    }
    @media (max-width: 767px) {

        .title{
            display: block;
        }
        .bank-pay{
            padding: .5rem 0 !important;
        }
        .bank-pay>div{
            margin-bottom: .3rem;
        }
        .order-info{
            margin-top: .3rem;
            position: static;
        }
        .course-info{

            display: block;
            position: relative;
            margin-top: .06rem;

        }
        .order-box{
            padding: .2rem .05rem;
        }
        .course-info-box>h1{
            margin-bottom: .15rem;
        }
        .course-info-box>h2{
            display: block;
        }
        .course-desc{
            display: block;
        }
    }
</style>
<style>
    .tigMsg{
        font-size: .18rem;
        line-height: .25rem;
        color: #4A4A4A;
        position: absolute;
        top: 1rem;
    }
    .go-apply{
        margin: .5rem auto 0 auto;
        background: #F8FAFC;
        border: 1px solid #DFDFDF;
        border-radius: 5px;
        padding: .1rem .3rem;
        font-size: .18rem;
        line-height: .25rem;
        display: block;
        color: #7B797B;
        width: 1.5rem;
    }
    .close-modal{
        margin: .2rem auto;

        padding: .1rem .3rem;
        font-size: .16rem;
        line-height: .22rem;
        display: block;
        color: #7B797B;
        width: 1.5rem;

    }
    .pay-callback{
        position: relative;
    }
    .el-message-box{
        width: 7.75rem;
    }
    .el-message-box__btns{
        display: none;
    }
</style>
