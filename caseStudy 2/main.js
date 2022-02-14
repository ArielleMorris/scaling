
function checkWidth(){
  let k = document.getElementsByTagName('body')[0].clientWidth;
  if(k<1024 && flag == 1){
    switchView();
  }

  if(k < 1024){
    document.getElementsByClassName('switchView')[0].style.display = "none";
  }
  else{
    document.getElementsByClassName('switchView')[0].style.display = 'block';
  }



}

checkWidth();


function toggleMenu(){
  document.getElementById("navigation").classList.toggle('active');
}
