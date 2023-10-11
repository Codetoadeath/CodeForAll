var card1 = document.querySelector('.card1')
var card2 = document.querySelector('.card2')
var card3 = document.querySelector('.card3')
var card3cont = document.querySelector('.card_3_container');
var card2cont = document.querySelector('.card_2_container');
var card1cont = document.querySelector('.card_1_container');
var body = document.querySelector('body');
var rightbutton = document.querySelector('.button2')
var leftbutton = document.querySelector('.button1')





var details = [
    {
        cardcontr: card1cont,
        card: card1,
        pos: [0, 21.225, 42.45],
        angl: [25, 0, -25],
        scal: [0.8, 1.1, 0.8],
       
        bgurl:'./assets/m7K4KzL5aQ8.jpeg'


    },
    {
        cardcontr: card2cont,
        card: card2,
        pos: [0, 21.225, -21.225],
        angl: [0, -25, 25],
        scal: [1, 0.8, 0.8],
        bgurl:'./assets/9dmycbFE7mQ.jpeg'


    },
    {
        cardcontr: card3cont,
        card: card3,
        pos: [0, -42.45, -21.225],
        angl: [-25, 25, 0],
        scal: [0.8, 0.8, 1],
        bgurl:'./assets/Z8dtTatMVMw.jpeg'
        

    }
]
function rotator(event) {
    event.preventDefault();
    let cardrect = event.target.getBoundingClientRect();
    let centerX = cardrect.left + cardrect.width / 2;
    let x = event.clientX - centerX;
    x = x.toFixed(0);
    if (x > 0) {
        event.target.style.transform = `rotateY(25deg)`
    }
    else if (x < 0) {
        event.target.style.transform = `rotateY(-25deg)`
    }
    else {
        event.target.style.transform = `rotateY(0deg)`
    }
}
function reset(event) {
    event.preventDefault();

    event.target.style.transform = 'rotateY(0deg)'
}
details[1].card.addEventListener('mousemove', rotator)
details[1].card.addEventListener('mouseout', reset)
details[1].card.style.color="white"
details[0].card.style.filter='brightness(0.57)'
details[2].card.style.filter='brightness(0.57)'


var i = 0;

leftbutton.addEventListener('click', (event) => {
    event.preventDefault();
    i++;
    i %= 3;
    body.style.backgroundImage=`url(${details[i].bgurl})`
    for (let j = 0; j < 3; j++) {
        details[j].cardcontr.style.cssText = `z-index:2;left:${details[j].pos[i]}vw;transform:scaleY(${details[j].scal[i]})`
        details[j].card.style.transform = `rotateY(${details[j].angl[i]}deg)`
        
        details[((j % 3))].card.removeEventListener('mousemove', rotator)
        details[(j % 3)].card.removeEventListener('mouseout', reset)
        details[j].card.style.filter='brightness(0.57)'
        details[j].card.style.color="rgba(0,0,0,0)"

        
        // details[j].cardcontr.style.cssText="transform:scaleX(1.0)"
    }
    let k = ((1 - i) % 3);
    if (k == -1) {
        k = 2;
    }
    details[k].card.addEventListener('mousemove', rotator)
    details[k].cardcontr.style.zIndex = "5"
    details[k].card.style.filter="brightness(1)"
    details[k].card.style.color="white"
    details[k].card.addEventListener('mouseout', reset)
})

rightbutton.addEventListener('click', (event) => {
    event.preventDefault();

    i++;
    i = ((i + 1) % 3);
    body.style.backgroundImage=`url(${details[i].bgurl})`
    // console.log(sl)
    
    for (let j = 2; j >= 0; j--) {
        details[j].cardcontr.style.cssText = `z-index:2;left:${details[j].pos[i]}vw;transform:scaleY(${details[j].scal[i]})`
        details[j].card.style.transform = `rotateY(${details[j].angl[i]}deg)`
        details[((j % 3))].card.removeEventListener('mousemove', rotator)
        details[(j % 3)].card.removeEventListener('mouseout', reset)
        details[j].card.style.filter='brightness(0.57)'
        details[j].card.style.color="rgba(0,0,0,0)"

    }
    let k = ((1 - i) % 3);
    if (k == -1) {
        k = 2;
    }
    details[k].card.addEventListener('mousemove', rotator)
    details[k].cardcontr.style.zIndex = "5"
    details[k].card.style.filter="brightness(1)"
    details[k].card.style.color="white" 
    details[k].card.addEventListener('mouseout', reset)
})