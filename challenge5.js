

function ab (word){

return word.replace(/[aeiouy]/gi, '');

}
let phrase = "hellooooo eveeryyybooodyyyy";
let result = ab(phrase);
console.log(result);