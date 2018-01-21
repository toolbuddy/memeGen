#!/usr/bin/env node
const sharp = require('sharp');
const chalk = require('chalk');
const program = require('commander');
const fsx = require('fs-extra')
const fs = require('fs');
const path = require('path');

let dep = fs.readFileSync(path.join(__dirname,'package.json'),'utf-8');
let depobj = JSON.parse(dep);
// Build CLI
program
  .version(chalk.green(depobj.version))
  .description('A meme generator.')
  .option('-1, --first [name]', 'Specify first input image(upper one)')
  .option('-2, --second [name]', 'Specify second input image(lower one)')
  .option('-o, --output [loc]', 'Specify output location',__dirname)
  .option('-f, --fname [name]', 'Specify output filename','output')
  .option('-type, --type [type]', 'Specify output file type','.png')
  .parse(process.argv);

// Testing all file is legal
fsx.pathExists(program.first, (err,exists) => {
  if(exists==false){
    console.error(`${program.first} is not existed!`);
    process.exit();
  }
  else{
    console.log(`Upper image: ${program.first}`);
    // Checking second 
    fsx.pathExists(program.second, (err,exists) => {
      if(exists==false){
        console.error(`${program.second} is not existed!`);
        process.exit();
      }
      else{
        console.log(`Lower image: ${program.second}`);
      }
    })
    // calling generating function
    generate_meme(program.first,program.second,program.output);
  }
});


// Generate meme!
function generate_meme(src1,src2,out){
  sharp(src1)
    .resize(300,260)
    .max()
    .toBuffer(function(err,out1){
      // Resizing second
      sharp(src2)
        .resize(300,260)
        .max()
        .toBuffer(function(err,out2){
          // concat 
          sharp('lib/drake_meme_template.jpg')
            .overlayWith(out1, { top:0 , left: 322 } )
            .toBuffer(function(err,result1) {
              sharp(result1)
                .overlayWith(out2, { top:265, left: 322 } )
                .toFile(path.join(program.output,program.fname+program.type), function(err) {
                });
            });
          
        })
    })
}