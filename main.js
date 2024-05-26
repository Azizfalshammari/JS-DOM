var firsth1DOM = document.getElementsByClassName('firsth1DOM')[0];
firsth1DOM.style.backgroundColor = 'blue';
firsth1DOM.style.color = 'red';



var P2BDOM = document.getElementById('P2BDOM');
P2BDOM.classList.add("pStyle");


var img2BDOM = document.getElementsByTagName('img');
img2BDOM[0].src = "gitcommands.png";


console.log(img2BDOM)



var ul2BDOM = document.querySelectorAll('ul')[0];
ul2BDOM.innerHTML =`<li>item 1</li>
<li>item 2</li>
<li>item 3</li>`
ul2BDOM.classList.add("li");
console.log(ul2BDOM);









    let square1 = document.getElementsByClassName('square')[0];
    
console.log('1')
function change()  {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    square1.style.backgroundColor = '#' +randomColor;
    
    console.log(square1.style.top= Math.floor(Math.random() * 101) +'px')
    console.log(square1.style.left= Math.floor(Math.random() * 101) +'px')
    console.log('change is good')
};
setInterval(change, 3000);

