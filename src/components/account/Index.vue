<template>
    <div>
        <v-nav></v-nav>
        <div class="content middle-container">
            <div class="content-aside">
              <div class="content-img">
                <img src="../../assets/img/jbxx1.png" alt="">
              </div>
              <div class="li-item">
                <div class="li_lf">手机：</div>
                <div class="li_rt">{{addDetail.userMobile}}</div>
              </div>
              <div class="li-item">
                <div class="li_lf">微信：</div>
                <div class="li_rt">{{addDetail.userWex}}</div>
              </div>
              <div class="li-item">
                <div class="li_lf">邮箱：</div>
                <div class="li_rt">{{addDetail.userEmail}}</div>
              </div>
              <div class="li-item">
                <div class="li_lf">地区：</div>
                <div class="li_rt">{{addDetail.nation}} {{addDetail.userCity}}</div>
              </div>
              <div class="li-item li-h2">
                <h2>最高学历信息</h2>
              </div>
              <div class="li-item">
                <div class="li_lf">最高学历：</div>
                <div class="li_rt">{{addDetail.academic}}</div>
              </div>
              <div class="li-item">
                <div class="li_lf">毕业院校：</div>
                <div class="li_rt">{{addDetail.school}}</div>
              </div>
              <div class="li-item">
                <div class="li_lf">所学专业：</div>
                <div class="li_rt">{{addDetail.professional}}</div>
              </div>
              <div class="li-item">
                <div class="li_lf">起始时间:</div>
                <div class="li_rt">{{addDetail.date1}}至{{addDetail.date2}}</div>
              </div>
              <div class="li-item li-h2">
                <img src="../../assets/img/shezhi.png" alt=""><a href="javascript:;" @click="showDetail()">编辑</a>
              </div>
            </div>
            <div class="content-main">
              <div class="main-top">
                <div class="title">
                  
                  <!--<div class="gl-box" @click="checkJlDialogVisible = true">-->
                    <!--<span class="gl-txt">查看更多</span>-->
                  <!--</div>-->
                  <div class="title-data">
                    <h1>学习总时长<span></span></h1>
                  </div>
                  <div class="data-select">
                    <el-row :gutter="10">
                      <el-col :span="6">
                        <el-select autocomplete="off" v-model="value">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-col>
                      <el-col :span="6">
                        <el-select autocomplete="off" placeholder="请选择">
                          <el-option label="1月" value="shanghai"></el-option>
                          <el-option label="2月" value="beijing"></el-option>
                          <el-option label="3月" value="shanghai"></el-option>
                          <el-option label="4月" value="beijing"></el-option>
                          <el-option label="5月" value="shanghai"></el-option>
                          <el-option label="6月" value="beijing"></el-option>
                          <el-option label="7月" value="shanghai"></el-option>
                          <el-option label="8月" value="beijing"></el-option>
                          <el-option label="9月" value="shanghai"></el-option>
                          <el-option label="10月" value="beijing"></el-option>
                          <el-option label="11月" value="shanghai"></el-option>
                          <el-option label="12月" value="beijing"></el-option>
                        </el-select>
                      </el-col>
                    </el-row>
                  </div>
                </div>
                <div class="main-contentBox">
                  <div id="echart1" style="width: 100%;height: 300px;"></div>
                </div>
              </div>
              <div class="main-bottom" v-if="list==0">
                <div class="title">
                  <h1>待处理订单</h1>
                  <div class="gl-box" @click="checkJlDialogVisible = true">
                    <span class="gl-txt">查看更多</span>
                  </div>
                </div>
                <div class="main-contentBox">
                  <img src="../../assets/img/Bitmap.png" alt="">
                  <div class="contentBox-txt">
                    <p>目前没有订单需要处理</p>
                    <p>赶紧加入学习计划，为您事业保驾护航哦~</p>
                  </div>
                </div>
              </div>
              <div class="main-bottom" v-if="list==1">
                <div class="title">
                  <h1>待处理订单</h1>
                  <div class="gl-box" @click="moreList">
                    <span class="gl-txt">查看更多</span>
                  </div>
                </div>
                <div class="main-contentBox flex-box-between order-box">
                  <div class="order-item">
                    <div class="order-title close-order">
                      <span>订单号：</span>
                      <span class="order-num">1000154909877676</span>
                      <span class="order-desc">订单详情</span>
                    </div>
                    <div class="order-info">
                      <div class="vip-power">
                        <img src="../../assets/img/icon/vip-logo.png" alt="">
                        <div class="product-info">
                          <h1>私人定制—飞跃课程</h1>
                          <h3>￥10000</h3>
                        </div>
                      </div>
                      <div class="order-status">
                        <p class="close-order-status">待付款</p>
                        <h6>2018年12月19日</h6>
                      </div>
                    </div>
                  </div>
                  <div class="order-item">
                    <div class="order-title close-order">
                      <span>订单号：</span>
                      <span class="order-num">1000154909877676</span>
                      <span class="order-desc">订单详情</span>
                    </div>
                    <div class="order-info">
                      <div class="vip-power">
                        <img src="../../assets/img/icon/vip-logo.png" alt="">
                        <div class="product-info">
                          <h1>私人定制—飞跃课程</h1>
                          <h3>￥10000</h3>
                        </div>
                      </div>
                      <div class="order-status">
                        <p class="close-order-status">待付款</p>
                        <h6>2018年12月19日</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <el-dialog title="" :visible.sync="dialogDetailVisible" :before-close="closeConfirm" width="38%">
              <h2>修改基本信息</h2>
              <el-form :model="dialogDetai" ref="dialogDetail" :rules="personalRules" label-width="80px">
                <el-row :gutter="20">
                  <el-col :span="24">
                    <el-form-item label="手机号码" prop="userMobile">
                      <el-input v-model="dialogDetai.userMobile"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item label="所在地区" prop="nation">
                      <el-select v-model="dialogDetai.nation" autocomplete="off" placeholder="请选择国家">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="" prop="userCity">
                      <el-select v-model="dialogDetai.userCity" placeholder="请选择求职地区">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="24">
                    <el-form-item label="微信号" prop="userWex">
                      <el-input v-model="dialogDetai.userWex"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="24">
                    <el-form-item label="个人邮箱" prop="userEmail">
                      <el-input v-model="dialogDetai.userEmail"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="24">
                      <el-form-item label="最高学历" prop="academic">
                        <el-select v-model="dialogDetai.academic" autocomplete="off" placeholder="请选择学历">
                          <el-option label="区域一" value="shanghai"></el-option>
                          <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="24">
                      <el-form-item label="毕业院校" prop="school">
                        <el-input v-model="dialogDetai.school" autocomplete="off"></el-input>
                      </el-form-item>
                  </el-col>
                </el-row>
  
                <el-row :gutter="20">
                  <el-col :span="24">
                    <el-form-item label="所学专业" prop="professional">
                      <el-select v-model="dialogDetai.professional" autocomplete="off" placeholder="请输入所学专业">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item label="起始时间" prop="date1">
                      <el-date-picker
                        type="date"
                        placeholder="请选择开始时间" format="yyyyMMdd"
                        autocomplete="off"
                        v-model="dialogDetai.date1"
                                      ></el-date-picker>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item prop="date2">
                      <el-date-picker
                        type="date"
                        placeholder="请选择结束时间" format="yyyyMMdd"
                        autocomplete="off"
                        v-model="dialogDetai.date2">
                      </el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
              <div slot="footer" class="dialog-footer"style="text-align: center">
                <el-button type="primary" @click="submit('dialogDetail')" style="padding: 0.1rem 0.5rem;margin-bottom: 0.4rem">提交</el-button>
              </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import accountMenu from "../../components/plug/accountMenu";
    export default {
        name: "Index",
        data() {
          // var base = +new Date();
          // var oneDay = 24*3600*1000;
          // var now = new Date(base);
            return {
                list:1,
                options: [
                  {
                    value:0,
                    label:'2016年',
                  },
                  {
                    value:1,
                    label:'2017年',
                  },
                  {
                    value:2,
                    label:'2018年',
                  },
                  {
                    value:3,
                    label:'2019年',
                  },
                ],
                value:'',
                dialogDetailVisible:false,
                dialogDetai: {
                    userMobile: '',
                    nation: '',
                    userCity: '',
                    userWex: '',
                    userEmail:'',
                    academic:'',
                    school:'',
                    professional:'',
                    date1:'',
                    date2:''
                },
                addDetail: {
                    userMobile: '18310553778',
                    nation: '中国',
                    userCity: '浙江',
                    userWex: '18310553778',
                    userEmail:'18310553778@163.com',
                    academic:'硕士',
                    school:'武汉理工大学',
                    professional:'计算机',
                    date1:'2012-9',
                    date2:'2016-6'
                },
                personalRules: {
                    userMobile: [
                        {type:'', required: true, message: '请输入手机号', trigger: 'blur'}
                    ],
                    nation: [
                        {required: true, message: '请选择国家', trigger: 'change'}
                    ],
                    userCity: [
                        {required:true, message: '请选择地区', trigger: 'change'}
                    ],
                    userWex: [
                        {required: true, message: '请输入微信号', trigger:'blur'}
                    ],
                    userEmail: [
                        {required:true, message: '请输入邮箱', trigger: 'blur'},
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                    ],
                    academic: [
                        {required: true, message: '请选择学历', trigger: 'change'}
                    ],
                    school: [
                        {required: true, message: '请输入毕业院校', trigger: 'blur'}
                    ],
                    professional: [
                        {required:'true',message:'请输入专业',trigger:'blur'}
                    ],
                    date1: [
                        {type:'date', required:'true',message:'请选择开始时间',trigger:'changge'}
                    ],
                    date2: [
                        {type:'date', required:'true',message:'请选择结束时间',trigger:'change'}
                    ],
                }
            };
        },
        methods: {
            showDetail(){
                this.dialogDetailVisible = true;
                this.dialogDetai.userMobile = this.addDetail.userMobile
                this.dialogDetai.nation = this.addDetail.nation
                this.dialogDetai.userCity = this.addDetail.userCity
                this.dialogDetai.userWex = this.addDetail.userWex
                this.dialogDetai.userEmail = this.addDetail.userEmail
                this.dialogDetai.academic = this.addDetail.academic
                this.dialogDetai.school = this.addDetail.school
                this.dialogDetai.professional = this.addDetail.professional
                this.dialogDetai.date1 = this.addDetail.date1
                this.dialogDetai.date2 = this.addDetail.date2
            },
          moreList(){
              this.$router.push('/orders');
          },
          closeConfirm(done) {
            this.$confirm('尚未保存，是否关闭？')
              .then(_ => {
                done();
              })
              .catch(_ => {
              });
          },
          //关闭提示
          handleClose(done) {
            this.$confirm('确认关闭？')
              .then(_ => {
              })
              .catch(_ => {
              })  ;
          },
          submit(formName){
              this.$refs[formName].validate((valid) => {
                  if(valid) {
                      alert('submit!')
                  }else {
                      console.log('error submit!!');
                      return false;
                  }
              })
          },
          drawLine() {
            let myChart = this.$echarts.init(document.getElementById('echart1'));
            //绘制图表
            myChart.setOption({
              title: {
                  subtext: '学习时长（分钟）',
              },
              tooltip:{},
              xAxis: {
                data:[
                  2,4,4,6,8
                ]
              },
              yAxis: {},
              series:[{
                name:'',
                type: 'bar',
                data:[5,4,2,8,10]
              }]
            });
          },
        },
        mounted(){
          this.drawLine()
        },
        components : {
            "v-nav": accountMenu,
        }
    }
</script>

<style scoped>
    @import "../../assets/css/main.css";
    .el-progress__text{
      display: none;
    }
    .middle-container {
      padding-bottom: 0.5rem;
      display: flex;
    }
    .content-aside {
      box-shadow: 0 2px 9px 0 rgba(109,107,107,0.30);
      width: 2.5rem;
      padding-bottom: 0.2rem;
    }
    .content-main {
      flex: 1;
      margin-left: 0.3rem;
    }
    .content-img {
      width: 100%;
      height: 0.52rem;
    }
    .content-aside img {
      max-width: 100%;
      max-height: 100%;
      background-size:100%;
    }
    .li-item {
      display: flex;
      padding: 0 0.2rem;
      margin-top: 0.2rem;
    }
    .li_lf,
    .li_rt {
      display: inline-block;
    }
    .li_lf {
      width: 0.72rem;
      font-size: 0.14rem;
      color: #9B9B9B;
      text-align: left;
    }
  .li_rt {
    flex: 1;
    font-size: 0.14rem;
    text-align: left;
    color: #000000;
  }
  .content-aside h2 {
    font-size: 0.14rem;
    color: #4E8CEE;
    text-align: left;
  }
  .li-h2 {
    margin-top: 0.4rem;
  }
    .li-item a {
      font-size: 0.14rem;
      line-height: 0.2rem;
      margin-left: 0.1rem;
      color: #4E8CEE;
    }
  .li-item img {
    width: 0.2rem;
    height: 0.2rem;
  }
  .main-top,
  .main-bottom {
    padding: 0 0.2rem;
  }
  .main-top {
    /*height: 2.5rem;*/
    box-shadow: 0 2px 9px 0 rgba(109,107,107,0.30);
  }
  .main-bottom {
    height: 2.12rem;
    box-shadow: 0 2px 9px 0 rgba(109,107,107,0.30);
    margin-top: 0.2rem;
  }
    .title {
      display: flex;
      justify-content: space-between;
      padding-bottom: .15rem;
    }

    .title h1 {
      font-size:0.16rem;
      color: #000000;
      letter-spacing: 0;
      line-height: .4rem;
      width: 1.2rem;
      margin-left: .05rem;
    }

    .gl-box {
      width: auto;
      margin-right: 0.2rem;
      line-height: 0.4rem;
      cursor: pointer;
    }

    .gl-box span {
      width: 0.2rem;
      height: 0.2rem;
      font-size: 0.14rem;
      color: #95BAEB;
    }
  .contentBox-txt {
    width: 2.24rem;
    color: rgba(155, 155, 155, 1);
    font-size: 0.12rem;
    text-align: left;
    font-family: FZLTXHK--GBK1-0;
    display: inline-block;
    padding-top: 0.4rem;
    margin-left: 0.3rem;
  }
    .contentBox-txt p {
      line-height: 0.2rem;
    }
    /*有订单*/
  .order-item {
    width: 4.06rem;
  }
    .close-order{
      background: #EAEAEA;
    }
    .order-title{
      height: .35rem;
      padding: .1rem;
      font-size: .12rem;
      color: #9B9B9B;
      line-height: .15rem;
      text-align: left;
    }
    .order-title span{
      display: inline-block;
    }
    .order-num{
      color: #4A4A4A;
    }
    .order-desc{
      font-size: .14rem;
      color: #4A4A4A;
      float: right;
    }
    .order-info{
      height: .9rem;
      display: flex;
      padding: .25rem .2rem;
      background: #FFFFFF;
      border: 1px solid #DCDCDC;
      border-top: none;
    }
    .vip-power {
      flex: 1;
      text-align: left;
    }
    .product-info{
      width: auto;
      display: inline-block;
    }
    .product-info h1{
      font-size: .14rem;
      line-height: .2rem;
      color: #5191E5;
    }
    .order-status{
      width: 1.08rem;
    }
    .product-info h3 {
      font-size: 0.14rem;
      text-align: left;
    }
    .order-status p{
      border: 1px solid #E2E2E2;
      border-radius: 5px;
      font-size: .12rem;
      line-height: .17rem;
      padding: .03rem .2rem;
    }
    .order-status h6{
      font-size: .1rem;
      line-height: .14rem;
      color: #9B9B9B;
    }
  /*弹框*/
  .el-form-item__content {
    text-align: left;
  }
    .el-form-item__label {
      text-align: left;
    }
  .el-dialog h2 {
    width: 1.6rem;
    text-align: right;
    padding-right: 30px;
    color: #000000;
    font-size: 0.2rem;
    margin-bottom: 0.3rem;
  }
</style>
<style>
  .el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before {
    content: '';
  }
  .el-select,
  .el-date-editor.el-input,
  .el-date-editor.el-input__inner
  {
    width: 100%;
  }
</style>
