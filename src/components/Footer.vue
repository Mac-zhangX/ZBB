<template>
    <div class="footer">
        <div class="container">
            <div class="left">
                <h1>服务于产品</h1>
                <ul>
                    <li>会员专属</li>
                    <li>简历精修</li>
                    <li>私人订制</li>
                    <li>42号计划</li>
                    <li>名企直推</li>
                    <li>获取资源</li>
                </ul>
            </div>
            <div class="left">
                <h1>品牌与活动</h1>
                <ul>
                    <li>职场狼人杀</li>
                    <li>职场加速大课</li>
                    <li>公益校园行</li>
                    <li>谁来一起晚餐</li>
                    <li>精英社交酒会</li>
                </ul>
            </div>
            <div class="left">
                <h1>品牌与活动</h1>
                <ul>
                    <li>团队介绍</li>
                    <li>学员好评</li>
                    <li>加入我们</li>
                    <li>最新动态</li>
                </ul>
            </div>
            <div class="left contact">
                <h1>联系我们</h1>
                <p>
                    +86 400-123-22341<br>
                    zhibangbang@163.com<br>
                    杭州：西湖区文一西路123号<br>
                    上海：杨浦区黄兴路2314号<br>
                </p>

            </div>
            <div class="right attention">
                <h1>关注我们</h1>
                <a href="##" class="wechat">
                    <img src="../assets/img/wechat-logo.png" alt="">
                </a>
                <a href="##">
                    <img src="../assets/img/weibo-logo.png" alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .footer{
        background-color: #5191E5;
        color : #FFF;
        letter-spacing: 0;
        text-align: center;
    }
    .container{
        margin-right: auto;
        margin-left: auto;
        /*padding-left: 80px;*/
    }
    .container h1{
        margin-top: 31px;
        margin-bottom: 14px;
        font-size: 18px;
    }
    .container ul li{
        font-size: 14px;
        margin-bottom: 14px;
    }
    .right{
        float: right;
    }
    .contact>p{
        text-align: justify;
        line-height: 25px;
        font-size: .14rem;
    }
    .attention h1{
        text-align: left;
    }
    .contact h1{
        text-align: justify;
    }
    .wechat{
        margin-right: 30px;
    }
    @media (min-width: 1200px) {
        .left{
            float: left;
            margin-right: 116px;
        }
    }
    @media (min-width: 992px) and (max-width: 1200px){
        .left{
            float: left;
            margin-right: 116px;
        }
        .attention{
            display: none;
        }
    }
    @media (min-width: 768px) and (max-width: 992px){

        .left{
            float: left;
            margin-right: 60px;
        }
        .attention{
            display: none;
        }
    }
    @media (max-width: 768px) {
        .footer{
            display: none;
        }
    }
</style>