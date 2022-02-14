let cp = 0;
sum = 0;
till = 0;
flag = 1;
document.getElementsByClassName('section')[0].style.opacity = 1;
document.getElementsByClassName('section')[0].style.zIndex = 100;
document.addEventListener('wheel' , (event) =>{
  if(flag == 1){
  let k = document.getElementsByClassName('section');
  sum += event.deltaY;
  k[cp].style.zIndex = 100;
  if(sum > 1000 && till == 0){
    sum = 1000;
  }

  if(sum%1000 == 0){
    till = sum+250;
  }

  if(sum < 1000){
    till = 0;
  }

  if(sum < 0){
    sum = 1200;
    till = 1250;
    k[cp].style.opacity = 1;
    cp -= 1;
  }

  if(cp < 0){
    cp = k.length -1;
  }
  if(sum < till){
    return;
  }


  if(sum >= till && till != 0){
    sum = 0;
    till = 0;
    k[cp].style.opacity = 0;
    k[cp].style.zIndex = 2;
    cp+=1;
  }



  let f = 1 - (sum/1000);

  next = cp+1;
  if(next >= k.length ){
    next = 0;
  }

  if(cp >= k.length){
    cp = 0;
  }

  if(cp > 0){
    document.getElementById('gtc').classList.remove('hidden')
  }
  else{
    document.getElementById('gtc').classList.add('hidden')
  }

  k[cp].style.opacity = f;
  k[next].style.opacity = (sum/1000);
  }
})


function oppOne(){
  let k = document.getElementsByClassName('section');

  for(let i=0; i<k.length ;i++){
    k[i].style.opacity =1;
  }

}

function oppZero(){
  let k = document.getElementsByClassName('section');

  for(let i=0; i<k.length ;i++){
    k[i].style.opacity =0;
    k[i].style.zIndex =2;
  }

  k[0].style.opacity = 1;
  sum =0 ;
  till = 0;
  cp = 0;
  k[0].style.zIndex =100;
  document.getElementById('gtc').classList.add('hidden')
}


function switchView(){
  document.getElementsByClassName('body')[0].classList.toggle('landscape');
  document.getElementById('gtc').classList.remove('hidden')
  if(flag){
    flag = 0;
    oppOne();
  }
  else{
    flag = 1;
    oppZero();
  }
}
