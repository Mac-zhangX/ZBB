<template>
    <div>
        <v-nav></v-nav>
        <div class="content middle-container">
            <div class="title ">
                <h1>订单详情</h1>
            </div>
            <div class="order-box">
                <div class="step-box">
                    <div class="step-bg-box"></div>
                    <div class="step-info-box" v-if="orderStatus === 1">
                        <div class="step-info flex-box-between">
                            <div class="step-item">
                                <div>
                                    <img src="../../assets/img/tig/liucheng1.png" alt="">
                                </div>
                                <p>
                                    选择课程
                                </p>
                            </div>
                            <div class="guide">
                                <img src="../../assets/img/tig/jiantou.png" alt="">
                            </div>
                            <div class="step-item">
                                <div>
                                    <img src="../../assets/img/tig/liucheng2.png" alt="">
                                </div>
                                <p>
                                    提交订单
                                </p>
                            </div>
                            <div class="guide">
                                <img src="../../assets/img/tig/jiantou.png" alt="">
                            </div>
                            <div class="step-item">
                                <div>
                                    <img src="../../assets/img/tig/liucheng3.png" alt="">
                                </div>
                                <p>
                                    支付成功
                                </p>
                            </div>
                            <div class="guide">
                                <img src="../../assets/img/tig/jiantou.png" alt="">
                            </div>
                            <div class="step-item">
                                <div>
                                    <img src="../../assets/img/tig/liucheng4.png" alt="">
                                </div>
                                <p>
                                    填写申请表
                                </p>
                            </div>
                            <div class="guide">
                                <img src="../../assets/img/tig/jiantou.png" alt="">
                            </div>
                            <div class="step-item">
                                <div>
                                    <img src="../../assets/img/tig/liucheng5.png" alt="">
                                </div>
                                <p>
                                    申请成功
                                </p>
                            </div>
                        </div>
                        <div class="step-desc">
                            <h1>温馨提示</h1>
                            <h2>请在24小时内完成支付；如未及时支付，系统将自动取消订单。支付完成后,请及时填写申请表，便于咨询顾问给你安排指定化课程内容。若您不想购买，可取消订单。</h2>
                        </div>
                    </div>
                    <div class="nothing-logo" v-else>
                        <img src="../../assets/img/tig/close-order.png" alt="">
                        <a href="javascript:;" class="reset-order">
                            恢复订单
                        </a>
                    </div>
                </div>
                <div class="course-info-box">
                    <h1>订单信息</h1>
                    <h2>
                        <p class="order-num">确认购买信息</p>
                        <p class="order-time">2018年12月19日</p>
                    </h2>
                    <div class="course-info">
                        <div class="course-desc">
                            <span>产品名称</span>
                            <span>单价</span>
                            <span>订单编号</span>
                            <span>总价</span>
                        </div>
                        <div class="course-order">
                            <ul>
                                <li>
                                    <div>
                                        <img src="https://cdn-global1.unicareer.com/official-project/image/up17-6-2749813946su.png" alt=""><span class="orderName">私人定制-基础课程</span>
                                    </div>
                                    <div>¥6380</div>
                                    <div>12132113</div>
                                    <div>¥6380</div>
                                </li>
                            </ul>
                        </div>
                        <!--<div class="order-info">-->
                           <!--<p>-->
                               <!--订单金额：<span class="order-money">￥10000</span>-->
                           <!--</p>-->
                            <!--<p>-->
                                <!--实际金额：<span class="pay-money">￥10000</span>-->
                            <!--</p>-->

                        <!--</div>-->
                    </div>
                    <div class="button-box" v-if="orderStatus === 1">
                        <a href="javascript:;" class="pay-button"  @click="payOrder(1)">付款</a>
                        <a href="javascript:;" class="close-button" @click="closeOrder(1)">取消</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import accountMenu from "../../components/plug/accountMenu";
    export default {
        name: "OrderInfo",
        data() {
            return {
                orderStatus : 1
            };
        },
        methods: {
            closeOrder(id){
                location.reload();
            },
            payOrder(id){
                this.$router.push('/orders/pay')
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
    .step-bg-box{
        background: #F6FCFC;
        border-radius: .05rem;
        height: 1.9rem;

    }
    .step-box{
        margin-top: .6rem;
        margin-bottom: .3rem;
        position: relative;
    }
    .step-info-box{
        position: absolute;
        top: -0.5rem;

    }
    .step-info{

        padding: 0 .9rem;

    }
    .step-info>div{
        width: auto;
    }
    .step-item>p{
        font-size: .14rem;
        color: #000;
        line-height: .19rem;
    }
    .step-item>div{
        background: #E4E8EF;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        margin-bottom: .24rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .step-item{
        width: 1rem;
    }
    .guide{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1rem;
    }
    .step-desc{
        margin-top: .35rem;

        padding: 0 .9rem;
    }
    .step-desc>h1{
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        line-height: .19rem;
        color: #FF634B;
        display: inline-block;
        width: auto;
        margin-right: .24rem;
        vertical-align: top;
        font-size: .14rem !important;
    }
    .step-desc>h2{
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        line-height: .19rem;
        color:  #7B797B;
        display: inline-block;
        width: 8.5rem;
        text-align: left;
        font-size: .14rem !important;
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
        /*background: #F3F5F7;*/
        border-radius: .02rem;
        /*padding: .2rem .15rem;*/
        /*display: flex;*/
        /*justify-content: space-between;*/
        position: relative;
        margin-top: .06rem;

    }

    .course-logo{
        width: 2.02rem;
        height: 1.02rem;
        margin-right: .2rem;
    }
    .course-desc{
        width: 100%;
        display: flex;
        justify-content: left;
        height: 0.44rem;
        background: #5091E6;
        line-height: 0.44rem;
    }
    .course-desc span {
        display: inline-block;
        flex: 1;
        font-size: 0.17rem;
        text-align: center;
        color: #ffffff;
    }
    .course-order ul {
        border: 1px solid #EAEAEA
    }
    .course-order ul li {
        height: 1rem;
        display: flex;
        border-top: none;
        text-align: center;
        line-height: 100px;
    }
    .course-order ul li span {
        color: #5091E6;
    }
    .course-order ul li div {
        text-align: center;
        font-size: 0.17rem;
    }
    .course-order ul li img {
        height: 0.76rem;
        width: 0.76rem;
        border-radius: 4px;
        margin-right: 0.2rem;
        border: 1px solid #EAEAEA;
        vertical-align: middle
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
    .button-box{
        margin-top: .3rem;
        display: flex;
        justify-content: flex-end;
    }
    .button-box>a{
        display: inline-block;
        height: .38rem;
        line-height: .38rem;
        font-size: .18rem;
        padding: 0 .42rem;
    }
    .pay-button{
        background: #5191E5;
        border-radius: .02rem;

        color: #FFFFFF;
    }
    .close-button{

        color: #5191E5;
    }
    .reset-order{
        display: block;
        background: #F8FAFC;
        border: 1px solid #DFDFDF;
        border-radius: 5px;
        padding: 0 .34rem;
        font-size: .18rem;
        height: .42rem;
        color: #7B797B;
        width: 1.5rem;
        line-height: .42rem;
        margin: .22rem auto;

    }
    .nothing-logo{
        position: absolute;
        bottom: 0;
    }
    .close-order>h2{
        font-size: .14rem !important;
        color: #4A4A4A !important;
    }
    @media (min-width: 1200px) {

    }
    @media (min-width: 992px) and (max-width: 1200px){
        .step-info{

            padding: 0;

        }
        .step-desc{
            padding: 0;
        }
        .step-desc>h2{
            width: 8rem;
        }
        .main-info>h3{
            width: 5rem;
        }
    }
    @media (min-width: 767px) and (max-width: 992px){
        .step-box{

            display: none;

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

    }
    @media (max-width: 767px) {

        .title{
            display: block;
        }

        .step-box{

            display: none;

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
        .button-box{
            justify-content: center;
        }
        .button-box>a{
            font-size: .16rem !important;
            padding: 0 .22rem !important;
        }
    }
</style>
