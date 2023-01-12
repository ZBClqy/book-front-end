<template>
    <div class="loading_box">
        <el-dialog v-model="visible" title="请选择素材" width="50rem" center>
            <span class="tips">
                请单击确认以下素材
            </span>
            <div class="material_box">
                <template v-for="(item,index) in imgList" :key="index">
                    <div class=image_box><img @click="selectImages(item.media_id)" :src="item.url" alt=""></div>
                </template>
            </div>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import useVisible from '@/hook/useHook.ts'
import { ref, watch, reactive } from 'vue'
import * as IMAGE from '../../api'
import { ElMessage } from 'element-plus'

type imgs={media_id: string, name: string, tags: string[], update_time: number, url:string}

const props = defineProps(Object.assign(useVisible(), {}))
const visible = ref(props.show)
const emit = defineEmits(['input', 'select'])
const imgList:imgs[] = reactive([])

watch(() => props.show, (newVal) => {
  visible.value = newVal
})

watch(() => visible.value, (newVal) => {
  emit('input', newVal)
})

async function getImages () {
  try {
    const response = await IMAGE.getImgList()
    imgList.push(...response.data.item)
  } catch (err) { /** */ }
}

getImages()

function selectImages (item:string) {
  ElMessage({
    message: '选择成功',
    type: 'success'
  })
  visible.value = false
  emit('select', item)
}
</script>

<style lang="scss" scoped>
.loading_box{
    position: relative;
    z-index: 1000000;
    .tips{
        font-size: 0.4rem;
        color: rgb(153, 154, 154);
    }

    .material_box{
        display: flex;
        margin-top: 2rem;
        flex-wrap: wrap;
        height: 30rem;
        overflow-y: scroll;
        .image_box{
            width: 10rem;
            height: 10rem;
            box-shadow: 1px 1px 8px black;
            margin-left: 1rem;
            margin-top: 1rem;
            border-radius: 5px;
            cursor: pointer;
            img{
                border-radius: 5px;
                width: 10rem;
                height: 10rem;
            }
        }
    }

        .material_box::-webkit-scrollbar {
             width: 6px;
        }
        // 滚动条轨道
        .material_box::-webkit-scrollbar-track {
          background: rgb(239, 239, 239);
          border-radius: 2px;
        }
        // 小滑块
        .material_box::-webkit-scrollbar-thumb {
          background:  rgb(50, 56, 64);
          border-radius: 10px;
        }
        .material_box::-webkit-scrollbar-thumb:hover {
          background:rgb(50, 56, 64);
        }
}
</style>
