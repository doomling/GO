let myNumber = 0;
//$('input').val(myNumber);
// $('#entry').val('');


//$(document).on('click' , 'button' , function() {
	console.log('aaaa');

//$('span').val(myNumber);
//	const index = $('ul li').index(this)
//	$('ul li')[index].remove()
	
//	});

$(document).on('click' , '#add' , function() {

myNumber += 1;
	$('#value').html(myNumber);
		if (myNumber > 10) {
		$('#value').addClass("green");
		} else {
			$('#value').removeClass("blue");
		} 	
	});


$(document).on('click' , '#sub' , function() {

myNumber -= 1;
$('#value').html(myNumber);
	if (myNumber < (-10)) {
	$('#value').addClass("blue");
	}	else {
			$('#value').removeClass("green");
		}

	});
