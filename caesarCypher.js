function rot13(str){
  let result=str.split('').map(x=>{
    if(/[a-z]/i.test(x)){
      let resultASCIIValue
      let inpASCIIValue=x.charCodeAt(0)
      if(inpASCIIValue-13<65){
        resultASCIIValue=91-(65-(inpASCIIValue-13))
      }
      else{
        resultASCIIValue=inpASCIIValue-13
      }
      return String.fromCharCode(resultASCIIValue)
    }
    return x
  })
  return result.join('')
}

