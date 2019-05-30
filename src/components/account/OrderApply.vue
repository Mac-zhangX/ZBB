<template>
    <div>
        <v-nav></v-nav>
        <div class="content middle-container">
            <div class="title ">
                <h1>填写申请表</h1>
            </div>
            <div class="order-box">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="课程名" prop="course">
                        <el-input v-model="ruleForm.course"></el-input>
                    </el-form-item>
                    <el-form-item label="学校" prop="school">
                        <el-input v-model="ruleForm.course"></el-input>
                    </el-form-item>
                    <el-form-item label="毕业时间" required>
                        <el-col :span="11">
                            <el-form-item prop="date1">
                                <el-date-picker type="date" placeholder="开始日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-form-item prop="date2">
                                <el-date-picker type="date" placeholder="结束日期" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="手机号" prop="mobile">
                        <el-input v-model="ruleForm.mobile"></el-input>
                    </el-form-item>
                    <el-form-item label="微信号" prop="wechat">
                        <el-input v-model="ruleForm.wechat"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="ruleForm.email"></el-input>
                    </el-form-item>
                    <el-form-item label="申请表项目1" prop="project_1">
                        <el-input v-model="ruleForm.project_1"></el-input>
                    </el-form-item>
                    <el-form-item label="申请表项目2" prop="project_2">
                        <el-input v-model="ruleForm.project_2"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>

        </div>
    </div>
</template>

<script>
    import accountMenu from "../../components/plug/accountMenu";
    export default {
        name: "OrderApply",
        data() {
            return {
                ruleForm: {
                    name: '',
                    course: '',
                    school: '',
                    date2: '',
                    date1: '',
                    mobile: '',
                    wechat: '',
                    email: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                        this.$router.push('/orders')
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        components : {
            "v-nav": accountMenu,
        },
        mounted(){

        }
    }
</script>

<style scoped>
    @import "../../assets/css/main.css";
    div{
        width: 100%;
    }

    .content{
        padding: .35rem;
        background: #FFFFFF;
        box-shadow: 0 2px 9px 0 rgba(109,107,107,0.30);
        margin-bottom: 1rem;
    }
    .title{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #C3C3C3;
        padding-bottom: .15rem;
    }
    .title h1{
        font-size: .2rem;
        color: #4A4A4A;
        letter-spacing: 0;
        line-height: .4rem;
        width: 1rem;
        margin-left: .05rem;
    }

    .order-box{
        padding: .4rem .05rem;
    }

    @media (min-width: 1200px) {

    }
    @media (min-width: 992px) and (max-width: 1200px){

    }
    @media (min-width: 767px) and (max-width: 992px){

    }
    @media (max-width: 767px) {

        .title{
            display: block;
        }

        .order-box{
            padding: .2rem .05rem;
        }

    }
</style>
<style>
    .el-form{
        width: 5.5rem;
        margin: .2rem auto;
    }

    @media (max-width: 767px) {

        .el-form{
            width: 100%;
            margin: .2rem auto;
        }

    }
</style>
