<template>
    <div class="container-fluid">
        <p-test></p-test>
        <div class="banner">
            <img src="../../assets/img/banner/banner-1.png" alt="">
            <div class="container tabs-title">
                <ul role="tablist">
                    <li role="presentation" class="active" @click="changeType(1)"><a href="#new" aria-controls="new" role="tab" data-toggle="tab">最新动态</a></li>
                    <li role="presentation" @click="changeType(2)"><a href="#company" aria-controls="company" role="tab" data-toggle="tab">公司动态</a></li>
                    <li role="presentation" @click="changeType(3)"><a href="#business" aria-controls="business" role="tab" data-toggle="tab">企业合作</a></li>
                    <li role="presentation" @click="changeType(4)"><a href="#school" aria-controls="school" role="tab" data-toggle="tab">校园合作</a></li>

                </ul>
            </div>
        </div>
        <div class="news-content">
            <div class="news-item" v-for="newsItem in listData">
                <img :src="newsItem.picture" alt="">
                <div>
                    <h1>{{ newsItem.title }}</h1>
                    <h4>{{ newsItem.content }}</h4>
                    <p>
                        <img src="../../assets/img/icon/create_time.png" alt="">
                        发布日期：{{ newsItem.date }}
                    </p>
                </div>
            </div>

            <div class="news-empty-item">

            </div>
            <div class="news-empty-item">

            </div>

        </div>

        <div class="page">
            <el-pagination
                    @current-change="handleCurrentChange"
                    background
                    layout="prev, pager, next"
                    :total="totalNum"
                    :page-size="9">
            </el-pagination>

        </div>
        <div class="small-page">
            <el-pagination
                    @current-change="handleCurrentChange"
                    small
                    layout="prev, pager, next"
                    :total="totalNum"
                    :page-size="9">
            </el-pagination>
        </div>


    </div>
</template>

<script>
    import api from '../../fetch/api';
    import test from "@/components/plug/Test";
    import response from "../../data/news.json";
    export default {
        name: "News",
        data() {
            return {
                newsType : 1,   //默认为最新动态
                totalNum : 0,
                listData : {}

            };
        },
        methods : {
            changeType(index){
                this.newsType = index;
                this.getNewsList();
            },
            handleCurrentChange(val){
                this.getNewsList(val);
                document.body.scrollTop = 650;
                document.documentElement.scrollTop = 650;
            },
            getNewsList(val = 1) {
                let data = {
                    pageNum : val,
                    type : this.newsType
                };
                // api.NewsList(data).then(res => {
                //     if(res.status === 'y'){
                //         this.totalNum = res.count;
                //         this.listData = res.data;
                //     }
                // })
                //     .catch(error => {
                //         console.log(error);
                //     });
                let res= response;
                this.totalNum = res.count;
                this.listData = res.data;
            }
        },
        components : {
            "p-test" : test
        },
        mounted:function(){
            /**调用接口**/
            this.getNewsList();


        }
    }
</script>

<style scoped>
    .news-content{
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .test{
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
    }
    .tabs-title{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        -o-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        height: auto;
    }
    .tabs-title ul{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        border: none !important;
        flex-wrap: wrap;
    }
    .tabs-title li{
        height: 100%;
    }
    .active a{
        background: #5191E5 !important;
        color: #FFF !important;

    }
    .tabs-title li a{
        text-decoration: none !important;
        color: #999;
        background: #F6F6FA;
        border-radius: 50%;
        text-align: center;
        display: block;
    }
    .small-page{
        display: none;
    }
    .news-item>div>p{
        margin:  0 !important;
    }
    .news-item>div>h4{
        margin:  0 !important;
    }
    .news-item>div>h1{
        margin:  0 !important;
    }
    @media (min-width: 1200px) {
        .news-content{
            width: 12rem;
            padding-top: .7rem;
            padding-bottom: .7rem;
        }
        .test{
            margin-bottom: .50rem;
        }
        .test>div{
            height: 4.8rem;
            width: 5.6rem;
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
        .banner{
            height: 4.5rem;
            position: relative;
            margin-bottom: .8rem;
        }
        .banner>img{
            height: 4.5rem;
        }
        .tabs-title{
            bottom: -0.8rem;
        }
        .tabs-title li a{
            height: 1.6rem;
            width: 1.6rem;
            box-shadow: 0 2px 24px 0 rgba(124,124,124,0.24);
            line-height: 1.6rem;
            font-size: .18rem;
        }
        .news-item>img{
            width: 100%;
            height: 3rem;
        }
        .news-item{
            width: 3.7rem;
            background: #FFFFFF;
            box-shadow: 0 2px 20px 0 rgba(0,0,0,0.08);
            border-radius: .2rem;
            overflow: hidden;
            margin-bottom: .35rem;
        }
        .news-empty-item{
            width: 3.7rem;
            height: 0;
        }
        .news-item>div{
            padding: 0 .14rem;
            text-align: left;
        }
        .news-item>div>h1{
            padding: .15rem 0;
            line-height: .24rem;
            font-size: .18rem;
            color: #333;
            border-bottom: 1px solid #F6F6FA;
        }
        .news-item>div>h4{
            padding: .1rem 0;
            line-height: .24rem;
            font-size: .16rem;
            color: #666;
            border-bottom: 1px solid #F6F6FA;
        }
        .news-item>div>p{
            padding: .12rem 0;
            line-height: .22rem;
            font-size: .16rem;
            color: #666;
        }
        .page{
            margin-bottom: .5rem;
        }
    }
    @media (min-width: 992px) and (max-width: 1200px){
        .news-content{
            width: 9.92rem;
            padding-top: .3rem;
            padding-bottom: .3rem;
        }
        .test{
            margin-bottom: .50rem;
        }
        .test>div{
            height: 4.2rem;
            width: 4.2rem;
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
        .banner{
            height: 4.5rem;
            position: relative;
            margin-bottom: .8rem;
        }
        .banner>img{
            height: 4.5rem;
        }
        .tabs-title{
            bottom: -0.6rem;
        }
        .tabs-title li a{
            height: 1.2rem;
            width: 1.2rem;
            box-shadow: 0 2px 24px 0 rgba(124,124,124,0.24);
            line-height: 1.2rem;
            font-size: .18rem;
        }
        .news-item>img{
            width: 100%;
            height: 2rem;
        }
        .news-item{
            width: 3rem;
            background: #FFFFFF;
            box-shadow: 0 2px 20px 0 rgba(0,0,0,0.08);
            border-radius: .2rem;
            overflow: hidden;
            margin-bottom: .35rem;
        }
        .news-empty-item{
            width: 3rem;
            height: 0;
        }
        .news-item>div{
            padding: 0 .14rem;
            text-align: left;
        }
        .news-item>div>h1{
            padding: .14rem 0;
            line-height: .22rem;
            font-size: .17rem;
            color: #333;
            border-bottom: 1px solid #F6F6FA;
        }
        .news-item>div>h4{
            padding: .1rem 0;
            line-height: .22rem;
            font-size: .14rem;
            color: #666;
            border-bottom: 1px solid #F6F6FA;
        }
        .news-item>div>p{
            padding: .1rem 0;
            line-height: .2rem;
            font-size: .14rem;
            color: #666;
        }
        .page{
            margin-bottom: .5rem;
        }
    }
    @media (min-width: 767px) and (max-width: 992px){
        .news-content{
            width: 7.68rem;
        }
        .tabs-title ul{
            justify-content: space-around !important;
        }
        .news-content{
            justify-content: space-around !important;
        }
        .test{
            margin-bottom: .50rem;
        }
        .test>div{
            height: 3.2rem;
            width: 3rem;
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
        .banner{
            height: 4.5rem;
            position: relative;
            margin-bottom: .6rem;
        }
        .banner>img{
            height: 4rem;
        }
        .tabs-title{
            bottom: -0.1rem;
        }
        .tabs-title li a{
            height: 1.2rem;
            width: 1.2rem;
            box-shadow: 0 2px 24px 0 rgba(124,124,124,0.24);
            line-height: 1.2rem;
            font-size: .18rem;
        }
        .news-item>img{
            width: 100%;
            height: 2rem;
        }
        .news-item{
            width: 3rem;
            background: #FFFFFF;
            box-shadow: 0 2px 20px 0 rgba(0,0,0,0.08);
            border-radius: .2rem;
            overflow: hidden;
            margin-bottom: .35rem;
        }
        .news-empty-item{
            width: 3rem;
            height: 0;
        }
        .news-item>div{
            padding: 0 .14rem;
            text-align: left;
        }
        .news-item>div>h1{
            padding: .14rem 0;
            line-height: .22rem;
            font-size: .17rem;
            color: #333;
            border-bottom: 1px solid #F6F6FA;
        }
        .news-item>div>h4{
            padding: .1rem 0;
            line-height: .22rem;
            font-size: .14rem;
            color: #666;
            border-bottom: 1px solid #F6F6FA;
        }
        .news-item>div>p{
            padding: .1rem 0;
            line-height: .2rem;
            font-size: .14rem;
            color: #666;
        }
        .page{
            margin-bottom: .5rem;
        }
    }
    @media (max-width: 767px) {
        .small-page{
            display: block;
            margin-bottom: .3rem;
        }
        .news-content{

            justify-content: center !important;
        }
        .test{
            margin-bottom: .2rem;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }
        .test>div{
            height: 3.2rem;
            margin-bottom: .15rem;
            width: 3rem;
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
        .banner{
            height: 2rem;
            position: relative;
            margin-bottom: .3rem;
        }
        .banner>img{
            height: 1.8rem;
        }
        .tabs-title{
            bottom: -0.1rem;
            width: 100%;
        }
        .tabs-title li a{
            height: .6rem;
            width: .6rem;
            box-shadow: 0 2px 24px 0 rgba(124,124,124,0.24);
            line-height: .6rem;
            font-size: .12rem;
        }
        .news-item>img{
            width: 100%;
            height: 2rem;
        }
        .news-item{
            width: 3rem;
            background: #FFFFFF;
            box-shadow: 0 2px 20px 0 rgba(0,0,0,0.08);
            border-radius: .2rem;
            overflow: hidden;
            margin-bottom: .35rem;
        }
        .news-empty-item{
            width: 3rem;
            height: 0;
        }
        .news-item>div{
            padding: 0 .14rem;
            text-align: left;
        }
        .news-item>div>h1{
            padding: .14rem 0;
            line-height: .22rem;
            font-size: .17rem;
            color: #333;
            border-bottom: 1px solid #F6F6FA;
        }
        .news-item>div>h4{
            padding: .1rem 0;
            line-height: .22rem;
            font-size: .14rem;
            color: #666;
            border-bottom: 1px solid #F6F6FA;
        }
        .news-item>div>p{
            padding: .1rem 0;
            line-height: .2rem;
            font-size: .14rem;
            color: #666;
        }
        .page{
            display: none;
        }
    }

</style>
<style>

    @media (min-width: 1200px) {
        .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
            width: .6rem !important;
            line-height: .6rem !important;
            height: .6rem !important;
            border-radius: 50% !important;
            margin:  0 .15rem !important;
        }
    }
    @media (min-width: 992px) and (max-width: 1200px){
        .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
            width: .5rem !important;
            line-height: .56rem !important;
            height: .5rem !important;
            border-radius: 50% !important;
            margin:  0 .15rem !important;
        }
    }
    @media (min-width: 767px) and (max-width: 992px){
        .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
            width: .4rem !important;
            line-height: .4rem !important;
            height: .4rem !important;
            border-radius: 50% !important;
            margin:  0 .1rem !important;
        }
    }
    @media (max-width: 767px) {

    }
</style>
