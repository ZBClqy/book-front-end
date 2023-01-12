<template>
    <div class="sidebar" >
        <div class="rotate_icon" :class="rotate?'rotate_icon_go':''" @click="rotate=!rotate"></div>
        <div class="sidebar_main" :class="rotate?'sidebar_main_hide':''" >
            <el-menu :default-active="route.path.slice(1,route.path.length)" @select="selectMenu" active-text-color="#fca106" class="el-menu-vertical-demo" background-color="rgb(250, 250, 250)">
                <el-sub-menu index="1">
                    <template #title>
                        <svgIcon :name="'DoneList'"></svgIcon>
                        <span>内容管理</span>
                    </template>
                      <el-menu-item index="article_list">文章列表</el-menu-item>
                      <el-menu-item index="table_list">标签列表</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="svgIcon">
                    <svgIcon :name="'Share'"></svgIcon>
                    <span>icon图标</span>
                </el-menu-item>
                <el-menu-item index="public_materials">
                    <svgIcon :name="'zhaopian_pic'"></svgIcon>
                    <span>公众号素材</span>
                </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const rotate = ref(false)
const router = useRouter()
const route = useRoute()

function selectMenu (index:string) {
  router.push('/' + index)
}

console.log(route)

</script>

<style lang="scss" scoped>
.sidebar{
    padding-top: 5rem;
    box-shadow: 1px 1px 10px rgb(50, 56, 64);
    .rotate_icon{
        cursor: pointer;
        position: absolute;
        top: 2.2rem;
        left: 2rem;
        width: 2.4rem;
        height: 0.4rem;
        background-color: white;
        transition: transform 1s;
        &::before{
            display: block;
            content: '';
            width: 2.4rem;
            height: 0.4rem;
            background-color: white;
            position:absolute;
            top: -0.9rem;
        }
        &::after{
            display: block;
            content: '';
            width: 2.4rem;
            height: 0.4rem;
            background-color: white;
            position:absolute;
            top: 0.9rem;
        }
    }

    .rotate_icon_go{
        transform: rotate(90deg);
    }

    .sidebar_main{
        width: 20rem;
        min-height: 100vh;
        background-color: rgb(250, 250, 250);
        transition: transform 0.5s;
        :deep(.el-menu ){
            border: none;

            .el-sub-menu .el-menu-item  {
                font-size: 1rem;
            }
            span{
                margin-left: 1rem;
            }
            svg{
                width: 1.5rem;
                display: block;
            }
        }
    }

}

.sidebar_main_hide{
    position: absolute;
        transform: translateX(-40rem);
}

</style>
