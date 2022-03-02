
const solution=(list)=>{
    let sum=0
    list.forEach((ele)=>{
        if(!isNaN(ele) && typeof(ele)!="string"){
            sum=sum+ele
        }
    })
    return sum
}

module.exports =solution