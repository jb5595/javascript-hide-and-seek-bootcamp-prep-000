function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  const selector = document.querySelector('#nested .target');
  return selector;
}