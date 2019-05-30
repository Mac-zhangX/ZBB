<template>
    <div class="container">
        <div class="nav-title">
            <a>{{navTitle.topName}}</a>
            <img src="../assets/img/icon/next.png" alt="">
            <a>{{navTitle.subName}}</a>
            <img src="../assets/img/icon/next.png" alt="">
            <span>{{navTitle.thrName}}</span>
        </div>
        <div class="job-info">
            <img :src="company.logo" alt="" class="company-logo">
            <div class="job-content">
                <p class="title-box">
                    <span class="job-name">{{ job.name }}</span>
                    <span class="time">{{ job.time }}发布</span>
                    <span class="address">
                            <i class="glyphicon glyphicon-map-marker"></i>
                            {{ job.address }}
                    </span>
                </p>
                <p class="condition-box">
                    <img src="../assets/img/icon/monry-1.png" alt="">
                    <span>{{ job.salary }}</span>
                </p>
                <p class="condition-box">
                    <img src="../assets/img/icon/create_time.png" alt="">
                    <span>{{ job.workDays }}</span>
                </p>
                <p class="condition-box">
                    <img src="../assets/img/icon/rili-1.png" alt="">
                    <span>{{ job.internship }}</span>
                </p>
                <h3 class="company-desc">
                    公司介绍：<br>
                    <span class="desc">
                            {{ company.mien }}
                        </span>
                </h3>
            </div>
        </div>
        <div class="job-desc">
            <div class="content">
                <div>
                    <h1 class="condition-title">
                        <img src="../assets/img/icon/condition-2.png" alt="">
                        工作职责
                    </h1>
                    <p class="condition-content">
                        {{ job.duties }}
                    </p>
                </div>
                <div>
                    <h1 class="condition-title">
                        <img src="../assets/img/icon/condition-1.png" alt="">
                        岗位要求
                    </h1>
                    <p class="condition-content">
                        {{ job.requirement }}
                    </p>
                </div>
                <div>
                    <h1 class="condition-title">
                        <img src="../assets/img/icon/condition-3.png" alt="">
                        具体地址
                    </h1>
                    <p class="condition-content">
                        {{ job.city }} - {{ job.address }}
                    </p>
                </div>
            </div>
            <div class="send">
                立即投递
            </div>
        </div>
        <div class="relation-job">
            <h1>
                <img src="../assets/img/icon/offer-1.png" alt="">
                相关实习工作
            </h1>
            <div class="relation-job-box">
                <div class="relation-job-item" v-for="jobItem in relationJob">
                    <img :src="jobItem.logo" alt="">
                    <div>
                        <h1>
                            {{ jobItem.name }}
                            <span>
                                <i class="glyphicon glyphicon-map-marker"></i>
                             {{ jobItem.city }}
                            </span>
                        </h1>
                        <h2> {{ jobItem.companyName }}</h2>
                        <h3>
                            <img src="../assets/img/icon/create_time.png" alt="">
                            {{ jobItem.time }}
                        </h3>
                    </div>
                </div>


                <div class="relation-job-item-empty"></div>
                <div class="relation-job-item-empty"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import api from '../fetch/api';
    import response_relation from '../data/relationJob';
    import response_job from '../data/jobInfo';
    export default {
        name: "JobInfo",
        data() {
            return {
                navTitle : {
                    topName : '会员专属',
                    subName : '互联网课程',
                    thrName : '互联网行业概论',
                },
                company : {
                    logo : '',
                    mien : '',

                },
                job : {
                    name : '',
                    time : '',
                    address : '',
                    city : '',
                    salary : '',
                    workDays : '',
                    internship : '',
                    requirement : '',
                    duties : '',
                },
                relationJob : {},
                jobId : ''
            };
        },
        methods : {
            getJobInfo(id){

                // api.JobInfo(id).then(res => {
                //     if(res.status === 'y'){
                //         this.company.logo = res.data.logo;
                //         this.company.mien = res.data.mien;
                //         this.job.name = res.data.name;
                //         this.job.address = res.data.address;
                //         this.job.salary = res.data.price;
                //         this.job.workDays = res.data.workDays;
                //         this.job.internship = res.data.internship;
                //         this.job.city = res.data.city;
                //         this.job.time = res.data.time;
                //         this.job.requirement = res.data.requirement;
                //         this.job.duties = res.data.duties;
                //         this.navTitle.topName = res.data.function;
                //         this.navTitle.subName = res.data.companyName;
                //         this.navTitle.thrName = res.data.name;
                //     }
                //     console.log(res);
                // })
                // .catch(error => {
                //     console.log(error);
                // });
                let res = response_job;
                this.company.logo = res.data.logo;
                this.company.mien = res.data.mien;
                this.job.name = res.data.name;
                this.job.address = res.data.address;
                this.job.salary = res.data.price;
                this.job.workDays = res.data.workDays;
                this.job.internship = res.data.internship;
                this.job.city = res.data.city;
                this.job.time = res.data.time;
                this.job.requirement = res.data.requirement;
                this.job.duties = res.data.duties;
                this.navTitle.topName = res.data.function;
                this.navTitle.subName = res.data.companyName;
                this.navTitle.thrName = res.data.name;
            },
            getRelationJob(id){
                // api.RelationJob(id).then(res => {
                //     if(res.status === 'y'){
                //         this.relationJob = res.data;
                //     }
                //     console.log(res);
                // })
                //     .catch(error => {
                //         console.log(error);
                //     });
                let res = response_relation;
                this.relationJob = res.data;
            }
        },
        mounted : function () {
            this.getJobInfo(this.jobId);
            this.getRelationJob(this.jobId);
        },
        created : function () {
            this.jobId = this.$route.query.id;
        }
    }
</script>

<style scoped>
    @import "../assets/css/font.css";
    *{
        text-align: left;
    }
    .condition-content{
        font-size: .16rem;
        color: #666;
    }
    .nav-title{
        text-align: left;
    }
    .nav-title>a{
        color: #666;
    }
    .nav-title>a:hover{
        color: #5191E5;
    }
    .nav-title>img{
        vertical-align: middle;
    }
    .nav-title>span{
        color: #5191E5;
    }
    .job-content>p{
        border-bottom: 1px solid #F6F6FA;

    }
    .job-desc{
        background: #FFFFFF;
        box-shadow: 0 2px 20px 0 rgba(0,0,0,0.08);
        border-radius: .2rem;

        overflow: hidden;
        margin-bottom: .7rem;
    }
    @media (min-width: 1200px) {
        .nav-title{
            margin-top: .3rem;
            font-size: .18rem;
        }
        .nav-title>a{
            height: .25rem;
            line-height: .25rem;
        }
        .nav-title>img{
            margin: 0 .15rem;
        }
        .nav-title>span{
            color: #5191E5;
        }
        .job-info{
            height: 3rem;
            background: #FFFFFF;
            box-shadow: 0 .02rem .2rem 0 rgba(0,0,0,0.08);
            border-radius: .2rem;
            width:100%;
            overflow: hidden;
            margin: .5rem 0;
        }
        .company-logo{
            width: 3.7rem;
            height: 100%;
            float: left;
        }
        .job-content{
            padding: .14rem;
            width: 8.3rem;
            float: left;
        }
        .title-box{
            padding: .16rem 0;
            line-height: .26rem;
            font-family: PingFangSC-Regular;
        }
        .job-name{
            font-size: .18rem;
            color: #333;
        }
        .time{
            color: #666;
            font-size: .16rem;
            margin-left: .1rem;
        }
        .address{
            font-size: .16rem;
            float: right;
            color: #5191E5;
        }
        .condition-box{
            padding: .12rem 0;
            line-height: .22rem;
            height: .46rem;
            font-family: PingFangSC-Light;
        }
        .condition-box>img{
            vertical-align: middle;
        }
        .condition-box>span{
            font-size: .16rem;
            color: #666;
        }
        .company-desc{
            font-size: .14rem;
            line-height: .2rem;
            color: #666666;
            padding: .12rem 0;
            font-family: PingFangSC-Light;
        }
        .send{
            height: .7rem;
            line-height: .7rem;
            text-align: center;
            background: #5191E5;
            color: #FFF;
            font-size: .2rem;
            cursor: pointer;
            font-family: PingFangSC-Light;
        }
        .condition-title{
            font-size: .2rem;
            color: #333;
            height: .45rem;
            line-height: .45rem;
            margin-bottom: .08rem;
            font-family: PingFangSC-Light;
        }
        .content{
            padding: .2rem;
        }
        .condition-content{
            margin-bottom: .4rem;
        }
        .relation-job>h1{
            height: .45rem;
            line-height: .45rem;
            font-size: .2rem;
            color: #333;
            font-family: PingFangSC-Light;
        }
        .relation-job-box{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .relation-job-item{
            width: 3.7rem;
            background: #FFFFFF;
            box-shadow: 0 2px 20px 0 rgba(0,0,0,0.08);
            border-radius: .2rem;
            overflow: hidden;
            margin-top: .45rem;
        }
        .relation-job-item>img{
            height: 3rem;
        }
        .relation-job-item>div{
            height: 1.47rem;
            padding: 0 .14rem;
        }
        .relation-job-item>div>h1{
            padding: .15rem 0;
            border-bottom: 1px solid #F6F6FA;
            font-size: .18rem;
            color: #333;
            font-family: PingFangSC-Regular;
        }
        .relation-job-item>div>h1>span{
            font-size: .16rem;
            color: #5191E5;
            float: right;
        }
        .relation-job-item>div>h2{
            padding: .12rem 0;
            border-bottom: 1px solid #F6F6FA;
            font-size: .16rem;
            color: #666;
            font-family: PingFangSC-Light;
        }
        .relation-job-item>div>h3{
            padding: .12rem 0;
            font-size: .14rem;
            color: #999;
            font-family: PingFangSC-Light;
        }
        .relation-job-item-empty{
            width: 3.7rem;
            height: 0;
        }
        .relation-job{
            margin-bottom: 1rem;
        }


    }
    @media (min-width: 992px) and (max-width: 1200px){
        .nav-title{
            margin-top: .3rem;
            font-size: .18rem;
        }
        .nav-title>a{
            height: .25rem;
            line-height: .25rem;
        }
        .nav-title>img{
            margin: 0 .15rem;
        }
        .nav-title>span{
            color: #5191E5;
        }

        .job-info{
            height: 3rem;
            background: #FFFFFF;
            box-shadow: 0 .02rem .2rem 0 rgba(0,0,0,0.08);
            border-radius: .2rem;
            width:100%;
            overflow: hidden;
            margin: .5rem 0;
        }
        .company-logo{
            width: 44%;
            height: 100%;
            float: left;
        }
        .job-content{
            padding: .14rem;
            width: 56%;
            float: left;
        }
        .title-box{
            padding: .16rem 0;
            line-height: .26rem;
            font-family: PingFangSC-Regular;
        }
        .job-name{
            font-size: .18rem;
            color: #333;
        }
        .time{
            color: #666;
            font-size: .16rem;
            margin-left: .1rem;
        }
        .address{
            font-size: .16rem;
            float: right;
            color: #5191E5;
        }
        .condition-box{
            padding: .12rem 0;
            line-height: .22rem;
            height: .46rem;
            font-family: PingFangSC-Light;
        }
        .condition-box>img{
            vertical-align: middle;
        }
        .condition-box>span{
            font-size: .16rem;
            color: #666;
        }
        .company-desc{
            font-size: .14rem;
            line-height: .2rem;
            color: #666666;
            padding: .12rem 0;
            font-family: PingFangSC-Light;
        }
        .send{
            height: .7rem;
            line-height: .7rem;
            text-align: center;
            background: #5191E5;
            color: #FFF;
            font-size: .2rem;
            cursor: pointer;
            font-family: PingFangSC-Light;
        }
        .condition-title{
            font-size: .2rem;
            color: #333;
            height: .45rem;
            line-height: .45rem;
            margin-bottom: .08rem;
        }
        .content{
            padding: .2rem;
        }
        .condition-content{
            margin-bottom: .4rem;
        }
        .relation-job>h1{
            height: .45rem;
            line-height: .45rem;
            font-size: .2rem;
            color: #333;
            font-family: PingFangSC-Light;
        }
        .relation-job-box{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        .relation-job-item{
            width: 3.7rem;
            background: #FFFFFF;
            box-shadow: 0 2px 20px 0 rgba(0,0,0,0.08);
            border-radius: .2rem;
            overflow: hidden;
            margin-top: .45rem;
        }
        .relation-job-item>img{
            height: 3rem;
        }
        .relation-job-item>div{
            height: 1.47rem;
            padding: 0 .14rem;
        }
        .relation-job-item>div>h1{
            padding: .15rem 0;
            border-bottom: 1px solid #F6F6FA;
            font-size: .18rem;
            color: #333;
            font-family: PingFangSC-Regular;
        }
        .relation-job-item>div>h1>span{
            font-size: .16rem;
            color: #5191E5;
            float: right;
        }
        .relation-job-item>div>h2{
            padding: .12rem 0;
            border-bottom: 1px solid #F6F6FA;
            font-size: .16rem;
            color: #666;
            font-family: PingFangSC-Light;
        }
        .relation-job-item>div>h3{
            padding: .12rem 0;
            font-size: .14rem;
            color: #999;
            font-family: PingFangSC-Light;
        }
        .relation-job-item-empty{
            width: 3.7rem;
            height: 0;
        }
        .relation-job{
            margin-bottom: 1rem;
        }
    }
    @media (min-width: 767px) and (max-width: 992px){
        .nav-title{
            margin-top: .3rem;
            font-size: .18rem;
        }
        .nav-title>a{
            height: .25rem;
            line-height: .25rem;
        }
        .nav-title>img{
            margin: 0 .15rem;
        }
        .nav-title>span{
            color: #5191E5;
        }

        .job-info{
            height: 3rem;
            background: #FFFFFF;
            box-shadow: 0 .02rem .2rem 0 rgba(0,0,0,0.08);
            border-radius: .2rem;
            width:100%;
            overflow: hidden;
            margin: .5rem 0;
        }
        .company-logo{
            width: 44%;
            height: 100%;
            float: left;
        }
        .job-content{
            padding: .14rem;
            width: 56%;
            float: left;
        }
        .title-box{
            padding: .16rem 0;
            line-height: .26rem;
            font-family: PingFangSC-Regular;
        }
        .job-name{
            font-size: .16rem;
            color: #333;
        }
        .time{
            color: #666;
            font-size: .14rem;
            margin-left: .1rem;
        }
        .address{
            font-size: .14rem;
            float: right;
            color: #5191E5;
        }
        .condition-box{
            padding: .12rem 0;
            line-height: .22rem;
            height: .46rem;
            font-family: PingFangSC-Light;
        }
        .condition-box>img{
            vertical-align: middle;
        }
        .condition-box>span{
            font-size: .14rem;
            color: #666;
        }
        .company-desc{
            font-size: .12rem;
            line-height: .2rem;
            color: #666666;
            padding: .12rem 0;
            font-family: PingFangSC-Light;
        }
        .send{
            height: .7rem;
            line-height: .7rem;
            text-align: center;
            background: #5191E5;
            color: #FFF;
            font-size: .18rem;
            cursor: pointer;
            font-family: PingFangSC-Light;
        }
        .condition-title{
            font-size: .2rem;
            color: #333;
            height: .45rem;
            line-height: .45rem;
            margin-bottom: .08rem;
        }
        .content{
            padding: .2rem;
        }
        .condition-content{
            margin-bottom: .4rem;
        }
        .relation-job>h1{
            height: .45rem;
            line-height: .45rem;
            font-size: .18rem;
            color: #333;
            font-family: PingFangSC-Light;
        }
        .relation-job-box{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .relation-job-item{
            width: 3.7rem;
            background: #FFFFFF;
            box-shadow: 0 2px 20px 0 rgba(0,0,0,0.08);
            border-radius: .2rem;
            overflow: hidden;
            margin-top: .45rem;
        }
        .relation-job-item>img{
            height: 3rem;
        }
        .relation-job-item>div{
            height: 1.47rem;
            padding: 0 .14rem;
        }
        .relation-job-item>div>h1{
            padding: .15rem 0;
            border-bottom: 1px solid #F6F6FA;
            font-size: .18rem;
            color: #333;
            font-family: PingFangSC-Regular;
        }
        .relation-job-item>div>h1>span{
            font-size: .16rem;
            color: #5191E5;
            float: right;
        }
        .relation-job-item>div>h2{
            padding: .12rem 0;
            border-bottom: 1px solid #F6F6FA;
            font-size: .16rem;
            color: #666;
            font-family: PingFangSC-Light;
        }
        .relation-job-item>div>h3{
            padding: .12rem 0;
            font-size: .14rem;
            color: #999;
            font-family: PingFangSC-Light;
        }
        .relation-job-item-empty{
            width: 3.7rem;
            height: 0;
        }
        .relation-job{
            margin-bottom: 1rem;
        }
    }
    @media (max-width: 767px) {
        .nav-title{
            margin-top: .3rem;
            font-size: .14rem;
        }
        .nav-title>a{
            height: .25rem;
            line-height: .25rem;
        }

        .nav-title>span{
            color: #5191E5;
        }

        .job-info{
            height: auto;
            background: #FFFFFF;
            box-shadow: 0 .02rem .2rem 0 rgba(0,0,0,0.08);
            border-radius: .2rem;
            width:100%;
            overflow: hidden;
            margin: .5rem 0;
        }
        .company-logo{
            display: none;
        }
        .job-content{
            padding: .14rem;
            width: 100%;
            float: left;
        }
        .title-box{
            padding: .1rem 0;
            line-height: .26rem;
            font-family: PingFangSC-Regular;
        }
        .job-name{
            font-size: .16rem;
            color: #333;
        }
        .time{
            color: #666;
            font-size: .14rem;
            margin-left: .1rem;
        }
        .address{
            font-size: .14rem;
            float: right;
            color: #5191E5;
        }
        .condition-box{
            padding: .12rem 0;
            line-height: .22rem;
            height: .46rem;
            font-family: PingFangSC-Light;
        }
        .condition-box>img{
            vertical-align: middle;
        }
        .condition-box>span{
            font-size: .14rem;
            color: #666;
        }
        .company-desc{
            font-size: .12rem;
            line-height: .2rem;
            color: #666666;
            padding: .12rem 0;
            font-family: PingFangSC-Light;
        }
        .send{
            height: .5rem;
            line-height: .5rem;
            text-align: center;
            background: #5191E5;
            color: #FFF;
            font-size: .16rem;
            cursor: pointer;
            font-family: PingFangSC-Light;
        }
        .condition-title{
            font-size: .16rem;
            color: #333;
            height: .45rem;
            line-height: .45rem;
            margin-bottom: .08rem;
        }
        .content{
            padding: .2rem;
        }
        .condition-content{
            margin-bottom: .4rem;
        }
        .relation-job>h1{
            height: .45rem;
            line-height: .45rem;
            font-size: .2rem;
            color: #333;
            font-family: PingFangSC-Light;
        }
        .relation-job-box{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .relation-job-item{
            width: 100%;
            background: #FFFFFF;
            box-shadow: 0 2px 20px 0 rgba(0,0,0,0.08);
            border-radius: .2rem;
            overflow: hidden;
            margin-top: .45rem;
        }
        .relation-job-item>img{
            height: 3rem;
        }
        .relation-job-item>div{
            height: 1.47rem;
            padding: 0 .14rem;
        }
        .relation-job-item>div>h1{
            padding: .15rem 0;
            border-bottom: 1px solid #F6F6FA;
            font-size: .18rem;
            color: #333;
            font-family: PingFangSC-Regular;
        }
        .relation-job-item>div>h1>span{
            font-size: .16rem;
            color: #5191E5;
            float: right;
        }
        .relation-job-item>div>h2{
            padding: .12rem 0;
            border-bottom: 1px solid #F6F6FA;
            font-size: .16rem;
            color: #666;
            font-family: PingFangSC-Light;
        }
        .relation-job-item>div>h3{
            padding: .12rem 0;
            font-size: .14rem;
            color: #999;
            font-family: PingFangSC-Light;
        }
        .relation-job-item-empty{
            width: 3.7rem;
            height: 0;
        }
        .relation-job{
            margin-bottom: 1rem;
        }
    }
</style>