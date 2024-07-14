import {readFileSync} from "fs";

const INPUT = readFileSync("../../inputs/day01.txt", "utf8");
const NUMPAIRS = {
  "one": "o1e",
  "two": "t2o",
  "three": "t3e",
  "four": "f4r",
  "five": "f5e",
  "six": "s6x",
  "seven": "s7n",
  "eight": "e8t",
  "nine": "n9e"
};

function parseNums(line) {
  Object.keys(NUMPAIRS).forEach(key => {
    line = line.replaceAll(key, NUMPAIRS[key]);
  });

  return line;
}

export function solve_a() {
  return INPUT.split("\n").reduce((s, line) => {
    let numStr = "";

    for(let i = 0; i < line.length; i++) {
      const c = line.charAt(i);

      if(c >= "0" && c <= "9") {
        numStr += c;

        break;
      }
    }

    for(let i = line.length - 1; i >= 0; i--) {
      const c = line.charAt(i);

      if(c >= "0" && c <= "9") {
        numStr += c;

        break;
      }
    }

    return s + Number(numStr);
  }, 0);
}
export function solve_b() {
  return INPUT.split("\n").map(line => parseNums(line)).reduce((s, line) => {
    let numStr = "";

    for(let i = 0; i < line.length; i++) {
      const c = line.charAt(i);

      if(c >= "0" && c <= "9") {
        numStr += c;

        break;
      }
    }

    for(let i = line.length - 1; i >= 0; i--) {
      const c = line.charAt(i);

      if(c >= "0" && c <= "9") {
        numStr += c;

        break;
      }
    }

    return s + Number(numStr);
  }, 0);
}
