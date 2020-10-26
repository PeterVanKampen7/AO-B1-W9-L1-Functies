function addition(number1, number2)
{
	var ans = number1 + number2;
	document.write(number1+" + "+number2+" = "+ans+"<br>");
}

function subtraction(number1, number2)
{
	var ans = number1 - number2;
	document.write(number1+" - "+number2+" = "+ans+"<br>");
} 

function multiplication(number1, number2)
{
	var ans = number1 * number2;
	document.write(number1+" x "+number2+" = "+ans+"<br>");
} 

function division(number1, number2)
{
	var ans = number1 / number2;
	document.write(number1+" / "+number2+" = "+ans+"<br>");
} 

function increment(number)
{
	ans = number + 1;
	document.write(number+" + 1 = "+ans+"<br>");
}

function decrement(number)
{
	ans = number - 1;
	document.write(number+" - 1 = "+ans+"<br>");
}

addition(10, 12);
addition(87, 6);
addition(85, 55);

subtraction(58, 34);
subtraction(58, 85);
subtraction(852, 65);

multiplication(6, 7);
multiplication(8, 4);
multiplication(6, 112);

division(144, 12);
division(48, 6);
division(1000, 5);

increment(12);
increment(19);
increment(2);

decrement(4);
decrement(34);
decrement(584);