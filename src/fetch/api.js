import axios from 'axios'
import qs from 'qs'
import router from '../router/index'
import utils from "../util/utils";
// import * as _ from '../util/tool'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = '/open';

//POST传参序列化
axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) => {
    if (res && res.status == 200) {
        return Promise.resolve(res);
    }
    return Promise.reject(res);
}, (error) => {
    if (error.response) {
        switch (error.response.status) {
            // case 401:
            //     // 401 清除token信息并跳转到登录页面
            //     utils.store.removeCookie('access_token');
            //     utils.store.removeCookie('admin');
            //     router.replace({
            //         path: 'login',
            //         query: {redirect: router.currentRoute.fullPath}
            //     })
        }
    }
    return Promise.reject(error);
});

export function fetch(url, params) {
    return new Promise((resolve, reject) => {

        axios.post(url, params, {
            headers : {
                'Authorization' : utils.store.getCookie('access_token')
            }
        })
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export default {
    /**
     * 用户登录
     */
    Login(params) {
        return fetch('/login/login', params)
    },

    /**
     * 手机验证码
     */
    MobileCode(mobile) {
        return fetch('/user/sendMessage', {phoneNum : mobile})
    },

    /**
     * 邮箱验证码
     */
    EmailCode(email) {
        return fetch('/user/sendEmail',  {email : email})
    },

    /**
     * 用户注册
     */
    Register(params) {
        return fetch('/user/register', params)
    },

    /**
     * 动态列表
     */
    NewsList(params) {
        return fetch('/dynamic/selectAllDynamic', params)
    },

    /**
     * 加入我们招聘类目
     */
    RecruitType() {
        return fetch('/recruit/selectRecruit')
    },

    /**
     * 相关职位
     */
    RelationJob(id) {
        return fetch('/company/similarCompanyPost',{ id : id })
    },

    /**
     * 职位详情
     */
    JobInfo(id) {
        return fetch('/company/selectCompanyPostById',{ id : id })
    },

    /**
     * 名企实习列表
     */
    JobList(params) {
        return fetch('/company/selectCompanyPost',params)
    },

    /**
     * 名企实习获取索引信息
     */
    PracticeIndex() {
        return fetch('/company/configList')
    },

    /**
     * 学员好评
     */
    StudentComments(params) {
        return fetch('/student_evaluation/selectAllStudentEvaluation', params)
    },
}
