import request from '@/utils/request.ts'

export const getImgList=async ()=>{
    return await request({
        url:'/imgList',
        method:'get'
    })
}