<template>
  <div>
    <v-nav></v-nav>
    <div class="middle-container">
      <div class="content">
        <div class="bg_content" v-if="testNum==0">
          <div class="head-title">选择性别</div>
          <div class="item_flex">
            <div class="test-item" @click="male(1)">
              <img src="../../assets/img/Bitmap_Copy4.png" alt="">
              <span>符合</span>
              <img src="../../assets/img/yixuanzhong-copy4.png" alt="" class="chenkOut" v-if="num1==nums">
              <img src="../../assets/img/yixuanzhong-copy3.png" alt="" class="CheckOn" v-if="num1==1">
            </div>
            <div class="test-item" @click="male(2)">
              <img src="../../assets/img/Bitmap_Copy5.png" alt="">
              <span>不符合</span>
              <img src="../../assets/img/yixuanzhong-copy4.png" alt="" class="chenkOut" v-if="num2==nums">
              <img src="../../assets/img/yixuanzhong-copy3.png" alt="" class="CheckOn" v-if="num2==2">
            </div>
            <div class="test-item" @click="male(3)">
              <img src="../../assets/img/Bitmap_Copy6.png" alt="">
              <span>一般</span>
              <img src="../../assets/img/yixuanzhong-copy4.png" alt="" class="chenkOut" v-if="num3==nums">
              <img src="../../assets/img/yixuanzhong-copy3.png" alt="" class="CheckOn" v-if="num3==3">
            </div>
            
          </div>
          <div style="position: absolute;bottom:0.8rem;left:37%;font-size: 0.18rem;" class="test_btn">
            <el-row>
              <el-button type="info" plain disabled>下一题</el-button>
            </el-row>
          </div>
        </div>
        
        <div class="bg_content" v-if="testNum == 1">
          <div class="head-title">文字类测试题目标题</div>
          <div class="item_flex">
            <div class="test-item" @click="male(1)">
              <img src="../../assets/img/Bitmap_Copy4.png" alt="">
              <span>符合</span>
              <img src="../../assets/img/yixuanzhong-copy4.png" alt="" class="chenkOut" v-if="num1==nums">
              <img src="../../assets/img/yixuanzhong-copy3.png" alt="" class="CheckOn" v-if="num1==1">
            </div>
            <div class="test-item" @click="male(2)">
              <img src="../../assets/img/Bitmap_Copy5.png" alt="">
              <span>不符合</span>
              <img src="../../assets/img/yixuanzhong-copy4.png" alt="" class="chenkOut" v-if="num2==nums">
              <img src="../../assets/img/yixuanzhong-copy3.png" alt="" class="CheckOn" v-if="num2==2">
            </div>
            <div class="test-item" @click="male(3)">
              <img src="../../assets/img/Bitmap_Copy6.png" alt="">
              <span>一般</span>
              <img src="../../assets/img/yixuanzhong-copy4.png" alt="" class="chenkOut" v-if="num3==nums">
              <img src="../../assets/img/yixuanzhong-copy3.png" alt="" class="CheckOn" v-if="num3==3">
            </div>
  
          </div>
          <div style="position: absolute;bottom:0.8rem;left:37%;font-size: 0.18rem;" class="test_btn">
            <el-row>
              <el-button type="primary">下一题</el-button>
            </el-row>
          </div>
        </div>
        
        <div class="bg_content" v-if="testNum == 2">
          <div class="head-title">图片类测试题目标题</div>
          <div class="item_flex">
            <div class="test-item" @click="male(1)">
              <img src="../../assets/img/Bitmap_Copy4.png" alt="">
              <span>符合</span>
              <img src="../../assets/img/yixuanzhong-copy4.png" alt="" class="chenkOut" v-if="num1==nums">
              <img src="../../assets/img/yixuanzhong-copy3.png" alt="" class="CheckOn" v-if="num1==1">
            </div>
            <div class="test-item" @click="male(2)">
              <img src="../../assets/img/Bitmap_Copy5.png" alt="">
              <span>不符合</span>
              <img src="../../assets/img/yixuanzhong-copy4.png" alt="" class="chenkOut" v-if="num2==nums">
              <img src="../../assets/img/yixuanzhong-copy3.png" alt="" class="CheckOn" v-if="num2==2">
            </div>
            <div class="test-item" @click="male(3)">
              <img src="../../assets/img/Bitmap_Copy6.png" alt="">
              <span>一般</span>
              <img src="../../assets/img/yixuanzhong-copy4.png" alt="" class="chenkOut" v-if="num3==nums">
              <img src="../../assets/img/yixuanzhong-copy3.png" alt="" class="CheckOn" v-if="num3==3">
            </div>
          </div>
          <div style="position: absolute;bottom:0.8rem;left:37%;font-size: 0.18rem;" class="test_btn">
            <el-row>
              <el-button type="primary">下一题</el-button>
            </el-row>
          </div>
        </div>
        
        
        <div class="bg_content" v-if="testNum == 3">
          <div class="head-title">最后一步获得评测结果</div>
          <div class="item_flex item_input" >
            <el-input v-model="input" placeholder="请输入姓名"></el-input>
          
          </div>
          <div class="item_flex item_input">
            <el-input v-model="input" placeholder="请输入姓名"></el-input>
          
          </div>
          <div style="position: absolute;bottom:0.8rem;left:37%;font-size: 0.18rem;" class="test_btn">
            <el-row>
              <el-button type="primary">查看评优结果</el-button>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import accountMenu from '../../components/plug/accountMenu'
  export default {
    name: "TestOptimal",
    data () {
      return {
        testNum:0,
        input: '',
        txt1: "题目内容题目内容题目内容题目内容题目内容题目内容",
        txt2:'题目内容题目内容题目内容题目内容题目内容题目内容',
        num1:0,
        num2:0,
        num3:0,
        nums:0,
        radio: '0',
      }
    },
    methods: {
      male(testNum){
        if(testNum==1){
          this.num1 = testNum;
          this.num2=0;
          this.num3=0;
        }
        if(testNum==2){
          this.num2 = testNum;
          this.num1=0;
          this.num3=0;
        }
        if(testNum==3){
          this.num3 = testNum;
          this.num2=0;
          this.num1=0;
        }
      },
      abby(testNum){
        // this.testNum = 2;
        // if (testNum == 2) {
        //   this.testNum = 3;
        // }
      },
    },
    components: {
      'v-nav': accountMenu
    },
    mounted() {
    }
  }
</script>

<style scoped>
  @import "../../assets/css/main.css";
  .content{
    background: #FFFFFF;
    box-shadow: 0 2px 9px 0 rgba(109,107,107,0.30);
    width: 9.8rem  !important;
    margin: 0 auto .6rem auto;
    text-align: left;
  }
  .content {
    height: 6.7rem;
    position: relative;
    background: url(../../assets/img/Path12.png) no-repeat center;
    padding-top:1.26rem;
    padding-left: 2.54rem;
    border-radius: 3%;
  }
  .bg_content {
    position: relative;
    width: 6.4rem;
    height: 4.67rem;
    padding-top: 1rem;
    text-align: center;
    /*background: #4A4A4A;*/
    font-family: PingFangSC-Regular;
    font-size: 0.2rem;
    color: #000000;
    letter-spacing: 0;
  }
  .item_flex {
    display: flex;
    padding: 0 1rem;
  }
  .item_input {
    margin-top: 0.3rem;
  }
  .test-item {
    width: 2.42rem;
    height: 1.52rem;
    display: inline-block;
    margin: 0 0.2rem;
    margin-top: 0.3rem;
    cursor: pointer;
    position: relative;
  }
  .test-item img.chenkOut,
  .test-item img.CheckOn
  {
    position: absolute;
    top:130px;
    left: 50%;
    margin-left: -10px;
    text-align: center;
  }
  .test-item span {
    font-size: 0.14rem;
    position: absolute;
    width: 1.06rem;
    top: 100px;
    left: 50%;
    margin-left: -0.53rem;
  }
  .test-item .el-radio {
    position: absolute;
    top: 130px;
    left: 50%;
    margin-left: -7px;
  }

  
  .item_txt {
    padding: 0.2rem;
    background: #F0EFEF;
    font-size: 0.18rem;
  }
  .item_txt:hover {
    background-color: #D0E3FA;
    color: #5191E5;
  }
  .test-item p {
    color: #9B9B9B;
    font-size: 0.18rem;
    text-align: left;
    font-family: PingFangSC-Regular;
  }
  img {
    max-height: 100%;
    max-width: 100%
  }
  .test_btn .el-button {
    padding: 0.11rem 0.5rem;
  }
</style>
<style>
  .test-item .el-radio__label {
    display: none;
  }
</style>