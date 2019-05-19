import $ from 'jquery';

$('<h1 />')
	.text('Здравствуй, Вселенная, - из jQuery!')
	.css({
		textAlign: 'center',
		color: 'blue'
	})
	.appendTo($('header'));

console.log('Header component.');
