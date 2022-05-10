let plus = document.querySelector('.add-btn');
let modalcont = document.querySelector('.modal-cont');

let flag = 0;

plus.addEventListener('click', function(){
    if(flag == 0){
        modalcont.style.display = 'flex';
        flag = 1;
    }
    else{
        modalcont.style.display = 'none';
        flag = 0;
    }
})