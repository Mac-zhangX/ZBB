<template>
    <div class="container-fluid">
        <div class="banner">
            <img src="../../assets/img/banner/banner-1.png" alt="">
        </div>
        <div class="container">
            <div class="show-list">
                <h1>
                    <img src="../../assets/img/icon/info-2.png" alt="">
                    介绍文案
                </h1>
                <p>
                    介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案。
                </p>
            </div>
            <div class="show-list">
                <h1>
                    <img src="../../assets/img/icon/reward.png" alt="">
                    成就展示
                </h1>
                <p>
                    介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案。
                </p>
            </div>
            <div class="show-list">
                <h1>
                    <img src="../../assets/img/icon/info-1.png" alt="">
                    成就展示
                </h1>
                <p>
                    介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案，介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案介绍文案。
                </p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "AboutMe"
    }
</script>

<style scoped>
    .show-list{
        text-align: left;
        color: #333;
    }
    @media (min-width: 1200px) {
        .banner{
            height: 4.5rem;
            margin-bottom: .8rem;
        }
        .banner>img{
            height: 100%;
        }
        .show-list h1{
            font-size: .2rem;
            height: .45rem;
            line-height: .45rem;
            margin-bottom: .15rem;
        }
        .show-list p{
            font-size: .14rem;
            line-height: .26rem;
        }
        .show-list{
            margin-bottom: .6rem;
        }



    }
    @media (min-width: 992px) and (max-width: 1200px){

        .banner{
            height: 4.5rem;
            margin-bottom: .8rem;
        }
        .banner>img{
            height: 100%;
        }
        .show-list h1{
            font-size: .2rem;
            height: .45rem;
            line-height: .45rem;
            margin-bottom: .15rem;
        }
        .show-list p{
            font-size: .14rem;
            line-height: .26rem;
        }
        .show-list{
            margin-bottom: .6rem;
        }

    }
    @media (min-width: 767px) and (max-width: 992px){

        .banner{
            height: 3.9rem;
            margin-bottom: .8rem;
        }
        .banner>img{
            height: 100%;
        }
        .show-list h1{
            font-size: .2rem;
            height: .45rem;
            line-height: .45rem;
            margin-bottom: .15rem;
        }
        .show-list p{
            font-size: .14rem;
            line-height: .26rem;
        }
        .show-list{
            margin-bottom: .6rem;
        }

    }
    @media (max-width: 767px) {

        .banner{
            height: 2rem;
            margin-bottom: .2rem;
        }
        .banner>img{
            height: 100%;
        }
        .show-list h1{
            font-size: .2rem;
            height: .45rem;
            line-height: .45rem;
            margin-bottom: .05rem;
        }
        .show-list p{
            font-size: .12rem;
            line-height: .2rem;
        }
        .show-list{
            margin-bottom: .2rem;
        }

    }
</style>