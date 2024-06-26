import { defineFakeRoute } from 'vite-plugin-fake-server/client'

function Layout() {
  return import('@/layouts/index.vue')
}
export default defineFakeRoute([
  {
    url: '/mock/app/route/list',
    method: 'get',
    response: () => {
      return {
        error: '',
        status: 1,
        data: [
          {
            meta: {
              title: '主导航',
              icon: 'uim:box',
            },
            children: [
              {
                path: 'score',
                name: 'score',
                component: () => import('@/views/score_management/score.vue'),
                meta: {
                  title: '成绩管理',
                  menu: false,
                  breadcrumb: false,
                  activeMenu: '/score_management',
                },
              },
              {
                path: 'course',
                name: 'course',
                component: () => import('@/views/course_management/course.vue'),
                meta: {
                  title: '课程管理',
                  menu: false,
                  breadcrumb: false,
                  activeMenu: '/course_management',
                },
              },
              {
                path: '/employment_management',
                component: Layout,
                redirect: '/employment_management/index',
                name: 'index',
                meta: {
                  title: '就业管理',
                  icon: 'ep:avatar',
                },
                children: [
                  {
                    path: 'index',
                    name: 'index',
                    component: () => import('@/views/employment_management/index.vue'),
                    meta: {
                      title: '简介',
                      activeMenu: '/employment_management',
                      icon: 'line-md:text-box-to-text-box-multiple-transition',
                    },
                  },
                  {
                    path: 'ability_evaluation',
                    name: 'ability',
                    component: () => import('@/views/employment_management/ability_evaluation/ability.vue'),
                    meta: {
                      title: '就业能力评估',
                      activeMenu: '/employment_management',
                      icon: 'line-md:speedometer-loop',
                    },
                  },
                  {
                    path: 'employment_prediction',
                    name: 'employment',
                    component: () => import('@/views/employment_management/employment_prediction/employment.vue'),
                    meta: {
                      title: '就业去向预测',
                      activeMenu: '/employment_management',
                      icon: 'line-md:uploading-loop',
                    },
                  },
                  {
                    path: 'realtime_evaluation_prediction',
                    name: 'realtime',
                    component: () => import('@/views/employment_management/realtime_evaluation_prediction/realtime.vue'),
                    meta: {
                      title: '实时评估和预测',
                      activeMenu: '/employment_management',
                      icon: 'line-md:loading-loop',
                    },
                  },
                ],
              },
            ],
          },
        ],
      }
    },
  },
  {
    url: '/mock/app/menu/list',
    method: 'get',
    response: () => {
      return {
        error: '',
        status: 1,
        data: [
          {
            meta: {
              title: '主导航',
              icon: 'uim:box',
            },
            children: [
              {
                path: 'score',
                name: 'score',
                component: () => import('@/views/score_management/score.vue'),
                meta: {
                  title: '成绩管理',
                  menu: false,
                  breadcrumb: false,
                  activeMenu: '/score_management',
                },
              },
              {
                path: 'course',
                name: 'course',
                component: () => import('@/views/course_management/course.vue'),
                meta: {
                  title: '课程管理',
                  menu: false,
                  breadcrumb: false,
                  activeMenu: '/course_management',
                },
              },
              {
                path: '/employment_management',
                component: Layout,
                redirect: '/employment_management/index',
                name: 'index',
                meta: {
                  title: '就业管理',
                  icon: 'ep:avatar',
                },
                children: [
                  {
                    path: 'index',
                    name: 'index',
                    component: () => import('@/views/employment_management/index.vue'),
                    meta: {
                      title: '简介',
                      activeMenu: '/employment_management',
                      icon: 'line-md:text-box-to-text-box-multiple-transition',
                    },
                  },
                  {
                    path: 'ability_evaluation',
                    name: 'ability',
                    component: () => import('@/views/employment_management/ability_evaluation/ability.vue'),
                    meta: {
                      title: '就业能力评估',
                      activeMenu: '/employment_management',
                      icon: 'line-md:speedometer-loop',
                    },
                  },
                  {
                    path: 'employment_prediction',
                    name: 'employment',
                    component: () => import('@/views/employment_management/employment_prediction/employment.vue'),
                    meta: {
                      title: '就业去向预测',
                      activeMenu: '/employment_management',
                      icon: 'line-md:uploading-loop',
                    },
                  },
                  {
                    path: 'realtime_evaluation_prediction',
                    name: 'realtime',
                    component: () => import('@/views/employment_management/realtime_evaluation_prediction/realtime.vue'),
                    meta: {
                      title: '实时评估和预测',
                      activeMenu: '/employment_management',
                      icon: 'line-md:loading-loop',
                    },
                  },
                ],
              },
            ],
          },
        ],
      }
    },
  },
])
