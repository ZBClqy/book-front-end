import { createRouter,createWebHistory,RouteRecordRaw } from 'vue-router'
import getToken from '../utils/fetchToken'
const routes:RouteRecordRaw[]=([
    {
        path:'/',
        component:()=>import('@/default/AdminHome.vue'),
        redirect:'/article_list',
        children:[
            {
                path:'article_list',
                component:()=>import('@/pages/article/ArticleList.vue')
            },
            {
                path:'article_add',
                component:()=>import('@/pages/article/children/ArticleEdit.vue'),
                meta:{
                    parent:"/article_list"
                }
            },
            {
                path:'article_edit',
                component:()=>import('@/pages/article/children/ArticleEdit.vue'),
                meta:{
                    parent:"/article_list"
                }
            },
            {
                path:'public_materials',
                component:()=>import('@/pages/officialaccount/PublicMaterials.vue')
            },
            {
                path:'table_list',
                component:()=>import('@/pages/table/MyTableList.vue')
            }
        ]
    },
    {
        path:'/svgIcon',
        component:()=>import('@/pages/svgpage/CopySvgIcon.vue')
    },
    {
        path:'/screen_error',
        component:()=>import('@/error/ScreenError.vue')
    }
])


 const router=createRouter({
    history:createWebHistory(),
    routes
})


router.beforeEach((to,form,next)=>{
    if(form.path=='/'){
        if(localStorage.getItem('token')){
            next()
        }else{
            getToken(next)
        }
    }
})

export default router