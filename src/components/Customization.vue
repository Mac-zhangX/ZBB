<template>
    <div class="container-fluid">
        <div class="about-menu container">
            <ul>
                <li class="Light">
                    <router-link to="index" active-class="active">私人订制</router-link>
                </li>
                <li class="Light">
                    <router-link  to="42-project" active-class="active">42号计划</router-link>
                </li>
                <li class="Light">
                    <router-link  to="referme" active-class="active">名企直推</router-link>
                </li>
                <li class="Light">
                    <router-link  to="resume" active-class="active">简历精修</router-link>
                </li>
                <li class="Light">
                    <router-link  to="mianba-project" active-class="active">面霸计划</router-link>
                </li>
                <li class="Light">
                    <router-link  to="smallClass" active-class="active">直播小班课</router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Customization"
    }
</script>

<style scoped>
    @import "../assets/css/font.css";
    .container-fluid{
        padding: 0;
    }
    .about-menu{
        height: auto;
        margin-bottom: .4rem;
        border-bottom: 1px solid rgb(234, 234, 234);
    }
    .about-menu>ul{
        display: flex;
        justify-content: space-between;
        margin-top: 42px;
        margin-bottom: 10px;
        
    }
    .about-menu>ul>li{
        height: auto;
    }
    .about-menu>ul>li>a{
        display: block;
        text-decoration: none;
        color: #333333;
       border-radius: 4px;
    }
    .active{
        background: #5191E5 !important;
        color: #FFF !important;
    }

    @media (min-width: 1200px) {
        .about-menu>ul>li>a{
            line-height: .25rem;
            font-size: .17rem;
            padding: .10rem .44rem;
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
            padding: .2rem;
            border-radius: 0 0 .2rem .2rem;
        }
    }
    @media (max-width: 767px) {
        .about-menu>ul>li>a{
            line-height: .16rem;
            font-size: .12rem;
            padding: .1rem;
            border-radius: 0 0 .1rem .1rem;
        }
        .about-menu{
            margin-bottom: .2rem;
        }
    }
</style>