<template>
	<div>
		<v-nav></v-nav>
		<div class="content middle-container">
			<div class="title">
				<h1 class="Regular">我的职业档案</h1>
				<div class="gl-box" @click="checkJlDialogVisible = true">
					<button><img src="../../assets/img/cmm.png" alt=""></button>
					<span class="gl-txt">管理</span>
				</div>
			</div>
			<div class="record-box" v-if="jlNum == 0">
				<div class="record-item" @click="built()">
					<img src="../../assets/img/record.png" alt="">
					<p class="record-desc">添加新简历</p>
				</div>
			</div>
			<div class="record-box" v-if="jlNum == 1">
				<div class="record-item" v-bind:class="{blueJL:blueNum == index}" v-for="(item,index) in recordNumList"
				     @click="checkJL(index)">
					<img :src="item.srcs">
					<p class="record-desc">{{item.txt}}</p>
				</div>
			</div>
		</div>
		 
		<!--管理档案-->
		<el-dialog
				title=""
				:visible.sync="checkJlDialogVisible"
				width="50%"
				left style="text-align: left;margin-top: 18vh" class="glDialog">
      <span class="checkManageResume">
          <h3>管理我的职业档案</h3>
          <div class="ManageResume">
              <div class="record-item" v-for="(item,index) in recordNumList">
                  <img :src="item.srcs">
                  <i class="el-icon-error" @click="del(index)" style="color:#D0021B"></i>
                  <p class="record-desc">{{item.txt}}</p>
              </div>
          </div>
      </span>
			<span slot="footer" class="dialog-footer" style="text-align: center">
        <el-button type="primary" @click="delThis()">保存</el-button>
        <el-button @click="checkJlDialogVisible = false">取 消</el-button>
    </span>
		</el-dialog>
		<div class="middle-container">
			<router-view/>
		</div>
	</div>
</template>

<script>
    import accountment from "../../components/plug/accountMenu"
    
    export default {
        name: "RecordNew",
	    
        data: function () {
            return {
                jlNum: 1,                   //简历有无  1：有  0：没有
                blueNum: -1,                //切换简历变蓝
	            
                checkJlDialogVisible: false,
                recordNumList: [
                    {
                        srcs: require('../../assets/img/noRecord.png'),
                        txt: '张珊的简历'
                    },
                    {
                        srcs: require('../../assets/img/noRecord.png'),
                        txt: '未命名简历'
                    },
                    {
                        srcs: require('../../assets/img/record.png'),
                        txt: '添加新简历'
                    },
                ],
	            
            };
        },
        methods: {
            //管理简历
            checkJlDialog() {
                this.checkJlDialogVisible = true;
            },
            del(index) {
            
            },
            delThis(scope) {
                console.log(scope);
            },
            //无简历时新建简历
            built() {
                this.$router.push('/RecordBuilt')
            },
            // 有简历切换查看简历
            checkJL(index) {
                this.blueNum = index;
                let lens = this.recordNumList.length - 1;
                this.nums = 0;
                if (index != lens) {
	                this.$router.push('/RecordCheck')
                }
                if (index == lens) {
                    this.$router.push('/RecordBuilt')
                }
            },
	        
        },
        components: {
            "v-nav": accountment
        },
        mounted() {
        }
    }
</script>

<style scoped>
	@import "../../assets/css/main.css";
	
	/*div {*/
	/*width: 100%;*/
	/*}*/
	
	h1, h2, h3, h4, h5, h6, p {
		margin: 0 !important;
		font-family: tahoma, arial, "Hiragino Sans GB", "\5FAE\8F6F\96C5\9ED1", simsun, sans-serif !important;
	}
	
	width200 {
		width: 2rem;
	}
	
	width270 {
		width: 2.7rem;
	}
	
	.content {
		padding: .35rem;
		background: #FFFFFF;
		box-shadow: 0 2px 9px 0 rgba(109, 107, 107, 0.30);
		margin-bottom: 1rem;
	}
	
	.title {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #C3C3C3;
		padding-bottom: .15rem;
	}
	
	.title h1 {
		font-size: .2rem;
		color: #4A4A4A;
		letter-spacing: 0;
		line-height: .4rem;
		width: 1.2rem;
		margin-left: .05rem;
	}
	
	.gl-box {
		width: auto;
		margin-right: 0.2rem;
		line-height: 0.4rem;
	}
	
	.gl-box span {
		width: 0.2rem;
		height: 0.2rem;
		font-size: 0.14rem;
		color: #95BAEB;
	}
	
	.gl-box button {
		opacity: 0.45;
		background: #FFFFFF;
		width: .2rem;
		height: .2rem;
		color: #FFF;
		margin-top: 0.15rem;
	}
	
	.record-box {
		padding: 0.4rem 0.05rem;
		text-align: left;
	}
	
	.record-item {
		display: inline-block;
		width: 1.02rem;
		height: 1.57rem;
		margin-right: 0.3rem;
	}
	
	.record-item.blueJL p {
		color: #5191E5;
	}
	
	.checkManageResume {
		color: rgba(0, 0, 0, 1);
		font-size: 0.18rem;
		text-align: left;
		font-family: PingFangSC-Regular;
	}
	
	.ManageResume > div {
		margin-top: 0.2rem;
		margin-left: 0.3rem;
	}
	
	.ManageResume i {
		position: absolute;
		margin-left: -7px;
		margin-top: -10px;
	}
	
	.record-desc {
		font-family: PingFangSC-Regular;
		font-size: 0.14rem;
		color: #9B9B9B;
		letter-spacing: 0;
		margin-top: 0.1rem;
		/*margin-left: 0.05rem;*/
		text-align: center;
		line-height: 0.3rem;
	}
	
	.record {
		margin-bottom: 1rem;
	}
	
	.record-item8 {
		width: 68%;
		margin-right: 2%;
		box-shadow: 0 2px 9px 0 rgba(109, 107, 107, 0.30);
		padding: 0 0.3rem;
		margin-bottom: 0.5rem;
	}
	
	.record-item4 {
		width: 30%;
		height: 6.36rem;
		box-shadow: 0 2px 9px 0 rgba(109, 107, 107, 0.30);
		padding: 0 0.3rem;
	}
	
	.list-item {
		padding-top: 0.3rem;
		padding-bottom: 0.3rem;
		border-bottom: 1px solid #EAEAEA;
	}
	
	.list-item:last-child {
		border-bottom: none;
	}
	
	.record-title {
		display: flex;
		justify-content: space-between;
		padding-bottom: .35rem;
	}
	
	.title-head {
		font-size: .2rem;
		color: #4A4A4A;
		letter-spacing: 0;
		line-height: .44rem;
		margin-left: .05rem;
		text-align: left;
	}
	
	.title-head img {
		margin-top: 0.1rem;
	}
	
	.title-head span {
		margin-left: 0.1rem;
	}
	
	.title-head button {
		width: 0.2rem;
		height: 0.21rem;
		margin-right: 0.1rem;
		text-align: right;
	}
	
	.title-btn {
		text-align: right;
	}
	
	.list-item .nothing {
		font-family: PingFangSC-Regular;
		font-size: 0.2rem;
		color: #9B9B9B;
		letter-spacing: 0;
	}
	
	/*.glDialog */
	
	
	/*编辑*/
	.jlTable {
		padding: 0.3rem;
		border: 1px solid #5191E5;
		border-top: 5px solid #5191E5;
	}
	
	.jlTable .profile-edit-crop {
		width: 1rem;
		height: 1rem;
		border: 1px solid #C3C3C3;
	}
	
	.profile-edit-form .form01 {
		display: flex;
	}
	
	.profile-right {
		flex: 1;
	}
	
	.el-form-item__content {
		display: flex;
	}
	
	.el-form-item__content {
		text-align: left;
		font-size: 0.14rem;
		height: 0.4rem;
	}
	
	/*完成*/
	.el-main {
		margin-top: -20px;
		padding: 0.35rem;
	}
	
	.recordFinish .el-col {
		text-align: right;
		display: flex;
	}
	
	.recordFinish .el-col span {
		margin-left: 0.3rem;
		flex: 1;
	}
	
	.recordFinish .list-item:first-child .el-aside {
		display: block;
	}
	
	.none {
		display: none;
	}
	
	.recordFinish .list-item .el-col label {
		/*width: 0.56rem;*/
		text-align: right;
	}
	
	.el-row {
		font-size: 0.14rem;
		font-family: PingFangSC-Regular;
		color: #9B9B9B;
		letter-spacing: 0;
		line-height: 0.34rem;
	}
	
	.el-row:last-child {
		margin-bottom: 0;
	}
	
	.el-col {
		border-radius: 4px;
	}
	
	.bg-purple-dark {
		background: #99a9bf;
	}
	
	.bg-purple {
		background: #d3dce6;
	}
	
	.bg-purple-light {
		background: #e5e9f2;
	}
	
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
	
	
	.record-item4 {
		padding-top: 0.3rem;
		padding-bottom: 0.5rem;
	}
	
	.jl-name {
		width: 100%;
		height: 0.4rem;
		line-height: 0.3rem;
		padding: 0 0.1rem;
	}
	
	.jl-name .el-col:first-child span {
		font-family: PingFangSC-Regular;
		font-size: 0.2rem;
		color: #4A4A4A;
		letter-spacing: 0;
		float: left;
		height: 100%;
		text-align: left;
		margin-left: 0;
	}
	
	.jl-name .el-col:last-child span {
		font-family: PingFangSC-Regular;
		font-size: 0.12rem;
		color: #9EC2F1;
		letter-spacing: 0;
		float: right;
		height: 100%;
	}
	
	.jl-time {
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #B4B4B4;
		letter-spacing: 0;
		line-height: 0.4rem;
		text-align: left;
		padding: 0 0.1rem;
	}
	
	.jl-num {
		background: #FAFAFA;
		border: 1px solid #F2F2F2;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #4A4A4A;
		letter-spacing: 0;
		padding: 0.1rem;
		text-align: left;
	}
	
	.jl-btn {
		margin-top: 0.2rem;
		display: flex;
		justify-content: space-between;
		padding-bottom: 0.3rem;
		border-bottom: 1px solid #F2F2F2;
	}
	
	.jl-btn a {
		font-family: PingFangSC-Regular;
		font-size: 0.14rem;
		color: #FFFFFF;
		letter-spacing: 0;
		padding: 0.1rem 0.5rem;
		background: #5191E5;
		border-radius: 5px;
	}
	
	.jlxx {
		padding-bottom: 0.4rem;
		border-bottom: 1px solid #F2F2F2;
	}
	
	.jlxx li {
		margin: 0.1rem 0;
		height: 0.44rem;
		padding-left: 0.1rem;
		border-left: 4px solid transparent;
	}
	
	.jlxx li img {
		width: 0.16rem;
		height: 0.16rem;
		margin-top: 0.15rem;
	}
	
	.jlxx span {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #4A4A4A;
		letter-spacing: 0;
	}
	
	.jlxx .active {
		border-left: 4px solid #4A90E2;
	}


</style>
<style>
	.el-form-item.is-required:not(.is-no-asterisk) > .el-form-item__label:before {
		content: '';
	}
	
	.el-select,
	.el-date-editor.el-input,
	.el-date-editor.el-input__inner {
		width: 100%;
	}
	
	.el-dialog__header {
		color: rgba(0, 0, 0, 1);
		font-size: 0.18rem;
		text-align: left;
		font-family: PingFangSC-Regular;
	}
	
	/*上传*/
	.profile-edit-crop .el-upload.el-upload--text {
		/*border: 1px dashed #d9d9d9;*/
		width: 1rem;
		height: 1rem;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		display: inline;
	}
	
	.profile-edit-crop .avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}
	
	.profile-edit-crop .avatar-uploader-icon {
		font-size: 18px;
		color: #8c939d;
		width: 100px;
		height: 100px;
		line-height: 100px;
		text-align: center;
	}
	
	.profile-edit-crop .avatar {
		width: 100px;
		height: 100px;
		display: block;
	}
	
	.profile-edit-crop input[type=file] {
		display: none;
	}
	
	.profile-edit-crop span {
		font-size: 0.14rem;
		color: #9EC2F1;
	}
</style>
