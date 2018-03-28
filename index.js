function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  const selector = document.querySelector('#nested .target');
  return selector;
}

function increaseRankBy(n){
  const list = document.getElementByClassName('ranked-list');
  for (let i = 0; i < list.length; i++){
    list[i].innerHTML = (1+list[i].innerHTML).toString();
  }
  
}