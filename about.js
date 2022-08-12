console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submitted!');
}

function mouseOverPicture(evt){
	alert(`LOOKIN' GOOD!`);
}

let mouseOverCat = document.querySelector('#cat-img')

mouseOverCat.addEventListener('mouseover', mouseOverPicture)

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

