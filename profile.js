const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritBtn = document.querySelector('#ritual')


function colorSub(event){
	alert('Favorite color is midnight blue!');
}

function placeSub(event){
	alert('Favorite place is San Diego');
}

function ritSub(event){
	alert('Favorite ritual is morning coffee errand!');
}


colorBtn.addEventListener('click', colorSub);
placeBtn.addEventListener('click', placeSub);
ritBtn.addEventListener('click', ritSub);
