<template>
    <div class="edit_box">
        <header>
            <svgIcon name="xiangzuo"></svgIcon>
            <div class="head_text" @click="backPage">{{ editText }}</div>
        </header>
        <main>
            <el-form
               ref="ruleFormRef"
               label-width="120px"
               class="demo-ruleForm"
               status-icon
             >
             <div class="form_item">
                <el-form-item label="标题名称：" prop="name">
                  <el-input placeholder="请输入文章的标题" v-model="articleFrom.title" />
                </el-form-item>
                <el-form-item label="作者姓名：" prop="name" >
                  <el-input placeholder="请输入文章作者的名称" v-model="articleFrom.author"/>
                </el-form-item>
            </div>
            <div class="form_item">
                <el-form-item label="文章摘要：" prop="name" >
                  <el-input placeholder="请确保输入的摘要是在内容中的" v-model="articleFrom.disgest"/>
                </el-form-item>
                <el-form-item label="图片素材：" prop="name">
                  <el-input placeholder="请点击右侧按钮选择图片素材"  v-model="articleFrom.thumb_media_id">
                    <template #append>
                        <el-button @click="showMediaList=true">点击获取</el-button>
                    </template>
                  </el-input>
                </el-form-item>
            </div>
            <div class="form_item">
                <el-form-item label="选择标签：" prop="name" >
                    <el-select
                          v-model="articleFrom.label"
                          multiple
                          collapse-tags
                          placeholder="请选择文章所属的标签"
                          style="width:100%;position: relative;"
                        >
                          <el-option
                            v-for="item in labels"
                            :key="item.id"
                            :label="item.label_name"
                            :value="item.id"
                          />
                    </el-select>
                </el-form-item>
                <div class="switch_box">
                    <el-switch
                      v-model="articleFrom.need_open_comment"
                      style="margin-right:30px"
                      size="large"
                      active-text=""
                      inactive-text="是否允许评论"
                    />
                    <el-switch
                        v-model="articleFrom.only_fans_can_comment"
                        size="large"
                        active-text=""
                        inactive-text="是否只允许粉丝评论"
                    />
                </div>
            </div>
            <div class="text">
                <richText @change="editChange" :text="richtext"></richText>
            </div>
            <div class="btn">
                <el-button type="primary" v-if="!route.query.id" @click="saveTheConfirmation">保存确认</el-button>
                <el-button type="primary" v-else @click="editOnlyArticle">保存修改</el-button>
            </div>
            </el-form>
        </main>
    </div>
    <material :show="showMediaList" @input="value=>showMediaList=value" @select="(value:string)=>articleFrom.thumb_media_id=value"></material>
</template>

<script setup lang="ts">
import richText from './components/MyRichText.vue'
import material from './components/MaterialLoading.vue'
import { useRouter, useRoute } from 'vue-router'
import { reactive, ref } from 'vue'
import * as ARTICLE from '../api'
import { ElMessage } from 'element-plus'

type options={label_name: string, status: number, create_time: string, id: number}
type article={title:string, author:string, disgest:string, content:string, label:string[], thumb_media_id:string, need_open_comment:boolean|number, only_fans_can_comment:boolean|number}

const router = useRouter()
const route = useRoute()
const editText = ref('添加文章')

const articleFrom:article = reactive({
  title: '',
  author: '',
  disgest: '',
  content: '',
  label: [],
  thumb_media_id: '',
  need_open_comment: false,
  only_fans_can_comment: false
})

const richtext = ref('')

const labels:options[] = reactive([])

const showMediaList = ref(false)

function backPage () {
  router.back()
}

function editChange (newHtml:string) {
  articleFrom.content = newHtml
}

async function getLabels () {
  const response = await ARTICLE.getLabels()
  labels.push(...response.data)
}

getLabels()

async function saveTheConfirmation () {
  try {
    const params = JSON.parse(JSON.stringify(articleFrom))
    if (params.need_open_comment) {
      params.need_open_comment = 1
    } else {
      params.need_open_comment = 0
    }

    if (params.only_fans_can_comment) {
      params.only_fans_can_comment = 1
    } else {
      params.only_fans_can_comment = 0
    }

    const response = await ARTICLE.addArticle(params)
    if (response.code === 200) {
      ElMessage({
        message: '添加成功',
        type: 'success'
      })
    } else {
      ElMessage.error('添加失败')
    }
    router.push('/article_list')
  } catch (err) { /** */ }
}

async function selectOnlyArticle () {
  try {
    const response = await ARTICLE.selectOnlyArticle({ id: route.query.id })
    articleFrom.title = response.data[0].title
    articleFrom.author = response.data[0].author
    articleFrom.disgest = response.data[0].disgest
    richtext.value = response.data[0].content
    articleFrom.need_open_comment = response.data[0].need_open_comment.data[0] === 1
    articleFrom.only_fans_can_comment = response.data[0].only_fans_can_comment.data[0] === 1
    articleFrom.thumb_media_id = response.data[0].thumb_media_id
    articleFrom.label = response.data[0].label
  } catch (err) {}
}

async function editOnlyArticle () {
  try {
    const params = JSON.parse(JSON.stringify(articleFrom))
    params.id = route.query.id
    const response = await ARTICLE.editArticle(params)
    if (response.code === 200) {
      ElMessage({
        message: '修改成功',
        type: 'success'
      })
    } else {
      ElMessage.error('修改失败')
    }
    router.push('/article_list')
  } catch (err) { /** */ }
}

if (route.query.id) {
  editText.value = '修改文章'
  selectOnlyArticle()
}

</script>

<style lang="scss" scoped>
    .edit_box{
        width: 100%;
        overflow: hidden;
        header{
            padding-left: 1rem;
            width: 100%;
            height: 3rem;
            border-bottom: 1rem solid rgb(50, 56, 64);
            display: flex;
            align-items: center;
            font-size: 1rem;
            &:hover{
                .head_text{
                    transform: translateX(0);
                }
            }
            svg{
                width: 1rem;
                height: 1rem;

            }
            .head_text{
                transform: translateX(1rem);
                transition: transform 1s;
                cursor: pointer;
                font-weight: bold;
            }
        }
        main{
            padding: 4rem 8rem;
            .form_item{
                display: grid;
                grid-template-columns: auto 45rem;
                margin-top: 2rem;
                .switch_box{
                    margin-left: 40px;
                }

            }
            .text{
                margin-top: 4rem;
                padding-left: 2rem;
            }

            .btn{
                margin-top:1.5rem ;
                text-align: center;
            }
        }
    }
</style>
