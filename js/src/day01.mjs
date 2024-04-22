import {readFileSync} from "fs";

const data = readFileSync("../../inputs/day01.txt", "utf8");
const numPairs = {
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
  Object.keys(numPairs).forEach(key => {
    line = line.replaceAll(key, numPairs[key]);
  });

  return line;
}

export function solve_a() {
  return data.split("\n").reduce((s, line) => {
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
  return data.split("\n").map(line => parseNums(line)).reduce((s, line) => {
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
