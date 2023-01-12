<template>
    <div class="coninter">
        <h1>svgIcon</h1>
        <div class="svg_main">
            <div class="svg_item" v-for="(item,index) in icons" :key="index" @click="copyIconText(index)">
                <svgIcon :name="item"></svgIcon>
                <div class="svgText">#icon-{{item}}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, reactive } from 'vue'
import { ElMessage } from 'element-plus'

let div:HTMLDivElement = document.createElement('div')
let scriptone:HTMLScriptElement = document.createElement('script')
let scripttwo:HTMLScriptElement = document.createElement('script')
const icons:string[] = reactive([])

onMounted(() => {
  const files:string[] = Object.keys(import.meta.glob('../../icons/**.svg'))
  files.forEach((item) => {
    icons.push(item.slice(12, item.indexOf('.svg')))
  })
  div = document.createElement('div')
  div.id = 'particles-js'
  document.body.appendChild(div)
  scriptone = document.createElement('script')
  scriptone.src = '/particles/particles.js'
  scriptone.onload = () => {
    scripttwo = document.createElement('script')
    scripttwo.src = '/particles/app.js'
    document.body.appendChild(scripttwo)
  }
  document.body.style.overflowY = 'scroll'

  document.body.appendChild(scriptone)
})

onBeforeUnmount(() => {
  document.body.removeChild(div)
})

function copyIconText (index:number) {
  window.navigator.clipboard.writeText(`#icon-${icons[index]}`)
  ElMessage({
    message: '复制成功',
    type: 'success'
  })
}

</script>

<style lang="scss" scoped>
.coninter{
    h1{
        text-align: center;
        margin-top: 1rem;
        font-size:  5rem ;
        color: #2e4e7e;
    }
    .svg_main{
        display: grid;
        grid-template-columns:repeat(8,12rem);
        margin: auto;
        width: 70vw;
        margin-top: 10rem;
        .svg_item{
            cursor: pointer;
            width: 12rem;
            height: 10rem;
            border: #2e4e7e 1px dashed;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            svg{
                width: 5rem;
                height: 5rem;
            }
            .svgText{
                font-weight: bold;
                color: #2e4e7e;
                text-align: center;
            }
        }
    }
}

</style>
