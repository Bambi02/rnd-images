const pocetObrazkov = 8;
const array = [];
const button = document.querySelector(".zmena");

for (let i=1; i<=pocetObrazkov; i++){
    array.push(i);
}

function zmena(){    
    array.sort(() => Math.random() - 0.5);

        document.getElementById("img1").src="img/"+array[0]+".webp";
        document.getElementById("img2").src="img/"+array[1]+".webp";
        document.getElementById("img3").src="img/"+array[2]+".webp";
        document.getElementById("img4").src="img/"+array[3]+".webp";
        document.getElementById("img5").src="img/"+array[4]+".webp";
        document.getElementById("img6").src="img/"+array[5]+".webp";

        document.getElementById("img11").src="img/"+array[1]+".webp";
        document.getElementById("img12").src="img/"+array[2]+".webp";
        document.getElementById("img13").src="img/"+array[3]+".webp";
        document.getElementById("img14").src="img/"+array[4]+".webp";
        document.getElementById("img15").src="img/"+array[5]+".webp";
        document.getElementById("img16").src="img/"+array[6]+".webp";
}

button.addEventListener("click", zmena)
