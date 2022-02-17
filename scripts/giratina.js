let giratina = $('.giratinaContainer');
let giratinaHeight = giratina.height();
let giratinaWidth = giratina.width();
let cry = new Audio('./audio/giratina-cry.mp3');
let randomX;
let fixedYFrom = -giratinaHeight * 2;
let fixedYTo = window.innerHeight;

//giratina bajando
giratinaDown = () => {

	randomX = Math.abs(Math.floor((Math.random() * window.innerWidth) - giratinaWidth));

	let tl_giratinaDown = gsap.timeline()
	tl_giratinaDown.fromTo('.giratinaContainer', {x: randomX,	y: fixedYFrom,	opacity: 1}, {duration: 1.5, x: randomX, y: fixedYTo + giratinaHeight})

	cry.play();

}

//giratina subiendo
giratinaUp = () => {

	randomX = Math.abs(Math.floor((Math.random() * window.innerWidth) - giratinaWidth));

	let tl_giratinaUp = gsap.timeline()
	tl_giratinaUp.fromTo('.giratinaContainer', {x: randomX, y: fixedYTo, opacity: 1,	rotation: 180, visibility: 'visible'}, {duration: 1,	opacity: 1.5,	x: randomX,	y: fixedYFrom})

	cry.play();

}

//contador
let minutos = 0;

contador = () => {
	minutos++;
	console.log(minutos, ' minutos')
	if (minutos === 1) {
		giratinaDown()
	} else if (minutos === 2) {
		giratinaUp();
	}
};
let intervalo = setInterval(contador, 60000);

if (minutos === 20) {
	minutos = 0;
}
