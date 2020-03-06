const pocetObrazkov = 8;
const array = [];
const button = document.querySelector(`.zmena`);
var pozicia1 = 1;
var pozicia2 = 11;

for (let i=1; i<=pocetObrazkov; i++){
    array.push(i);
}

generateImagesFront = (img) => document.getElementById(`img${pozicia1}`).src=`img/${img}.webp`;
generateImagesBack = (img2) => document.getElementById(`img${pozicia2}`).src=`img/${img2}.webp`;

zmena =() => {    
    array.sort(() => Math.random() - 0.5);
    for (let i = 0; i< 6; i++){
        generateImagesFront(array[i]);
        generateImagesBack(array[i+1]);
        pozicia1++
        pozicia2++
    }
    pozicia1=1;
    pozicia2=11;
}

button.addEventListener("click", zmena)

