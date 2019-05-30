<template>
    <div class="middle-container">
        <div class="cate-title">
            <a href="##">获取资源</a>&nbsp;&nbsp;/&nbsp;&nbsp;
            <a href="##">金融</a>&nbsp;&nbsp;/&nbsp;&nbsp;
            <a href="##" class="active">算数基础</a>
        </div>
        <div class="question-box">
            <div class="question-info">
                <h1>资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯</h1>
                <h2>
                    （2017中信证券）朱先生出生于20世纪40年代，有一年他发现自己年龄的平方刚好等于当年的年份。问这位先生出生于哪一年
                </h2>

                <div class="check-box">
                    <div class="choice">
                        <label class="radio">A1946<input type="radio" name="radio" value="1" checked><i></i></label>
                        <label class="radio">A1946<input type="radio" value="2" name="radio"><i></i></label>
                        <label class="radio">A1946<input type="radio" value="2" name="radio"><i></i></label>
                        <label class="radio">A1946<input type="radio" value="2" name="radio"><i></i></label>
                    </div>
                </div>
                <div class="result">
                    <div class="error">
                        <a href="##">
                            回答错误
                        </a>
                        <div class="error-desc">
                            问题分析：直接带入选项，只有1936开方后是整数44，其他的都有小数。
                        </div>
                    </div>
                    <!--<div class="next-button">-->
                        <!--<a href="##">-->
                            <!--下一题-->
                        <!--</a>-->
                    <!--</div>-->
                </div>
            </div>
            <div class="like-box">
                <div class="like-people">
                    <div>
                        <img src="../assets/img/icon/shouchang.png" alt="">
                        收藏
                        <span>10</span>
                    </div>
                </div>
                <div class="look-box">
                    <div class="avatar-box">
                        <div class="avatar-item">
                            <img src="../assets/img/home-banner.png" alt="">
                            <div>
                                张三
                            </div>
                        </div>
                        <div class="avatar-item">
                            <img src="../assets/img/home-banner.png" alt="">
                            <div>
                                张三
                            </div>
                        </div>
                        <div class="avatar-item">
                            <img src="../assets/img/home-banner.png" alt="">
                            <div>
                                张三
                            </div>
                        </div>
                        <div class="avatar-item">
                            <img src="../assets/img/home-banner.png" alt="">
                            <div>
                                张三
                            </div>
                        </div>
                        <div class="avatar-item">
                            <img src="../assets/img/home-banner.png" alt="">
                            <div>
                                张三
                            </div>
                        </div>
                        <div class="avatar-item">
                            <img src="../assets/img/home-banner.png" alt="">
                            <div>
                                张三
                            </div>
                        </div>
                        <div class="avatar-item-empty"></div>
                        <div class="avatar-item-empty"></div>
                        <div class="avatar-item-empty"></div>
                    </div>
                    <div class="look-desc">
                        谁来看过
                    </div>
                </div>
            </div>
        </div>
        <div class="relation">
            <div class="relation-title">
                <img src="../assets/img/icon/condition-2.png" alt="">
                相关题库
            </div>
            <div class="item" v-for="item in list" @click="questionInfo(item.id)">
                <div class="item-logo">
                    <img :src="item.picture" alt="">
                </div>
                <div class="item-info">
                    <div class="item-desc">
                        <h1>{{ item.title }}</h1>
                        <h2>{{ item.description }}</h2>
                    </div>
                    <div class="item-account">
                        <div class="views">
                            <img src="../assets/img/icon/sc.png" alt="">
                            阅读量：<span class="num-color">{{ item.views }}</span>
                        </div>
                        <div class="like">
                            <img src="../assets/img/icon/ydl.png" alt="">
                            收藏：<span class="num-color">{{ item.like }}</span>
                        </div>
                        <div class="tig">
                            {{ item.tig }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import response from '../data/writtenRelation.json';
    export default {
        name: "WrittenInfo",
        data(){
            return {
                list : response.data,
                totalNum : response.count
            };
        },
        methods : {
            questionInfo(id){
                this.$router.push('/written/info');
            }
        }
    }
</script>

<style scoped>
    @import "../assets/css/main.css";
    @import "../assets/css/writtenInfo.css";
</style>