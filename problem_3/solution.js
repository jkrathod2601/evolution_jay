const solution = (list) =>{
    let even=[]
    let odd=[]
    list.forEach((ele)=>{
        if(!isNaN(ele) && typeof(ele)!="string"){
            if(ele%2==0){
                even.push(ele)
            }else{
                odd.push(ele)
            }
        }
    })
    return [odd,even]
}

module.exports =solution