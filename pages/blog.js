const images = ["../images/IMG_4715.JPG", "../images/IMG_4697.JPG", "../images/IMG_3218.jpg"];

for (let x = 0; x < images.length; x++) {            
    const element = '<img src="' + images[x] + '">'
    document.querySelector('.images').innerHTML += element;
}