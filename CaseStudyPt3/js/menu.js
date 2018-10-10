var item0 = document.getElementsByName("item-0");
var item1 = document.getElementsByName("item-1");
var item2 = document.getElementsByName("item-2");

var amount0 = document.getElementById("amount-0");
var amount1 = document.getElementById("amount-1");
var amount2 = document.getElementById("amount-2");

amount0.addEventListener("change", handleInputChange);
amount1.addEventListener("change",handleInputChange);
amount2.addEventListener("change", handleInputChange);

function handleInputChange() {
	//Update 0
	var subtotal0 = 0;
	if(item0[0].checked == true){
		subtotal0 = item0[0].value * amount0.value;
	}
	document.getElementById("subtotal-0").innerHTML = "&dollar;" + subtotal0;

	//Update 1
	var subtotal1 = 0;
	if(item1[0].checked == true){
		subtotal1 = item1[0].value * amount1.value;
	}
	document.getElementById("subtotal-1").innerHTML = "&dollar;" + subtotal1;

	//Update 2
	var subtotal2 = 0;
	if(item2[0].checked == true){
		subtotal2 = item2[0].value * amount2.value;
	}
	document.getElementById("subtotal-2").innerHTML = "&dollar;" + subtotal2;

	total = subtotal0 + subtotal1 +subtotal2;
	document.getElementById("total").innerHTML = "&dollar;" + total;
}