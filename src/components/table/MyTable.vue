<template>
    <div class="table">
        <el-table :data="data" style="width: 100%">
            <slot></slot>
        </el-table>
        <div class="page">
            <el-pagination background  v-model:current-page="params.page_no"
            v-model:page-size="params.page_size" :page-sizes="[10,50,100,200]" layout="total, sizes, prev, pager, next, jumper" :total="params.total" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch, reactive } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  current_page: {
    type: Number,
    default: 0
  },
  page_size: {
    type: Number,
    default: 0
  },
  total: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['update:current_page', 'update:page_size', 'update:total', 'success'])

const params = reactive({
  page_size: 10,
  page_no: 1,
  total: 0
})

watch(() => params.page_no, (newVal) => {
  emit('update:current_page', newVal)
  emit('success')
})

watch(() => params.page_size, (newVal) => {
  emit('update:page_size', newVal)
  emit('success')
})

watch(() => props.current_page, (newVal) => {
  params.page_no = newVal
})

watch(() => props.total, (newVal) => {
  params.total = newVal
})

onMounted(() => {

})
</script>

<style lang="scss" scoped>
    .table{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        :deep(.el-table__inner-wrapper){
            min-height: 46rem;
            flex: 1;
            .el-scrollbar{
                height: 100%;
            }
        }
        .page{
            margin: 2rem 0;
        }
    }
</style>
