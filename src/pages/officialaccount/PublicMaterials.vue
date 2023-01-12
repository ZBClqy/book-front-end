<template>
    <div class="materials_box">
        <el-upload
              v-model:file-list="fileList"
              action="http://test.linqiaoyan.top/wechat/image"
              auto-upload
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <el-icon><Plus /></el-icon>
            </el-upload>

            <el-dialog v-model="dialogVisible">
              <img w-full :src="dialogImageUrl" alt="Preview Image" />
            </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import * as IMGS from './api'
import type { UploadProps, UploadUserFile } from 'element-plus'

const fileList = ref<UploadUserFile[]>([])

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

async function initImgList () {
  try {
    const response = await IMGS.getImgList()
    fileList.value.splice(0, fileList.value.length)
    fileList.value.push(...response.data.item)
  } catch (err) { /** */ }
}

initImgList()

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}
</script>

<style lang="scss" scoped>
    .materials_box{
        padding: 2rem;
    }
</style>
