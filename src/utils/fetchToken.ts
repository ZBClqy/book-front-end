function getToken(next:any){
    const iframe:HTMLIFrameElement=document.createElement('iframe')
    iframe.style.display='none'
    iframe.src='http://bindsign.linqiaoyan.top/?redirceUrl=token'
    document.body.appendChild(iframe)
    iframe.onload=()=>{
        window.addEventListener('message',(e)=>{
            if(e.origin=='http://bindsign.linqiaoyan.top'){
                if(e.data){
                    localStorage.setItem('token',e.data)
                    document.body.removeChild(iframe)
                    next()
                }else{
                    location.href=`http://bindsign.linqiaoyan.top/?redirceUrl=${location.href}`
                }
            }
           
        })
    }
}

export default getToken

