function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  const selector = document.querySelector('#nested .target');
  return selector;
}

function increaseRankBy(n){
  const list = document.querySelectorAll('#ranked-list');
  for (let i = 0; i < list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML)+n;
  }

}