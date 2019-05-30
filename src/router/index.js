import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Written from '@/components/Written'
import WrittenInfo from '@/components/WrittenInfo'
import Practice from '@/components/Practice'
import JobInfo from '@/components/JobInfo'
import Resume from '@/components/Resume'
import Company from '@/components/Company'
import About from '@/components/About'
import AboutMe from '@/components/about/AboutMe'
import Comments from '@/components/about/Comments'
import Join from '@/components/about/Join'
import News from '@/components/about/News'
import Class from '@/components/Class'
import Orders from '@/components/account/Orders'
import OrderInfo from '@/components/account/OrderInfo'
import OrderPay from '@/components/account/OrderPay'
import OrderApply from '@/components/account/OrderApply'
import RecordNew from '@/components/account/RecordNew'
import RecordBuilt from '@/components/account/RecordBuilt'
import RecordCheck from '@/components/account/RecordCheck'
import RecordMe from '@/components/account/RecordMe'
import Account from '@/components/account/index'
import Test from '@/components/account/Test'
import TestPersonal from '@/components/account/TestPersonal'
import TestOptimal from '@/components/account/TestOptimal'
import BuyVip from '@/components/BuyVip'
import VipTc from '@/components/VipTc'
import BuyCourse from '@/components/BuyCourse'
import Course from '@/components/class/Course'
import Setting from '@/components/setting/Setting'
import BindEmail from '@/components/setting/BindEmail'
import BindMobile from '@/components/setting/BindMobile'
import Customization from '@/components/Customization'
import Personal from '@/components/customization/Personal'
import Project_42 from '@/components/customization/Project_42'
import Project_mianba from '@/components/customization/Project_mianba'
import Referme from '@/components/customization/Referme'
import ResumeFinishing from '@/components/customization/ResumeFinishing'
import SmallClass from '@/components/customization/SmallClass'
import BindWx from '@/components/setting/BindWx'
import ForgetPassword from '@/components/setting/ForgetPassword'

Vue.use(Router)

export default new Router({
  mode: 'history',
  srcollBehavior(to,from,savedPosition){
    if(to.hash){
      return{
        selector:to.hash
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
      {
          path: '/practice',
          name: 'Practice',
          component: Practice
      },
      {
          path : '/practice/job',
          name : 'JobInfo',
          component : JobInfo
      },
      {
          path: '/resume',
          name: 'Resume',
          component: Resume
      },
      {
          path: '/company',
          name: 'Company',
          component: Company
      },
      {
          path: '/about',
          name: 'About',
          component: About,
          children: [  //二级路由
              {
                  path: 'index',
                  name: 'AboutMe',
                  component: AboutMe
              },
              {
                  path: 'comments',
                  name: 'Comments',
                  component: Comments
              },
              {
                  path: 'join',
                  name: 'Join',
                  component: Join
              },
              {
                  path: 'news',
                  name: 'News',
                  component: News
              }
          ],
          redirect:'/about/index'
      },
      {
          path: '/customization',
          name: 'Customization',
          component: Customization,
          children: [  //二级路由
              {
                  path: 'index',
                  name: 'Personal',
                  component: Personal
              },
              {
                  path: '42-project',
                  name: 'project42',
                  component: Project_42
              },{
                  path: 'mianba-project',
                  name: 'Project_mianba',
                  component: Project_mianba
              },
              {
                  path: 'referme',
                  name: 'Referme',
                  component: Referme
              },
              {
                  path: 'resume',
                  name: 'ResumeFinishing',
                  component: ResumeFinishing
              },
              {
                  path: 'smallClass',
                  name: 'SmallClass',
                  component: SmallClass
              }
          ],
          redirect:'/customization/index'
      },
      {
          path: '/class',
          name: 'Class',
          component: Class,
      },
      {
          path: '/class/course',
          name: 'Course',
          component: Course
      },
      {
          path: '/setting',
          name: 'Setting',
          component: Setting
      },
      {
          path: '/setting/bindEmail',
          name: 'BindEmail',
          component: BindEmail
      },
      {
          path: '/setting/bindMobile',
          name: 'BindMobile',
          component: BindMobile
      },
      {
          path: '/setting/bindWx',
          name: 'BindWx',
          component: BindWx
      },
      {
          path: '/setting/password',
          name: 'ForgetPassword',
          component: ForgetPassword
      },
      {
          path:'/vip/tc',
          name:'VipTc',
          component: VipTc
      },
      {
          path: '/buy/vip',
          name: 'BuyVip',
          component: BuyVip
      },
      {
          path: '/buy/course',
          name: 'BuyCourse',
          component: BuyCourse
      },
      {
          path: '/orders',
          name: 'Orders',
          component: Orders
      },
      {
          path: '/orders/info',
          name: 'OrderInfo',
          component: OrderInfo
      },
      {
          path: '/orders/apply',
          name: 'OrderApply',
          component: OrderApply
      },
      {
          path: '/orders/pay',
          name: 'OrderPay',
          component: OrderPay
      },
      {
          path: '/account',
          name: 'Account',
          component: Account
      },
      {
          path: '/test',
          name: 'Test',
          component: Test
      },
    {
      path:'/recordnew',
      name:'RecordNew',
      component: RecordNew,
        children: [
            {
                path:'/RecordBuilt',
                name:'RecordBuilt',
                component: RecordBuilt
            },
            {
                path:'/RecordCheck',
                name:'RecordCheck',
                component: RecordCheck
            },
        ]
    },
    {
      path:'/record/me',
      name:'RecordMe',
      component: RecordMe
    },
      {
          path: '/test/personal',
          name: 'TestPersonal',
          component: TestPersonal
      },
    {
      path: '/test/optimal',
      name: 'TestOptimal',
      component: TestOptimal
    },
      {
          path: '/written',
          name: 'Written',
          component: Written
      },
      {
          path: '/written/info',
          name: 'WrittenInfo',
          component: WrittenInfo
      }
  ]
})
