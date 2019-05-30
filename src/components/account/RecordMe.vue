<template>
	<div>
		<v-nav></v-nav>
		<div class="content middle-container">
			<div class="title">
				<h1>预览简历</h1>
				<div class="gl-box">
					<el-row>
						<el-button round @click="checkJlDialogVisible = true">修改</el-button>
						<el-button round type="primary" @click="download()">下载</el-button>
					</el-row>
				</div>
			</div>
		</div>
		<div class="middle-container">
			<div class="flex-box-between recordFinish">
				<div class="record-items">
					<ul>
						<li class="list-item">
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
						<li class="list-item">
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
						<li class="list-item">
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
						<li class="list-item">
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
						<li class="list-item">
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
		
		<el-dialog
				title=""
				:visible.sync="checkJlDialogVisible"
				width="50%"
				left style="text-align: left;" class="glDialog">
			<el-form ref="userInfos" class="form" :model="userInfos" :rules="personalRules" label-width="80px">
				<div class="record-items checkJLXX">
					<ul>
						<li class="list-item">
							<div class="record-title">
								<div class="title-head">
									<img src="../../assets/img/icon/jibenxinxi.png">
									<span>基本信息</span>
								</div>
							</div>
							<el-container>
								<el-aside width="175px" class="">
									<el-upload
											class="avatar-uploader"
											action="https://jsonplaceholder.typicode.com/posts/"
											:show-file-list="false"
											:on-success="handleAvatarSuccess"
											:before-upload="beforeAvatarUpload" prop="userInfosImg">
										<img v-if="imageUrl" :src="imageUrl" class="avatar">
										<i v-else class="el-icon-plus avatar-uploader-icon"></i>
									</el-upload>
									<span class="checkName">上传照片</span>
								</el-aside>
								<el-main>
									<el-row :gutter="40">
										<el-col :span="12">
											<el-form-item label="所在地区" prop="userRegion">
												<el-select v-model="userInfos.userRegion" autocomplete="off"
												           placeholder="">
													<el-option label="区域一" value="shanghai"></el-option>
													<el-option label="区域二" value="beijing"></el-option>
												</el-select>
											</el-form-item>
										</el-col>
										<el-col :span="12">
											<div class="grid-content"></div>
										</el-col>
									</el-row>
									<el-row :gutter="40">
										<el-col :span="12">
											<el-form-item label="出生日期" prop="userBirthday">
												<el-date-picker type="date" placeholder="" autocomplete="off"
												                v-model="userInfos.userBirthday"
												                style="" format="yyyy-MM-dd"
												                value-format="timestamp"></el-date-picker>
											</el-form-item>
										</el-col>
										<el-col :span="12">
											<el-form-item label="手机号码" prop="userMobile">
												<el-input v-model="userInfos.userMobile"></el-input>
											</el-form-item>
										</el-col>
									</el-row>
									<el-row :gutter="40">
										<el-col :span="12">
											<el-form-item label="微信号" prop="userWex">
												<el-input v-model="userInfos.userWex"></el-input>
											</el-form-item>
										</el-col>
										<el-col :span="12">
											<el-form-item label="电子邮箱" prop="userEmail">
												<el-input v-model="userInfos.userEmail"></el-input>
											</el-form-item>
										</el-col>
									</el-row>
									<el-row :gutter="40">
										<el-col :span="24">
											<el-form-item label="求职意愿" prop="userMessage">
												<el-input type="textarea"
												          v-model="userInfos.userMessage"></el-input>
											</el-form-item>
										</el-col>
									</el-row>
								</el-main>
							</el-container>
						</li>
						<li class="list-item">
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
											<el-form-item label="毕业学校" prop="school">
												<el-select v-model="userInfos.school" autocomplete="off"
												           placeholder="">
													<el-option label="区域一" value="shanghai"></el-option>
													<el-option label="区域二" value="beijing"></el-option>
												</el-select>
											</el-form-item>
										</el-col>
										<el-col :span="12">
											<el-form-item label="学历" prop="education">
												<el-select v-model="userInfos.education"
												           autocomplete="off" placeholder="">
													<el-option label="区域一" value="shanghai"></el-option>
													<el-option label="区域二" value="beijing"></el-option>
												</el-select>
											</el-form-item>
										</el-col>
									</el-row>
									<el-row :gutter="40">
										<el-col :span="12">
											<el-form-item label="所学专业" prop="professional">
												<el-select v-model="userInfos.professional"
												           autocomplete="off" placeholder="">
													<el-option label="区域一" value="shanghai"></el-option>
													<el-option label="区域二" value="beijing"></el-option>
												</el-select>
											</el-form-item>
										</el-col>
										<el-col :span="12">
											<el-form-item label="绩点" prop="point">
												<el-select v-model="userInfos.point" autocomplete="off"
												           placeholder="">
													<el-option label="区域一" value="shanghai"></el-option>
													<el-option label="区域二" value="beijing"></el-option>
												</el-select>
											</el-form-item>
										</el-col>
									
									</el-row>
									<el-row :gutter="40">
										<el-col :span="12">
											<el-form-item label="主修课程" prop="course">
												<el-input v-model="userInfos.course" autocomplete="off"
												          style=""></el-input>
											</el-form-item>
										</el-col>
									</el-row>
									<el-row :gutter="40">
										<el-col :span="12">
											<el-form-item label="起始时间" prop="date2">
												<el-date-picker type="date" placeholder="" autocomplete="off"
												                v-model="userInfos.date2"
												                style=""></el-date-picker>
											</el-form-item>
										</el-col>
										<el-col :span="12">
											<el-form-item label="" prop="date3">
												<el-date-picker type="date" placeholder="" autocomplete="off"
												                v-model="userInfos.date3"
												                style=""></el-date-picker>
											</el-form-item>
										</el-col>
									</el-row>
								</el-main>
							</el-container>
						</li>
						<li class="list-item">
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
											<el-form-item label="企业名称" prop="company">
												<el-input v-model="userInfos.company" autocomplete="off"
												          style="text-align: left"></el-input>
											</el-form-item>
										</el-col>
										<el-col :span="12">
											<div class="grid-content"></div>
										</el-col>
									</el-row>
									<el-row :gutter="40">
										<el-col :span="12">
											<el-form-item label="所在行业" prop="industry">
												<el-select v-model="userInfos.industry" autocomplete="off"
												           placeholder="">
													<el-option label="区域一" value="shanghai"></el-option>
													<el-option label="区域二" value="beijing"></el-option>
												</el-select>
											</el-form-item>
										</el-col>
										<el-col :span="12">
											<el-form-item prop="IndustrySegments">
												<el-select v-model="userInfos.IndustrySegments" autocomplete="off"
												           placeholder="">
													<el-option label="区域一" value="shanghai"></el-option>
													<el-option label="区域二" value="beijing"></el-option>
												</el-select>
											</el-form-item>
										</el-col>
									</el-row>
									<el-row :gutter="40">
										<el-col :span="24">
											<el-form-item label="工作地点" prop="place">
												<el-input v-model="userInfos.place" autocomplete="off"
												          style="text-align: left"></el-input>
											</el-form-item>
										</el-col>
									</el-row>
									<el-row :gutter="40">
										<el-col :span="12">
											<el-form-item label="工作内容" prop="jobContent">
												<el-input v-model="userInfos.jobContent"
												          autocomplete="off"></el-input>
											</el-form-item>
										</el-col>
										<el-col :span="12">
											<el-form-item label="担任职位" prop="Position">
												<el-input v-model="userInfos.Position"
												          autocomplete="off"></el-input>
											</el-form-item>
										</el-col>
									</el-row>
									<el-row :gutter="20">
										<el-col :span="12">
											<el-form-item label="起始时间" prop="date4">
												<el-date-picker type="date" placeholder=""
												                v-model="userInfos.date4"
												                style=""></el-date-picker>
											</el-form-item>
										</el-col>
										<el-col :span="12">
											<el-form-item prop="date5">
												<el-date-picker type="date" placeholder=""
												                v-model="userInfos.date5"
												                style=""></el-date-picker>
											</el-form-item>
										</el-col>
									</el-row>
								</el-main>
							</el-container>
						</li>
						<li class="list-item">
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
											<el-form-item label="项目类型" prop="type">
												<el-select v-model="userInfos.type" autocomplete="off"
												           placeholder="">
													<el-option label="区域一" value="shanghai"></el-option>
													<el-option label="区域二" value="beijing"></el-option>
												</el-select>
											</el-form-item>
										</el-col>
										<el-col :span="12">
											<el-form-item label="项目名称" prop="name">
												<el-input v-model="userInfos.name" autocomplete="off"></el-input>
											</el-form-item>
										</el-col>
									</el-row>
									<el-row :gutter="40">
										<el-col :span="24">
											<el-form-item label="承担角色" prop="role">
												<el-input type="textarea" v-model="userInfos.role"
												          autocomplete="off"></el-input>
											</el-form-item>
										</el-col>
									</el-row>
									<el-row :gutter="40">
										<el-col :span="24">
											<el-form-item label="项目成果" prop="result">
												<el-input type="textarea" v-model="userInfos.result"
												          autocomplete="off"></el-input>
											</el-form-item>
										</el-col>
									</el-row>
								</el-main>
							</el-container>
						</li>
						<li class="list-item">
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
											<el-form-item label="技能类型" prop="skillType">
												<el-select v-model="userInfos.skillType" autocomplete="off"
												           placeholder="">
													<el-option label="区域一" value="shanghai"></el-option>
													<el-option label="区域二" value="beijing"></el-option>
												</el-select>
											</el-form-item>
										</el-col>
										<el-col :span="12">
											<el-form-item label="选择技能" prop="skill">
												<el-select v-model="userInfos.skill" autocomplete="off"
												           placeholder="">
													<el-option label="区域一" value="shanghai"></el-option>
													<el-option label="区域二" value="beijing"></el-option>
												</el-select>
											</el-form-item>
										</el-col>
									</el-row>
									<el-row :gutter="40">
										<el-col :span="12">
											<el-form-item label="熟练程度" prop="Proficiency">
												<el-select v-model="userInfos.Proficiency" autocomplete="off"
												           placeholder="">
													<el-option label="区域一" value="shanghai"></el-option>
													<el-option label="区域二" value="beijing"></el-option>
												</el-select>
											</el-form-item>
										</el-col>
									</el-row>
								</el-main>
							</el-container>
						</li>
					</ul>
					<span slot="footer" class="dialog-footer" style="text-align: center">
			        <el-button type="primary" @click="amend('userInfos')">保存</el-button>
			        <el-button @click="unSubmit('userInfos')">取 消</el-button>
                </span>
				</div>
			
			</el-form>
		
		</el-dialog>
	</div>

</template>

<script>
    import accountment from "../../components/plug/accountMenu"
    
    
    export default {
        name: "RecordMe",
        data() {
            return {
                checkJlDialogVisible: false,
                imageUrl: '',
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
                    
                    school: '',
                    education: '',
                    professional: '',
                    point: '',
                    course: '',
                    date1: '',
                    date2: '',
                    
                    company: '',
                    industry: '',
                    IndustrySegments: '',
                    place: '',
                    jobContent: '',
                    Position: '',
                    date3: '',
                    date4: '',
                    date5:'',
                    type: '',
                    name: '',
                    role: '',
                    result: '',
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
                    ],
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
                    date2: [
                        {required: 'true', message: '请选择开始时间', trigger: 'change'}
                    ],
                    date3: [
                        {required: 'true', message: '请选择结束时间', trigger: 'change'}
                    ],
                    date4: [
                        {required: 'true', message: '请选择开始时间', trigger: 'change'}
                    ],
                    date5: [
                        {required: 'true', message: '请选择结束时间', trigger: 'change'}
                    ],
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
                    skillType: [
                        {required: 'true', message: '请选择技能类型', trigger: 'change'}
                    ],
                    skill: [
                        {required: 'true', message: '请选择技能', trigger: 'change'}
                    ],
                    Proficiency: [
                        {required: 'true', message: '请选择熟练程度', trigger: 'change'}
                    ],
                }
            }
        },
        methods: {
            amend(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!')
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                })
            },
            unSubmit(formName) {
                this.checkJlDialogVisible = false;
                this.$refs[formName].resetFields();
            },
            download() {
            
            },
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
	
	.middle-container {
		width: 50%;
	}
	
	.content {
		padding: .35rem;
		background: #BAD6FA;
		/*box-shadow: 0 2px 9px 0 rgba(109, 107, 107, 0.30);*/
	}
	
	.title {
		display: flex;
		justify-content: space-between;
		padding-bottom: .15rem;
	}
	
	.title h1 {
		font-size: .2rem;
		color: #FFFFFF;
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
	
	.gl-box button {
		/*color: #FFF;*/
		padding: 0.1rem 0.3rem;
	}
	
	.gl-box button:first-child {
		color: #2A91E9;
	}
	
	.gl-box button:last-child {
		color: #FFFFFF;
		font-family: PingFangSC-Regular;
	}
	
	.recordFinish {
		display: flex;
		justify-content: space-between;
		box-shadow: 0 2px 9px 0 rgba(109, 107, 107, 0.30);
		margin-bottom: 0.5rem;
	}
	
	.record-items {
		width: 100%;
		padding: 0 0.35rem;
		margin-bottom: 0.5rem;
	}
	
	.list-item {
		padding-top: 0.3rem;
		border-bottom: 1px solid #EAEAEA;
	}
	
	.record-title {
		margin-bottom: 0.2rem;
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
	
	.list-item .nothing {
		font-family: PingFangSC-Regular;
		font-size: 0.2rem;
		color: #9B9B9B;
		letter-spacing: 0;
	}
	
	/*完成*/
	.el-main {
		margin-top: -20px;
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
		width: 0.56rem;
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
	
	/*上传*/
	.checkJLXX .el-upload.el-upload--text {
		/*border: 1px dashed #d9d9d9;*/
		width: 1rem;
		height: 1rem;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		display: inline;
	}
	
	.checkJLXX .avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}
	
	.checkJLXX .avatar-uploader-icon {
		font-size: 18px;
		color: #8c939d;
		width: 100px;
		height: 100px;
		line-height: 100px;
		text-align: center;
		border: 1px solid;
	}
	
	.checkJLXX .avatar {
		width: 100px;
		height: 100px;
		display: block;
	}
	
	.checkJLXX input[type=file] {
		display: none;
	}
	
	.checkJLXX span.checkName {
		font-size: 0.14rem;
		color: #9EC2F1;
	}

</style>
