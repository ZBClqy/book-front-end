<template>
    <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item,index) in routerLinks" :key="index" :to="{ path: item.path }">{{$t(item.path)}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script setup lang="ts">
import { watch, reactive } from 'vue'
import { useRoute } from 'vue-router'
type info = { path:string }
const route = useRoute()
const routerLinks:info[] = reactive([])
watch(() => route.matched, (newVal) => {
  console.log(newVal)
  routerLinks.splice(0, routerLinks.length)
  routerLinks.push({ path: newVal[1].path })
  if (newVal[1].meta.parent) {
    routerLinks.unshift({ path: newVal[1].meta.parent as string })
  }
})

</script>

<style lang="scss" scoped>
    .breadcrumb{
        :deep(.el-breadcrumb__inner){
            cursor: pointer;
            color: white;
        }
    }
</style>
