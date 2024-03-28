function createRow(answerA, answerB) {
  return {"Answer_A": answerA, "Answer_B": answerB};
}

const table = {};

console.table(table, ["Answer_A", "Answer_B"]);
