import{
    userText,
    userTitle,
    userDate,
    savePage,
    index,
    notebook,
    inPage
}  from './textAndElements'



class  information{

    constructor(title,date,text){
        this.title  =   title;
        this.date   =   date;
        this.text   =   text; 
    }
}


let storage =   []

savePage.addEventListener('click', function(){
    
let obj = new   information(userTitle.value,userDate.value,userTitle.value)
storage.push(obj)

console.log(storage)

userText.value  =   '';
userDate.value  =   '';
userTitle.value =   '';

})

index.addEventListener('click', function(){
   document.getElementById('container').removeChild(notebook)
   document.getElementById('container').appendChild(inPage)
})
export{savePage, index} 