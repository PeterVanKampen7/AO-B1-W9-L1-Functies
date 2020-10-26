function tables()
{
	var tableCount = Number(prompt("Hoeveel tafels moeten er worden uitgerekend?"));
	if(tableCount <= 10 && tableCount >= 1)
	{
		for (var i = 1; i <= tableCount; i++) 
		{
			for (var j = 1; j <= 10; j++) 
			{
				var ans = i * j;
				document.write(j+" x "+i+" = "+ans+"<br>");
			}
			document.write("<br>");
		}
	}
	else if(tableCount <= 1 || tableCount >= 10)
	{
		alert("Bereik van getal moet zijn: 1 t/m 10.");
		tables();
	}
	else
	{
		alert("U dient een getal in te voeren.");
		tables();
	}
}

tables();