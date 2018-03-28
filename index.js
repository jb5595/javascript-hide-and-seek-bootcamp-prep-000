function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  const selector = document.querySelector('#nested .target');
  return selector;
}

function increaseRankBy(n){
  const ranks = document.querySelectorAll('ul.ranked-list');
  for (let i = 0; i < ranks.length; i++){
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}

function deepestChild(){
 var deep = document.getElementById('grand-node').querySelectorAll('div')
 return deep[deep.length-1]
  
}