const filterDate=(data:string)=>{
    let num=parseInt(data)
    let date = new Date(num)
    let year = date.getFullYear()
    let month =('0'+(date.getMonth()+1)).slice(-2)
    let day = ('0'+date.getDate()).slice(-2)
    let hour = ('0'+date.getHours()).slice(-2)
    let minute = ('0'+date.getMinutes()).slice(-2)
    let second = ('0'+date.getSeconds()).slice(-2)
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

export default filterDate