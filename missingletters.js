function fearNotLetter(str) {
  let arr1 = [];
  let arr2 = [];
  let newStr = str.toUpperCase();
  let endNumber = newStr.slice(-1).codePointAt(0);
  const Maths = (acc,currentVal) => acc + currentVal; 

  for(let i = 0; i < str.length; i++){
  	arr1.push(newStr.codePointAt(i));
  }
  
  for(let z = 0; z < str.length + 1; z++){
  	arr2.push(endNumber--);
  }
  
  arr2 = arr2.reduce(Maths);
  arr1 = arr1.reduce(Maths);
  
  let numby = arr2 - arr1;
  let alpha = String.fromCodePoint(numby)

  if(numby < str.toUpperCase().codePointAt(0)){
    return undefined
  }
  else{
    return alpha.toLowerCase();
  }
    
  
}

fearNotLetter("abce");
