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

let nextPage    =   document.createElement('button');
nextPage.id     =   'nextPage';
nextPage.innerText  =   'Next';

let backPage    =   document.createElement('button');
backPage.id     =   'backPage';
backPage.innerText  =   'Prev.'

let index       =   document.createElement('button');
index.id        =   'index';
index.innerText =   'Index';

let inPage      =   document.createElement('div');
inPage.id       =   'inPage'






export{
    container,
    notebook,
    userTitle,
    userDate,
    userText,
    projectTitle,
    savePage,
    deletePage,
    nextPage,
    backPage,
    index,
    inPage
}