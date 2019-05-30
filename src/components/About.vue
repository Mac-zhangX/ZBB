<template>
    <div class="container-fluid">
        <div class="about-menu container">
            <ul>
                <li>
                    <router-link to="/about/index" active-class="active">关于我们</router-link>
                </li>
                <li>
                    <router-link  to="/about/comments" active-class="active">学员好评</router-link>
                </li>
                <li>
                    <router-link  to="join" active-class="active">加入我们</router-link>
                </li>
                <li>
                    <router-link  to="news" active-class="active">最新动态</router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>
    .container-fluid{
        padding: 0;
    }
    .about-menu{
        height: auto;
        margin-bottom: .5rem;
    }
    .about-menu>ul{
        display: flex;
        justify-content: space-between;
        margin: 0 !important;
    }
    .about-menu>ul>li{
        height: auto;
    }
    .about-menu>ul>li>a{
        display: block;
         color: #999;
        text-decoration: none;
        background: #F6F6FA;
        border-radius: 0 0 .3rem .3rem;
     }
    .active{
        background: #5191E5 !important;
        color: #FFF !important;
    }

    @media (min-width: 1200px) {
        .about-menu>ul>li>a{
            line-height: .25rem;
            font-size: .18rem;
            padding: .25rem .44rem;
        }
    }
    @media (min-width: 992px) and (max-width: 1200px){
        .about-menu>ul>li>a{
            line-height: .25rem;
            font-size: .16rem;
            padding: .2rem .38rem;
        }
    }
    @media (min-width: 767px) and (max-width: 992px){
        .about-menu>ul>li>a{
            line-height: .2rem;
            font-size: .14rem;
            padding: .2rem .38rem;
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
    }
</style>