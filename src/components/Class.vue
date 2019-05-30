<template>
    <div class="content">
        <p-test></p-test>

        <div class="bg-decoration container-fluid">
            <a>
                了解会员权限
            </a>
        </div>

        <div class="middle-container">
            <div class="post-type">
                <a href="##" @click="changePost(1)" :class="postIndex === 1 ? 'post-active post' : 'post'">金融</a>
                <a href="##"  @click="changePost(2)" :class="postIndex === 2 ? 'post-active post' : 'post'">会计</a>
                <a href="##"  @click="changePost(3)" :class="postIndex === 3 ? 'post-active post' : 'post'">快消</a>
                <a href="##"  @click="changePost(4)" :class="postIndex === 4 ? 'post-active post' : 'post'">互联网</a>
                <a href="##"  @click="changePost(5)" :class="postIndex === 5 ? 'post-active post' : 'post'">广告</a>
                <a href="##"  @click="changePost(6)" :class="postIndex === 6 ? 'post-active post' : 'post'">房地产</a>
                <a href="##"  @click="changePost(7)" :class="postIndex === 7 ? 'post-active post' : 'post'">大数据</a>
                <a href="##"  @click="changePost(8)" :class="postIndex === 8 ? 'post-active post' : 'post'">工具包</a>

                <!--<a class="emptyType"></a>-->
                <!--<a class="emptyType"></a>-->
                <!--<a class="emptyType"></a>-->
                <!--<a class="emptyType"></a>-->
                <!--<a class="emptyType"></a>-->
                <!--<a class="emptyType"></a>-->
            </div>
            
            <div class="class-box">
                <a class="class-item" @click="course(1)">
                    <img src="../assets/img/banner/banner-1.png" alt="">
                    <div>
                        <h1>金融行业全景概览</h1>
                        <h2>导师：巴克莱资本总裁 | Andrea</h2>
                        <h3>一张金融地图带你由浅入深地了解金融买房、卖方、一级市场及二级市场</h3>
                        <p>
                            <a href="">免费试听</a>
                            <i class="glyphicon glyphicon-eye-open"></i> 4761人学过
                        </p>
                    </div>
                </a>
                <a class="class-item" href="##">
                    <img src="../assets/img/banner/banner-1.png" alt="">
                    <div>
                        <h1>金融行业全景概览</h1>
                        <h2>导师：巴克莱资本总裁 | Andrea</h2>
                        <h3>一张金融地图带你由浅入深地了解金融买房、卖方、一级市场及二级市场</h3>
                        <p>
                            <a href="">免费试听</a>
                            <i class="glyphicon glyphicon-eye-open"></i> 4761人学过
                        </p>
                    </div>
                </a>
                <a class="class-item" href="##">
                    <img src="../assets/img/banner/banner-1.png" alt="">
                    <div>
                        <h1>金融行业全景概览</h1>
                        <h2>导师：巴克莱资本总裁 | Andrea</h2>
                        <h3>一张金融地图带你由浅入深地了解金融买房、卖方、一级市场及二级市场</h3>
                        <p>
                            <a href="">免费试听</a>
                            <i class="glyphicon glyphicon-eye-open"></i> 4761人学过
                        </p>
                    </div>
                </a>
                <a class="class-item" href="##">
                    <img src="../assets/img/banner/banner-1.png" alt="">
                    <div>
                        <h1>金融行业全景概览</h1>
                        <h2>导师：巴克莱资本总裁 | Andrea</h2>
                        <h3>一张金融地图带你由浅入深地了解金融买房、卖方、一级市场及二级市场</h3>
                        <p>
                            <a href="">免费试听</a>
                            <i class="glyphicon glyphicon-eye-open"></i> 4761人学过
                        </p>
                    </div>
                </a>
                <a class="class-item" href="##">
                    <img src="../assets/img/banner/banner-1.png" alt="">
                    <div>
                        <h1>金融行业全景概览</h1>
                        <h2>导师：巴克莱资本总裁 | Andrea</h2>
                        <h3>一张金融地图带你由浅入深地了解金融买房、卖方、一级市场及二级市场</h3>
                        <p>
                            <a href="">免费试听</a>
                            <i class="glyphicon glyphicon-eye-open"></i> 4761人学过
                        </p>
                    </div>
                </a>
                <a class="class-item" href="##">
                    <img src="../assets/img/banner/banner-1.png" alt="">
                    <div>
                        <h1>金融行业全景概览</h1>
                        <h2>导师：巴克莱资本总裁 | Andrea</h2>
                        <h3>一张金融地图带你由浅入深地了解金融买房、卖方、一级市场及二级市场</h3>
                        <p>
                            <a href="">免费试听</a>
                            <i class="glyphicon glyphicon-eye-open"></i> 4761人学过
                        </p>
                    </div>
                </a>
                <a class="class-item" href="##">
                    <img src="../assets/img/banner/banner-1.png" alt="">
                    <div>
                        <h1>金融行业全景概览</h1>
                        <h2>导师：巴克莱资本总裁 | Andrea</h2>
                        <h3>一张金融地图带你由浅入深地了解金融买房、卖方、一级市场及二级市场</h3>
                        <p>
                            <a href="">免费试听</a>
                            <i class="glyphicon glyphicon-eye-open"></i> 4761人学过
                        </p>
                    </div>
                </a>
                <a class="class-item" href="##">
                    <img src="../assets/img/banner/banner-1.png" alt="">
                    <div>
                        <h1>金融行业全景概览</h1>
                        <h2>导师：巴克莱资本总裁 | Andrea</h2>
                        <h3>一张金融地图带你由浅入深地了解金融买房、卖方、一级市场及二级市场</h3>
                        <p>
                            <a href="">免费试听</a>
                            <i class="glyphicon glyphicon-eye-open"></i> 4761人学过
                        </p>
                    </div>
                </a>
                <a class="class-item" href="##">
                    <img src="../assets/img/banner/banner-1.png" alt="">
                    <div>
                        <h1>金融行业全景概览</h1>
                        <h2>导师：巴克莱资本总裁 | Andrea</h2>
                        <h3>一张金融地图带你由浅入深地了解金融买房、卖方、一级市场及二级市场</h3>
                        <p>
                            <a href="">免费试听</a>
                            <i class="glyphicon glyphicon-eye-open"></i> 4761人学过
                        </p>
                    </div>
                </a>


                <div class="itemempty"></div>
                <div class="itemempty"></div>
                <div class="itemempty"></div>
            </div>

            <div class="page">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1000">
                </el-pagination>

            </div>
            <div class="small-page">
                <el-pagination
                        small
                        layout="prev, pager, next"
                        :total="1000">
                </el-pagination>
            </div>
        </div>

    </div>
</template>

<script>
    import test from "@/components/plug/Test";
    export default {
        name: "Class",
        components : {
            "p-test" : test
        },
        data(){
            return {
                postIndex : 1,
            }
        },
        methods : {
            changePost(index){
                this.postIndex = index;
            },
            course(index){
                this.$router.push({  //核心语句
                    path:`/class/course`,
                    query: {
                        indexs: index
                    }
                });
            }
        }
    }
</script>

<style scoped>
    @import "../assets/css/main.css";
    @import "../assets/css/font.css";
    .bg-decoration{
        padding-top:7.34%; /* 高 / 宽 */
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;
        background-image:url("../assets/img/bg/class-1.png") ;
        position: relative;
        margin-bottom: .5rem;
    }
    .bg-decoration>a{
        position: absolute;
        top: 35%;
        left: 50%;
        color: #FFF;
        font-size: .14rem;
        transform: translateX(-50%);
        -o-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        text-decoration: none;
        cursor: pointer;
    }
    .post-type{
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
    }
    .post{
        margin:0 .1rem .1rem .1rem;
        font-family: PingFangSC-Regular;
    }
    .post-active{
        background: #5191E5 !important;
        color: #FFF !important;
    }
    .class-box{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .class-box>a{
        cursor: pointer;
    }
    .small-page{
        display: none;
    }
    a{
        text-decoration: none !important;
    }
    .class-item h1,.class-item h2,.class-item h3,.class-item p{
        margin: 0 !important;
        font-family: PingFangSC-Regular;
    }
    @media (min-width: 1200px) {
        .content{
            padding-top: .5rem;
            padding-bottom: .5rem;
        }
        .post{
            background: #F6F6FA;
            border-radius: .2rem;
            color: #999;
            line-height: .66rem;
            width: 1.2rem;
            font-size: .18rem;
            text-decoration: none;
        }
        .emptyType{
            width: 1.2rem;
            height: 0px;
        }
        .class-box{
            padding-top: .4rem;
        }
        .class-item {
            width: 2.65rem;
            margin-bottom: .45rem;
            background: #FFFFFF;
            box-shadow: 0 2px 20px 0 rgba(0,0,0,0.08);
            border-radius: .2rem;
            overflow: hidden;
            text-align: left;
        }
        .itemempty{
            width: 2.65rem;
            height: 0px;
        }
        .class-item>img{
            height: 1.7rem;

        }
        .class-item>div{
            padding: 0 .14rem;
        }
        .class-item h1{
            padding: .12rem 0;
            font-size: .16rem;
            color: #333;
            line-height: .22rem;
            border-bottom: 1px solid #F6F6FA;
        }
        .class-item h2{
            padding-top: .12rem;
            font-size: .14rem;
            color: #666;
            line-height: .2rem;
        }
        .class-item h3{
            padding:.04rem 0 .12rem 0;
            font-size: .14rem;
            color: #999;
            line-height: .2rem;
            border-bottom: 1px solid #F6F6FA;
        }
        .class-item p{
            padding:.12rem;
            font-size: .14rem;
            color: #999;
            line-height: .2rem;
            text-align: right;
        }
        .class-item p a{
            color: #9551E5;
            font-size: .16rem;
            float: left;
        }

    }
    @media (min-width: 992px) and (max-width: 1200px){
        .content{
            padding-top: .5rem;
            padding-bottom: .5rem;
        }
        .post{
            background: #F6F6FA;
            border-radius: .2rem;
            color: #999;
            line-height: .56rem;
            width: 1rem;
            font-size: .18rem;
            text-decoration: none;
        }
        .emptyType{
            width: 1rem;
            height: 0px;
        }
        .class-box{
            padding-top: .4rem;
        }
        .class-item {
            width: 2.65rem;
            margin-bottom: .45rem;
            background: #FFFFFF;
            box-shadow: 0 2px 20px 0 rgba(0,0,0,0.08);
            border-radius: .2rem;
            overflow: hidden;
            text-align: left;
        }
        .itemempty{
            width: 2.65rem;
            height: 0px;
        }
        .class-item>img{
            height: 1.7rem;

        }
        .class-item>div{
            padding: 0 .14rem;
        }
        .class-item h1{
            padding: .12rem 0;
            font-size: .16rem;
            color: #333;
            line-height: .22rem;
            border-bottom: 1px solid #F6F6FA;
        }
        .class-item h2{
            padding-top: .12rem;
            font-size: .14rem;
            color: #666;
            line-height: .2rem;
        }
        .class-item h3{
            padding:.04rem 0 .12rem 0;
            font-size: .14rem;
            color: #999;
            line-height: .2rem;
            border-bottom: 1px solid #F6F6FA;
        }
        .class-item p{
            padding:.12rem;
            font-size: .14rem;
            color: #999;
            line-height: .2rem;
            text-align: right;
        }
        .class-item p a{
            color: #9551E5;
            font-size: .16rem;
            float: left;
        }
    }
    @media (min-width: 767px) and (max-width: 992px){
        .content{
            padding-top: .5rem;
            padding-bottom: .5rem;
        }
        .post{
            background: #F6F6FA;
            border-radius: .2rem;
            color: #999;
            line-height: .56rem;
            width: 1rem;
            font-size: .18rem;
            text-decoration: none;
        }
        .emptyType{
            width: 1rem;
            height: 0px;
        }
        .class-box{
            padding-top: .4rem;
            justify-content: space-around !important;
        }
        .class-item {
            width: 2.65rem;
            margin-bottom: .45rem;
            background: #FFFFFF;
            box-shadow: 0 2px 20px 0 rgba(0,0,0,0.08);
            border-radius: .2rem;
            overflow: hidden;
            text-align: left;
        }
        .itemempty{
            width: 2.65rem;
            height: 0px;
        }
        .class-item>img{
            height: 1.7rem;

        }
        .class-item>div{
            padding: 0 .14rem;
        }
        .class-item h1{
            padding: .12rem 0;
            font-size: .16rem;
            color: #333;
            line-height: .22rem;
            border-bottom: 1px solid #F6F6FA;
        }
        .class-item h2{
            padding-top: .12rem;
            font-size: .14rem;
            color: #666;
            line-height: .2rem;
        }
        .class-item h3{
            padding:.04rem 0 .12rem 0;
            font-size: .14rem;
            color: #999;
            line-height: .2rem;
            border-bottom: 1px solid #F6F6FA;
        }
        .class-item p{
            padding:.12rem;
            font-size: .14rem;
            color: #999;
            line-height: .2rem;
            text-align: right;
        }
        .class-item p a{
            color: #9551E5;
            font-size: .16rem;
            float: left;
        }
    }
    @media (max-width: 767px) {
        .bg-decoration{
            display: none;
        }
        .page{
            display: none;
        }
        .small-page{
            display: block;
            margin-bottom: .3rem;
        }
        .content{
            padding-top: .3rem;
            padding-bottom: .3rem;
        }
        .post{
            background: #F6F6FA;
            border-radius: .2rem;
            color: #999;
            line-height: .3rem;
            width: .6rem;
            font-size: .12rem;
            text-decoration: none;
        }
        .emptyType{
            width: .6rem;
            height: 0px;
        }
        .post-type{
            padding: 0 .1rem;
        }
        .class-box{
            padding-top: .1rem;
            justify-content: space-around !important;
        }
        .class-item {
            width: 2.65rem;
            margin-bottom: .15rem;
            background: #FFFFFF;
            box-shadow: 0 2px 20px 0 rgba(0,0,0,0.08);
            border-radius: .2rem;
            overflow: hidden;
            text-align: left;
        }
        .itemempty{
            width: 2.65rem;
            height: 0px;
        }
        .class-item>img{
            height: 1.7rem;

        }
        .class-item>div{
            padding: 0 .14rem;
        }
        .class-item h1{
            padding: .12rem 0;
            font-size: .16rem;
            color: #333;
            line-height: .22rem;
            border-bottom: 1px solid #F6F6FA;
        }
        .class-item h2{
            padding-top: .12rem;
            font-size: .14rem;
            color: #666;
            line-height: .2rem;
        }
        .class-item h3{
            padding:.04rem 0 .12rem 0;
            font-size: .14rem;
            color: #999;
            line-height: .2rem;
            border-bottom: 1px solid #F6F6FA;
        }
        .class-item p{
            padding:.12rem;
            font-size: .14rem;
            color: #999;
            line-height: .2rem;
            text-align: right;
        }
        .class-item p a{
            color: #9551E5;
            font-size: .16rem;
            float: left;
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