<template>
  <div class="container-fluid">
    <div class="banner">
      <img src="../../assets/img/banner/banner-1.png" alt="">
      <div class="container tabs-title">
        <ul role="tablist">
          
          <li role="presentation" class="active" @click="changeTab(1)"><a role="tab" data-toggle="tab">公司介绍</a></li>
          <li role="presentation" @click="changeTab(2)"><a role="tab" data-toggle="tab">全职招募</a></li>
          <li role="presentation" @click="changeTab(3)"><a role="tab" data-toggle="tab">导师招募</a></li>
          <li role="presentation" @click="changeTab(4)"><a role="tab" data-toggle="tab">校园合伙人招募</a></li>
        
        </ul>
      </div>
    </div>
    <div class="tab-content">
      <div v-if="tabIndex == 1" class="container radius-box" id="companList">
        <div v-for="(item,index) in campanyList" class="companList">
          <h2>{{item.title}}</h2>
          <p>{{item.txt}}</p>
        </div>
      </div>
      <div v-if="tabIndex == 2" class="container radius-box">
        <div class="chooseJob">
          <el-select v-model="value1" v-bind:class="{active:nums == 0}"  @click.native="chooseBtn(0)"
                     placeholder="技术开发部">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="value2" v-bind:class="{active:nums == 1}" @click.native="chooseBtn(1)" placeholder="商务部">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="value3" v-bind:class="{active:nums == 2}" @click.native="chooseBtn(2)" placeholder="市场部">
            <el-option
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="value4" v-bind:class="{active:nums == 3}" @click.native="chooseBtn(3)" placeholder="产品部">
            <el-option
              v-for="item in options4"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="value5" v-bind:class="{active:nums == 4}" @click.native="chooseBtn(4)" placeholder="人力资源部">
            <el-option
              v-for="item in options5"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="title companList">
          <h2>
            <img src="../../assets/img/icon/title-2.png" alt="">
            宣传标题</h2>
          <p class="teacher-title-desc">
            <img src="../../assets/img/icon/create_time.png" alt="">
            发布时期：2018年11月11日
          </p>
          <p class="teacher-title-desc">
            <img src="../../assets/img/icon/create_time.png" alt="">
            发布时期：2018年11月11日
          </p>
        </div>
        <div class="desc companList">
          <div>
            <h2>
              
              宣传标题
            </h2>
            <p>1.宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题；
            </p>
            <p>
              2.宣传标题宣传标题宣传标题，宣传标题，宣传标题宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题宣传标题；
            </p>
            <p>
              3.宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题宣传标题宣传标题宣传标题。
            </p>
          </div>
          <div>
            <h2>
              
              宣传标题
            </h2>
            <p>1.宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题；
            </p>
            <p>
              2.宣传标题宣传标题宣传标题，宣传标题，宣传标题宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题宣传标题；
            </p>
            <p>
              3.宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题宣传标题宣传标题宣传标题。
            </p>
          </div>
          <div>
            <h2>
              
              宣传标题
            </h2>
            <p>1.宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题；
            </p>
            <p>
              2.宣传标题宣传标题宣传标题，宣传标题，宣传标题宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题宣传标题；
            </p>
            <p>
              3.宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题宣传标题宣传标题宣传标题。
            </p>
          </div>
        </div>
        <div class="title companList">
          <h2>
            <img src="../../assets/img/icon/title-3.png" alt="">
            申请方式</h2>
          <p>
            申请方式申请方式申请方式申请方式
          </p>
        </div>
      </div>
      <div v-if="tabIndex == 3" class="container radius-box">
        <div class="title companList">
          <h2>
            <img src="../../assets/img/icon/title-2.png" alt="">
            宣传标题</h2>
          <p class="teacher-title-desc">
            <img src="../../assets/img/icon/create_time.png" alt="">
            发布时期：2018年11月11日
          </p>
        </div>
        <div class="desc companList">
          <div>
            <h2>
              
              宣传标题
            </h2>
            <p>1.宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题；
            </p>
            <p>
              2.宣传标题宣传标题宣传标题，宣传标题，宣传标题宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题宣传标题；
            </p>
            <p>
              3.宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题宣传标题宣传标题宣传标题。
            </p>
          </div>
          <div>
            <h2>
              
              宣传标题
            </h2>
            <p>1.宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题；
            </p>
            <p>
              2.宣传标题宣传标题宣传标题，宣传标题，宣传标题宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题宣传标题；
            </p>
            <p>
              3.宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题宣传标题宣传标题宣传标题。
            </p>
          </div>
          <div>
            <h2>
              
              宣传标题
            </h2>
            <p>1.宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题；
            </p>
            <p>
              2.宣传标题宣传标题宣传标题，宣传标题，宣传标题宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题宣传标题；
            </p>
            <p>
              3.宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题宣传标题宣传标题宣传标题。
            </p>
          </div>
        </div>
        <div class="title companList">
          <h2>
            <img src="../../assets/img/icon/title-3.png" alt="">
            申请方式</h2>
          <p>
            申请方式申请方式申请方式申请方式
          </p>
        </div>
      </div>
      <div v-if="tabIndex == 4" class="container school-info radius-box">
        <div class="school-title companList">
          <h2>
            <img src="../../assets/img/icon/title-1.png" alt="">
            宣传标题</h2>
          <p>宣传文案宣传文案宣传文案宣传文案，宣传文案宣传文案，宣传文案宣传文案宣传文案，宣传文案宣传文案，宣传文案宣传文案宣传文案宣传文案宣传文案宣传文案，宣传文案宣传文案宣传文案宣传文案</p>
        </div>
        <div class="desc companList">
          <div>
            <h2>
              
              宣传标题
            </h2>
            <p>1.宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题；
            </p>
            <p>
              2.宣传标题宣传标题宣传标题，宣传标题，宣传标题宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题宣传标题；
            </p>
            <p>
              3.宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题宣传标题宣传标题宣传标题。
            </p>
          </div>
          <div>
            <h2>
              
              宣传标题
            </h2>
            <p>1.宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题；
            </p>
            <p>
              2.宣传标题宣传标题宣传标题，宣传标题，宣传标题宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题宣传标题；
            </p>
            <p>
              3.宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题宣传标题宣传标题宣传标题。
            </p>
          </div>
          <div>
            <h2>
              
              宣传标题
            </h2>
            <p>1.宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题；
            </p>
            <p>
              2.宣传标题宣传标题宣传标题，宣传标题，宣传标题宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题宣传标题；
            </p>
            <p>
              3.宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题，宣传标题宣传标题宣传标题宣传标题宣传标题宣传标题。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../../fetch/api';
  
  export default {
    name: "Join",
    data() {
      return {
        tabIndex: 1,   //默认为公司介绍,
        recruitData: {},
        campanyList: [
          {
            title: '公司介绍标题',
            txt: '资讯内容资讯内容资讯，内容资讯内容资讯内容资讯内容资讯，内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯，内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯，内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯，内容资讯内容资讯内容资讯内容资讯内容，内容资讯内容资讯内容资讯内容资讯内容，内容资讯内容资讯内容资讯内容资讯内容，内容资讯内容资讯内容资讯内容资讯内容内容资讯内容资讯内容资讯内容资讯内容内容资讯内容资讯内容资讯内容资讯内容，内容资讯内容资讯内容资讯内容资讯内容内容资讯内容资讯内容资讯内容资讯内容，内容资讯内容资讯内容资讯内容资讯内容。'
          },
          {
            title: '公司介绍标题',
            txt: '资讯内容资讯内容资讯，内容资讯内容资讯内容资讯内容资讯，内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯，内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯，内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯，内容资讯内容资讯内容资讯内容资讯内容，内容资讯内容资讯内容资讯内容资讯内容，内容资讯内容资讯内容资讯内容资讯内容，内容资讯内容资讯内容资讯内容资讯内容内容资讯内容资讯内容资讯内容资讯内容内容资讯内容资讯内容资讯内容资讯内容，内容资讯内容资讯内容资讯内容资讯内容内容资讯内容资讯内容资讯内容资讯内容，内容资讯内容资讯内容资讯内容资讯内容。'
          },
          {
            title: '公司介绍标题',
            txt: '资讯内容资讯内容资讯，内容资讯内容资讯内容资讯内容资讯，内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯，内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯，内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯内容资讯，内容资讯内容资讯内容资讯内容资讯内容，内容资讯内容资讯内容资讯内容资讯内容，内容资讯内容资讯内容资讯内容资讯内容，内容资讯内容资讯内容资讯内容资讯内容内容资讯内容资讯内容资讯内容资讯内容内容资讯内容资讯内容资讯内容资讯内容，内容资讯内容资讯内容资讯内容资讯内容内容资讯内容资讯内容资讯内容资讯内容，内容资讯内容资讯内容资讯内容资讯内容。'
          },
        ],
        options1: [{
            value: '1',
            label: '算法工程师1'
          }, {
            value: '2',
            label: '测试工程师1'
          }, {
            value: '3',
            label: '前端开发工程师2'
          }],
        options4: [{
          value: '1',
          label: '算法工程师4'
        }, {
            value: '2',
            label: '测试工程师4'
          }, {
            value: '3',
            label: '前端开发工程师4'
          }],
        options2: [{
          value: '1',
          label: '算法工程师2'
        }, {
          value: '2',
          label: '测试工程师2'
        }, {
            value2: '3',
            label: '前端开发工程师2'
          }],
        options3: [{
          value: '1',
          label: '算法工程师3'
        }, {
          value3: '2',
          label: '测试工程师3'
        }, {
          value: '3',
          label: '前端开发工程师3'
        }],
        options5: [{
          value: '1',
          label: '算法工程师5'
        }, {
          value3: '2',
          label: '测试工程师5'
        }, {
          value: '3',
          label: '前端开发工程师5'
        }],
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        nums: -1
      };
    },
    methods: {
      changeTab(index) {
        this.tabIndex = index;
      },
      chooseBtn (val) {
        console.log(val)
        this.nums = val
      }
    },
    mounted: function () {
      /**调用接口**/
      api.RecruitType().then(res => {
          if (res.status === 'y') {
            this.city = res.data.city;
            this.post = res.data.post;
            this.popularity = res.data.popularity;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
</script>

<style scoped>
  img {
    vertical-align: middle;
  }
  
  .teacher-title-desc {
    display: flex;
    align-items: center;
    
  }
  
  .tab-content {
    text-align: justify;
  }
  
  .companList h2 {
    font-size: 0.18rem;
    margin-bottom: 0.1rem;
    color: #333333;
  }
  
  .companList p {
    font-size: 0.14rem;
    line-height: 0.26rem;
  }
  
  .school-info > div {
    
    text-align: left;
  }
  
  .radius-box > div {
    background: #FFFFFF;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.08);
    border-radius: .3rem;
  }
  
  .radius-box > div.companList {
    background-color: #F6F6FA;
    padding: 0.3rem 0.5rem 0.2rem;
  }
  
  .tabs-title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    -o-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    height: auto;
  }
  
  .radius-box > div.chooseJob {
    box-shadow: none;
    display: flex;
    justify-content: space-between;
  }
  
  .chooseJob /deep/ .el-select {
    text-align: center;
    width: 2.15rem;
  }
  
  .chooseJob /deep/ .el-input--suffix .el-input__inner {
    /*background-color: #5191E5;*/
    color: #999999;
    font-size: 0.18rem;
    text-align: center;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    border-radius: 20px;
    background-color: #F6F6FA;
  }
  .chooseJob /deep/ .el-input__suffix {
    left: 68%;
  }
  .chooseJob .active  /deep/  .el-input--suffix .el-input__inner {
    background-color: #5191E5;
    color: #FFFFFF;
    font-size: 0.18rem;
  }
  
  .tabs-title ul {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    border: none !important;
    flex-wrap: wrap;
  }
  
  .tabs-title li {
    height: 100%;
  }
  
  .active a {
    background: #5191E5 !important;
    color: #FFF !important;
    
  }
  
  .tabs-title li a {
    text-decoration: none !important;
    color: #999;
    background: #F6F6FA;
    border-radius: 50%;
    text-align: center;
    display: block;
  }
  
  @media (min-width: 1200px) {
    .banner {
      height: 4.5rem;
      position: relative;
      margin-bottom: .8rem;
    }
    
    .banner > img {
      height: 4.5rem;
    }
    
    .tabs-title {
      bottom: -0.8rem;
    }
    
    .tabs-title li a {
      height: 1.6rem;
      width: 1.6rem;
      box-shadow: 0 2px 24px 0 rgba(124, 124, 124, 0.24);
      line-height: 1.6rem;
      font-size: .18rem;
    }
    
    .tab-content {
      padding-top: .6rem;
    }
    
    .school-title h1 {
      font-size: .2rem;
      color: #333;
      /*padding: .2rem 0;*/
    }
    
    .school-title p {
      color: #666;
      font-size: .16rem;
      text-align: justify;
      line-height: .24rem;
      margin-top: .1rem;
    }
    
    .school-info > div {
      padding: .2rem;
      margin-bottom: .5rem;
    }
    
    .school-desc h1 {
      font-size: .18rem;
      color: #333;
      height: .25rem;
      line-height: .25rem;
    }
    
    .school-desc p {
      font-size: .14rem;
      color: #333;
      line-height: .26rem;
    }
    
    
    .radius-box .title p {
      color: #666;
      font-size: .16rem;
      text-align: justify;
      line-height: .24rem;
      margin-top: .1rem;
    }
    
    .radius-box .title p img {
      margin-right: .1rem;
    }
    
    .radius-box .title h1 {
      font-size: .2rem;
      color: #333;
    }
    
    .radius-box > div {
      padding: .2rem;
      margin-bottom: .5rem;
    }
    
    .radius-box .desc h1 {
      font-size: .18rem;
      color: #333;
      height: .25rem;
      line-height: .25rem;
    }
    
    .radius-box .desc p {
      font-size: .14rem;
      color: #333;
      line-height: .26rem;
    }
    
    .radius-box .desc > div {
      margin-bottom: .3rem;
    }
    
    
  }
  
  @media (min-width: 992px) and (max-width: 1200px) {
    
    .banner {
      height: 4.5rem;
      position: relative;
      margin-bottom: .8rem;
    }
    
    .banner > img {
      height: 4.5rem;
    }
    
    .tabs-title {
      bottom: -0.6rem;
    }
    
    .tabs-title li a {
      height: 1.2rem;
      width: 1.2rem;
      box-shadow: 0 2px 24px 0 rgba(124, 124, 124, 0.24);
      line-height: 1.2rem;
      font-size: .16rem;
    }
    
    .tab-content {
      padding-top: .3rem;
    }
    
    .school-title h1 {
      font-size: .2rem;
      color: #333;
      /*padding: .2rem 0;*/
    }
    
    .school-title p {
      color: #666;
      font-size: .16rem;
      text-align: justify;
      line-height: .24rem;
      margin-top: .1rem;
    }
    
    .school-info > div {
      padding: .2rem;
      margin-bottom: .5rem;
    }
    
    .school-desc h1 {
      font-size: .18rem;
      color: #333;
      height: .25rem;
      line-height: .25rem;
    }
    
    .school-desc p {
      font-size: .14rem;
      color: #333;
      line-height: .26rem;
    }
    
  }
  
  @media (min-width: 767px) and (max-width: 992px) {
    
    .tabs-title ul {
      justify-content: space-around !important;
    }
    
    .banner {
      height: 4.5rem;
      position: relative;
      margin-bottom: .6rem;
    }
    
    .banner > img {
      height: 4rem;
    }
    
    .tabs-title {
      bottom: -0.1rem;
    }
    
    .tabs-title li a {
      height: 1.2rem;
      width: 1.2rem;
      box-shadow: 0 2px 24px 0 rgba(124, 124, 124, 0.24);
      line-height: 1.2rem;
      font-size: .16rem;
    }
    
    .tab-content {
      padding-top: .2rem;
    }
    
    .school-title h1 {
      font-size: .2rem;
      color: #333;
      /*padding: .2rem 0;*/
    }
    
    .school-title p {
      color: #666;
      font-size: .16rem;
      text-align: justify;
      line-height: .24rem;
      margin-top: .1rem;
    }
    
    .school-info > div {
      padding: .2rem;
      margin-bottom: .35rem;
    }
    
    .school-desc h1 {
      font-size: .18rem;
      color: #333;
      height: .25rem;
      line-height: .25rem;
    }
    
    .school-desc p {
      font-size: .14rem;
      color: #333;
      line-height: .26rem;
    }
    
  }
  
  @media (max-width: 767px) {
    
    .banner {
      height: 2rem;
      position: relative;
      margin-bottom: .3rem;
    }
    
    .banner > img {
      height: 1.8rem;
    }
    
    .tabs-title {
      bottom: -0.1rem;
      width: 100%;
    }
    
    .tabs-title li a {
      height: .6rem;
      width: .6rem;
      box-shadow: 0 2px 24px 0 rgba(124, 124, 124, 0.24);
      padding-top: .2rem;
      line-height: .2rem;
      font-size: .12rem;
    }
    
    .tab-content {
      padding-top: .2rem;
    }
    
    .school-title h1 {
      font-size: .2rem;
      color: #333;
      /*padding: .2rem 0;*/
    }
    
    .school-title p {
      color: #666;
      font-size: .16rem;
      text-align: justify;
      line-height: .24rem;
      margin-top: .1rem;
    }
    
    .school-info > div {
      padding: .2rem;
      margin-bottom: .35rem;
    }
    
    .school-desc h1 {
      font-size: .18rem;
      color: #333;
      height: .25rem;
      line-height: .25rem;
    }
    
    .school-desc p {
      font-size: .14rem;
      color: #333;
      line-height: .26rem;
    }
    
  }

</style>
<style>
  .el-scrollbar, .el-select-dropdown.el-popper
   {
    border-radius: 10%;
  }
  .el-select-dropdown__wrap.el-scrollbar__wrap {
    background-color: #5191E5;
    text-align: center;
    
  }
  .el-select-dropdown__item {
    color: #FFFFFF;
    margin: 0.05rem 0;
    opacity: 0.8;
  }
  .el-popper[x-placement^=bottom] .popper__arrow::after {
    top: 0;
  }
  .el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
     background-color: #5191E5;
  }
  .chooseJob .el-select-dropdown__item.selected {
    color: #FFFFFF;
  }
</style>
