function huiswerkMaken (vak, callback){

  console.log(`Ok, ok, ik ga nu ${vak} huiswerk maken`);
  callback()
};

function klaarMetHuiswerk(){
  console.log('Kijk Paps/Mams, ik ben klaar met huiswerk');
}

huiswerkMaken('wiskunde', klaarMetHuiswerk);{
  setTimeout (()=>{
    alert('klaar');
  }, 2000);  
}