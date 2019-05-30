<template>
    <div class="content">
        <div class="banner">
            <div class="banner-img">

            </div>

            <div class="flex-box tigs-1 container">
                <div class="flex-item">
                    <img src="../assets/img/help-stutent.png" alt="">
                    <p><span>1000</span>名</p>
                    <h5>获帮助学生</h5>
                </div>
                <div class="flex-item">
                    <img src="../assets/img/partner-company.png" alt="">
                    <p><span>1000+</span>家</p>
                    <h5>合作企业</h5>
                </div>
                <div class="flex-item">
                    <img src="../assets/img/teacher.png" alt="">
                    <p><span>1000+</span>位</p>
                    <h5>专业导师</h5>
                </div>
                <div class="flex-item">
                    <img src="../assets/img/post.png" alt="">
                    <p><span>100+</span>位</p>
                    <h5>内推岗位</h5>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="class-online">
                <p class="home-title"><i></i><span>在线课堂</span><i></i></p>
                <h5 class="home-description">海量原创录制课程，高效掌握行业内幕与求职技巧</h5>
                <div class="class-box">
                    <div class="vip-info"></div>
                    <div class="class-flex flex-box">
                        <div class="class-item">
                            <img src="../assets/img/change-1.png" alt="">
                            <div>
                                <h1>金融行业全景概览</h1>
                                <h3>撰稿导师：巴克莱资本总裁 | Andrea</h3>
                                <p>
                                    <a href="">免费试听</a>
                                    <i class="glyphicon glyphicon-eye-open"></i> 4761人学过
                                </p>
                            </div>


                        </div>
                        <div class="class-item">
                            <img src="../assets/img/change-1.png" alt="">
                            <div>
                                <h1>金融行业全景概览</h1>
                                <h3>撰稿导师：巴克莱资本总裁 | Andrea</h3>
                                <p>
                                    <a href="">免费试听</a>
                                    <i class="glyphicon glyphicon-eye-open"></i> 4761人学过
                                </p>
                            </div>


                        </div>
                        <div class="class-item">
                            <img src="../assets/img/change-1.png" alt="">
                            <div>
                                <h1>金融行业全景概览</h1>
                                <h3>撰稿导师：巴克莱资本总裁 | Andrea</h3>
                                <p>
                                    <a href="">免费试听</a>
                                    <i class="glyphicon glyphicon-eye-open"></i> 4761人学过
                                </p>
                            </div>


                        </div>
                        <div class="class-item">
                            <img src="../assets/img/change-1.png" alt="">
                            <div>
                                <h1>金融行业全景概览</h1>
                                <h3>撰稿导师：巴克莱资本总裁 | Andrea</h3>
                                <p>
                                    <a href="">免费试听</a>
                                    <i class="glyphicon glyphicon-eye-open"></i> 4761人学过
                                </p>
                            </div>


                        </div>
                        <div class="class-item">
                            <img src="../assets/img/change-1.png" alt="">
                            <div>
                                <h1>金融行业全景概览</h1>
                                <h3>撰稿导师：巴克莱资本总裁 | Andrea</h3>
                                <p>
                                    <a href="">免费试听</a>
                                    <i class="glyphicon glyphicon-eye-open"></i> 4761人学过
                                </p>
                            </div>


                        </div>
                        <div class="class-item">
                            <img src="../assets/img/change-1.png" alt="">
                            <div>
                                <h1>金融行业全景概览</h1>
                                <h3>撰稿导师：巴克莱资本总裁 | Andrea</h3>
                                <p>
                                    <a href="">免费试听</a>
                                    <i class="glyphicon glyphicon-eye-open"></i> 4761人学过
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div class="self-service">
                <p  class="home-title"><i></i><span>定制服务</span><i></i></p>
                <h5  class="home-description">根据你的求职与目标，定制属于你的求职系列课程</h5>
                <div class="service-box">
                    <div class="flex-box">
                        <div class="flex-items service-item">
                            <template v-if="service_index === 1">
                                <img src="../assets/img/service-active-1.png" alt="" class="service-active">
                                <img src="../assets/img/sanjiao.png" alt="" class="guide">

                            </template>
                            <template v-else>
                                <img src="../assets/img/service-1.png" alt="" class="service" @click="changeService(1)">
                            </template>


                        </div>
                        <div class="flex-items service-item">
                            <template v-if="service_index === 2">
                                <img src="../assets/img/service-active-2.png" alt="" class="service-active">
                                <img src="../assets/img/sanjiao.png" alt="" class="guide">

                            </template>
                            <template v-else>
                                <img src="../assets/img/service-2.png" alt="" class="service" @click="changeService(2)">
                            </template>
                        </div>
                        <div class="flex-items service-item">
                            <template v-if="service_index === 3">
                                <img src="../assets/img/service-active-3.png" alt="" class="service-active">
                                <img src="../assets/img/sanjiao.png" alt="" class="guide">

                            </template>
                            <template v-else>
                                <img src="../assets/img/service-3.png" alt="" class="service" @click="changeService(3)">
                            </template>
                        </div>
                        <div class="flex-items service-item">
                            <template v-if="service_index === 4">
                                <img src="../assets/img/service-active-4.png" alt="" class="service-active">
                                <img src="../assets/img/sanjiao.png" alt="" class="guide">

                            </template>
                            <template v-else>
                                <img src="../assets/img/service-4.png" alt="" class="service" @click="changeService(4)">
                            </template>
                        </div>
                        <div class="flex-items service-item">
                            <template v-if="service_index === 5">
                                <img src="../assets/img/service-active-5.png" alt="" class="service-active">
                                <img src="../assets/img/sanjiao.png" alt="" class="guide">

                            </template>
                            <template v-else>
                                <img src="../assets/img/service-5.png" alt="" class="service" @click="changeService(5)">
                            </template>
                        </div>
                        <div class="flex-items service-item">
                            <template v-if="service_index === 6">
                                <img src="../assets/img/service-active-6.png" alt="" class="service-active">
                                <img src="../assets/img/sanjiao.png" alt="" class="guide">

                            </template>
                            <template v-else>
                                <img src="../assets/img/service-6.png" alt="" class="service" @click="changeService(6)">
                            </template>
                        </div>

                    </div>
                    <div class="service-desc">

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Home",
        data (){
            return {
                service_index : 1,
            };
        },
        methods: {
            changeService(index) {
                this.service_index = index;
            }
        }
    }
    $(function () {

    })
</script>

<style scoped>
    @import "../assets/css/home.css";

</style>