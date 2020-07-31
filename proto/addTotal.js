let totalmoney= 0;
function add(pthis,anchorid){
  console.log({pthis,anchorid})
  let money= $(pthis).data('money');
  totalmoney= (money+totalmoney);
  $('.total').text("$"+totalmoney);
  console.log({money,totalmoney})
}
