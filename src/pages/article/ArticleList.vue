<template>
    <div>
        <header>
            <el-button type="primary" @click="addArticle">添加文章</el-button>
            <el-input
              v-model="params.title"

              placeholder="请输入文章名称搜索"
              :prefix-icon="Search"
              clearable
            />
            <el-date-picker
               v-model="times"
               type="datetimerange"
               range-separator="至"
               start-placeholder="开始时间"
               end-placeholder="结束时间"
             />
             <el-button type="primary" @click="searchArticle">搜索</el-button>
             <el-button @click="resetArticle">重置</el-button>
        </header>
        <myTable :data="tableList" v-model:current_page="params.page_no" v-model:page_size="params.page_size" v-model:total="params.total" @success="initialData()">
            <el-table-column fixed type="index" :index="indexMethod" label="序号"  width="100" />
            <el-table-column prop="title" label="文章标题" />
            <el-table-column prop="author" label="作者名称"  />
            <el-table-column prop="createTime" label="创建时间" >
              <template #default="scope">
                {{ filterDate(scope.row.createTime) }}
              </template>
            </el-table-column>
            <el-table-column show-overflow-tooltip prop="thumb_media_id" label="素材id"  />
            <el-table-column prop="content_source_url" label="原文地址" >
              <template #default="scope">
                {{scope.row.content_source_url?scope.row.content_source_url:'无'}}
              </template>
            </el-table-column>
            <el-table-column prop="need_open_comment" label="是否支持评论" >
              <template #default="scope">
                <el-switch v-model="scope.row.need_open_comment.data[0]" disabled />
              </template>
            </el-table-column>
            <el-table-column prop="only_fans_can_comment" label="是否粉丝才可评论">
              <template #default="scope">
                <el-switch v-model="scope.row.only_fans_can_comment.data[0]" disabled />
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" >
              <template #default="scope">
                <el-button link type="info" size="small" @click="editArticle(scope.row.id)">编辑</el-button>
                <el-button link type="info" size="small" @click="delArticle(scope.row.title,scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
        </myTable>
    </div>
    <delLoading :show="showDelLoading" :title="delTitle" :delId="delId" @success="initialData()" @input="value=>showDelLoading=value"></delLoading>
</template>

<script setup lang="ts">
import myTable from '@/components/table/MyTable.vue'
import { Search } from '@element-plus/icons-vue'
import { reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import * as ARTICLE from './api'
import filterDate from '@/utils/filterTime.ts'
import delLoading from './components/DelArticleLoading.vue'

type article={ id:number, title:string, author:string, disgest:string, content:string, content_source_url:string, thumb_media_id:string }
const router = useRouter()

const times = ref()

const params = reactive({
  page_size: 10,
  page_no: 1,
  total: 0,
  title: '',
  startTime: 0,
  endTime: 0
})

const delTitle = ref('')
const delId = ref(0)
const showDelLoading = ref(false)

const tableList:article[] = reactive([])

watch(() => times.value, (newVal) => {
  if (!newVal) {
    params.startTime = 0
    params.endTime = 0
  }
})

function editArticle (id:number) {
  router.push({ path: '/article_edit', query: { id } })
}

function addArticle () {
  router.push('/article_add')
}

async function initialData () {
  try {
    const response = await ARTICLE.selectArticle(params)
    tableList.splice(0, tableList.length)
    tableList.push(...response.data.data)
    params.total = response.data.total
  } catch (err) {}
}

initialData()

function searchArticle () {
  if (times.value) {
    params.startTime = new Date(times.value[0]).getTime()
    params.endTime = new Date(times.value[1]).getTime()
  }
  params.page_no = 1
  initialData()
}

function resetArticle () {
  Object.assign(params, {
    page_size: 10,
    page_no: 1,
    total: 0,
    title: '',
    startTime: 0,
    endTime: 0
  })
  initialData()
}

function indexMethod (index: number) {
  return index * 1 + 1
}

function delArticle (title:string, id:number) {
  delTitle.value = title
  delId.value = id
  showDelLoading.value = true
}

</script>

<style lang="scss" scoped>
    header{
        min-height: 4rem;
        padding: 1rem 2rem;
        display: grid;
        grid-template-columns:150px 220px auto 150px 150px;
        overflow: hidden;
        box-sizing: border-box;
        width: 100%;
        grid-column-gap: 1.5rem;
    }
</style>
