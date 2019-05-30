<template>
	<div>
		<v-nav></v-nav>
		
		<div class="middle-container">
			<el-form :model="ruleForm" :rules="personalRules" ref="ruleForm" label-width="100px" style="width: 100%"
			         class="demo-ruleForm">
				<div class="content information_one">
					<div class="title">
						个人竞争力评估表
					</div>
					<div class="table-desc">
						
						<h1>XXX同学，</h1>
						你好！评估注意事项评估注意事项评估注意事项评估注意事项评估注意事项评估注意事项评估注意事项评估注意事项评估注意事项评估注意事项评估注意事项。
					</div>
					<div class="info-item">
						<div class="item-title">
							<img src="../../assets/img/icon/jibenxinxi.png" alt="">
							基本信息
						</div>
						<div class="info-box">
							<el-form-item label="姓名" prop="name">
								<el-input v-model="ruleForm.name"></el-input>
							</el-form-item>
							<el-form-item label="手机号码" prop="mobile">
								<el-input v-model="ruleForm.mobile"></el-input>
							</el-form-item>
							<el-form-item label="个人邮箱" prop="email">
								<el-input v-model="ruleForm.email"></el-input>
							</el-form-item>
							<el-form-item label="微信号" prop="wexx">
								<el-input v-model="ruleForm.wexx"></el-input>
							</el-form-item>
							<el-form-item label="毕业年份" prop="graduation">
								<el-select v-model="ruleForm.region" placeholder="请选择学历">
									<el-option label="区域一" value="shanghai"></el-option>
									<el-option label="区域二" value="beijing"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="简历" prop="upoladFile">
								<el-upload
										class="upload-demo"
										ref="upload"
										action="https://jsonplaceholder.typicode.com/posts/"
										:on-preview="handlePreview"
										:on-remove="handleRemove"
										:auto-upload="false">
									<el-button slot="trigger" size="small" type="primary"><i class="el-icon-upload el-icon--right"></i>&nbsp;&nbsp;上传简历</el-button>
								</el-upload>
							</el-form-item>
							
						</div>
					
					</div>
					<div class="info-item">
						<div class="item-title">
							<img src="../../assets/img/icon/gzjl.png" alt="">
							求职信息
						</div>
						<div class="info-box">
							<el-form-item label="实习/全职" prop="job">
								<el-radio-group v-model="ruleForm.job"
								                style="text-align: center">
									<el-radio label="全职" :value="0"></el-radio>
									<el-radio label="实习" :value="1"></el-radio>
								</el-radio-group>
							</el-form-item>
							
							<el-row :gutter="20">
								<el-col :span="12">
									<el-form-item label="求职地区" prop="city">
										<el-select v-model="ruleForm.city" autocomplete="off"
										           placeholder="">
											<el-option label="区域一" value="shanghai"></el-option>
											<el-option label="区域二" value="beijing"></el-option>
										</el-select>
									</el-form-item>
								</el-col>
								<el-col :span="12">
									<el-form-item prop="region">
										<el-select v-model="ruleForm.region" autocomplete="off"
										           placeholder="">
											<el-option label="区域一" value="shanghai"></el-option>
											<el-option label="区域二" value="beijing"></el-option>
										</el-select>
									</el-form-item>
								</el-col>
							</el-row>
							<el-form-item label="求职行业" prop="industry">
								<el-select v-model="ruleForm.industry" autocomplete="off"
								           placeholder="">
									<el-option label="区域一" value="shanghai"></el-option>
									<el-option label="区域二" value="beijing"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="求职岗位" prop="jobs">
								<el-input v-model="ruleForm.jobs"></el-input>
							</el-form-item>
							
						</div>
					</div>
					<div class="info-item">
						<div class="item-title">
							<img src="../../assets/img/icon/gzjl.png" alt="">
							给职业咨询顾问的留言
						</div>
						<div class="info-box">
							
							<textarea name="" id="" class="message-box"></textarea>
							<div class="button-box">
								<el-button @click="submitForm('ruleForm')">
									提交
								</el-button>
							</div>
						
						</div>
					
					</div>
				</div>
			</el-form>
		
		</div>
	</div>
</template>

<script>
    import accountMenu from "../../components/plug/accountMenu";
    
    export default {
        name: "TestPersonal",
        data() {
            return {
                ruleForm: {
                    name: '',
                    mobile: '',
                    email: '',
                    wexx: '',
                    graduation: '',
                    
                    job: '',
                    city: '',
                    region: '',
                    industry: '',
                    jobs: '',
	                
                },
                personalRules: {
                    name: [
                        {required: true, message: '请输入姓名', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    mobile: [
                        {required: true, message: '请输入姓名', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    email: [
                        {required: true, message: '请输入邮箱', trigger: 'blur'},
                        {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
                    ],
                    wexx: [
                        {required: true, message: '请输入微信号', trigger: 'blur'}
                    ],
                    graduation: [
                        {required: true, message: '请选择学历', trigger: 'change'}
                    ],
                    job: [
                        {required: true, message: '请选择一个职业性质', trigger: 'change'}
                    ],
                    city: [
                        {required: true, message: '请选择求职城市', trigger: 'change'}
                    ],
                    region: [
                        {required: true, message: '请选择求职区域', trigger: 'change'}
                    ],
                    industry: [
                        {required: true, message: '请选择求职行业', trigger: 'change'}
                    ],
                    jobs: [
                        {required: true, message: '请选择求职岗位', trigger: 'change'}
                    ],
                    upoladFile: [
                        {required: true, message: '请上传简历', trigger: 'change'}
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                console.log(formName)
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
    
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            }
        },
        components: {
            "v-nav": accountMenu,
        },
        mounted() {
        
        }
    }
</script>

<style scoped>
	@import "../../assets/css/main.css";
	
	.content {
		background: #FFFFFF;
		box-shadow: 0 2px 9px 0 rgba(109, 107, 107, 0.30);
		width: 9.8rem !important;
		margin: 0 auto .6rem auto;
		text-align: left;
	}
	
	.title {
		height: 1.28rem;
		text-align: center;
		font-size: .24rem;
		color: #FFF;
		line-height: 1.28rem;
		background: url("../../assets/img/bg/table_top.png") no-repeat center center;
	}
	
	.table-desc {
		height: 1.88rem;
		background: url("../../assets/img/bg/table_topbg.png") no-repeat top center;
		padding-left: .84rem;
		font-size: .18rem;
		color: #FFF;
		line-height: .3rem;
		
	}
	
	.table-desc > h1 {
		padding-top: .2rem;
		padding-bottom: .1rem;
		margin: 0 !important;
	}
	
	.info-item {
		padding: .4rem .84rem 0 0.84rem;
		
	}
	
	.info-box {
		padding: .4rem 1rem .4rem .4rem;
		border-bottom: 1px solid #EAEAEA;
		
	}
	
	.item-title {
		font-size: .2rem;
		color: #4A4A4A;
		line-height: .28rem;
		height: .28rem;
	}
	
	.message-box {
		height: 1.48rem;
		width: 100%;
		border: 1px solid #D5DADF;
	}
	
	.button-box {
		padding: .3rem 0;
		display: flex;
		justify-content: center;
		
	}
	
	.button-box > button {
		width: 1.6rem;
		/*height: .38rem;*/
		/*line-height: .38rem;*/
		background: #5191E5;
		border-radius: .05rem;
		color: #FFF;
		font-size: .18rem;
	}
	
	@media (min-width: 1200px) {
	
	}
	
	@media (min-width: 992px) and (max-width: 1200px) {
	
	}
	
	@media (min-width: 767px) and (max-width: 992px) {
	
	
	}
	
	@media (max-width: 767px) {
	
	
	}
	
	
</style>
<style>
	.el-select {
		width: 100% !important;
	}
	/*.information_one .info-box .el-form-item .el-form-item__label:before {*/
		/*display: table;*/
		/*content: "";*/
	/*}*/
	.information_one .info-box .el-upload__input {
		display: none;
	}
</style>
