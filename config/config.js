var fs =require('fs');

exports.config = JSON.parse(fs.readFileSync(process.cwd() +'/config.json','utf-8'));
