$(document).ready( function(){


	$(".inputForm").on("submit", function(){

		event.preventDefault();
		$(".input").addClass("hide");
		$(".addItems").removeClass("hide");


		var inputName = $('#name').val();
		$("#name").val(inputName);

		var inputAge = $('#age').val();
		$("#age").val(inputAge);

		var inputInterest = $('#interests').val();
		$("#interests").val(inputInterest);

		console.log(inputInterest);

		switch(inputInterest){

			case 'exerciseVal':
				console.log(exerciseList);
				for (var i =0; i< exerciseList.length; i++){
					$(".listItems").append( "<li>" + exerciseList[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")
				}
				break;

			case 'travelVal':
				console.log(travelList);
				for (var i =0; i< travelList.length; i++){
					$(".listItems").append( "<li>" + travelList[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")
				}
				break;

			case 'daredevilVal':
				console.log(daredevilList);
				for (var i =0; i< daredevilList.length; i++){
					$(".listItems").append( "<li>" + daredevilList[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")
				}
				break;

			case 'sportsVal':
				console.log(sportsList);
				for (var i =0; i< sportsList.length; i++){
					$(".listItems").append( "<li>" + sportsList[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")
				}
				break;

			case 'learningVal':
				console.log(learningList);
				for (var i =0; i< learningList.length; i++){
					$(".listItems").append( "<li>" + learningList[i] + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")
				}
				break;
		};
		$('.output').prepend(

			"<h2>" + inputName +"'s buck.it list </h2>"
		);

	});

	$(".output").on("click", ".check", function(event){

		$(this).parent().css("text-decoration", "line-through");

	});

	$(".output").on("click", ".xmark", function(event){

		$(this).parent().addClass("hide");

	});

	$(".addItems").on('submit', function(event){

		event.preventDefault();
		var addtlInput = $('.addItems input').val();
		console.log($('.addItems input').val());
		$(".listItems").append( "<li>" + addtlInput + "<img src = 'images/xmark.png' class='xmark'><img src='images/checkmark2.png' class='check'></li>")

	});

});
