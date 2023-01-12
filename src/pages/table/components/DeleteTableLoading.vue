<template>
    <div>
        <el-dialog v-model="visible" title="添加标签" width="50rem" center>
          <div>是否确定将其{{title}}标签？删除！！</div>
              <template #footer>
                <span class="dialog-footer">
                  <el-button @click="visible = false">取消</el-button>
                  <el-button type="primary" @click="submitTable">
                    确定
                  </el-button>
                </span>
              </template>
        </el-dialog>
    </div>
</template>

<script setup lang='ts'>
import useVisible from '@/hook/useHook.ts'
import { ref, watch } from 'vue'
import * as API_TABLE from '../api'
import { ElMessage } from 'element-plus'
const emit = defineEmits(['input', 'success'])
const props = defineProps(Object.assign(useVisible(), {
  title: {
    type: String,
    default: ''
  },
  delId: {
    type: Number,
    default: 0
  }
}))

const visible = ref(props.show)

watch(() => props.show, (newVal) => {
  visible.value = newVal
})

watch(() => visible.value, (newVal) => {
  emit('input', newVal)
})

async function submitTable () {
  try {
    const response = await API_TABLE.delTable({ delId: props.delId })
    if (response.code === 200) {
      ElMessage({
        message: '删除成功',
        type: 'success'
      })
      emit('success')
    } else {
      ElMessage.error('删除失败')
    }
    visible.value = false
  } catch (err) { /** */ }
}
</script>

<style scoped lang='scss'>

</style>
