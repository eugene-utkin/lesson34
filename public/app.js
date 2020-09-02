function something()
{
	var x = window.localStorage.getItem('bbb');

	x = x * 1 + 1;

	window.localStorage.setItem('bbb', x);

	alert(x);
}

function add_to_cart(id)
{
	var key = 'product_' + id

	var x = window.localStorage.getItem(key);
	x = x * 1 + 1;
	window.localStorage.setItem(key, x);

}

function showtotal()
{
	total = 0
for(var i=0, len=localStorage.length; i<len; i++) {
    var key = localStorage.key(i);
    var value = localStorage[key];
    total = total * 1 + value * 1;

}
alert('Total: ' + total);
}