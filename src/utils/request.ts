import axios, { AxiosResponse,AxiosRequestConfig } from 'axios'

type Options={ method:string,data?:Object,params?:Object }

const http = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  timeout: 3000
})

http.interceptors.request.use(function (config:AxiosRequestConfig) {
  config.headers={
    'login-token':localStorage.getItem('token')
  }
  return config
}, function (error:Error) {
  return Promise.reject(error)
})

http.interceptors.response.use((response:AxiosResponse)=>{
  if(response.data.code==404){
    // location.href=`http://bindsign.linqiaoyan.top/?redirceUrl=${location.href}`
  }
  return response.data
}, function (error:Error) {
  return Promise.reject(error)
})

export const request = async (options:Options) => {
  try {
    return await http(options)
  } catch (err) {
    console.log(err)
  }
}

export default request
