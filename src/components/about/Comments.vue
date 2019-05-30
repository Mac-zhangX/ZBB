<template>
    <div class="container-fluid">
        <div class="banner">
            <img src="../../assets/img/banner/banner-1.png" alt="">
        </div>
        <div class="tigs container">
            <div>
                <img src="../../assets/img/tig/team.png" alt="">
                <p>专业导师团队</p>
            </div>
            <div>
                <img src="../../assets/img/tig/success.png" alt="">
                <p>求职成功率90%</p>
            </div>
            <div>
                <img src="../../assets/img/tig/goods.png" alt="">
                <p>学员好评率95%</p>
            </div>
        </div>
        <div class="comments">

            <div class="comments-item" v-for="comment in listData">
                <div class="avatar">
                    <img :src="comment.picture" alt="">
                </div>
                <p>{{ comment.userName }}</p>
                <h1 class="school">
                    <p>{{ comment.university }}</p>
                </h1>
                <h1 class="reward" >
                    <p>获得offer:</p>
                </h1>
                <h1>
                    <p class="offer">{{ comment.offer }}</p>
                </h1>
                <h2>学员评价：</h2>
                <h3>
                    {{ comment.evaluation }}
                </h3>
            </div>
            <div class="comments-emptyItem">

            </div>
            <div class="comments-emptyItem">

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
    import response from '../../data/comments.json';
    import api from '../../fetch/api';
    export default {
        name: "Comments",
        data() {
            return {
                totalNum : 0,
                listData : {}
            };
        },
        methods : {
            handleCurrentChange(val){
                this.getCommentsList(val);
                document.body.scrollTop = 650;
                document.documentElement.scrollTop = 650;
            },
            getCommentsList(val = 1) {
                // let data = {
                //     pageNum : val
                // };
                // api.StudentComments(data).then(res => {
                //     if(res.status === 'y'){
                //         this.totalNum = res.count;
                //         this.listData = res.data;
                //     }
                // })
                //     .catch(error => {
                //         console.log(error);
                //     });
                let res = response;
                this.totalNum = res.count;
                this.listData = res.data;
            }
        },
        mounted:function(){
            /**调用接口**/
            this.getCommentsList();


        }
    }
</script>

<style scoped>

    .tigs{
        display: flex;
        justify-content: space-around;
    }
    .comments{
        display: flex;
        justify-content: space-between;
        justify-items: center ;
        height: auto;
        flex-wrap: wrap;
        padding: 0;
        margin: 0 auto;
    }
    .comments-item{
        background: #F6F6FA;
        position: relative;
    }
    .avatar{
        overflow: hidden;
        border-radius: 50%;
        box-shadow: 0 .04rem .4rem 0 rgba(102,102,102,0.73);
    }
    img{
        height: 100%;
    }
    .small-page{
        display: none;
    }

    @media (min-width: 1200px) {
        .banner{
            height: 4.5rem;
            margin-bottom: .3rem;
        }
        .tigs p{
            height: .33rem;
            line-height: .33rem;
            font-size: .22rem;
            color: #333;
            text-align: center;
            margin-top: .18rem;

        }
        .tigs img{
            height: 1.2rem;
            width: 1.2rem;
        }
        .comments{
            margin-bottom: .7rem;
            margin-top:.8rem;
            width: 12rem;
        }
        .comments-item{
            border-radius: .2rem;
            width: 3.7rem;
            padding: .6rem .12rem .2rem .12rem;
            margin-bottom: 80px;

        }
        .comments-emptyItem{
            width: 3.7rem;
            height: 0;
        }
        .avatar{
            width: 1rem;
            height: 1rem;
            position: absolute;
            top: -0.5rem;
            left: 50%;
            transform: translateX(-50%);
            -o-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            -moz-transform: translateX(-50%);
            -webkit-transform: translateX(-50%);
        }
        .comments-item>p{
            font-size: .2rem;
            color: #333;
            text-align: center;
            height: .28rem;
        }
        .comments-item>h1{
            font-size: .16rem;
            color: #333;
            text-align: left;
            line-height: .22rem;
            display: block;
            position: relative;
            text-indent: .212rem;
            margin-bottom: 10px;
        }
        .comments-item>h1.school:after {
            content: '';
            width: .14rem;
            height: .18rem;
            position: absolute;
            background: url("../../assets/img/icon/school.png");
            top: 0;
            left: 0;
        }
        .comments-item>h1.reward:after {
            content: '';
            width: .14rem;
            height: .18rem;
            position: absolute;
            background: url("../../assets/img/icon/offer.png") no-repeat center center;
            top: 0;
            left: 0;
        }

        .offer{
            font-size: .16rem;
            color: #5191E5;
            letter-spacing: 0;
            line-height: .26rem;
            font-weight: normal;
        }
        .comments-item>h3{
            line-height: .26rem;
            color: #666;
            font-size: .14rem;
            text-align: justify;
        }
        .comments-item>h2{
            line-height: .26rem;
            color: #333;
            font-weight: bold;
            font-size: .14rem;
            text-align: left;
        }
        .page{
            margin-bottom: .5rem;
        }
    }
    @media (min-width: 992px) and (max-width: 1200px){
        .about-menu>ul>li>a{
            line-height: .25rem;
            font-size: .16rem;
            padding: .2rem .38rem;
        }

        .banner{
            height: 4.5rem;
            margin-bottom: .3rem;
        }
        .tigs p{
            height: .28rem;
            line-height: .28rem;
            font-size: .2rem;
            color: #333;
            text-align: center;
            margin-top: .18rem;

        }
        .tigs img{
            height: 1rem;
            width: 1rem;
        }
        .comments{
            margin-bottom: .5rem;
            margin-top:.8rem;
            width: 9.92rem
        }
        .comments-item{
            border-radius: .2rem;
            width: 3rem;
            padding: .6rem .12rem .2rem .12rem;
            margin-bottom: 80px;

        }
        .comments-emptyItem{
            width: 3rem;
            height: 0;
        }
        .avatar{
            width: .9rem;
            height: .9rem;
            position: absolute;
            top: -0.5rem;
            left: 50%;
            transform: translateX(-50%);
            -o-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            -moz-transform: translateX(-50%);
            -webkit-transform: translateX(-50%);
        }
        .comments-item>p{
            font-size: .2rem;
            color: #333;
            text-align: center;
            height: .28rem;
        }
        .comments-item>h1{
            font-size: .16rem;
            color: #333;
            text-align: left;
            line-height: .22rem;
            display: block;
            position: relative;
            text-indent: .212rem;
            margin-bottom: 10px;
        }
        .comments-item>h1.school:after {
            content: '';
            width: .14rem;
            height: .18rem;
            position: absolute;
            background: url("../../assets/img/icon/school.png");
            top: 0;
            left: 0;
        }
        .comments-item>h1.reward:after {
            content: '';
            width: .14rem;
            height: .18rem;
            position: absolute;
            background: url("../../assets/img/icon/offer.png") no-repeat center center;
            top: 0;
            left: 0;
        }

        .offer{
            font-size: .16rem;
            color: #5191E5;
            letter-spacing: 0;
            line-height: .26rem;
            font-weight: normal;
        }
        .comments-item>h3{
            line-height: .26rem;
            color: #666;
            font-size: .14rem;
            text-align: justify;
        }
        .comments-item>h2{
            line-height: .26rem;
            color: #333;
            font-weight: bold;
            font-size: .14rem;
            text-align: left;
        }
        .page{
            margin-bottom: .5rem;
        }
    }
    @media (min-width: 767px) and (max-width: 992px){
        .about-menu>ul>li>a{
            line-height: .2rem;
            font-size: .14rem;
            padding: .2rem .38rem;
        }
        .banner{
            height: 4.5rem;
            margin-bottom: .3rem;
        }
        .tigs p{
            height: .28rem;
            line-height: .28rem;
            font-size: .2rem;
            color: #333;
            text-align: center;
            margin-top: .18rem;

        }
        .tigs img{
            height: 1rem;
            width: 1rem;
        }
        .comments{
            margin-top:.8rem;
            width: 7.68rem;
        }
        .comments-item{
            border-radius: .2rem;
            width: 2.5rem;
            padding: .4rem .12rem .2rem .12rem;
            margin-bottom: 80px;

        }
        .comments-emptyItem{
            width: 2.5rem;
            height: 0;
        }
        .avatar{
            width: .8rem;
            height: .8rem;
            position: absolute;
            top: -0.5rem;
            left: 50%;
            transform: translateX(-50%);
            -o-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            -moz-transform: translateX(-50%);
            -webkit-transform: translateX(-50%);
        }
        .comments-item>p{
            font-size: .18rem;
            color: #333;
            text-align: center;
            height: .28rem;
        }
        .comments-item>h1{
            font-size: .16rem;
            color: #333;
            text-align: left;
            line-height: .2rem;
            display: block;
            position: relative;
            text-indent: .212rem;
            margin-bottom: .1rem;
        }
        .comments-item>h1.school:after {
            content: '';
            width: .14rem;
            height: .18rem;
            position: absolute;
            background: url("../../assets/img/icon/school.png");
            top: 0;
            left: 0;
        }
        .comments-item>h1.reward:after {
            content: '';
            width: .14rem;
            height: .18rem;
            position: absolute;
            background: url("../../assets/img/icon/offer.png") no-repeat center center;
            top: 0;
            left: 0;
        }

        .offer{
            font-size: .14rem;
            color: #5191E5;
            letter-spacing: 0;
            line-height: .2rem;
            font-weight: normal;
        }
        .comments-item>h3{
            line-height: .2rem;
            color: #666;
            font-size: .12rem;
            text-align: justify;
        }
        .comments-item>h2{
            line-height: .20rem;
            color: #333;
            font-weight: bold;
            font-size: .14rem;
            text-align: left;
        }
        .page{
            margin-bottom: .5rem;
        }
    }
    @media (max-width: 767px) {
        .about-menu>ul>li>a{
            line-height: .16rem;
            font-size: .12rem;
            padding: .15rem .1rem;
            border-radius: 0 0 .2rem .2rem;
        }
        .about-menu{
            margin-bottom: .2rem;
        }
        .banner{
            height: 2.2rem;
            margin-bottom: .3rem;
        }
        .tigs p{
            height: .22rem;
            line-height: .22rem;
            font-size: .16rem;
            color: #333;
            text-align: center;
            margin-top: .12rem;

        }
        .tigs img{
            height: .8rem;
            width: .8rem;
        }
        .comments{
            margin-top:.8rem;
            width: 98%;
        }
        .comments-item{
            border-radius: .2rem;
            width: 3rem;
            padding: .4rem .12rem .2rem .12rem;
            margin: 0 auto .7rem auto;

        }
        .comments-emptyItem{
            width: 3rem;
            height: 0;
        }
        .avatar{
            width: .8rem;
            height: .8rem;
            position: absolute;
            top: -0.5rem;
            left: 50%;
            transform: translateX(-50%);
            -o-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            -moz-transform: translateX(-50%);
            -webkit-transform: translateX(-50%);
        }
        .comments-item>p{
            font-size: .18rem;
            color: #333;
            text-align: center;
            height: .28rem;
        }
        .comments-item>h1{
            font-size: .16rem;
            color: #333;
            text-align: left;
            line-height: .2rem;
            display: block;
            position: relative;
            text-indent: .212rem;
            margin-bottom: .1rem;
        }
        .comments-item>h1.school:after {
            content: '';
            width: .14rem;
            height: .18rem;
            position: absolute;
            background: url("../../assets/img/icon/school.png");
            top: 0;
            left: 0;
        }
        .comments-item>h1.reward:after {
            content: '';
            width: .14rem;
            height: .18rem;
            position: absolute;
            background: url("../../assets/img/icon/offer.png") no-repeat center center;
            top: 0;
            left: 0;
        }

        .offer{
            font-size: .14rem;
            color: #5191E5;
            letter-spacing: 0;
            line-height: .2rem;
            font-weight: normal;
        }
        .comments-item>h3{
            line-height: .2rem;
            color: #666;
            font-size: .12rem;
            text-align: justify;
        }
        .comments-item>h2{
            line-height: .20rem;
            color: #333;
            font-weight: bold;
            font-size: .14rem;
            text-align: left;
        }
        .page{
            display: none !important;
        }
        .small-page{
            display: block;
            margin-bottom: .3rem;
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