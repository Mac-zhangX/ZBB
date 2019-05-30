<template>
	<!--个人简历-->
	<!--<div class="middle-container" >-->
	<div class="flex-box-between recordFinish">
		<div class="record-item8">
			<ul>
				<li class="list-item" id="0">
					<div class="record-title">
						<div class="title-head">
							<img src="../../assets/img/icon/jibenxinxi.png">
							<span>基本信息</span>
						</div>
						<div class="title-btn" v-if="checkImg!=checkImg01" @click="newBuilt(0)"
						     style="font-size: 0.14rem">
							<img src="../../assets/img/daohangxiugai.png">&nbsp;编辑
						</div>
					</div>
					<!--新建的信息放入something里面-->
					<div class="something" v-if="block0==1">
						<ul>
							<li class="list-item">
								<el-container class="">
									<el-aside width="175px" class="none">
										<img src="" alt=""
										     style="width: 1rem;height: 1rem;background:rosybrown;margin: 0 auto;display: block ">
									</el-aside>
									<el-main>
										<el-row :gutter="40">
											<el-col :span="12">
												<div class="grid-content">
													<label>所在地区</label><span>中国 杭州</span>
												</div>
											</el-col>
											<el-col :span="12">
												<div class="grid-content"></div>
											</el-col>
										</el-row>
										<el-row :gutter="40">
											<el-col :span="12">
												<div class="grid-content">
													<label>出生日期</label><span>中国 杭州</span>
												</div>
											</el-col>
											<el-col :span="12">
												<div class="grid-content">
													<label for="">手机号码</label><span>18310553778</span>
												</div>
											</el-col>
										</el-row>
										<el-row :gutter="40">
											<el-col :span="12">
												<div class="grid-content">
													<label>微信号</label><span>18310553778</span>
												</div>
											</el-col>
											<el-col :span="12">
												<div class="grid-content">
													<label for="">电子邮箱</label><span>18310553778</span>
												</div>
											</el-col>
										</el-row>
										<el-row :gutter="40">
											<el-col :span="12">
												<div class="grid-content">
													<label>求职意愿</label><span>UI设计师，视觉设计师</span>
												</div>
											</el-col>
										</el-row>
									</el-main>
								</el-container>
							</li>
						</ul>
					</div>
					<!--修改框-->
					<div v-if="check0 == 0" class="jbxx jlTable">
						<div class="profile-edit-form">
							<el-form ref="checkUserInfos" class="form01" :model="checkUserInfos" :rules="personalRules"
							         label-width="80px">
								<div class="profile-edit-crop">
									<el-upload
											class="avatar-uploader"
											action="https://jsonplaceholder.typicode.com/posts/"
											:show-file-list="false"
											:on-success="handleAvatarSuccess"
											:before-upload="beforeAvatarUpload" prop="userInfosImg">
										<img v-if="imageUrl" :src="imageUrl" class="avatar">
										<i v-else class="el-icon-plus avatar-uploader-icon"></i>
									</el-upload>
									<span>上传照片</span>
								</div>
								<div class="profile-right">
									<el-row :gutter="20">
										<el-col :span="12">
											<el-form-item label="姓名" prop="userFullname">
												<el-input v-model="checkUserInfos.userFullname"></el-input>
											</el-form-item>
										</el-col>
										<el-col :span="12">
											<el-form-item label="性别" prop="userSex">
												<el-radio-group v-model="checkUserInfos.userSex"
												                style="text-align: center">
													<el-radio label="男" :value="0"></el-radio>
													<el-radio label="女" :value="1"></el-radio>
												</el-radio-group>
											</el-form-item>
										</el-col>
									</el-row>
									<el-row :gutter="20">
										<el-col :span="12">
											<el-form-item label="所在地区" prop="userRegion">
												<el-select v-model="checkUserInfos.userRegion" autocomplete="off"
												           placeholder="请选择国家">
													<el-option label="区域一" value="shanghai"></el-option>
													<el-option label="区域二" value="beijing"></el-option>
												</el-select>
											</el-form-item>
										</el-col>
										<el-col :span="12">
											<el-form-item label="" prop="userArea"
											              :rules="{required: true,message:'请选择地区',trigger: 'blur'}">
												<el-select v-model="checkUserInfos.userArea" placeholder="请选择求职地区">
													<el-option label="区域一" value="shanghai"></el-option>
													<el-option label="区域二" value="beijing"></el-option>
												</el-select>
											</el-form-item>
										</el-col>
									</el-row>
									<el-row :gutter="20">
										<el-col :span="12">
											<el-form-item label="出生日期" prop="userBirthday">
												<el-date-picker type="date" placeholder="" autocomplete="off"
												                v-model="checkUserInfos.userBirthday"
												                style="" format="yyyy-MM-dd"
												                value-format="timestamp"></el-date-picker>
											</el-form-item>
										</el-col>
										<el-col :span="12">
											<el-form-item label="手机号码" prop="userMobile">
												<el-input v-model="checkUserInfos.userMobile"></el-input>
											</el-form-item>
										</el-col>
									</el-row>
									<el-row :gutter="20">
										<el-col :span="12">
											<el-form-item label="微信号" prop="userWex">
												<el-input v-model="checkUserInfos.userWex"></el-input>
											</el-form-item>
										</el-col>
										<el-col :span="12">
											<el-form-item label="电子邮箱" prop="userEmail">
												<el-input v-model="checkUserInfos.userEmail"></el-input>
											</el-form-item>
										</el-col>
									</el-row>
									<el-row :gutter="20">
										<el-col :span="24">
											<el-form-item label="求职意愿" prop="userMessage">
												<el-input type="textarea"
												          v-model="checkUserInfos.userMessage"></el-input>
											</el-form-item>
										</el-col>
									</el-row>
									<el-row :gutter="20">
										<el-button type="primary" @click="checkForm('checkUserInfos',0)"
										           style="padding: 12px 44px">保存并更新
										</el-button>
										<el-button style="padding: 12px 44px"
										           @click="unCheckForm('checkUserInfos',0)">取消
										</el-button>
									</el-row>
								</div>
							</el-form>
						</div>
					</div>
				</li>
				<li class="list-item" id="1">
					<div class="record-title">
						<div class="title-head">
							<img src="../../assets/img/education_icon.png">
							<span>教育经历</span>
						</div>
						<div class="title-btn" v-if="checkImg != checkImg02" @click="newBuilt(1)"
						     style="font-size: 0.14rem">
							<img src="../../assets/img/daohangxiugai.png">&nbsp;添加教育经历
						</div>
					</div>
					<div class="nothing" v-if="block1==0">暂无任何信息</div>
					<div class="something" v-if="block1==1">
						<ul>
							<li v-for="(item,index) in educationData">
								<el-container>
									<el-aside width="175px" class="none">
										<img src="" alt=""
										     style="width: 1rem;height: 1rem;background:rosybrown;margin: 0 auto;display: block ">
									</el-aside>
									<el-main>
										<el-row :gutter="40">
											<el-col :span="12">
												<div class="grid-content">
													<label>所在地区</label><span>中国 杭州</span>
												</div>
											</el-col>
											<el-col :span="12">
												<div class="grid-content"></div>
											</el-col>
										</el-row>
										<el-row :gutter="40">
											<el-col :span="12">
												<div class="grid-content">
													<label>出生日期</label><span>中国 杭州</span>
												</div>
											</el-col>
											<el-col :span="12">
												<div class="grid-content">
													<label for="">手机号码</label><span>18310553778</span>
												</div>
											</el-col>
										</el-row>
										<el-row :gutter="40">
											<el-col :span="12">
												<div class="grid-content">
													<label>微信号</label><span>18310553778</span>
												</div>
											</el-col>
											<el-col :span="12">
												<div class="grid-content">
													<label for="">电子邮箱</label><span>18310553778</span>
												</div>
											</el-col>
										</el-row>
										<el-row :gutter="40">
											<el-col :span="12">
												<div class="grid-content">
													<label>求职意愿</label><span>UI设计师，视觉设计师</span>
												</div>
											</el-col>
											<el-col :span="3" :offset="9" @click="editor2(1)">编辑</el-col>
										</el-row>
									</el-main>
								</el-container>
							</li>
						</ul>
					</div>
					<!--新建-->
					<div v-if="two1 == 1" class="jyjl jlTable">
						<div class="profile-edit-form">
							<el-form ref="educationExperience" :rules="educationRules"
							         :model="educationExperience" label-width="80px">
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item label="毕业学校" prop="school">
											<el-select v-model="educationExperience.school" autocomplete="off"
											           placeholder="">
												<el-option label="区域一" value="shanghai"></el-option>
												<el-option label="区域二" value="beijing"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item label="学历" prop="education">
											<el-select v-model="educationExperience.education"
											           autocomplete="off" placeholder="请选择行业分类">
												<el-option label="区域一" value="shanghai"></el-option>
												<el-option label="区域二" value="beijing"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item label="所学专业" prop="professional">
											<el-select v-model="educationExperience.professional"
											           autocomplete="off" placeholder="请选择行业分类">
												<el-option label="区域一" value="shanghai"></el-option>
												<el-option label="区域二" value="beijing"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item label="绩点" prop="point">
											<el-select v-model="educationExperience.point" autocomplete="off"
											           placeholder="请选择行业分类">
												<el-option label="区域一" value="shanghai"></el-option>
												<el-option label="区域二" value="beijing"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-col :span="24">
										<el-form-item label="主修课程" prop="course">
											<el-input v-model="educationExperience.course" autocomplete="off"
											          style=""></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item label="起始时间" prop="date1">
											<el-date-picker type="date" placeholder="请选择开始时间" autocomplete="off"
											                v-model="educationExperience.date1"
											                style=""></el-date-picker>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item prop="date2">
											<el-date-picker type="date" placeholder="请选择结束时间" autocomplete="off"
											                v-model="educationExperience.date2"
											                style=""></el-date-picker>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-button type="primary" @click="builtForm('educationExperience',1)"
									           style="padding: 12px 44px">保存
									</el-button>
									<el-button style="padding: 12px 44px"
									           @click="unBuiltForm('educationExperience',1)">取消
									</el-button>
								</el-row>
							</el-form>
						</div>
					</div>
					<!--修改-->
					<div v-if="check1 == 1" class="jyjl jlTable">
						<div class="profile-edit-form">
							<el-form ref="educationExperience" :rules="checkEducationExperience"
							         :model="checkEducationExperience" label-width="80px">
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item label="毕业学校" prop="school">
											<el-select v-model="checkEducationExperience.school" autocomplete="off"
											           placeholder="">
												<el-option label="区域一" value="shanghai"></el-option>
												<el-option label="区域二" value="beijing"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item label="学历" prop="education">
											<el-select v-model="checkEducationExperience.education"
											           autocomplete="off" placeholder="请选择行业分类">
												<el-option label="区域一" value="shanghai"></el-option>
												<el-option label="区域二" value="beijing"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item label="所学专业" prop="professional">
											<el-select v-model="checkEducationExperience.professional"
											           autocomplete="off" placeholder="请选择行业分类">
												<el-option label="区域一" value="shanghai"></el-option>
												<el-option label="区域二" value="beijing"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item label="绩点" prop="point">
											<el-select v-model="checkEducationExperience.point" autocomplete="off"
											           placeholder="请选择行业分类">
												<el-option label="区域一" value="shanghai"></el-option>
												<el-option label="区域二" value="beijing"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-col :span="24">
										<el-form-item label="主修课程" prop="course">
											<el-input v-model="checkEducationExperience.course" autocomplete="off"
											          style=""></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item label="起始时间" prop="date1">
											<el-date-picker type="date" placeholder="请选择开始时间" autocomplete="off"
											                v-model="checkEducationExperience.date1"
											                style=""></el-date-picker>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item prop="date2">
											<el-date-picker type="date" placeholder="请选择结束时间" autocomplete="off"
											                v-model="checkEducationExperience.date2"
											                style=""></el-date-picker>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-button type="primary" @click="checkForm('checkEducationExperience',1)"
									           style="padding: 12px 44px">保存并更新
									</el-button>
									<el-button style="padding: 12px 44px"
									           @click="unCheckForm('checkEducationExperience',1)">取消
									</el-button>
								</el-row>
							</el-form>
						</div>
					</div>
				</li>
				
				<li class="list-item" id="2">
					<div class="record-title">
						<div class="title-head">
							<img src="../../assets/img/icon/gzjl.png">
							<span>工作经历</span>
						</div>
						<div class="title-btn" v-if="checkImg != checkImg03" @click="newBuilt(2)"
						     style="font-size: 0.14rem">
							<img src="../../assets/img/daohangxiugai.png">&nbsp;添加工作经历
						</div>
					</div>
					<div class="nothing" v-if="block2==0">暂无任何信息</div>
					<div class="something" v-if="block2==1">
						<ul v-for="(item,index) in workData">
							<li>
								<el-container v-if="checkImg03==1">
									<el-aside width="175px" class="none">
										<img src="" alt=""
										     style="width: 1rem;height: 1rem;background:rosybrown;margin: 0 auto;display: block ">
									</el-aside>
									<el-main>
										<el-row :gutter="40">
											<el-col :span="12">
												<div class="grid-content">
													<label>所在地区</label><span>中国 杭州</span>
												</div>
											</el-col>
											<el-col :span="12">
												<div class="grid-content"></div>
											</el-col>
										</el-row>
										<el-row :gutter="40">
											<el-col :span="12">
												<div class="grid-content">
													<label>出生日期</label><span>中国 杭州</span>
												</div>
											</el-col>
											<el-col :span="12">
												<div class="grid-content">
													<label for="">手机号码</label><span>18310553778</span>
												</div>
											</el-col>
										</el-row>
										<el-row :gutter="40">
											<el-col :span="12">
												<div class="grid-content">
													<label>微信号</label><span>18310553778</span>
												</div>
											</el-col>
											<el-col :span="12">
												<div class="grid-content">
													<label for="">电子邮箱</label><span>18310553778</span>
												</div>
											</el-col>
										</el-row>
										<el-row :gutter="40">
											<el-col :span="12">
												<div class="grid-content">
													<label>求职意愿</label><span>UI设计师，视觉设计师</span>
												</div>
											</el-col>
											<el-col :span="3" :offset="9" style="font-size: 0.14rem">
												编辑
											</el-col>
										</el-row>
									</el-main>
								</el-container>
							</li>
						</ul>
					</div>
					
					
					<!--新建-->
					<div v-if="two2 == 2" class="jlTable gzjl">
						<div class="profile-edit-form">
							<el-form ref="ruleForm3" :model="ruleForm3" :rules="workRules" label-width="80px">
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item label="企业名称" prop="company">
											<el-input v-model="ruleForm3.company" autocomplete="off"
											          style="text-align: left"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item label="所在行业" prop="industry">
											<el-select v-model="ruleForm3.industry" autocomplete="off"
											           placeholder="请选择行业分类">
												<el-option label="区域一" value="shanghai"></el-option>
												<el-option label="区域二" value="beijing"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item prop="IndustrySegments">
											<el-select v-model="ruleForm3.IndustrySegments" autocomplete="off"
											           placeholder="请选择行业细分">
												<el-option label="区域一" value="shanghai"></el-option>
												<el-option label="区域二" value="beijing"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-col :span="24">
										<el-form-item label="工作地点" prop="place">
											<el-input v-model="ruleForm3.place" autocomplete="off"
											          style="text-align: left"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item label="工作内容" prop="jobContent">
											<el-input v-model="ruleForm3.jobContent"
											          autocomplete="off"></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item label="担任职位" prop="Position">
											<el-input v-model="ruleForm3.Position"
											          autocomplete="off"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item label="起始时间" prop="date1">
											<el-date-picker type="date" placeholder="请选择开始时间"
											                v-model="ruleForm3.date1"
											                style=""></el-date-picker>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item prop="date2">
											<el-date-picker type="date" placeholder="请选择结束时间"
											                v-model="ruleForm3.date2"
											                style=""></el-date-picker>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-button type="primary" @click="builtForm('ruleForm3',2)"
									           style="padding: 12px 44px">保存
									</el-button>
									<el-button style="padding: 12px 44px" @click="unBuiltForm('ruleForm3',2)">
										取消
									</el-button>
								</el-row>
							</el-form>
						</div>
					</div>
					<!--修改-->
					<div v-if="check2 == 2" class="jlTable gzjl">
						<div class="profile-edit-form">
							<el-form ref="checkRuleForm3" :model="checkRuleForm3" :rules="workRules" label-width="80px">
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item label="企业名称" prop="company">
											<el-input v-model="checkRuleForm3.company" autocomplete="off"
											          style="text-align: left"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item label="所在行业" prop="industry">
											<el-select v-model="checkRuleForm3.industry" autocomplete="off"
											           placeholder="请选择行业分类">
												<el-option label="区域一" value="shanghai"></el-option>
												<el-option label="区域二" value="beijing"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item prop="IndustrySegments">
											<el-select v-model="checkRuleForm3.IndustrySegments" autocomplete="off"
											           placeholder="请选择行业细分">
												<el-option label="区域一" value="shanghai"></el-option>
												<el-option label="区域二" value="beijing"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-col :span="24">
										<el-form-item label="工作地点" prop="place">
											<el-input v-model="checkRuleForm3.place" autocomplete="off"
											          style="text-align: left"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item label="工作内容" prop="jobContent">
											<el-input v-model="checkRuleForm3.jobContent"
											          autocomplete="off"></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item label="担任职位" prop="Position">
											<el-input v-model="checkRuleForm3.Position"
											          autocomplete="off"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item label="起始时间" prop="date1">
											<el-date-picker type="date" placeholder="请选择开始时间"
											                v-model="checkRuleForm3.date1"
											                style=""></el-date-picker>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item prop="date2">
											<el-date-picker type="date" placeholder="请选择结束时间"
											                v-model="checkRuleForm3.date2"
											                style=""></el-date-picker>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-button type="primary" @click="checkForm('checkRuleForm3',2)"
									           style="padding: 12px 44px">保存并更新
									</el-button>
									<el-button style="padding: 12px 44px" @click="unCheckForm('checkRuleForm3',2)">
										取消
									</el-button>
								</el-row>
							</el-form>
						</div>
					</div>
				</li>
				
				<li class="list-item" id="3">
					<div class="record-title">
						<div class="title-head">
							<img src="../../assets/img/xiangmuguanli.png">
							<span>项目活动经历</span>
						</div>
						<div class="title-btn" v-if="checkImg != checkImg04" @click="newBuilt(3)"
						     style="font-size: 0.14rem">
							<img src="../../assets/img/daohangxiugai.png">&nbsp;添加项目经验
						</div>
					</div>
					<div class="nothing" v-if="block3==0">暂无任何信息</div>
					<div class="something" v-if="block3==1">
						<ul>
							<li v-for="(item,index) in projectData">
								<el-container>
									<el-aside width="175px" class="none">
										<img src="" alt=""
										     style="width: 1rem;height: 1rem;background:rosybrown;margin: 0 auto;display: block ">
									</el-aside>
									<el-main>
										<el-row :gutter="40">
											<el-col :span="12">
												<div class="grid-content">
													<label>所在地区</label><span>中国 杭州</span>
												</div>
											</el-col>
											<el-col :span="12">
												<div class="grid-content"></div>
											</el-col>
										</el-row>
										<el-row :gutter="40">
											<el-col :span="12">
												<div class="grid-content">
													<label>出生日期</label><span>中国 杭州</span>
												</div>
											</el-col>
											<el-col :span="12">
												<div class="grid-content">
													<label for="">手机号码</label><span>18310553778</span>
												</div>
											</el-col>
										</el-row>
										<el-row :gutter="40">
											<el-col :span="12">
												<div class="grid-content">
													<label>微信号</label><span>18310553778</span>
												</div>
											</el-col>
											<el-col :span="12">
												<div class="grid-content">
													<label for="">电子邮箱</label><span>18310553778</span>
												</div>
											</el-col>
										</el-row>
										<el-row :gutter="40">
											<el-col :span="12">
												<div class="grid-content">
													<label>求职意愿</label><span>UI设计师，视觉设计师</span>
												</div>
											</el-col>
											<el-col :span="3" :offset="9" style="font-size: 0.14rem">编辑</el-col>
										</el-row>
									</el-main>
								</el-container>
							</li>
						</ul>
					</div>
					<div v-if="two3 == 3" class="jlTable xmjl">
						<div class="profile-edit-form">
							<el-form ref="ruleForm4" :model="ruleForm4" :rules="projectRules"
							         label-width="80px">
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item label="项目类型" prop="type">
											<el-select v-model="ruleForm4.type" autocomplete="off"
											           placeholder="请选择行业分类">
												<el-option label="区域一" value="shanghai"></el-option>
												<el-option label="区域二" value="beijing"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item label="项目名称" prop="name">
											<el-input v-model="ruleForm4.name" autocomplete="off"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-col :span="24">
										<el-form-item label="承担角色" prop="role">
											<el-input type="textarea" v-model="ruleForm4.role"
											          autocomplete="off"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-col :span="24">
										<el-form-item label="项目成果" prop="result">
											<el-input type="textarea" v-model="ruleForm4.result"
											          autocomplete="off"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-button type="primary" @click="builtForm('ruleForm4',3)"
									           style="padding: 12px 44px">保存
									</el-button>
									<el-button style="padding: 12px 44px" @click="unBuiltForm('ruleForm4',3)">
										取消
									</el-button>
								</el-row>
							</el-form>
						</div>
					</div>
					
					<!--修改-->
					<div v-if="check3 == 3" class="jlTable xmjl">
						<div class="profile-edit-form">
							<el-form ref="checkRuleForm4" :model="checkRuleForm4" :rules="projectRules"
							         label-width="80px">
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item label="项目类型" prop="type">
											<el-select v-model="checkRuleForm4.type" autocomplete="off"
											           placeholder="请选择行业分类">
												<el-option label="区域一" value="shanghai"></el-option>
												<el-option label="区域二" value="beijing"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item label="项目名称" prop="name">
											<el-input v-model="checkRuleForm4.name" autocomplete="off"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-col :span="24">
										<el-form-item label="承担角色" prop="role">
											<el-input type="textarea" v-model="checkRuleForm4.role"
											          autocomplete="off"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-col :span="24">
										<el-form-item label="项目成果" prop="result">
											<el-input type="textarea" v-model="checkRuleForm4.result"
											          autocomplete="off"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-button type="primary" @click="checkForm('checkRuleForm4',3)"
									           style="padding: 12px 44px">保存并更新
									</el-button>
									<el-button style="padding: 12px 44px" @click="unCheckForm('checkRuleForm4',3)">
										取消
									</el-button>
								</el-row>
							</el-form>
						</div>
					</div>
				</li>
				<li class="list-item" id="4">
					<div class="record-title">
						<div class="title-head">
							<img src="../../assets/img/icon/jibenxinxi.png">
							<span>技能信息</span>
						</div>
						<div class="title-btn" @click="newBuilt(4)" style="font-size: 0.14rem">
							<img src="../../assets/img/daohangxiugai.png">&nbsp;添加技能信息
						</div>
					</div>
					<div class="nothing" v-if="block4==0">暂无任何信息</div>
					<div class="something" v-if="block4==1">
						<ul>
							<li v-for="(item,index) in skillData">
								<el-container v-if="checkImg05==1">
									<el-aside width="175px" class="none">
										<img src="" alt=""
										     style="width: 1rem;height: 1rem;background:rosybrown;margin: 0 auto;display: block ">
									</el-aside>
									<el-main>
										<el-row :gutter="40">
											<el-col :span="12">
												<div class="grid-content">
													<label>所在地区</label><span>中国 杭州</span>
												</div>
											</el-col>
											<el-col :span="12">
												<div class="grid-content"></div>
											</el-col>
										</el-row>
										<el-row :gutter="40">
											<el-col :span="12">
												<div class="grid-content">
													<label>出生日期</label><span>中国 杭州</span>
												</div>
											</el-col>
											<el-col :span="12">
												<div class="grid-content">
													<label for="">手机号码</label><span>18310553778</span>
												</div>
											</el-col>
										</el-row>
										<el-row :gutter="40">
											<el-col :span="12">
												<div class="grid-content">
													<label>微信号</label><span>18310553778</span>
												</div>
											</el-col>
											<el-col :span="12">
												<div class="grid-content">
													<label for="">电子邮箱</label><span>18310553778</span>
												</div>
											</el-col>
										</el-row>
										<el-row :gutter="40">
											<el-col :span="24">
												<div class="grid-content">
													<label>求职意愿</label><span>UI设计师，视觉设计师</span>
												</div>
											</el-col>
										</el-row>
									</el-main>
								</el-container>
							</li>
						</ul>
					</div>
					<!--新建添加-->
					<div v-if="two4 == 4" class="jlTable">
						<div class="profile-edit-form">
							<el-form ref="ruleForm5" :model="ruleForm5" :rules="skillRules" label-width="80px">
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item label="技能类型" prop="skillType">
											<el-select v-model="ruleForm5.skillType" autocomplete="off"
											           placeholder="请选择技能类型">
												<el-option label="区域一" value="shanghai"></el-option>
												<el-option label="区域二" value="beijing"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item label="选择技能" prop="skill">
											<el-select v-model="ruleForm5.skill" autocomplete="off"
											           placeholder="请选择技能">
												<el-option label="区域一" value="shanghai"></el-option>
												<el-option label="区域二" value="beijing"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item label="熟练程度" prop="Proficiency">
											<el-select v-model="ruleForm5.Proficiency" autocomplete="off"
											           placeholder="请选择熟练程度">
												<el-option label="区域一" value="shanghai"></el-option>
												<el-option label="区域二" value="beijing"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-button type="primary" @click="builtForm('ruleForm5',4)"
									           style="padding: 12px 44px">保存
									</el-button>
									<el-button style="padding: 12px 44px" @click="unBuiltForm('ruleForm5',4)">
										取消
									</el-button>
								</el-row>
							</el-form>
						</div>
					</div>
					<!--修改-->
					<div v-if="check4 == 4" class="jlTable">
						<div class="profile-edit-form">
							<el-form ref="checkRuleForm5" :model="checkRuleForm5" :rules="skillRules"
							         label-width="80px">
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item label="技能类型" prop="skillType">
											<el-select v-model="checkRuleForm5.skillType" autocomplete="off"
											           placeholder="请选择技能类型">
												<el-option label="区域一" value="shanghai"></el-option>
												<el-option label="区域二" value="beijing"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item label="选择技能" prop="skill">
											<el-select v-model="checkRuleForm5.skill" autocomplete="off"
											           placeholder="请选择技能">
												<el-option label="区域一" value="shanghai"></el-option>
												<el-option label="区域二" value="beijing"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item label="熟练程度" prop="Proficiency">
											<el-select v-model="checkRuleForm5.Proficiency" autocomplete="off"
											           placeholder="请选择熟练程度">
												<el-option label="区域一" value="shanghai"></el-option>
												<el-option label="区域二" value="beijing"></el-option>
											</el-select>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-button type="primary" @click="checkForm('checkRuleForm5',4)"
									           style="padding: 12px 44px">保存并更新
									</el-button>
									<el-button style="padding: 12px 44px" @click="unCheckForm('checkRuleForm5',4)">
										取消
									</el-button>
								</el-row>
							</el-form>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="record-item4">
			<p class="jl-name">
				<el-row :gutter="20">
					<el-col :span="17" style="text-align: left;float: left">
						<span v-if="reName0">{{checkname}}</span>
						<el-input v-if="reName1" v-model="inputName" minlength="" maxlength="10"
						          @keyup.enter.native="checkName()"></el-input>
					</el-col>
					<el-col :span="7" style="float: right">
						<span class="reName" @click="reName()">重命名</span>
					</el-col>
				</el-row>
			<div class="jl-time"><span>更新日期：</span></div>
			<div class="jl-num">
				<span>简历完整度：</span><span>0</span>分
				<div style="margin-top: 0.05rem">
					<el-progress :percentage="80" status="success"></el-progress>
				</div>
			</div>
			<div class="jl-btn">
				<a href="javascript:;" @click="checkJlDialogVisible = true">预览</a>
				<a href="JavaScript:;" @click="download()">下载</a>
			</div>
			
			<ul class="jlxx">
				<li class="" v-bind:class="{active:nums == index }" @click="btnLi(index)"
				    v-for="(item, index) in lists"
				    :key="index">
					<a href="javascript:;">
						<div class="record-title">
							<div class="title-head">
								<img :src="item.srcs">
								<span>{{item.text}}</span>
							</div>
							<div class="title-btn">
								<img src="../../assets/img/icon/info-icon.png" alt="">
							</div>
						</div>
					</a>
				</li>
			</ul>
		</div>
		
		<el-dialog
			title=""
			:visible.sync="checkJlDialogVisible"
			width="50%"
			left style="text-align: left;margin-top: 0" class="glDialog">
		      <span class="checkManageResume">
		          <div class="">
					<div class="flex-box-between recordFinish">
						<div class="previewBox">
							<ul>
								<li class="previewLi">
									<div class="record-title">
										<div class="title-head">
											<img src="../../assets/img/icon/jibenxinxi.png">
											<span>基本信息</span>
										</div>
									</div>
									<el-container>
										<el-aside width="175px" class="none">
											<img src="" alt=""
											     style="width: 1rem;height: 1rem;background:rosybrown;margin: 0 auto;display: block ">
										</el-aside>
										<el-main>
											<el-row :gutter="40">
												<el-col :span="12">
													<div class="grid-content">
														<label>所在地区</label><span>中国 杭州</span>
													</div>
												</el-col>
												<el-col :span="12">
													<div class="grid-content"></div>
												</el-col>
											</el-row>
											<el-row :gutter="40">
												<el-col :span="12">
													<div class="grid-content">
														<label>出生日期</label><span>中国 杭州</span>
													</div>
												</el-col>
												<el-col :span="12">
													<div class="grid-content">
														<label for="">手机号码</label><span>18310553778</span>
													</div>
												</el-col>
											</el-row>
											<el-row :gutter="40">
												<el-col :span="12">
													<div class="grid-content">
														<label>微信号</label><span>18310553778</span>
													</div>
												</el-col>
												<el-col :span="12">
													<div class="grid-content">
														<label for="">电子邮箱</label><span>18310553778</span>
													</div>
												</el-col>
											</el-row>
											<el-row :gutter="40">
												<el-col :span="24">
													<div class="grid-content">
														<label>求职意愿</label><span>UI设计师，视觉设计师</span>
													</div>
												</el-col>
											</el-row>
										</el-main>
									</el-container>
								</li>
								<li class="previewLi">
									<div class="record-title">
										<div class="title-head">
											<img src="../../assets/img/education_icon.png">
											<span>教育经历</span>
										</div>
									</div>
									<el-container>
										<el-main>
											<el-row :gutter="40">
												<el-col :span="12">
													<div class="grid-content">
														<label>所在地区</label><span>中国 杭州</span>
													</div>
												</el-col>
												<el-col :span="12">
													<div class="grid-content"></div>
												</el-col>
											</el-row>
											<el-row :gutter="40">
												<el-col :span="12">
													<div class="grid-content">
														<label>出生日期</label><span>中国 杭州</span>
													</div>
												</el-col>
												<el-col :span="12">
													<div class="grid-content">
														<label for="">手机号码</label><span>18310553778</span>
													</div>
												</el-col>
											</el-row>
											<el-row :gutter="40">
												<el-col :span="12">
													<div class="grid-content">
														<label>微信号</label><span>18310553778</span>
													</div>
												</el-col>
												<el-col :span="12">
													<div class="grid-content">
														<label for="">电子邮箱</label><span>18310553778</span>
													</div>
												</el-col>
											</el-row>
											<el-row :gutter="40">
												<el-col :span="24">
													<div class="grid-content">
														<label>求职意愿</label><span>UI设计师，视觉设计师</span>
													</div>
												</el-col>
											</el-row>
										</el-main>
									</el-container>
								</li>
								<li class="previewLi">
									<div class="record-title">
										<div class="title-head">
											<img src="../../assets/img/icon/gzjl.png">
											<span>工作经历</span>
										</div>
									</div>
									<el-container>
										<el-aside width="175px" class="none">
											<img src="" alt=""
											     style="width: 1rem;height: 1rem;background:rosybrown;margin: 0 auto;display: block ">
										</el-aside>
										<el-main>
											<el-row :gutter="40">
												<el-col :span="12">
													<div class="grid-content">
														<label>所在地区</label><span>中国 杭州</span>
													</div>
												</el-col>
												<el-col :span="12">
													<div class="grid-content"></div>
												</el-col>
											</el-row>
											<el-row :gutter="40">
												<el-col :span="12">
													<div class="grid-content">
														<label>出生日期</label><span>中国 杭州</span>
													</div>
												</el-col>
												<el-col :span="12">
													<div class="grid-content">
														<label for="">手机号码</label><span>18310553778</span>
													</div>
												</el-col>
											</el-row>
											<el-row :gutter="40">
												<el-col :span="12">
													<div class="grid-content">
														<label>微信号</label><span>18310553778</span>
													</div>
												</el-col>
												<el-col :span="12">
													<div class="grid-content">
														<label for="">电子邮箱</label><span>18310553778</span>
													</div>
												</el-col>
											</el-row>
											<el-row :gutter="40">
												<el-col :span="24">
													<div class="grid-content">
														<label>求职意愿</label><span>UI设计师，视觉设计师</span>
													</div>
												</el-col>
											</el-row>
										</el-main>
									</el-container>
								</li>
								<li class="previewLi">
									<div class="record-title">
										<div class="title-head">
											<img src="../../assets/img/xiangmuguanli.png">
											<span>项目活动经历</span>
										</div>
									</div>
									<el-container>
										<el-aside width="175px" class="none">
											<img src="" alt=""
											     style="width: 1rem;height: 1rem;background:rosybrown;margin: 0 auto;display: block ">
										</el-aside>
										<el-main>
											<el-row :gutter="40">
												<el-col :span="12">
													<div class="grid-content">
														<label>所在地区</label><span>中国 杭州</span>
													</div>
												</el-col>
												<el-col :span="12">
													<div class="grid-content"></div>
												</el-col>
											</el-row>
											<el-row :gutter="40">
												<el-col :span="12">
													<div class="grid-content">
														<label>出生日期</label><span>中国 杭州</span>
													</div>
												</el-col>
												<el-col :span="12">
													<div class="grid-content">
														<label for="">手机号码</label><span>18310553778</span>
													</div>
												</el-col>
											</el-row>
											<el-row :gutter="40">
												<el-col :span="12">
													<div class="grid-content">
														<label>微信号</label><span>18310553778</span>
													</div>
												</el-col>
												<el-col :span="12">
													<div class="grid-content">
														<label for="">电子邮箱</label><span>18310553778</span>
													</div>
												</el-col>
											</el-row>
											<el-row :gutter="40">
												<el-col :span="24">
													<div class="grid-content">
														<label>求职意愿</label><span>UI设计师，视觉设计师</span>
													</div>
												</el-col>
											</el-row>
										</el-main>
									</el-container>
								</li>
								<li class="previewLi">
									<div class="record-title">
										<div class="title-head">
											<img src="../../assets/img/icon/jibenxinxi.png">
											<span>技能信息</span>
										</div>
									</div>
									<el-container>
										<el-aside width="175px" class="none">
											<img src="" alt=""
											     style="width: 1rem;height: 1rem;background:rosybrown;margin: 0 auto;display: block ">
										</el-aside>
										<el-main>
											<el-row :gutter="40">
												<el-col :span="12">
													<div class="grid-content">
														<label>所在地区</label><span>中国 杭州</span>
													</div>
												</el-col>
												<el-col :span="12">
													<div class="grid-content"></div>
												</el-col>
											</el-row>
											<el-row :gutter="40">
												<el-col :span="12">
													<div class="grid-content">
														<label>出生日期</label><span>中国 杭州</span>
													</div>
												</el-col>
												<el-col :span="12">
													<div class="grid-content">
														<label for="">手机号码</label><span>18310553778</span>
													</div>
												</el-col>
											</el-row>
											<el-row :gutter="40">
												<el-col :span="12">
													<div class="grid-content">
														<label>微信号</label><span>18310553778</span>
													</div>
												</el-col>
												<el-col :span="12">
													<div class="grid-content">
														<label for="">电子邮箱</label><span>18310553778</span>
													</div>
												</el-col>
											</el-row>
											<el-row :gutter="40">
												<el-col :span="24">
													<div class="grid-content">
														<label>求职意愿</label><span>UI设计师，视觉设计师</span>
													</div>
												</el-col>
											</el-row>
										</el-main>
									</el-container>
								</li>
							</ul>
						</div>
					</div>
				</div>
	      </span>
		</el-dialog>
	</div>
	<!--</div>-->
</template>

<script>
    export default {
        name: "RecordCheck",
        data() {
            return {
                checkJlDialogVisible: false,
                lists: [
                    {
                        text: '基本信息',
                        srcs: require('../../assets/img/icon/jibenxinxi.png'),
                        tag: '#0'
                    },
                    {
                        text: '教育经历',
                        srcs: require('../../assets/img/education_icon.png'),
                        tag: '#1'
                    },
                    {
                        text: '工作经历',
                        srcs: require('../../assets/img/icon/gzjl.png'),
                        tag: '#2'
                    },
                    {
                        text: '项目活动经历',
                        srcs: require('../../assets/img/xiangmuguanli.png'),
                        tag: '#3'
                    },
                    {
                        text: '技能信息',
                        srcs: require('../../assets/img/icon/jibenxinxi.png'),
                        tag: '#4'
                    }
                ],               //右侧遍历
                nums: 0,
                reName0: true,
                reName1: false,
                checkname: '',
                inputName: '',
                
                imageUrl: '',
                checkImg: -1,
                checkImg01: 1,
                checkImg02: 1,
                checkImg03: 1,
                checkImg04: 1,
                checkImg05: 1,
                
                two0: -1,
                two1: -1,
                two2: -1,
                two3: -1,
                two4: -1,
                
                block0: 1,
                block1: 0,
                block2: 0,
                block3: 0,
                block4: 0,
                
                //重新编辑
                check0: -1,
                check1: -1,
                check2: -1,
                check3: -1,
                check4: -1,
                
                userInfos: {
                    userInfosImg: '',
                    userFullname: '',
                    userSex: '',
                    userRegion: '',
                    userArea: '',
                    userBirthday: '',
                    userMobile: '',
                    userWex: '',
                    userEmail: '',
                    message: '',
                },
                personalRules: {
                    userInfosImg: [
                        {required: true, message: '请选择照片',}
                    ],
                    userFullname: [
                        {required: true, message: '请输入姓名', trigger: 'blur'}
                    ],
                    userSex: [{required: true, message: '请选择性别', trigger: 'change'}],
                    userBirthday: [
                        {type: 'date', required: true, message: '请选择出生年月', trigger: 'change'}
                    ],
                    userRegion: [
                        {required: true, message: '请选择国家', trigger: 'change'}
                    ],
                    userArea: [
                        {required: true, message: '请选择地区', trigger: 'change'}
                    ],
                    userMobile: [
                        {type: '', required: true, message: '请输入手机号', trigger: 'blur'}
                    ],
                    userWex: [
                        {required: true, message: '请输入微信号', trigger: 'blur'}
                    ],
                    userEmail: [
                        {required: true, message: '请输入邮箱', trigger: 'blur'},
                        {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
                    ],
                    userMessage: [
                        {required: true, message: '请输入求职意愿', trigger: 'blur'}
                    ]
                },
                educationExperience: {
                    school: '',
                    education: '',
                    professional: '',
                    point: '',
                    course: '',
                    date1: '',
                    date2: '',
                },
                educationRules: {
                    school: [
                        {required: 'true', message: '请输入毕业院校', trigger: 'blur'}
                    ],
                    education: [
                        {required: 'true', message: '请选择最高学历', trigger: 'change'}
                    ],
                    professional: [
                        {required: 'true', message: '请输入专业', trigger: 'blur'}
                    ],
                    point: [
                        {required: 'true', message: '请选择最高学历', trigger: 'change'}
                    ],
                    course: [
                        {required: 'true', message: '请输入主修课程', trigger: 'blur'}
                    ],
                    date1: [
                        {required: 'true', message: '请选择开始时间', trigger: 'changge'}
                    ],
                    date2: [
                        {required: 'true', message: '请选择结束时间', trigger: 'change'}
                    ],
                },
                ruleForm3: {
                    company: '',
                    industry: '',
                    IndustrySegments: '',
                    place: '',
                    jobContent: '',
                    Position: '',
                    date1: '',
                    date2: ''
                },
                workRules: {
                    company: [
                        {required: 'true', message: '请输入企业名称', trigger: 'blur'}
                    ],
                    industry: [
                        {required: 'true', message: '请选择所在行业', trigger: 'change'}
                    ],
                    IndustrySegments: [
                        {required: 'true', message: '请选择行业细分', trigger: 'change'}
                    ],
                    place: [
                        {required: 'true', message: '请输入工作地点', trigger: 'blur'}
                    ],
                    jobContent: [
                        {required: 'true', message: '请输入工作内容', trigger: 'blur'}
                    ],
                    Position: [
                        {required: 'true', message: '请输入担任课程', trigger: 'blur'}
                    ],
                    date1: [
                        {required: 'true', message: '请选择开始时间', trigger: 'change'}
                    ],
                    date2: [
                        {required: 'true', message: '请选择结束时间', trigger: 'change'}
                    ],
                },
                ruleForm4: {
                    type: '',
                    name: '',
                    role: '',
                    result: '',
                },
                projectRules: {
                    type: [
                        {required: 'true', message: '请项目类型', trigger: 'change'}
                    ],
                    name: [
                        {required: 'true', message: '请输入项目名称', trigger: 'change'}
                    ],
                    role: [
                        {required: 'true', message: '请输入承担角色', trigger: 'change'}
                    ],
                    result: [
                        {required: 'true', message: '请输入项目成果', trigger: 'blur'}
                    ],
                },
                ruleForm5: {
                    skillType: '',
                    skill: '',
                    Proficiency: ''
                },
                skillRules: {
                    skillType: [
                        {required: 'true', message: '请选择技能类型', trigger: 'change'}
                    ],
                    skill: [
                        {required: 'true', message: '请选择技能', trigger: 'change'}
                    ],
                    Proficiency: [
                        {required: 'true', message: '请选择熟练程度', trigger: 'change'}
                    ],
                },
                
                educationData: [],
                workData: [],
                projectData: [],
                skillData: [],
                
                checkUserInfos: {
                    userInfosImg: '',
                    userFullname: '',
                    userSex: '',
                    userRegion: '',
                    userArea: '',
                    userBirthday: '',
                    userMobile: '',
                    userWex: '',
                    userEmail: '',
                    message: '',
                },
                checkEducationExperience: {
                    school: '',
                    education: '',
                    professional: '',
                    point: '',
                    course: '',
                    date1: '',
                    date2: '',
                },
                checkRuleForm3: {
                    company: '',
                    industry: '',
                    IndustrySegments: '',
                    place: '',
                    jobContent: '',
                    Position: '',
                    date1: '',
                    date2: ''
                },
                checkRuleForm4: {
                    type: '',
                    name: '',
                    role: '',
                    result: '',
                },
                checkRuleForm5: {
                    skillType: '',
                    skill: '',
                    Proficiency: '',
                },
            }
        },
        methods: {
            //新建
            newBuilt(index) {
                if (index == 0) {
                    this.two0 = index
                    this.two1 = -1
                    this.two2 = -1
                    this.two3 = -1
                    this.two4 = -1
                    
                    this.check0 = 0
                    this.check1 = -1
                    this.check2 = -1
                    this.check3 = -1
                    this.check4 = -1
                    
                    this.block1 = 0
                    this.block2 = 0
                    this.block3 = 0
                    this.block4 = 0
                    
                } else if (index == 1) {
                    this.two1 = index
                    this.two0 = -1
                    this.two2 = -1
                    this.two3 = -1
                    this.two4 = -1
                    
                    this.check0 = -1
                    this.check1 = 0
                    this.check2 = -1
                    this.check3 = -1
                    this.check4 = -1
                    
                    this.block1 = -1
                    this.block2 = 0
                    this.block3 = 0
                    this.block4 = 0
                } else if (index == 2) {
                    this.two2 = index
                    this.two1 = -1
                    this.two0 = -1
                    this.two3 = -1
                    this.two4 = -1
                    
                    this.check0 = -1
                    this.check1 = -1
                    this.check2 = 0
                    this.check3 = -1
                    this.check4 = -1
                    
                    this.block1 = 0
                    this.block2 = -1
                    this.block3 = 0
                    this.block4 = 0
                } else if (index == 3) {
                    this.two3 = index
                    this.two1 = -1
                    this.two2 = -1
                    this.two0 = -1
                    this.two4 = -1
                    
                    this.check0 = -1
                    this.check1 = -1
                    this.check2 = -1
                    this.check3 = 0
                    this.check4 = -1
                    
                    this.block1 = 0
                    this.block2 = 0
                    this.block3 = -1
                    this.block4 = 0
                } else if (index == 4) {
                    this.two4 = index
                    this.two1 = -1
                    this.two2 = -1
                    this.two3 = -1
                    this.two0 = -1
                    
                    this.check0 = -1
                    this.check1 = -1
                    this.check2 = -1
                    this.check3 = -1
                    this.check4 = 0
                    
                    this.block1 = 0
                    this.block2 = 0
                    this.block3 = 0
                    this.block4 = -1
                }
            },
            //新建保存
            builtForm(formName, index) {
                this.$refs[formName].validate((valid) => {
                    // debugger
                    if (valid) {
                        alert('submit!')
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                })
            },
            //取消新建
            unBuiltForm(formName, index) {
                this.checkImg = -1;
                this.two0 = -1
                this.two1 = -1
                this.two2 = -1
                this.two3 = -1
                this.two4 = -1
                
                
                this.check0 = -1
                this.check1 = -1
                this.check2 = -1
                this.check3 = -1
                this.check4 = -1
                
                this.block1 = 0
                this.block2 = 0
                this.block3 = 0
                this.block4 = 0
                
                this.checkImg01 = 1
                this.checkImg02 = 1
                this.checkImg03 = 1
                this.checkImg04 = 1
                this.checkImg05 = 1
                this.$refs[formName].resetFields();
                this.imageUrl = ''
            },
            //重新编辑保存
            checkForm(formName, index) {
            
            },
            //重新编辑取消保存
            unCheckForm(formName, index) {
                this.checkImg = -1;
                this.two0 = -1
                this.two1 = -1
                this.two2 = -1
                this.two3 = -1
                this.two4 = -1
                
                this.check0 = -1
                this.check1 = -1
                this.check2 = -1
                this.check3 = -1
                this.check4 = -1
                
                this.checkImg01 = 1
                this.checkImg02 = 1
                this.checkImg03 = 1
                this.checkImg04 = 1
                this.checkImg05 = 1
                this.$refs[formName].resetFields();
                this.imageUrl = ''
                
                this.block1 = -1
                this.block2 = -1
                this.block3 = -1
                this.block4 = -1
            },
            //  预览
            // preview() {
            //     this.$router.push('/record/me')
            // },
            //上传头像
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
                return isJPG || isPNG && isLt2M;
            },
            //重命名
            reName() {
                this.reName0 = false;
                this.reName1 = true;
            },
            checkName() {
                this.reName0 = true;
                this.reName1 = false;
                this.checkname = this.inputName
            },
            //下载
            download() {
            
            },
            
            
            //重新编辑
            editor(index) {  //编辑基本信息
                this.check0 = 0;
            },
            editor2(index) {
                this.check1 = 1;
            },
            editor3(index) {
                this.check2 = 2;
            },
            editor4(index) {
                this.check3 = 3;
            },
            editor5(index) {
                this.check4 = 4;
            },
            
            //右边简历信息切换
            btnLi(row) {
                this.nums = row
            },
        },
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
	
	/*预览*/
	.previewBox {
		width: 100%;
	}
	
	.previewLi {
		border-bottom: 1px solid #F2F2F2;
	}
	
	.previewLi .el-main {
		margin-top: -20px;
		padding: 0.30rem;
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