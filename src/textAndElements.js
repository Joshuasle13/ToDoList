let container =   document.createElement('div');
container.id  =   'container';



let notebook    =   document.createElement('div');
notebook.id     =   'notebook';

let projectTitle      =   document.createElement('h2');
projectTitle.innerText =   'Daily agenda';
projectTitle.classList.add('projectTitle');



let userTitle   =   document.createElement('input');
userTitle.id    =   'userTitle';

let userDate    =   document.createElement('input');
userDate.id     =   'userDate';

let userText    =   document.createElement('textarea');
userText.id     =   'userText';






let savePage    =   document.createElement('button');
savePage.id     =   'savePage';
savePage.innerText  =   'Save';

let deletePage  =   document.createElement('button');
deletePage.id   =   'deletePage'
deletePage.innerText    =   'Delete';


let inContainer =   document.createElement('div');
inContainer.id  =   'inContainer';

let backPage    =   document.createElement('button');
backPage.id     =   'backPage';
backPage.innerText  =   'Prev.';

let inTitle     =   document.createElement('h2');
inTitle.innerText   =   'Index';
inTitle.classList.add('inTitle');

let index       =   document.createElement('button');
index.id        =   'index';
index.innerText =   'Index';

let inPage      =   document.createElement('div');
inPage.id       =   'inPage';

let inList      =   document.createElement('ol');
inList.id       =   'indexList';



let infoPage    =   document.createElement('div');
infoPage.id     =   'infoPage';
let infoTitle   =   document.createElement('h2');
infoTitle.id    =   'infoTitle';
let infoDate    =   document.createElement('h3');
infoDate.id     =   'infoDate';
let infoText    =   document.createElement('p');
infoText.id     =   'infoText'











export{
    container,
    notebook,
    userTitle,
    userDate,
    userText,
    projectTitle,
    savePage,
    deletePage,
    backPage,
    inContainer,
    index,
    inPage,
    inList,
    inTitle,
    infoPage,
    infoDate,
    infoTitle,
    infoText
    
   
}