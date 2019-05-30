<template>
    <div class="container">
        <div class="nav-title">
            <a :href="navTitle.topIndex">{{navTitle.topName}}</a>
            <img src="../../assets/img/icon/next.png" alt="">
            <a  :href="navTitle.subIndex">{{navTitle.subName}}</a>
            <img src="../../assets/img/icon/next.png" alt="">
            <span>{{navTitle.thrName}}</span>
        </div>
        <div class="course-info">
            <!--<img src="../../assets/img/banner/banner-1.png" alt="">-->
            <div class="course-video">
              <video-player  class="video-player vjs-custom-skin"
                             ref="videoPlayer"
                             :playsinline="true"
                             :options="playerOptions"
                             @play="onPlayerPlay($event)"
                             @pause="onPlayerPause($event)"
              >
              </video-player>
            </div>
            <div class="shouKeRen-bg">
              <img src="../../assets/img/sanjiao.png" class="sanjiao" alt="">
                <div class="ShouKeRen">
                  <p class="ShouKeRen-head"><span>授课人</span><span>{{name}}</span></p>
                  <h3 class="Regular">授课人履历</h3>
                  <p class="ShouKeRen-xx Light">
                    {{nameXX}}
                  </p>
                  <h3 class="Regular">课程大纲</h3>
                  <ul class="ShouKeRen-class">
                    <li v-for="(item,index) in dataList" class="Light">
                      {{item.text}}
                    </li>
                  </ul>
                </div>
                <p></p>
                <div></div>
            </div>
            <router-link to="/vip/tc" class="members">成为会员</router-link>
        </div>
        <div class="course-desc">
          <ul class="classList">
            <li v-for="(item,index) in classList">
              <div class="li-head">
                <img :src="item.srcs" alt=""><span class="Regular">{{item.head}}</span>
              </div>
              <p CLASS="Light">{{item.text}}</p>
            </li>
          </ul>
          <div class="seen">
            <div class="seen-head">
              <img src="../../assets/img/icon/package.png" alt=""><span class="Regular" style="color: #5191E5">谁来看过</span>
            </div>
            <div>
              <ul>
                <li  v-for="(item,index) in imgList" :key="index">
                  <img :src="item.srcs" alt="" :num="item.num">
                  <span>{{item.name}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    import {videoPlayer } from 'vue-video-player'
    export default {
        name: "Course",
        data() {
            return {
                navTitle : {
                    topIndex : 1,
                    topName : '会员专属',
                    subIndex : 1,
                    subName : '互联网课程',
                    thrIndex : 1,
                    thrName : '互联网行业概论',
                },
                name:'老埂头',
                nameXX:'课程大纲课程大纲课程大纲课程大纲课程大纲，课程大纲课程大纲课程大纲课程课程大纲课程大纲课程大纲课程大纲课程大纲课程大纲课程大纲课程大纲课程大纲课程大纲课程大纲课程大纲课程大纲课程大纲课程大纲',
                dataList:[
                    {text:'课程大纲课程大纲课程大纲课程大纲课程大纲，课程大纲课程大纲课程大纲课程大纲，课程大纲课程大纲。'},
                    {text:'课程大纲课程大纲课程大纲课程大纲课程大纲，课程大纲课程大纲课程大纲课程大纲，课程大纲课程大纲。'},
                    {text:'课程大纲课程大纲课程大纲课程大纲课程大纲，课程大纲课程大纲课程大纲课程大纲，课程大纲课程大纲。'}
                  ],
                classList:[
                  {
                    srcs: require('../../assets/img/icon/course.png'),
                    text:'课程介绍课程介绍课程介绍课程介绍，课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍，课程介绍课程介绍课程介绍课程介绍课程介绍，课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍，课程介绍课程介绍课程介绍。',
                    head:'课程介绍'
                  },
                  {
                    srcs: require('../../assets/img/icon/title-2.png'),
                    text:'课程介绍课程介绍课程介绍课程介绍，课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍，课程介绍课程介绍课程介绍课程介绍课程介绍，课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍，课程介绍课程介绍课程介绍。',
                    head:'导师介绍'
                  },
                  {
                    srcs: require('../../assets/img/icon/service-process.png'),
                    text:'课程介绍课程介绍课程介绍课程介绍，课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍，课程介绍课程介绍课程介绍课程介绍课程介绍，课程介绍课程介绍课程介绍课程介绍课程介绍课程介绍，课程介绍课程介绍课程介绍。',
                    head:'适合人群',
                  },
                ],
                imgList:[
                {
                  num:'0',
                  srcs:require('../../assets/img/avatar/avatar-1.png'),
                  name:'老埂头'
                },
                {
                  num:'1',
                  srcs:require('../../assets/img/avatar/avatar-1.png'),
                  name:'老埂头'
                },
                {
                  num:'2',
                  srcs:require('../../assets/img/avatar/avatar-1.png'),
                  name:'老埂头'
                },
                {
                  num:'3',
                  srcs:require('../../assets/img/avatar/avatar-1.png'),
                  name:'老埂头'
                },
                {
                  num:'4',
                  srcs:require('../../assets/img/avatar/avatar-1.png'),
                  name:'老埂头'
                },
                {
                  num:'4',
                  srcs:require('../../assets/img/avatar/avatar-1.png'),
                  name:'老埂头'
                }
              ],
                playerOptions: {
                playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                autoplay: false, //如果true,浏览器准备好时开始回放。
                muted: false, // 默认情况下将会消除任何音频。
                loop: false, // 导致视频一结束就重新开始。
                preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: "zh-CN",
                aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [
                  {
                    type: "video/mp4",
                    // mp4
                    src: "http://vjs.zencdn.net/v/oceans.mp4"
                    // webm
                    // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                  }
                ],
                poster: "../../assets/img/banner/banner-1.png", //你的封面地址
                width: document.documentElement.clientWidth,
                notSupportedMessage: "此视频暂无法播放，请稍后再试" //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                //        controlBar: {
                //          timeDivider: true,
                //          durationDisplay: true,
                //          remainingTimeDisplay: false,
                //          fullscreenToggle: true  //全屏按钮
                //        }
              }
            };
        },
        components: {
            videoPlayer
        },
        methods: {
            onPlayerPlay(player){
              // alert(play)
            },
            onPlayerPause(player) {
              // alert("pause");
            }
        },
        mounted: {
            player() {
                return this.$refs.videoPlayer.player;
            }
        },
        created : function () {
            let courseId = this.$route.query.indexs
            console.log(courseId)
        }
    }
</script>

<style scoped>
    @import "../../assets/css/font.css";
    .nav-title{
        text-align: left;
    }
    .nav-title>a{
        color: #666;
    }
    .nav-title>a:hover{
        color: #5191E5;
    }
    .nav-title>img{
        vertical-align: middle;
    }
    .nav-title>span{
        color: #5191E5;
    }
    .course-desc {
      padding-bottom: 0.5rem;
    }
    .course-video,
    .video-player{
      width: 100%;
      height: 7rem;
    }
    .shouKeRen-bg {
      position: relative;
    }
    .shouKeRen-bg .sanjiao {
      position: absolute;
    }
    .ShouKeRen {
      padding: 0.2rem;
      text-align: left;
      background: #FFFFFF;
      box-shadow: 0 2px 9px 0 rgba(109, 107, 107, 0.30)
    }
    .ShouKeRen-head,
    .ShouKeRen h3 {
      font-size: 0.18rem;
    }
    .ShouKeRen .ShouKeRen-xx,
    .ShouKeRen-class li {
      font-size: 0.16rem;
      color: #666666;
      line-height: 0.26rem;
    }
    .ShouKeRen-class {
      padding-left: 0.2rem;
    }
    .ShouKeRen-class li {
      list-style-type:decimal
    }
    
    .members {
      height: 0.7rem;
      background-color: #5191E5;
      color: #FFFFFF;
      display: inline-block;
      width: 100%;
      line-height: 0.7rem;
      font-size: 0.2rem;
    }
    .ShouKeRen-head span {
      margin-right: 0.3rem;
    }
    .ShouKeRen-head span:last-child {
      color:#5191E5 ;
    }
    .ShouKeRen h3 {
      margin-top: 0.3rem;
      line-height: 0.25rem;
    }
    .course-desc ul {
      padding-left: 0;
    }
    .course-desc ul.classList li,
    .course-desc .seen
    {
      margin-top: 0.3rem;
      text-align: left;
    }
    .course-desc .li-head
    {
      margin-bottom: 0.05rem;
    }
     .course-desc .li-head span,
     .course-desc .seen-head span
     {
       font-size: 0.2rem;
       margin-left: 0.1rem;
       line-height: 0.28rem;
     }
     .course-desc .li-head img,
     .course-desc .seen-head img{
       margin-top: 0.04rem;
       max-height: 0.24rem;
       max-height: 0.24rem;
     }
     .seen ul li img {
       display: block;
       margin: 0 auto;
       width: 1.4rem;
       height: 1.4rem;
     }
      .course-desc p {
        font-size: 0.16rem;
        line-height: 0.26rem;
        color: #666666;
      }
      .seen ul {
        display: flex;
        margin-top: 0.2rem;
      }
      .seen ul li {
        /*flex: 1;*/
        width: 1.4rem;
        text-align: center;
        margin-left:0.35rem;
        margin-right: 0.35rem;
      }
    .seen ul li:first-child {
      margin-left: 0;
    }
    .seen ul li:last-child {
      margin-right: 0;
    }
    .seen ul li span {
      font-size: 0.16rem;
      color: #333333;
    }
    
    @media (min-width: 1200px) {
        .nav-title{
            margin-top: .3rem;
            font-size: .18rem;
        }
        .nav-title>a{
            height: .25rem;
            line-height: .25rem;
        }
        .nav-title>img{
            margin: 0 .15rem;
        }
        .nav-title>span{
            color: #5191E5;
        }

        .course-info{
            margin-top: .5rem;
            width: 100%;
        }
        .course-info>img{
            height: 4.5rem;
            width: 100%;
        }
    }
    @media (min-width: 992px) and (max-width: 1200px){

    }
    @media (min-width: 767px) and (max-width: 992px){

    }
    @media (max-width: 767px) {

    }
</style>
<style>
  .vjs-custom-skin > .video-js .vjs-big-play-button {
    width: 0.88rem;
    height: 0.88rem;
    border-radius: 50%;
    line-height: 0.88rem !important;
  }
  .vjs-custom-skin > .video-js .vjs-big-play-button {
    height: 0.88rem !important;
    line-height: 0.88rem !important;
  }
</style>
