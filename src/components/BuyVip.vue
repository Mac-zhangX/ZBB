<template>
    <div class="container">
        <div class="title Light">
            <img src="../assets/img/icon/buy-1.png" alt="">
            确认购买信息
        </div>
        <div class="goods-list">
            <div class="table-box">
                <table>
                    <tr class="table-head Light">
                        <td>产品名称</td>
                        <td>单价</td>
                        <td>说明</td>
                        <td>总价</td>
                    </tr>
                    <tr class="Light">
                        <td>年度会员</td>
                        <td>￥999.00</td>
                        <td>年度会员</td>
                        <td>￥999.00</td>
                    </tr>
                </table>
            </div>

            <div class="vip-logo">
                <div>

                </div>
            </div>
        </div>
        <div class="order-info">
            <div class="pay-info">
                <p class="Regular">订单金额：<span class="Light">￥999.00</span></p>
                <hr>
                <p class="Regular">应付金额：<span class="Light">￥999.00</span></p>
            </div>
            <div class="submit Light" @click="submit">
                提交订单
            </div>
        </div>
        <div class="vip-info">
            <div>
                <ul class="Light">
                    <li class="vip-title">会员特权</li>
                    <li>支付成功后，会员可享受以下权利和服务</li>
                    <li>(1) 会员权利会员权利会员权利会员权利会员权利会员权利会员权利</li>
                    <li>(2) 会员权利会员权利会员权利会员权利会员权利会员权利会员权利</li>
                    <li>(3) 会员权利会员权利会员权利会员权利会员权利会员权利会员权利</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "BuyVip",
        data(){
            return {

            }
        },
        methods : {
            submit() {this.$router.push('/orders')}
        }
    }
</script>

<style scoped>
    @import "../assets/css/font.css";
    .container{
        margin-bottom: 1rem;
    }
    .title{
        margin-top: .4rem;
        font-size: .24rem;
        color: #5191E5;
        text-align: justify;
        line-height: .33rem;
        height: .33rem;
        margin-bottom: .2rem;
    }
    .title>img{
        margin-top: .045rem;
    }
    .goods-list{
        height: 4.5rem;
        border-radius: .2rem;
        box-shadow: 0 -5px 46px 0 rgba(0,0,0,0.07);
        position: relative;
        margin-bottom: 1rem;
    }
    .table-box{
        width: 100%;
        border-radius: .2rem;
        overflow: hidden;
    }
    .table-box table{
        width: 100%;
        text-align: center;
    }
    .table-box table tr{
        height: 1rem;
        font-size: .18rem;
    }
    .table-head{
        background: #ABCFFF;
        color: #FFF;
        font-size: .2rem !important;
        border-radius: .2rem 0;
    }
    .vip-logo{
        width: 96%;
        height: 1rem;
        top: 2.2rem;
        right: 0;
        position: absolute;
    }
    .vip-logo>div{
        padding-top:26%; /* 316 / 1024 */
        background: url("../assets/img/bg/vip-logo-1.png") no-repeat;
        background-size:cover;
        background-position:center;
    }
    .order-info{
        box-shadow: 0 -5px 46px 0 rgba(0,0,0,0.07);
        background: #FFFFFF;
        border-radius: .2rem;
        text-align: left;
        font-size: .18rem;
        overflow: hidden;
        margin-bottom: .7rem;
    }
    .pay-info{
        padding:  0 .6rem;
    }
    .pay-info p{
        padding: .3rem 0;
        line-height: .25rem;
        color: #333;
    }
    .pay-info hr{
        border-bottom:1px solid #F6F6FA;
        height: 0;
        margin: 0;
        border-top: none;
    }
    .order-info p span{
        color: #5191E5;
    }
    .submit{
        width: 100%;
        height: .7rem;
        text-align: center;
        background: #5191E5;
        color: #FFFFFF;
        line-height: .7rem;
        cursor: pointer;
    }
    .vip-info{
        background: #FFFFFF;
        box-shadow: 0 -5px 46px 0 rgba(0,0,0,0.07);
        border-radius: .2rem;
        background: url("../assets/img/bg/vip-logo-2.png") no-repeat right bottom;
        padding:.3rem .6rem;
        text-align: left;
    }
    .vip-title{
        font-size: .18rem !important;
        color: #333 !important;
        line-height: .25rem !important;
    }
    .vip-info li{
        font-size: .14rem;
        line-height: .3rem;
        color: #666;
    }
    @media (min-width: 1200px) {

    }
    @media (min-width: 992px) and (max-width: 1200px){
        .goods-list{
            height: 4.2rem;
        }
    }
    @media (min-width: 767px) and (max-width: 992px){
        .table-box table tr{
            height:.8rem !important;
        }
        .goods-list{
            height: 3.6rem;
        }
        .pay-info p{
            padding: .2rem 0;

        }
        .submit{
            height: .6rem;
            line-height: .6rem;
        }
    }
    @media (max-width: 767px) {
        .table-head{
            font-size: .14rem !important;

        }
        .table-box table tr{
            height:.6rem !important;
            font-size: .12rem;
        }
        .goods-list{
            height: 2.86rem;
        }
        .pay-info p{
            padding: .2rem 0;

        }
        .submit{
            height: .4rem;
            line-height: .4rem;
        }
        .vip-info{
            padding: .15rem .1rem;
        }
        .title{
            font-size: .18rem;
            margin-top: .3rem;
        }
        .pay-info{
            padding: 0 .3rem;
        }
        .pay-info p{
            padding: .1rem 0;
        }
        .order-info{
            font-size: .14rem;
        }
        .vip-info li{
            font-size: .12rem;
            line-height: .2rem;
        }
    }
</style>
