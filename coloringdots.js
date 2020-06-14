
// let selectedColor='red';

// init();
// makeColorPalette();


function init(){


let dots=document.querySelector('#dots');

for(let i=0;i<dots.children.length;i++)
{

	const dot=dots.children[i];
	dot.addEventListener('click',changeColor);
}


}


function changeColor(e){
e.target.style.backgroundColor=selectedColor;

}




// for palettter

function makeColorPalette(){

let palette=document.querySelector('#palette');
let colors=['red','orange','gold','limegreen','blue'];

for(let i=0;i<palette.children.length;i++)
{
    const colorBox=palette.children[i];
	colorBox.style.backgroundColor=colors[i%colors.length];

   colorBox.addEventListener('click',function(e){

   	selectedColor=e.target.style.backgroundColor;
   });
}

}