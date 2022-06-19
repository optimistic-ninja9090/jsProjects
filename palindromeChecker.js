function palindrome(str){

  str = str.match(/[a-z0-9]/ig)
  let originalStr=str.join('').toLowerCase()
  let reverseStr=str=str.reverse().join('').toLowerCase()
  
  if(originalStr === reverseStr)
    return true;

  return false;
}
