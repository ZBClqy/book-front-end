<template>
    <div>
        <header>
            <el-button type="primary" @click="switchLoading('添加标签','')">添加标签</el-button>
        </header>
        <myTable :data="tableList"  v-model:current_page="params.page_no" v-model:page_size="params.page_size" v-model:total="params.total" @success="initialData()">
            <el-table-column type="index" width="300" label="序号" :index="indexMethod" />
            <el-table-column prop="label_name" label="标签名称" />
            <el-table-column label="操作" >
                <template #default="scope">
                    <el-button link type="info" size="small" @click="switchLoading('编辑标签',scope.row.label_name,scope.row.id)">编辑</el-button>
                    <el-button link type="info" size="small" @click="showDeleteLoading(scope.row.label_name,scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </myTable>
        <editLoading :show="showLoading" :editId="editId"  :editLabel="editLabel" :loadingTitle="editTitle" @input="(val:boolean)=>showLoading=val" @success="initialData"></editLoading>
        <delLoading :show="showDelLoading" :title="delTitle" :delId="delId" @success="initialData" @input="(val:boolean)=>showDelLoading=val"></delLoading>
    </div>
</template>

<script setup lang="ts">
import myTable from '@/components/table/MyTable.vue'
import editLoading from './components/EditTableLoading.vue'
import delLoading from './components/DeleteTableLoading.vue'
import * as API_TABLE from './api'
import { ref, reactive } from 'vue'
type tableType={label_name:string, status:string, create_time:string, id:number}

const showLoading = ref(false)
const showDelLoading = ref(false)
const tableList:tableType[] = reactive([])
const delTitle = ref('')
const delId = ref(0)
const editTitle = ref('')
const editLabel = ref('')
const editId = ref(0)
const params = reactive({
  page_size: 10,
  page_no: 1,
  total: 0
})

initialData()

function switchLoading (name:string, label:string, id?:number) {
  editTitle.value = name
  editLabel.value = label
  if (id) {
    editId.value = id
  }
  showLoading.value = true
}

function indexMethod (index: number) {
  return index * 1 + 1
}

function showDeleteLoading (name:string, id:number) {
  delTitle.value = name
  delId.value = id
  showDelLoading.value = true
}

async function initialData () {
  try {
    const response = await API_TABLE.selectTable(params)
    tableList.splice(0, tableList.length)
    tableList.push(...response.data.data)
    params.total = response.data.total
  } catch (err) { /** */ }
}

</script>

<style lang="scss" scoped>
    header{
        min-height: 4rem;
        padding: 1rem 2rem;
        display: grid;
        grid-template-columns:150px auto auto 150px 150px;
        overflow: hidden;
        box-sizing: border-box;
        width: 100%;
        grid-column-gap: 1.5rem;
    }
</style>
