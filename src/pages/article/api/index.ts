import request from '@/utils/request.ts'

export const getLabels=async ()=>{
    return await request({
        url:'/selectAll/label',
        method:'get'
    })
}

export const uploadImg=async (formData:Object)=>{
    return await request({
        url:'/upload/image',
        method:'POST',
        headers:{
            'Content-Type':'multipart/form-data'
        },
        data:formData
    })
}

export const getImgList=async ()=>{
    return await request({
        url:'/imgList',
        method:'get'
    })
}

export const addArticle=async (data:Object)=>{
    return await request({
        url:'/add/article',
        method:'post',
        data,
    })
}

export const selectArticle=async (data:Object)=>{
    return await request({
        url:'/select/article',
        method:'get',
        params:data
    })
}

export const deleteArticle=async (data:Object)=>{
    return await request({
        url:'/delete/article',
        method:'delete',
        data
    })
}

export const selectOnlyArticle=async (data:Object)=>{
    return await request({
        url:'/select/only_article',
        method:'get',
        params:data
    })
}

export const editArticle=async (data:Object)=>{
    return await request({
        url:'/edit/only_article',
        method:'put',
        data
    })
}