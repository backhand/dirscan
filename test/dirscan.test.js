var dirscan = require('..');

exports['Test recursive dir scan'] = function(test) {
  
  var result = dirscan.recursive('test/testfolder');
  
  //console.log(result);
  test.ok(undefined != result['test/testfolder/dir1/file1.xyz']);
  test.ok(undefined != result['test/testfolder/dir2/file2.xyz']);
  test.ok(undefined != result['test/testfolder/file']);
  
  test.done();
  
};

exports['Test recursive dir scan, with extension filter'] = function(test) {
  
  var result = dirscan.recursive('test/testfolder','.xyz');
  
  //console.log(result);
  test.ok(undefined != result['test/testfolder/dir1/file1.xyz']);
  test.ok(undefined != result['test/testfolder/dir2/file2.xyz']);
  test.ok(undefined == result['test/testfolder/file']);
  
  test.done();
  
};