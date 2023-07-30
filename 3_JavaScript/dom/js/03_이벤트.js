// window.addEventListener('DOMContentLoaded', function(){
//     const h1 = document.querySelector('h1');
//     console.log(h1);
// });

const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', function(){
    h1.style.backgroundColor = "skyblue";
});

const container = document.querySelector('.container');

function removeHandler(event) { // 이벤트 객체
    console.log(event.currentTarget);
    if(event.target!==event.currentTarget) {
        event.target.style.display = 'none';
    }
}

container.addEventListener('click', removeHandler);

