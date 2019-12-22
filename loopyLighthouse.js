let x = 100;

while (x <= 200){

  if( x%3 === 0 && x%4 !=0 ){
    console.log('Loopy');
    x++;
  }
  else if(x%4 === 0 && x%3 !=0){
    console.log('Lighthouse');
    x++;
  }
  else if(x%3 === 0 && x%4 ===0){
    console.log('LoopyLighthouse');
    x++;
  }
  else{
    console.log(x);
    x++;  
  }

}