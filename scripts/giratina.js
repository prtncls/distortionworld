let giratina = $('.giratinaContainer');
let giratinaHeight = giratina.height();
let randomX = Math.floor(Math.random() * window.innerWidth);
let randomYFrom = -giratinaHeight;
let randomYTo = window.innerHeight;
let cry = new Audio('./audio/giratina-cry.mp3');

//giratina bajando
giratinaDown = () => {
	console.log('pa abajo');

	let tl_giratinaDown = gsap.timeline()
	tl_giratinaDown.fromTo('.giratinaContainer', {x: randomX,	y: randomYFrom,	opacity: 1}, {duration: 1, opacity: 1, x: randomX, y: randomYTo})
                  .to('.giratinaContainer', {visibility: 'none'})
}

//giratina subiendo
giratinaUp = () => {
	console.log('pa arriba');
	randomX = Math.floor(Math.random() * window.innerWidth);

	let tl_giratinaUp = gsap.timeline()
	tl_giratinaUp.fromTo('.giratinaContainer', {x: randomX, y: randomYTo, opacity: 1,	rotation: 180, visibility: 'visible'}, {duration: 1,	opacity: 1,	x: randomX,	y: randomYFrom})
                .to('.giratinaContainer', {visibility: 'none'})
}

//counter code starts here
let minutos = 0;

contador = () => {
	minutos++;
	console.log(minutos, ' minutos')
	if (minutos === 5) {
		giratinaDown()
    cry.play();
	} else if (minutos === 10) {
		giratinaUp();
    cry.play();
	}
};
let intervalo = setInterval(contador, 60000);

if (minutos === 20) {
	minutos = 0;
}
