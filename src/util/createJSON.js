var fs = require('fs');
function writeFile(fileName, data)
{  
  fs.writeFile(fileName, JSON.stringify(data),'utf-8',complete);
  function complete(err)
  {
      if(!err)
      {
          console.log(`${fileName} create success.`);
      }   
  } 
}
module.exports = writeFile;