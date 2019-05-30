<template>
    <div class="container">
        <div class="title">
            <img src="../assets/img/icon/buy-1.png" alt="">
            确认购买信息
        </div>
        <div class="goods-list">
            <div class="table-box">
                <table>
                    <tr class="table-head">
                        <td>产品名称</td>
                        <td>单价</td>
                        <td>说明</td>
                        <td>总价</td>
                    </tr>
                    <tr class="product">
                        <td>
                            <img src="../assets/img/icon/course.png" alt="">
                            {{orderInfo.name}}</td>
                        <td>￥{{orderInfo.price}}</td>
                        <td>{{orderInfo.desc}}</td>
                        <td>￥{{orderInfo.total_price}}</td>
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
                <p>订单金额：<span>￥{{orderInfo.order_price}}</span></p>
                <hr>
                <p>应付金额：<span>￥{{orderInfo.pay_money}}</span></p>
            </div>
            <div class="submit" @click="submit">
                提交订单
            </div>
        </div>
    </div>
</template>

<script>
    import * as _ from '../util/functions';
    export default {
        name: "BuyCourse",
        data(){
            return {
                orderInfo : {
                    name : '年度会员',
                    price : 999.00,
                    total_price : 999.00,
                    desc : '年度会员',
                    order_price : 999.00,
                    pay_money : 999.00
                }
            }
        },
        methods : {
            submit(){

                if(!_.isLogin()){
                    $('#loginModel').modal('show');
                }else{
                    //提交订单接口

                    //跳转到我的订单
                    this.$router.push({path:'/orders'});
                }


            }
        }
    }
</script>

<style scoped>
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
        width: 100%;
        max-width: 10.41rem;
        margin: 0 auto;
    }
    .vip-logo>div{
        padding-top:28%;
        background: url("../assets/img/bg/order-bg-1.png") no-repeat;
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

    .vip-info li{
        font-size: .14rem;
        line-height: .3rem;
        color: #666;
    }
    .product{
        line-height: .24rem;
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
            height: 2.1rem;
        }
        .pay-info p{
            padding: .2rem 0;

        }
        .submit{
            height: .4rem;
            line-height: .4rem;
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