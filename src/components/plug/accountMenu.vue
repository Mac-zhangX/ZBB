<template>
    <div class="menu-box">
        <div class="middle-container menu-info">
            <div class="avatar-box" @mouseenter="show2" @mouseleave="hide2" @click="changeImgDialog = true">
              <img src="../../assets/img/avatar/avatar-1.png" alt="" >
              <div class="mark" v-if="mark">
                <span>上传头像</span>
              </div>
            </div>
            <div class="level-box">
                <p class="level-name">老梗头</p>
                <el-progress :percentage="80" color="#FFD45A"></el-progress>
                <p class="level-desc">剩余天数20天</p>
            </div>
            <div class="menu-item-box">
                <div class="flex-box-around">
                        <router-link to="/account">
                            个人中心
                        </router-link>

                        <router-link to="/recordNew">
                            我的职业档案
                        </router-link>

                        <router-link to="/orders">
                            我的订单
                        </router-link>

                        <router-link to="/test">
                            我的测评
                        </router-link>

                </div>
            </div>
        </div>
      <el-dialog title="" :visible.sync="changeImgDialog">
        <div class="uploadInfo">
          <div class="imgLf">
            <h2>当前头像</h2>
            <img src="../../assets/img/avatar/avatar-1.png" alt="">
          </div>
          <div class="uploadImg">
            <h2>修改头像</h2>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <p class="p2">（支持200kb以下jpg，png格式的图片）</p>
          </div>
          <div class="imgRt">
            <h2>头像预览</h2>
            <div class="img01">
              <img src="../../assets/img/avatar/avatar-1.png" alt="">
              <p>(尺寸100x100)</p>
            </div>
            <div class="img02">
              <img src="../../assets/img/avatar/avatar-1.png" alt="">
              <p>(尺寸60x60)</p>
            </div>
            <div class="img03">
              <img src="../../assets/img/avatar/avatar-1.png" alt="">
              <p>(尺寸45x45)</p>
            </div>
          </div>
        
        </div>
        <span slot="footer" class="dialog-footer" style="text-align: center">
          <el-button type="primary" @click="centerDialogVisible = false">保存</el-button>
        </span>
      </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "accountMenu",
        data(){
          return {
            mark:false,
            changeImgDialog: false,
            imageUrl: '',
          };
        },
      methods:{
        show2() {
          this.mark = true;
        },
        hide2() {
          this.mark = false;
        },
        handleAvatarSuccess(res, file) {
          this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isPNG = file.type === 'image/png';
            const isLt2M = file.size / 1024 / 1024 < 2;
      
            if (!isJPG && !isPNG) {
              this.$message.error('上传头像图片只能是 JPG或PNG 格式!');
            }
            if (!isLt2M) {
              this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG||isPNG && isLt2M;
        },
      }
    }
</script>

<style scoped>
    @import "../../assets/css/main.css";
    /*div{*/
        /*width: 100%;*/
    /*}*/
    .menu-box{
        background: url("../../assets/img/bg/account-1.png") no-repeat center center;
        margin-bottom: .7rem;
    }
    .menu-info{
        height: 1.7rem;
        position: relative;

    }
    .avatar-box{
        width: 1.68rem;
        height: 1.68rem;
        border-radius: 50%;
        position: absolute;
        left: 0;
        bottom: -0.4rem;
    }
    .avatar-box img{
        width: 100%;
        height: 100%;
    }
    .menu-item-box{
        width: 4rem;
        margin-top: 1.22rem;
        float: right;
        display: inline-block;
    }
    .menu-item-box a{
        font-size: .14rem;
        line-height: .19rem;
        border-radius: 13.5px;
        padding: .04rem .12rem;
        color: #E5EBE3;
    }
    .router-link-active{
        background: #0E0E0E;
        color: #FFD45A !important;
    }
    
    .level-box{
        width: 2rem;
        display: inline-block;
        text-align: left;
        margin-top: .75rem;
        margin-left: 2rem;
        float: left;
    }
    .level-name{
        font-size: .18rem;
        color: #F8F8F8;
        line-height: .25rem;
    }
    .level-desc{
        font-size: .12rem;
        color: #FFF;
        line-height: .16rem;
    }

    .search-box select{
        background: #FFFFFF;
        border: 1px solid #D5DADF;
        width: 1.82rem;
        height: .4rem;
        border-radius: .03rem;
        padding: .1rem .12rem;
        color: #666;
        font-size: .14rem;
    }
    .search-box button{
        opacity: 0.45;
        background: #95BAEB;
        width: .4rem;
        height: .4rem;
        color: #FFF;
        border-radius: .03rem;
        font-size: .22rem;
    }

    @media (min-width: 1200px) {

    }
    @media (min-width: 992px) and (max-width: 1200px){

    }
    @media (min-width: 767px) and (max-width: 992px){

        .avatar-box{
            width: 1rem;
            height: 1rem;
            left: .4rem;
            bottom: 0;
        }
        .level-box{
            width: 2rem;
            margin-left: 1.6rem;
        }
    }
    @media (max-width: 767px) {

        .avatar-box{
            width: .8rem;
            height: .8rem;
            left: .4rem;
            top: .2rem;
        }
        .level-box{
            width: 2rem;
            margin-left: 1.2rem;
            margin-top: .2rem;
        }
        .menu-item-box{
            width: 100%;
            margin-top: .4rem;
            display: block;
        }
        .menu-item-box li{
            font-size: .12rem;
            line-height: .19rem;
            border-radius: .1rem;
            padding: .04rem .05rem;
        }
        .menu-box{
            margin-bottom: .3rem;
        }
        .menu-item-box a{
            font-size: .12rem;
            padding: .04rem .08rem;
        }
    }
</style>
<style>
    .el-progress__text{
        display: none !important;
    }
    .mark {
      display: inline-block;
      z-index: 10;
      position: absolute;
      top: 0px;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 50%;
      /*background: #333;*/
      background: rgba(0,0,0,.6);
      opacity: 0.5;
      -webkit-transition: all .8s ease-in-out;
      -moz-transition: all .8s ease-in-out;
      transition: all .8s ease-in-out;
      padding: 0;
    }
  .mark span {
    line-height: 1.68rem;
    color: #FFFFFF;
    font-size: 0.22rem;
  }
  .el-dialog {
    text-align: center;
  }
  .uploadInfo {
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
  }
  .imgLf,
  .uploadImg,
  .imgRt {
    float: left;
    text-align: left;
  }
    .imgLf h2,
   .uploadImg h2,
   .imgRt h2 {
      margin-bottom: 0.2rem;
      color: #4A4A4A;
      font-size: 0.18rem;
    }
    .imgRt p {
      font-size: 0.14rem;
    }
  .imgLf {
    width: 1.65rem;
  }
  .imgLf img {
    width: 100%;
    max-height:1.65rem ;
  }
  .uploadImg {
    width: 1.95rem;
    margin: 0 1rem;
  }
  .uploadImg .p2 {
    color: #9B9B9B;
    font-size: 0.12rem;
    margin-top: 0.3rem;
  }
  .imgRt {
    width: 1.26rem;
    font-size: 0.14rem;
    border-left: 1px solid #E8E8E8;
    margin-top: 0.4rem;
    padding-left: 0.2rem;
  }
  .imgRt p{
    text-align: center;
  }
  .imgRt div {
    margin-bottom: 0.2rem;
  }
  .imgRt div p {
    margin-top: 0.1rem;
  }
  .imgRt .img01 img {
    width: 1rem;
    height: 1rem;
  }
  .imgRt .img02 img{
    width: 0.6rem;
    height: 0.6rem;
  }
  .imgRt .img03 img {
    width: 0.45rem;
    height: 0.45rem;
  }
  .imgRt span {
    font-size: 0.12rem;
  }

    /*shangchuan*/
    .uploadInfo .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      width: 1.95rem;
      height: 1.95rem;
    }
    .uploadInfo .el-upload__input[type=file] {
      display: none;
    }
    .uploadInfo .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }
    .uploadInfo .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 1.95rem;
      height: 1.95rem;
      line-height: 1.95rem;
      text-align: center;
    }
    .uploadInfo .avatar {
      width: 1.95rem;
      height: 1.95rem;
      display: block;
    }
  
  .el-dialog__footer {
    text-align: center;
  }
</style>
