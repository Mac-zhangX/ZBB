<template>
    <div class="container-fluid">
        <div class="content">
            <form action="">
                <div class="title">
                    <img src="../assets/img/icon/info.png" alt="">
                    公司信息
                </div>
                <div class="input-box">
                    <p>企业logo</p>

                        <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <div class="upload-icon">
                                <i class="glyphicon glyphicon-plus"></i>
                            </div>
                        </el-upload>


                </div>
                <div class="input-box">
                    <p>企业名称</p>
                    <input type="text" placeholder="请输入企业名称">
                </div>
                <div class="input-box">
                    <p>所属行业</p>
                    <input type="text" placeholder="请选择所属行业">
                </div>
                <div class="input-box">
                    <p>联系方式</p>
                    <input type="text" placeholder="请输入微信号或者电话号码">
                </div>
                <div class="input-box">
                    <p>企业简介</p>
                    <textarea name="" id="" placeholder="简要介绍公司优势、更能吸引学生投递"></textarea>
                </div>
                <div>
                    <button class="submit">保存</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Company",
        data() {
            return {
                imageUrl: ''
            };
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                // const isJPG = file.type === 'image/jpeg';
                // const isLt2M = file.size / 1024 / 1024 < 2;
                //
                // if (!isJPG) {
                //     this.$message.error('上传头像图片只能是 JPG 格式!');
                // }
                // if (!isLt2M) {
                //     this.$message.error('上传头像图片大小不能超过 2MB!');
                // }
                // return isJPG && isLt2M;
                this.imageUrl = URL.createObjectURL(file.raw);
            }
        }
    }
</script>

<style scoped>
    .container-fluid{
        padding: 0;
        /*background: url("../assets/img/bg/bg-1.png") no-repeat;*/
        /*background-size: 100% 100%;*/
        /*background-position: center center;*/
    }
    .avatar {
        width: 100%;
        height: auto;
        display: block;
    }
    .content{
        width: 5rem;
        margin: 0 auto 1rem auto;
    }
    form{
        width: 100%;
    }
    form>div{
        width: 100%;
    }
    .submit{
        width: 100%;
        height: .6rem;
        background: #5191E5;
        box-shadow: 0 2px 14px 0 rgba(51,94,150,0.57);
        border-radius: 20px;
        font-size: .18rem;
        color: #fff;line-height: .6rem;

    }
    .avatar-uploader{
        min-height: 1.2rem;
        cursor:pointer;
        display: flex;
        justify-content: center; /* 水平居中 */
        align-items: center;     /* 垂直居中 */
    }
    .upload-icon{
        border-radius: 50%;
        background: #5191E5;
        box-shadow: 0 2px 12px 0 rgba(51,94,150,0.36);
        color: #FFF;
        font-size: .2rem;
        text-align: center;
        width: .45rem;
        height: .45rem;
        line-height: .45rem;
    }

    .input-box{
        background: #FFFFFF;
        box-shadow: 0 2px 20px 0 rgba(0,0,0,0.08);
        border-radius: 20px;
        padding: .2rem;
        text-align: left;
        margin-bottom: .4rem;
    }
    .input-box p{
        height: .25rem;
        line-height: .25rem;
        font-size: .18rem;
        color: #333;
    }
    .input-box input{
        height: .24rem;
        line-height: .24rem;
        font-size: .12rem;
        color: #999;
        width: 100%;
    }
    textarea{
        font-size: .12rem;
        color: #999;
        resize: none;
        width: 100%;
        height: 1.5rem;
    }
    .title{
        margin: .3rem 0;
        font-size: .2rem;
        color: #333333;
        letter-spacing: 0;
        height: .45rem;
        text-align: left;
    }
    .title>img{
        margin-right: .08rem;
    }
    @media (min-width: 1200px) {

    }
    @media (min-width: 992px) and (max-width: 1200px){

    }
    @media (min-width: 767px) and (max-width: 992px){

    }
    @media (max-width: 767px) {
        .content{
            width: 100%;
        }
    }
</style>
<style>
    .el-upload.el-upload--text input[type=file]{
        display: none !important;
    }
    .el-message{
        z-index: 10000 !important;
    }
    .el-upload.el-upload--text{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center; /* 水平居中 */
        align-items: center;     /* 垂直居中 */
    }

</style>