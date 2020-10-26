function recursion()
{
	setTimeout(function()
	{
		var name = prompt("What is your name?").toLowerCase();
		if(name != "stop")
		{
			var age = prompt("What is your age?").toLowerCase();
			if(age != "stop")
			{
				document.write("Hallo "+name+", je leeftijd is "+age+"<br>");
				recursion();
			}
		}
	},0);
}

recursion();