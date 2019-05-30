<template>
    <div>
        <v-nav></v-nav>
        <div class="content middle-container">
            <div class="title ">
                <h1>测评中心</h1>
            </div>
            <div class="order-box">
                <div class="test-item">
                    <img src="../../assets/img/bg/test-1.png" alt="">
                    <div class="action">
                        <p class="test-desc">挖掘你的职场核心竞争力</p>
                        <a href="javascript:;" class="test-button" @click="test1">
                            立即测评
                        </a>
                    </div>
                </div>
                <div class="test-item">
                    <img src="../../assets/img/bg/test-2.png" alt="">
                    <div class="action">
                        <p class="test-desc">认识最真实的自己</p>
                        <a href="javascript:;" class="test-button"  @click="test2">
                            立即测评
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import accountMenu from "../../components/plug/accountMenu";
    export default {
        name: "Test",
        data() {
            return {

            };
        },
        methods: {
            test1(){
                this.$router.push('/test/personal')
            },
            test2(){
                this.$router.push('/test/optimal')
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

    .content{
        padding: .35rem;
        background: #FFFFFF;
        box-shadow: 0 2px 9px 0 rgba(109,107,107,0.30);
        margin-bottom: 1rem;
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

    .order-box{
        padding: .4rem .05rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    .test-item{
        display: inline-block;
        width: 2.92rem;
        height: 2.72rem;
        margin-right: .78rem;
        position: relative;
    }
    .test-button{
        width: 1.4rem;
        height: .42rem;
        line-height: .42rem;
        background-image: radial-gradient(50% 147%, #3BAFD4 10%, #88BCF8 10%, #5191E5 100%);
        border-radius: 5px;
        font-size: .16rem;
        color: #FFF;
        display: block;
        margin: 0 auto;
    }
    .test-desc{
        font-size: .14rem;
        line-height: .2rem;
        margin-bottom: .12rem;
        color: #4A4A4A;
    }
    .action{
        position: absolute;
        bottom: .6rem;
    }
    @media (min-width: 1200px) {

    }
    @media (min-width: 992px) and (max-width: 1200px){

    }
    @media (min-width: 767px) and (max-width: 992px){


    }
    @media (max-width: 767px) {

        .title{
            display: block;
        }

        .order-box{
            padding: .2rem .05rem;
        }
        .test-item{
            margin-right: 0;
        }

    }
</style>
<style>

</style>
