import{
    container,
    notebook,
    userTitle,
    userDate,
    userText,
    projectTitle,
    savePage,
    deletePage,
    backPage,
    index,
    inPage,
    inList,
    inTitle,
    infoPage,
    infoDate,
    infoTitle,
    infoText,
    inContainer
        
 
}  from './textAndElements';



class  information{

    constructor(title,date,text){
        this.title  =   title;
        this.date   =   date;
        this.text   =   text; 
    }

 
}


let storage =   [];
let inStorage   =   [];




savePage.addEventListener('click', function(){
    
let obj = new   information(userTitle.value,userDate.value,userText.value);

if( obj.date === ''|| obj.title === ''|| obj.text  === ''){
    window.alert('no')
}else{
    storage.push(obj);
    inStorage.push(obj.title)
    window.alert('Saved!');
    userText.value  =   '';
    userDate.value  =   '';
    userTitle.value =   '';
    console.log(storage);
    

}

});

index.addEventListener('click', function(){
    
   document.getElementById('container').removeChild(notebook);
   document.getElementById('container').appendChild(inPage);
   document.getElementById('inPage').appendChild(inContainer)
   document.getElementById('inContainer').appendChild(inTitle);
   document.getElementById('inContainer').appendChild(inList);
   document.getElementById('inContainer').appendChild(backPage)

   if(document.getElementById('infoPage')   !== null){
    document.getElementById('inPage').removeChild(infoPage)
   }
  

   for(let  i = 0;  i < inStorage.length; ++i){

    

    let liElement   =   document.createElement('button');

   
    liElement.id    =   'liElement'+[i];
    liElement.classList.add('liElClass')
    liElement.innerText =   inStorage[i]
    document.getElementById('indexList').appendChild(liElement);

    liElement.addEventListener('click',function(){
        if(liElement.id ===  'liElement'+[i]){
            document.getElementById('inPage').appendChild(infoPage);
            infoTitle.innerText =   storage[i].title;
            infoDate.innerText  =   storage[i].date;
            infoText.innerText  =   storage[i].text;
            document.getElementById('infoPage').appendChild(infoTitle);
            document.getElementById('infoPage').appendChild(infoDate);
            document.getElementById('infoPage').appendChild(infoText);

            console.log(infoTitle,infoText,infoDate)

        }
    })


   }


});

backPage.addEventListener('click',function(){
    document.getElementById('container').removeChild(inPage)
    document.getElementById('container').appendChild(notebook);
    document.getElementById('notebook').appendChild(projectTitle);
    document.getElementById('notebook').appendChild(userTitle);
    document.getElementById('notebook').appendChild(userDate);
    document.getElementById('notebook').appendChild(userText);
    document.getElementById('notebook').appendChild(savePage);
    document.getElementById('notebook').appendChild(deletePage);
    document.getElementById('notebook').appendChild(index);
})


export{savePage, index, backPage} 