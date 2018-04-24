let contador = 0;
let total = 0;
let striked = [];
//$('input').val(myNumber);
// $('#entry').val('');


//$(document).on('click' , 'button' , function() {
	console.log('aaaa');

//$('span').val(myNumber);
//	const index = $('ul li').index(this)
//	$('ul li')[index].remove()
	
//	});

$(window).on('load', function() {
	$('#count').html(contador + ' / ' + total);
});

const itemVal = $('#action').val();
const list = $('#list');
const button = '<span>' + "M" + '</span>';

$(document).on('click' , '#add-action' , function() {

	const itemVal = $('#action').val();
		const listItem = '<li>' + itemVal + '</li>' + '<button>' + 'M' + '</button>';
		const input = '<input value="" class="hide">';
		list.append(listItem);
		list.append(input);
		const index = $('input').index(this);
		console.log(index);
		$('input').eq(index).val(itemVal);
		total++;
		$('#count').html(contador + ' / ' + total);
		$('#action').val('');
	});

$(document).on('click' , 'ul li' , function() {
	const index = $('ul li').index(this);
	if ($('ul li').eq(index).hasClass('strike')) {
		$('ul li').removeClass('strike');
		contador--;
		$('#count').html(contador + ' / ' + total);
	}
	else {
	const index = $('ul li').index(this);
	$('ul li').eq(index).addClass('strike');
		contador++;
	//$('#count').html(contador);
	$('#count').html(contador + ' / ' + total);
	}
	});

$(document).on('keypress' , function (e) {
	if (e.keyCode == 13) {
		/*const itemVal = $('#action').val();
		const listItem = '<li>' + itemVal + '</li>';
		list.append(listItem);
		*/
		const itemVal = $('#action').val();
		const listItem = '<li>' + itemVal + '</li>' + '<button>' + 'M' + '</button>';
		const input = '<input value="" class="hide">';
		list.append(listItem);
		list.append(input);
		const index = $('input').index(this);
		console.log(index);
		$('input').eq(index).val(itemVal);
		total++;
		$('#count').html(contador + ' / ' + total);
		$('#action').val('');
		}		
});

$('#strike').on('click', function () {
	$('ul li').addClass('strike');
	contador = total;
	$('#count').html(contador + ' / ' + total);
	});

$('#clean').on('click', function () {
//		 const index = $('ul li').index(this);
	$('ul li').removeClass('strike');
	contador = 0;
	$('#count').html(contador + ' / ' + total);
	});

