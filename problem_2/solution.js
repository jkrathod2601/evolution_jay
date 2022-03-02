const solution=(list)=>{
    let i=1
    while(true){
        if(list.includes(i)){
            i=i+1
        }else{
            return i
        }
    }
}

module.exports=solution

// solutioin2
// const solution=(list)=>{
//     dic={}     
//     list.forEach((ele)=>{
//         dic[ele]=1
//     })
//     let i=1
//     while(true){
//         if(dic[i]!=undefined){
//             return i
//         }
//         i=i+1
//     }
// }