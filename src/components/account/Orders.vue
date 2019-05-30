<template>
    <div>
        <v-nav></v-nav>
        <div class="content middle-container">
            <div class="title ">
                <h1>我的订单</h1>
                <div class="search-box">
                    <select name="" id="">
                        <option value="1">3</option>
                        <option value="2">2</option>
                        <option value="3">1</option>
                    </select>
                    <button><i class="glyphicon glyphicon-search"></i></button>
                </div>
            </div>
            <div class="flex-box-between order-box" v-if="orderCount !== 0">
                <div class="order-item" @click="jumpInfo(1)">
                    <div class="order-title new-order">
                        <span>订单号：</span>
                        <span class="order-num">1000154909877676</span>
                        <span class="order-desc">订单详情</span>
                    </div>
                    <div class="order-info">
                        <div class="vip-power">
                            <img src="../../assets/img/icon/vip-logo.png" alt="">
                            <div class="product-info">

                                <h1>私人定制—飞跃课程</h1>
                                <h3>￥10000</h3>
                            </div>
                        </div>

                        <div class="order-status">
                            <p class="new-order-status">待付款</p>
                            <h6>2018年12月19日</h6>
                        </div>
                    </div>
                </div>
                <div class="order-item">
                    <div class="order-title pay-order">
                        <span>订单号：</span>
                        <span class="order-num">1000154909877676</span>
                        <span class="order-desc">订单详情</span>
                    </div>
                    <div class="order-info">
                        <div class="vip-power">
                            <img src="../../assets/img/icon/vip-logo.png" alt="">
                            <div class="product-info">

                                <h1>私人定制—飞跃课程</h1>
                                <h3>￥10000</h3>
                            </div>
                        </div>

                        <div class="order-status">
                            <p class="pay-order-status">待付款</p>
                            <h6>2018年12月19日</h6>
                        </div>
                    </div>
                </div>
                <div class="order-item">
                    <div class="order-title close-order">
                        <span>订单号：</span>
                        <span class="order-num">1000154909877676</span>
                        <span class="order-desc">订单详情</span>
                    </div>
                    <div class="order-info">
                        <div class="vip-power">
                            <img src="../../assets/img/icon/vip-logo.png" alt="">
                            <div class="product-info">

                                <h1>私人定制—飞跃课程</h1>
                                <h3>￥10000</h3>
                            </div>
                        </div>

                        <div class="order-status">
                            <p class="close-order-status">待付款</p>
                            <h6>2018年12月19日</h6>
                        </div>
                    </div>
                </div>
                <div class="order-item">
                    <div class="order-title new-order">
                        <span>订单号：</span>
                        <span class="order-num">1000154909877676</span>
                        <span class="order-desc">订单详情</span>
                    </div>
                    <div class="order-info">
                        <div class="vip-power">
                            <img src="../../assets/img/icon/vip-logo.png" alt="">
                            <div class="product-info">

                                <h1>私人定制—飞跃课程</h1>
                                <h3>￥10000</h3>
                            </div>
                        </div>

                        <div class="order-status">
                            <p class="new-order-status">待付款</p>
                            <h6>2018年12月19日</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-box-center order-box" v-else>
                <div class="info-box">
                    <img src="../../assets/img/tig/Bitmap.png" alt="">
                    <img src="../../assets/img/tig/Bitmap-Copy.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import accountMenu from "../../components/plug/accountMenu";
    export default {
        name: "Orders",
        data() {
            return {
                orderList: {},
                orderCount: 1
            };
        },
        methods: {
            jumpInfo(index){
                this.$router.push('/orders/info');
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
    h1,h2,h3,h4,h5,h6,p{
        margin : 0 !important;
        font-family:tahoma, arial, "Hiragino Sans GB", "\5FAE\8F6F\96C5\9ED1", simsun, sans-serif !important;
    }
    .vip-power>img{
        vertical-align:top;
    }
    .content{
        padding: .35rem;
        background: #FFFFFF;
        box-shadow: 0 2px 9px 0 rgba(109,107,107,0.30);
        margin-bottom: 1rem;
    }
    .search-box{
        width: auto;
    }
    .search-box select{
        background: #FFFFFF;
        border: 1px solid #D5DADF;
        width: 1.82rem;
        height: .4rem;
        border-radius: .03rem;
        padding: .1rem .12rem;
        color: #666;
        font-size: .14rem;
    }
    .search-box button{
        opacity: 0.45;
        background: #95BAEB;
        width: .4rem;
        height: .4rem;
        color: #FFF;
        border-radius: .03rem;
        font-size: .22rem;
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
    .order-title{
        height: .35rem;
        padding: .1rem;
        font-size: .12rem;
        color: #9B9B9B;
        line-height: .15rem;
        text-align: left;
    }
    .pay-order{
        background: #D8E5F7;
    }
    .close-order{
        background: #F7F0F0;
    }
    .new-order{
        background: #EAEAEA;
    }
    .pay-order-status{
        color: #5191E5;
    }
    .close-order-status{
        color: #E64E46;
    }
    .new-order-status{
        color: #000000;
    }
    .order-title span{
        display: inline-block;
    }
    .order-item{
        width: 5.55rem;
        text-align: left;
        margin-bottom: .15rem;
        cursor: pointer;
    }
    .order-num{
        color: #4A4A4A;
    }
    .order-desc{
        font-size: .14rem;
        color: #4A4A4A;
        float: right;
    }
    .order-info{
        height: .9rem;
        display: flex;
        padding: .25rem .2rem;
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        border-top: none;
    }
    .product-info h1{
        font-size: .14rem;
        line-height: .2rem;
        color: #5191E5;
    }
    .product-info h3{
        font-size: .14rem;
        line-height: .2rem;
        color: #4A4A4A;
    }
    .product-info{
        width: auto;
        display: inline-block;
    }
    .order-status{
        width: 1.08rem;
    }
    .order-status p{
        border: 1px solid #E2E2E2;
        border-radius: 5px;
        font-size: .12rem;
        line-height: .17rem;
        padding: .03rem .25rem;
    }
    .order-status h6{
        font-size: .1rem;
        line-height: .14rem;
        color: #9B9B9B;
    }
    .order-box{
        padding: .4rem .05rem;
    }
    .info-box{
        width: auto;
    }
    .info-box>img{
        display: block;
        margin-bottom: .3rem;
    }
    @media (min-width: 1200px) {

    }
    @media (min-width: 992px) and (max-width: 1200px){
        .flex-box-between{
            justify-content: center;
        }
    }
    @media (min-width: 767px) and (max-width: 992px){
        .flex-box-between{
            justify-content: center;
        }
    }
    @media (max-width: 767px) {
        .flex-box-between{
            justify-content: center;
        }

        .menu-item-box li{
            font-size: .12rem;
            line-height: .19rem;
            border-radius: .1rem;
            padding: .04rem .05rem;
        }

        .title{
            display: block;
        }
        .search-box{
            text-align: left;
        }
        .order-item{
            width: 100%;
        }
        .order-status{
            width: auto;
            margin-top: .12rem;
        }
        .product-info h1{
            font-size: .12rem;
        }
        .product-info h3{
            font-size: .12rem;
        }
        .order-status p{
            padding: .03rem .1rem;
            display: inline-block;
        }
        .order-status h6{
            font-size: .1rem;
            line-height: .12rem;
            color: #9B9B9B;
            display: inline-block;
        }
        .order-info{
            height: auto;
            display: block;
        }
        .order-desc{
            display: none !important;
        }
    }
</style>
