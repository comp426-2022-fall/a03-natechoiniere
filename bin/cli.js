#!/usr/bin/env node
import { roll } from "./lib/roll.js"
import minimist from "minimist"

var args = process.argv.slice(2);
const parsedArgs = minimist(args);

const sides = parsedArgs.sides || 6;
const dice = parsedArgs.dice || 2;
const rolls = parsedArgs.rolls || 1;

console.log(roll(sides, dice, rolls));
