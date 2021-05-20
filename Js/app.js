const arrow = document.querySelectorAll('li');
// const show = document.querySelectorAll('.ans');

arrow.forEach(arrow => {
    arrow.addEventListener('click', ()=>{
        if(arrow.classList.contains('add')){
            arrow.classList.remove('add');
            arrow.classList.add('remove');
            arrow.classList.remove('show');
            arrow.classList.add('hide');
        }
        else{
            arrow.classList.add('add');
            arrow.classList.remove('remove');
            arrow.classList.add('show');
            arrow.classList.remove('hide');
    }
    })
});

// const ShowContent = document.querySelector('.ans');

// arrow.addEventListener('click', ()=>{
//     if(arrow.classList.contains('add')){
//         arrow.classList.remove('add');
//         arrow.classList.add('remove');
//         ShowContent.classList.remove('show');
//     }
//     else{
//         arrow.classList.add('add');
//         arrow.classList.remove('remove');
//         ShowContent.classList.add('show');
//     }
// })