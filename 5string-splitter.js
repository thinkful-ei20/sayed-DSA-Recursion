const stringSplitter = (str, seperator, arr=[]) =>{
  //base case
  if(str.trim().length===0) {
    return arr;
  }

  let newString = '';
  
  for(let i =0; i < str.length; i++){
    if (str[i] !== seperator){
      newString += str[i];
     
    } if (i === str.length -1 ){
      arr.push(newString);

    } if (str[i] === seperator ) {
      arr.push(newString);
      return stringSplitter(str.slice(i+1), seperator, arr);
    }

  } return arr;
};  

console.log(stringSplitter('hello new world', ' '));