import request from '@/utils/request.ts'

export const addTable = async function (data:Object) {
  return await request({
    url:'/add/label',
    method: 'post',
    data
  })
}

export const selectTable = async function (params:Object) {
  return await request({
    url:'/select/label',
    method: 'get',
    params
  })
}

export const delTable = async function (data:Object) {
  return await request({
    url:'/delete/label',
    method: 'delete',
    data,
  })
}


export const updateTable = async function (data:Object){
  return await request({
    url:'/update/label',
    method: 'put',
    data
  })
}