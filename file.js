const fs = require('fs-extra');

const dir1= '/tmp/MyDir1';
const dir2= '/tmp/MyDir2';
const dir3= '/tmp/MyDir3';
const file = '/tmp/MyDir1/file.txt';

// 1.Check if directory1 exists, and create if not
fs.ensureDirSync(dir1);
console.log('1.Directory tmp/MyDir1 is created');

// 2.Check if the file exists, and create if not
fs.ensureFileSync(file);
console.log('2.File.txt is added to directory tmp/MyDir1');

//3. Check if directory2 exists, and create if not
fs.ensureDirSync(dir2);
console.log('3.Directory tmp/MyDir2 is created');

//4.Move file.txt from MyDir1 to MyDir2 folder
fs.moveSync('/tmp/MyDir1/file.txt', '/tmp/MyDir2/file.txt');
console.log('4.File.txt is moved from MyDir1 to MyDir2');

//5. Check if directory3 exists, and create if not
fs.ensureDirSync(dir3);
console.log('5.Directory tmp/MyDir3 is created');

// 6. Copy file.txt from MyDir2 to MyDir3 folder
fs.copySync('/tmp/MyDir2/file.txt', '/tmp/MyDir3/file.txt');
console.log('6.File.txt is copied from MyDir2 to MyDir3');

// 7. Remove file.txt from MyDir2 & MyDir3 folders
fs.removeSync ('/tmp/MyDir2/file.txt');
fs.removeSync ('/tmp/MyDir3/file.txt');
console.log('7.File.txt is removed from MyDir2 & MyDir3');

// 8.Remove folders MyDir1, MyDir2, MyDir3
fs.removeSync (dir1);
fs.removeSync (dir2);
fs.removeSync (dir3);
console.log('8.Folders MyDir1, MyDir2 & MyDir3 are removed');