<template>
    <div id="editor">

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import E from 'wangeditor'
import * as UPLOAD from '../../api'
const editor = ref()

const emit = defineEmits(['change'])

const props = defineProps({
  text: {
    type: String,
    default: ''
  }
})

onMounted(() => {
  editor.value = new E('#editor')
  editor.value.config.showLinkImg = false
  editor.value.config.customUploadImg = async function (resultFiles: any, insertImgFn: any) {
    const formData = new FormData()
    formData.append('file', resultFiles[0])
    const response = await UPLOAD.uploadImg(formData)
    console.log(response)
    insertImgFn(import.meta.env.VITE_SERVER_URL + '/' + response.data)
  }
  editor.value.config.onchange = function (newHtml:string) {
    emit('change', newHtml)
  }

  editor.value.create()
})

watch(() => props.text, (newVal:string) => {
  if (newVal) {
    editor.value.txt.html(newVal)
  }
})

</script>

<style lang="scss" scoped>
  #editor{
    position: relative;
    z-index: 0;
  }
</style>
