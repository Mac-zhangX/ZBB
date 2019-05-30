<template>
    <div class="container-fluid" ref="topOne">
        <div class="banner">
            <img src="../assets/img/banner/banner-1.png" alt="">
            <div class="index-box container">
                <div>
                    <p class="index-type">
                        <img src="../assets/img/icon/city-1.png" alt="">
                        城市
                    </p>
                    <ul class="index-item">
                        <li :class="cityIndex === 0 ? 'active-index' : ''" @click="changeIndex(1,0)">不限</li>
                        <li  :class="cityIndex === cityItem.id ? 'active-index' : ''" v-for="cityItem in city" @click="changeIndex(1,cityItem.id)">
                            {{cityItem.name}}
                        </li>
                    </ul>
                </div>
                <div>
                    <p class="index-type">
                        <img src="../assets/img/icon/post-1.png" alt="">
                        职务
                    </p>
                    <ul class="index-item">
                        <li :class="postIndex === 0 ? 'active-index' : ''" @click="changeIndex(2,0)">不限</li>
                        <li :class="postIndex === postItem.id ? 'active-index' : ''" v-for="postItem in post" @click="changeIndex(2,postItem.id)">
                            {{postItem.name}}
                        </li>
                    </ul>
                </div>
                <div>
                    <p class="index-type">
                        <img src="../assets/img/icon/popularity.png" alt="">
                        知名度
                    </p>
                    <ul class="index-item">
                        <li :class="popularityIndex === 0 ? 'active-index' : ''" @click="changeIndex(3,0)">不限</li>
                        <li :class="popularityIndex === popularityItem.id ? 'active-index' : ''" v-for="popularityItem in popularity" @click="changeIndex(3,popularityItem.id)">
                            {{popularityItem.name}}
                        </li>
                    </ul>
                </div>
                <div class="search-box">

                        <input type="text" placeholder="输入关键词搜索" v-model="keyword">
                        <button @click="search">
                            搜索
                        </button>

                </div>
            </div>

        </div>


        <div class="middle-container job-box">
            <div class="job-item" @click="jobInfo(job.id)" v-for="job in jobList">
                <div class="company-logo">
                    <img :src="job.logo" alt="">
                </div>
                <div class="company-desc">
                    <p class="company-title">
                        {{ job.name }}
                        <span class="hr">HR直聘</span>
                        <span class="address">
                            <i class="glyphicon glyphicon-map-marker"></i>
                            {{ job.city }}
                        </span>
                    </p>
                    <p class="company-name">
                        {{ job.companyName }}
                        <span class="popularity">{{ job.label }}</span>
                    </p>
                    <p class="time">
                        <img src="../assets/img/icon/create_time.png" alt="">
                        <span>{{ job.time }}</span>
                    </p>
                    <h3 class="company-info">
                        公司风采：<br>
                        <span class="desc">
                            {{ job.mien }}
                        </span>
                    </h3>
                </div>
            </div>
        </div>

        <div class="page">
            <el-pagination
                    @current-change="handleCurrentChange"
                    background
                    layout="prev, pager, next"
                    :total="totalNum">
            </el-pagination>

        </div>
        <div class="small-page">
            <el-pagination
                    @current-change="handleCurrentChange"
                    small
                    layout="prev, pager, next"
                    :total="totalNum">
            </el-pagination>
        </div>

    </div>
</template>

<script>
    import response from '../data/practive.json';
    import api from '../fetch/api';
    export default {
        name: "Practice",
        data(){
            return {
                city : {},
                post : {},
                popularity : {},
                cityIndex : 0,
                postIndex : 0,
                popularityIndex : 0,
                totalNum : 0,
                jobList : {},
                keyword : ''
            };
        },
        methods : {
            changeIndex(type,id){
                if (type === 1){
                    this.cityIndex = id;
                } else if(type === 2){
                    this.postIndex = id;
                } else if(type === 3){
                    this.popularityIndex = id;
                }
                this.search();
            },
            //调用查询接口
            search(){
                let data = {
                    cid : this.cityIndex,
                    fid : this.postIndex,
                    pid : this.popularityIndex,
                    keyword : this.keyword
                };
                this.getJobList(data);
            },
            jobInfo(id){
                this.$router.push({  //核心语句
                    path:`/practice/job`,
                    query: {
                        id: id
                    }
                });
            },
            getJobList(param) {

                // api.JobList(param).then(res => {
                //     if(res.status === 'y'){
                //         this.totalNum = res.count;
                //         this.jobList = res.data;
                //     }
                // })
                // .catch(error => {
                //     console.log(error);
                // });
                let res = response.data;
                this.totalNum = res.count;
                this.jobList = res.data;
            },
            indexList(){
                // api.PracticeIndex().then(res => {
                //     if(res.status === 'y'){
                //         this.city = res.data.city;
                //         this.post = res.data.post;
                //         this.popularity = res.data.popularity;
                //     }
                // })
                // .catch(error => {
                //     console.log(error);
                // });
                let res = response.index;
                this.city = res.data.city;
                this.post = res.data.post;
                this.popularity = res.data.popularity;


            },
            handleCurrentChange(val){
                let data = {pageNum:val};
                this.getJobList(data);
                document.body.scrollTop = 380;
                document.documentElement.scrollTop = 380;
            }
        },
        mounted:function(){
            /**调用接口**/

            this.indexList();
            this.search();

        }
    }
</script>

<style scoped>
    @import "../assets/css/main.css";
    .container-fluid{
        padding: 0;
        margin: 0;
    }
    .index-box{
        background: #FFFFFF;
        box-shadow: 0 -0.05rem .46rem 0 rgba(0,0,0,0.07);
        border-radius: .5rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        -o-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        height: auto;
        text-align: left;
    }
    .banner{
        width: 100%;
        position: relative;
    }
    .banner>img{
        width: 100%;
        height: 100%;
    }
    .index-type{
        vertical-align: top;
    }
    .index-type{
        display: inline-block;
        color: #333;
    }
    .index-item{
        display: inline-block;
        color: #333;
        vertical-align: top;
    }
    .index-item>li{
        display: inline-block;
        cursor: pointer;
    }
    .index-item>li:hover{
        color: #5191E5;
    }
    .active-index{
        color: #5191E5;
    }
    .company-title,.company-info{
        margin:0 !important;
    }

    .search-box{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        -o-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -webkit-transform: translateX(-50%);



        background: #FFFFFF;
        box-shadow: 0 -0.05rem .46rem 0 rgba(0,0,0,0.07);
        border-radius: .3rem;
        overflow: hidden;
    }
    .search-box input{
        font-size: .14rem;
        color: #999;
        height: 100%;
    }
    .search-box button{
        background: #5191E5;
        color: #fff;
    }
    .job-box{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .container:before,.container:after{
        content: none;
    }
    .job-item{
        background: #FFFFFF;
        box-shadow: 0 2px 20px 0 rgba(0,0,0,0.08);
        overflow: hidden;
        cursor: pointer;
    }
    .company-logo>img{
        width: 100%;
        height: 100%;
    }
    .company-desc>p{
          border-bottom: 1px solid #F6F6FA;
    }
    .small-page{
        display: none;
    }
    .index-box>div{
        display: flex;
        justify-content: space-between;
    }
    @media (min-width: 1200px) {
        .banner{
            height: 4.5rem;
            margin-bottom: 3rem;
        }
        .index-box{
            top: 3.6rem;
            padding: .4rem;
        }
        .index-box>div{
            margin-bottom: .3rem;
        }
        .index-type{
            width: 1rem;
            line-height: .3rem;
            font-size: .18rem;
            height: .3rem;
        }
        .index-item{
            font-size: .16rem;
            line-height: .3rem;
            width: 10rem;
        }
        .index-item>li{
            margin-right: .22rem;
        }
        .search-box{
            width: 4.54rem;
            height: .6rem;
            bottom: -0.6rem;
        }
        .search-box button{
            width: .84rem;
            height: 100%;
            float: right;
            font-size: .16rem;
        }
        .search-box input{
            width: 3.5rem;
            padding-left: .3rem;
        }
        .job-item{
            width: 5.8rem;
            height: 2.45rem;
            margin-bottom: .4rem;
            border-radius: .3rem;
        }
        .company-logo{
            width: 2.45rem;
            height: 100%;
            float: left;
        }
        .company-desc{
            padding: 0 .15rem;
            width: 3.35rem;
            float: left;
        }
        .company-title{
            padding: .16rem 0 ;
            font-size: .16rem;
            height: .56rem;
            line-height: .24rem;
            color: #333333;
            text-align: left;
        }
        .hr {
            height: .24rem;
            padding: 0 .12rem;
            border-radius: .12rem;
            background: #FF4646;
            color: #FFF;
            font-size: .12rem;
            display: inline-block;
            text-align: center;
            margin-left: .1rem;
        }
        .address{
            font-size: 16px;
            color: #5191E5;
            display: inline-block;
            float: right;
        }
        .company-name{
            padding: .1rem 0;
            font-size: .16rem;
            height: .44rem;
            line-height: .24rem;
            color: #666;
            text-align: left;
        }
        .popularity{
            padding: 0 .12rem;
            height: .24rem;
            border-radius: .12rem;
            background: #5191E5;
            color: #FFF;
            font-size: .12rem;
            display: inline-block;
            text-align: center;
            margin-left: .1rem;
        }
        .time{
            padding: .12rem 0;
            font-size: .14rem;
            height: .48rem;
            line-height: .24rem;
            color: #9999;
            text-align: left;
        }
        .time>img{
            margin-top: .04rem;
        }
        .company-info{
            font-size: .14rem;
            color: #666;
            text-align: justify;
            padding: .12rem 0;
            line-height: .2rem;
        }
        .page{
            margin-bottom: .5rem;
        }

    }
    @media (min-width: 992px) and (max-width: 1200px){
        .banner{
            height: 4.5rem;
            margin-bottom: 3rem;
        }
        .index-box{
            top: 3.6rem;
            padding: .4rem;
        }
        .index-box>div{
            margin-bottom: .3rem;
        }
        .index-type{
            width: 1rem;
            line-height: .3rem;
            font-size: .18rem;
            height: .3rem;
        }
        .index-item{
            font-size: .16rem;
            line-height: .3rem;
            width: 8rem;
        }
        .index-item>li{
            margin-right: .22rem;
        }
        .search-box{
            width: 4.54rem;
            height: .6rem;
            bottom: -0.6rem;
        }
        .search-box button{
            width: .84rem;
            height: 100%;
            float: right;
            font-size: .16rem;
        }
        .search-box input{
            width: 3.5rem;
            padding-left: .3rem;
        }
        .job-item{
            width: 5.8rem;
            height: 2.45rem;
            margin-bottom: .4rem;
            border-radius: .3rem;
        }
        .company-logo{
            width: 2.45rem;
            height: 100%;
            float: left;
        }
        .company-desc{
            padding: 0 .15rem;
            width: 3.35rem;
            float: left;
        }
        .company-title{
            padding: .16rem 0;
            font-size: .16rem;
            height: .56rem;
            line-height: .24rem;
            color: #333333;
            text-align: left;
        }
        .hr {
            height: .24rem;
            padding: 0 .12rem;
            border-radius: .12rem;
            background: #FF4646;
            color: #FFF;
            font-size: .12rem;
            display: inline-block;
            text-align: center;
            margin-left: .1rem;
        }
        .address{
            font-size: 16px;
            color: #5191E5;
            display: inline-block;
            float: right;
        }
        .company-name{
            padding: .1rem 0;
            font-size: .16rem;
            height: .44rem;
            line-height: .24rem;
            color: #666;
            text-align: left;
        }
        .popularity{
            padding: 0 .12rem;
            height: .24rem;
            border-radius: .12rem;
            background: #5191E5;
            color: #FFF;
            font-size: .12rem;
            display: inline-block;
            text-align: center;
            margin-left: .1rem;
        }
        .time{
            padding: .12rem 0;
            font-size: .14rem;
            height: .48rem;
            line-height: .24rem;
            color: #9999;
            text-align: left;
        }
        .time>img{
            margin-top: .04rem;
        }
        .company-info{
            font-size: .14rem;
            color: #666;
            text-align: justify;
            padding: .12rem 0;
            line-height: .2rem;
        }
        .page{
            margin-bottom: .5rem;
        }
        .job-box{
            justify-content: center;
        }
    }
    @media (min-width: 767px) and (max-width: 992px){
        .banner{
            height: 3.5rem;
            margin-bottom: 3rem;
        }
        .index-box{
            top: 2.2rem;
            padding: .3rem;
        }
        .index-box>div{
            margin-bottom: .3rem;
        }
        .index-type{
            width: 1rem;
            line-height: .3rem;
            font-size: .16rem;
            height: .3rem;
        }
        .index-item{
            font-size: .14rem;
            line-height: .26rem;
            width: 5.8rem;
        }
        .index-item>li{
            margin-right: .22rem;
        }
        .search-box{
            width: 4.54rem;
            height: .4rem;
            bottom: -0.5rem;
        }
        .search-box button{
            width: .84rem;
            height: 100%;
            float: right;
            font-size: .16rem;
        }
        .search-box input{
            width: 3.5rem;
            padding-left: .3rem;
        }
        .job-item{
            width: 5.8rem;
            height: 2.45rem;
            margin-bottom: .4rem;
            border-radius: .3rem;
        }
        .company-logo{
            width: 2.45rem;
            height: 100%;
            float: left;
        }
        .company-desc{
            padding: 0 .15rem;
            width: 3.35rem;
            float: left;
        }
        .company-title{
            padding: .16rem 0;
            font-size: .16rem;
            height: .56rem;
            line-height: .24rem;
            color: #333333;
            text-align: left;
        }
        .hr {
            height: .24rem;
            padding: 0 .12rem;
            border-radius: .12rem;
            background: #FF4646;
            color: #FFF;
            font-size: .12rem;
            display: inline-block;
            text-align: center;
            margin-left: .1rem;
        }
        .address{
            font-size: 16px;
            color: #5191E5;
            display: inline-block;
            float: right;
        }
        .company-name{
            padding: .1rem 0;
            font-size: .16rem;
            height: .44rem;
            line-height: .24rem;
            color: #666;
            text-align: left;
        }
        .popularity{
            padding: 0 .12rem;
            height: .24rem;
            border-radius: .12rem;
            background: #5191E5;
            color: #FFF;
            font-size: .12rem;
            display: inline-block;
            text-align: center;
            margin-left: .1rem;
        }
        .time{
            padding: .12rem 0;
            font-size: .14rem;
            height: .48rem;
            line-height: .24rem;
            color: #9999;
            text-align: left;
        }
        .time>img{
            margin-top: .04rem;
        }
        .company-info{
            font-size: .14rem;
            color: #666;
            text-align: justify;
            padding: .12rem 0;
            line-height: .2rem;
        }

        .job-box{
            justify-content: center;
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
        .page{
            display: none;
        }

        .banner{
            height: 2.7rem;
            margin-bottom: 3rem;
        }
        .container{
            width: 100%;
        }
        .index-box{
            top: 2.2rem;
            padding: .2rem;
            border-radius: .2rem;
        }
        .index-box>div{
            margin-bottom: .1rem;
        }
        .index-type{
            width: 1rem;
            line-height: .3rem;
            font-size: .14rem;
            height: .3rem;
        }
        .index-item{
            font-size: .12rem;
            line-height: .22rem;
            width: 100%;
        }
        .index-item>li{
            margin-right: .18rem;
        }
        .search-box{
            width: 100%;
            height: .4rem;
            bottom: -0.5rem;
        }
        .search-box button{
            width: .84rem;
            height: 100%;
            float: right;
            font-size: .16rem;
        }
        .search-box input{
            width: 70%;
            padding-left: .2rem;
        }
        .job-item{
            width: 5.8rem;
            height: 2.45rem;
            margin-bottom: .4rem;
            border-radius: .3rem;
        }
        .company-logo{
            display: none;
        }
        .company-desc{
            padding: 0 .15rem;
            width: 100%;
            float: left;
        }
        .company-title{
            padding: .12rem 0;
            font-size: .14rem;
            height: .44rem;
            line-height: .2rem;
            color: #333333;
            text-align: left;
        }
        .hr {
            height: .2rem;
            padding: 0 .12rem;
            border-radius: .1rem;
            background: #FF4646;
            color: #FFF;
            font-size: .12rem;
            display: inline-block;
            text-align: center;
            margin-left: .1rem;
        }
        .address{
            font-size: 12px;
            color: #5191E5;
            display: inline-block;
            float: right;
        }
        .company-name{
            padding: .1rem 0;
            font-size: .14rem;
            height: .4rem;
            line-height: .2rem;
            color: #666;
            text-align: left;
        }
        .popularity{
            padding: 0 .12rem;
            height: .2rem;
            border-radius: .1rem;
            background: #5191E5;
            color: #FFF;
            font-size: .12rem;
            display: inline-block;
            text-align: center;
            margin-left: .1rem;
        }
        .time{
            padding: .08rem 0;
            font-size: .12rem;
            height: .4rem;
            line-height: .24rem;
            color: #9999;
            text-align: left;
        }
        .time>img{
            margin-top: .04rem;
        }
        .company-info{
            font-size: .12rem;
            color: #666;
            text-align: justify;
            padding: .12rem 0;
            line-height: .2rem;
        }

        .job-box{
            justify-content: center;
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