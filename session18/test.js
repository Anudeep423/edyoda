 const checkAnagram = (str1,str2) => {

    var length1 = str1.length;

    var length2 = str2.length;

   const sortedstr1 =  str1.split("").sort().join("")

  const sortedstr2 =  str2.split("").sort().join("")

    if(length1 == length2){
        if(sortedstr1 === sortedstr2){
           return true
        }else{
            return false
        }
    }else{
        return false
    }



 }


module.exports = checkAnagram
