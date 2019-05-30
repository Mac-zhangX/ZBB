<template>
    <div class="middle-container content">
        <div class="question-box">
            <div class="item"  v-for="item in list" @click="questionInfo(item.id)">
                <div class="question-logo">
                    <img :src="item.picture" alt="">
                </div>
                <div class="question-info">
                    <div class="title">{{ item.title }}</div>
                    <div class="desc">{{ item.description }}</div>
                </div>
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
    import response from '../data/written.json';
    export default {
        name: "Written",
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
    @import "../assets/css/written.css";
    @import "../assets/css/font.css";
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