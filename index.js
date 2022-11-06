const words = ['hi', 'hello', 1, 2, 3 , 4, 5 , 6, 7, 8];

let index = -1;

let ary = new Array(10).fill(0).map(function(e){
    index ++;
    return `<div>${words[index]}</div>`;
})

document.getElementsByClassName('main_container')[3].innerHTML = ary.join(' ')