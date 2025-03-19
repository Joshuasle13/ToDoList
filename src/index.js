import  './stylo.css';
import  {container,
    notebook,
    projectTitle,
    userTitle,
    userDate,
    userText,
    deletePage,

    
   
    }  from "./textAndElements.js"

import  {
        savePage,
        index, backPage
    }   from './logic.js'


document.body.appendChild(container);
document.getElementById('container').appendChild(notebook);
document.getElementById('notebook').appendChild(projectTitle);
document.getElementById('notebook').appendChild(userTitle);
document.getElementById('notebook').appendChild(userDate);
document.getElementById('notebook').appendChild(userText);
document.getElementById('notebook').appendChild(savePage);
document.getElementById('notebook').appendChild(index);