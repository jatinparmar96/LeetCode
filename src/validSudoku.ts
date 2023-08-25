const inputBoard = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

function isValidSudoku(board: string[][]): boolean {
  let rowMap: any = {};
  let colMap = {};
  let gridMap = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === ".") {
        continue;
      }
      if (rowMap[i] === undefined) {
        rowMap[i] = new Set();
      }
      if (colMap[j] === undefined) {
        colMap[j] = new Set();
      }
      const x = Math.floor(i/3);
      const y = Math.floor(j/3);
      const gridIndex = `${x}${y}`
      if(gridMap[gridIndex] === undefined){
        gridMap[gridIndex] = new Set();
      }

      if (rowMap[i].has(board[i][j]) || colMap[j].has(board[i][j]) || gridMap[gridIndex].has(board[i][j])) {
        return false;
      } else {
        rowMap[i].add(board[i][j]);
        colMap[j].add(board[i][j]);
        gridMap[gridIndex].add(board[i][j])
      }
    }
  }

  return true;
}

console.log(isValidSudoku(inputBoard));
