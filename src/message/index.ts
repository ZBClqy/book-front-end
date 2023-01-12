import { createI18n } from 'vue-i18n'

const messages={
    zh:{

            '/public_materials':'公众号素材',
            '/article_list':'文章列表',
            '/article_add':'添加文章',
            '/table_list':'标签列表',
            '/article_edit':'修改文章'
    }
}

const i18n=createI18n({
    locale:'zh',
    globalInjection:true,
    messages
})

export default i18n