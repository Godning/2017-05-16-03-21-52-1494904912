module.exports = function main(email, suffixes) {
  // Write your code here
  var list = email.split('@');
  suf = list[1];
  var flag = 0;
  for(let s of suffixes){
      if(s == suf){
          flag = 1;
      }
  }
  if(flag == 1){
      return true;
  }
  else{
      return false;
  }
};
