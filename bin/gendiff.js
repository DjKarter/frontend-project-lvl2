#!/usr/bin/env node
import genDiff from '../src/lib.js';
import program from 'commander';


program
    .version('0.0.3')
    .description('Compares two configuration files and shows a difference.')
    .arguments('<pathToFile1> <pathToFile2>')
    .option('-f, --format [type]', 'output format')
    .action(
        (pathToFile1, pathToFile2) => {
            console.log(genDiff(pathToFile1, pathToFile2));
        },
    )
    .parse(process.argv);