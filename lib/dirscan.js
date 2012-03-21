var fs = require('fs');

function extensionFilter(filename, extension) {
  return undefined != extension ? filename.substr(-extension.length) == extension : true;
}

function recursive(path, extension) {

  // Read contents of path
  var dirContents = fs.readdirSync(path);

  // Data array for returning
  var fileMap = {};

  for ( var i in dirContents) {
    if('.' == dirContents[i][0])
      continue;
    
    // Construct file path
    var filePath = path + "/" + dirContents[i];

    // Stat it
    var stat = fs.statSync(filePath);

    // Check whether file or directory
    if (stat.isDirectory()) {
      // Recursive scan the directory, add list to fileMap
      var childContents = recursive(filePath);
      for (var i in childContents) {
        if(extensionFilter(i, extension))
          fileMap[i] = childContents[i];
      }
    } else if (stat.isFile()) {
      if(extensionFilter(filePath, extension))
        fileMap[filePath] = stat;
    }
  }

  return fileMap;
};



exports.recursive = recursive;