// function huiswerkMaken (vak, callback){

//   console.log(`Ok, ok, ik ga nu ${vak} huiswerk maken`);
//   callback()
// };

// function klaarMetHuiswerk(){
//   console.log('Kijk Paps/Mams, ik ben klaar met huiswerk');
// }

// huiswerkMaken('wiskunde', klaarMetHuiswerk);{
//   setTimeout (()=>{
//     alert('klaar');
//   }, 2000);  
// }

// const sinterklaasIsGul = true;

// // Promise maken (dit hoeven jullie dus niet te leren, dit is aan de API (back-end) kant)
// const krijgIkEenNieuweiPhone = new Promise(
//     (resolve, reject) => {
//         if (sinterklaasIsGul) {
//             const smartphone = {
//                 merk: 'Apple',
//                 type: 'iPhone 11'
//             };
//             resolve(smartphone);
//         } else {
//             const metWelkeReden = new Error('Je bent stout geweest, geen cadeaus voor jou');
//             reject(metWelkeReden);
//         }

//     }
// );

// // Promise aanroepen, of "consumeren" (dit zullen je dus wel doen en moeten leren)
// const vraagAanSinterklaas = () => {
//     krijgIkEenNieuweiPhone
//         .then(function (resolved) {
//             // yay, je hebt een nieuwe smartphone
//             console.log(resolved);
//         })
//         .catch(function (error) {
//             // oeps, geen Sinterklaas cadeau dit jaar
//             console.log(error.message);
//         });
// }

// vraagAanSinterklaas();

const testNum = (num) => new Promise ((resolve, reject) =>{
  if (num > 10){
    resolve('greater that then')
  } else {
    reject('less than ten')
  }
})

testNum(5)
 .then(function(value) {
  console.log(value) })
  .catch(function(error) {
    console.log(error)
  })

  const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
  const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (words) => {
  new Promise ((resolve, reject) =>{
    if (words.every(word => typeof word === 'string')){
      resolve(words.map(word => word.toUpperCase()))
    } else{
      reject(Error('Not a string!'))
    }
  })
}

const sortWords = (words) => {
  return words.sort((a, b) => {
    if (a >b){
      return 1
    } else {
      return -1
    }
  })
}
makeAllCaps(arrayOfWords)
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))