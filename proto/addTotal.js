let totalmoney= 0;
function add(pthis,divid){
  console.log({pthis,divid})
  let money= $(pthis).data('money');
  totalmoney= totalmoney+money;
  $("#"+divid).text("$"+totalmoney);
  console.log({money,totalmoney})
}
