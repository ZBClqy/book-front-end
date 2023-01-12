<template>
    <div>
        <el-dialog v-model="visible" :title="loadingTitle" width="50rem" center>
          <el-form
              ref="ruleFormRef"
              label-width="120px"
              class="demo-ruleForm"
              status-icon
              :rules="rules"
              :model="ruleFrom"
          >
              <el-form-item label="标签名称：" prop="table">
                <el-input v-model="ruleFrom.table"  placeholder="请输入标签名称进行添加" />
              </el-form-item>
              </el-form>
              <template #footer>
                <span class="dialog-footer">
                  <el-button @click="visible = false">取消</el-button>
                  <el-button type="primary" @click="submitTable(ruleFormRef as FormInstance)">
                    确定
                  </el-button>
                </span>
              </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import * as API_TABLE from '../api'
import useVisible from '@/hook/useHook.ts'
import { ref, watch, reactive } from 'vue'
import type { FormRules, FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'

type fromType = { table:string }

const props = defineProps(Object.assign(useVisible(), {
  loadingTitle: {
    type: String,
    default: '添加标签'
  },
  editLabel: {
    type: String,
    default: ''
  },
  editId: {
    type: Number,
    default: 0
  }
}))
const emit = defineEmits(['input', 'success'])
const visible = ref(props.show)
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  table: [
    { required: true, message: '请填写标签', trigger: ['blur', 'change'] }
  ]
})

const ruleFrom = reactive<fromType>({
  table: ''
})

watch(() => props.show, (newVal) => {
  visible.value = newVal
})

watch(() => visible.value, (newVal) => {
  emit('input', newVal)
})

watch(() => props.editLabel, (newVal) => {
  ruleFrom.table = newVal
  if (!newVal) {
    ruleFormRef.value?.resetFields()
  }
})

async function submitTable (FormRef:FormInstance) {
  try {
    await FormRef.validate(async (vaild) => {
      if (vaild) {
        if (!props.editLabel) {
          await API_TABLE.addTable({ ...ruleFrom })
          ruleFrom.table = ''
          ElMessage({
            message: '添加成功',
            type: 'success'
          })
        } else {
          const response = await API_TABLE.updateTable({ label: ruleFrom.table, id: props.editId })
          if (response.code === 200) {
            ElMessage({
              message: '修改成功',
              type: 'success'
            })
          }
        }
        visible.value = false
        emit('success')
      }
    })
  } catch (err) { /** */ }
}
</script>

<style lang="scss" scoped>

</style>
