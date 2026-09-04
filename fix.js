const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');
content = content.replace(/â€”/g, '&mdash;');
fs.writeFileSync('index.html', content, 'utf8');
