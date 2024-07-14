import {readFileSync} from "fs";

const INPUT = readFileSync("../../inputs/day02.txt", "utf8");

export function solve_a() {
  return INPUT.split("\n").reduce((s, l) => {
    const line = l.split(": ");
    const game = Number(line[0].substring(5));
    const cubes = line[1].split(/[;,]/);
    const powers = {"red": 12, "green": 13, "blue": 14};
    let possible = true;

    for(const cube of cubes) {
      const c = cube.trim().split(" ");

      if(powers[c[1]] < Number(c[0])) {
        possible = false;

        break;
      }
    }

    return s + (possible * game);
  }, 0);
}
export function solve_b() {
  return INPUT.split("\n").reduce((s, l) => {
    const line = l.split(": ");
    const cubes = line[1].split(/[;,]/);
    const powers = {"red": 1, "green": 1, "blue": 1};

    for(const cube of cubes) {
      const c = cube.trim().split(" ");

      if(powers[c[1]] < Number(c[0]))
        powers[c[1]] = Number(c[0]);
    }

    return s + (powers.red * powers.green * powers.blue);
  }, 0);
}
