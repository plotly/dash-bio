/*
* Run this file to properly update version number of Ideogram package.
*
* First, manually change version in package.json, then run:
* node scripts/js/prepublish.js
 */

var fs = require('fs');
var {execSync} = require('child_process');

fs.readFile('package.json', 'utf8', function(error, text) {

  var newVersion = JSON.parse(text).version;

  // Update to new version in Ideogram source code
  // (used to report version at runtime, among other things)
  fs.writeFile('src/js/version.js',
    'var version = \'' + newVersion + '\';\n' +
    'export default version;'
  );

  // Update to new version in package-lock.json
  execSync('npm install');

  // Update to new version in README.md
  fs.readFile('README.md', 'utf8', function(error, readmeText) {
    var oldVersion = readmeText.match(/ideogram(@\d+\.\d+\.\d+)/)[1];
    var oldVersionRE = new RegExp(oldVersion, 'g');
    var newReadmeText = readmeText.replace(oldVersionRE, '@' + newVersion);
    fs.writeFile('README.md', newReadmeText);
  });

});
