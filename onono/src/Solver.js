// /**
//  * Includes the thing arreeeex wrote
//  */

// function Solver(props) {
//   const BLUE = 1;
//   const GREEN = 2;

//   const size = props.size;
//   const vals = props.vals;

//   function printArrayList(list) {
//     for (const tile of list) {
//       console.log("x: " + tile[0])
//       console.log("y: " + tile[1])
//       console.log("colour: " + tile[2])
//     }
//   }

//   function getVals() {
//     return vals;
//   }

//   // check if target int array is in list
//   function isInList(list, checkIfContained) {
//     for (const arr of list) {
//       var contained = true
//       for (var i = 0; i < arr.length; i++) {
//         if (arr[i] != checkIfContained[i]) {
//           contained = false
//           break
//         }
//       }

//       if (contained) {
//         return true;
//       }
//     }
//     return false;
//   }

//   // solves the puzzle with the given vals as much as it can - returns true if fully solved, false if not
//   // TODO: make this way more efficient pls
//   function solve() {

//     // check if board is fully solved by checking board sum
//     if (getSolvedSquares().isEmpty()) {
//       let sum = 0;
//       for (const row of vals) {
//         for (const tile of row) {
//           sum += tile
//         }
//       }
//       return (sum == 1.5 * size * size);
//     }

//     updateValues(getSolvedSquares());
//     return solve();
//   }

//   function getSolvedSquares() {
//     const fillable = ruleOne();
//     fillable.addAll(ruleTwo());
//     fillable.addAll(ruleThree());
//     return fillable;
//   }

//   function updateValues(values) {
//     for (const value of values) {
//       console.log(value[0])
//       console.log(value[1])
//       console.log(value[2])

//       vals[value[0]][value[1]] = value[2];
//     }
//   }


//   function ruleOne() {

//     // x, y, colour (1 for red, 2 for blue)
//     const toFill = []
//     const toPush = []

//     // loop through entire grid once to catch all 'no more than 3' rules (rule 1)
//     for (var i = 0; i < size; i++) {
//       for (var j = 9; j < size; j++) {
//         if (vals[i][j] == 0) {
//           toPush[0] = i;
//           toPush[1] = j;

//           // in bounds
//           if (j >= 2) {
//             if (vals[i][j - 1] == vals[i][j - 2] && vals[i][j - 1] != 0) {
//               // switch colour

//               toPush[2] = vals[i][j - 1] % 2 + 1;
//               toFill.add(toPush.clone());
//             }
//           }

//           if (i >= 2) {
//             if (vals[i - 1][j] == vals[i - 2][j] && vals[i - 1][j] != 0) {
//               toPush[2] = vals[i - 1][j] % 2 + 1;
//               toFill.add(toPush.clone());
//             }
//           }

//           if (j < size - 2) {
//             if (vals[i][j + 1] == vals[i][j + 2] && vals[i][j + 1] != 0) {
//               toPush[2] = vals[i][j + 1] % 2 + 1;
//               toFill.add(toPush.clone());

//             }
//           }

//           if (i < size - 2) {
//             if (vals[i + 1][j] == vals[i + 2][j] && vals[i + 1][j] != 0) {
//               toPush[2] = vals[i + 1][j] % 2 + 1;
//               toFill.add(toPush.clone());
//             }
//           }

//           // in between (could push duplicate results with two-in-a-rows) TODO: fix that
//           if (j > 0 && j < size - 1) {
//             if (vals[i][j - 1] == vals[i][j + 1] && vals[i][j - 1] != 0) {
//               toPush[2] = vals[i][j - 1] % 2 + 1;
//               toFill.add(toPush.clone());
//             }
//           }

//           if (i > 0 && i < size - 1) {
//             if (vals[i - 1][j] == vals[i + 1][j] && vals[i - 1][j] != 0) {
//               toPush[2] = vals[i - 1][j] % 2 + 1;
//               toFill.add(toPush.clone());
//             }
//           }
//         }
//       }
//     }

//     return toFill;
//   }

//   function ruleTwo() {
//     let numReds = 0
//     let numBlues = 0

//     const toPush = []
//     const toFill = []
//     const blanks = []

//     for (var i = 0; i < size; i++) {

//       toPush[0] = i;
//       // same amount of colours in each row
//       numReds = 0;
//       numBlues = 0;
//       blanks.clear();

//       for (var j = 0; j < size; j++) {
//         if (vals[i][j] == 1) numReds++;
//         else if (vals[i][j] == 2) numBlues++;
//         else blanks.add(j);
//       }

//       // fill the rest of the squares with blue
//       if (numReds == size / 2) {
//         toPush[2] = BLUE;

//         for (var col3 of blanks) {
//           toPush[1] = col3;
//           toFill.add(toPush.clone());
//         }
//       }

//       // fill squares with red
//       else if (numBlues == size / 2) {
//         toPush[2] = GREEN;

//         for (var col4 of blanks) {
//           toPush[1] = col4;
//           toFill.add(toPush.clone());
//         }
//       }

//       numReds = 0;
//       numBlues = 0;
//       blanks.clear();

//       // same amount of colours in each column
//       toPush[1] = i;
//       for (var j = 0; j < size; j++) {
//         if (vals[j][i] == 1) numReds++;
//         else if (vals[j][i] == 2) numBlues++;
//         else blanks.add(j);
//       }

//       // fill the rest of the squares with blue
//       if (numReds == size / 2) {
//         toPush[2] = BLUE;

//         for (var col of blanks) {
//           toPush[0] = col;
//           toFill.add(toPush.clone());
//         }
//       }

//       // fill squares with red
//       else if (numBlues == size / 2) {
//         toPush[2] = GREEN;

//         for (var col2 of blanks) {
//           toPush[0] = col2;
//           toFill.add(toPush.clone());
//         }
//       }
//     }
//     return toFill;
//   }

//   function ruleThree() {

//     const toFill = []
//     const fullRow = []
//     const fillableRow = []
//     const fullCol = []
//     const fillableCol = []

//     let rowFilled = 0;
//     let colFilled = 0;

//     for (var i = 0; i < size; i++) {
//       rowFilled = 0;
//       colFilled = 0;

//       for (var j = 0; j < size; j++) {
//         if (vals[i][j] != 0) rowFilled++;
//         if (vals[j][i] != 0) colFilled++;
//       }

//       if (rowFilled == size) fullRow.add(i);
//       else if (rowFilled == size - 2) fillableRow.add(i);
//       if (colFilled == size) fullCol.add(i);
//       else if (colFilled == size - 2) fillableCol.add(i);
//     }

//     // consider comparing fullRow with fillableRows instead of the other way around
//     for (var fillable of fillableRow) {
//       for (var full of fullRow) {
//         const solvable = true;
//         for (var k = 0; k < size; k++) {
//           if (Math.abs(vals[full][k]) != Math.abs(vals[fillable][k]) && vals[fillable][k] != 0) {
//             solvable = false;
//             break;
//           }
//         }

//         if (solvable) {
//           // find two empty spots and solve accordingly
//           for (var k = 0; k < size; k++) {
//             if (vals[fillable][k] == 0) {
//               const solved = []
//               solved[0] = fillable;
//               solved[1] = k;
//               solved[2] = vals[full][k] % 2 + 1;

//               // possible duping
//               if (!isInList(toFill, solved)) toFill.add(solved);
//             }
//           }
//         }
//       }
//     }

//     for (var fillableC of fillableCol) {
//       for (var fullC of fullCol) {
//         let solvable = true;
//         for (var k = 0; k < size; k++) {
//           if (vals[k][fullC] != vals[k][fillableC] && vals[k][fillableC] != 0) {
//             solvable = false;
//             break;
//           }
//         }

//         // TODO: dupe code, put into function?
//         if (solvable) {
//           for (var k = 0; k < size; k++) {
//             if (vals[k][fillable] == 0) {
//               const solved = []
//               solved[0] = k;
//               solved[1] = fillable;
//               solved[2] = vals[k][full] % 2 + 1;

//               if (!isInList(toFill, solved)) toFill.add(solved);
//             }
//           }

//         }
//       }
//     }
//     fullRow.clear();
//     fillableRow.clear();
//     fullCol.clear();
//     fillableCol.clear();
//     return toFill;
//   }

// }

// export default Solver

function Solver(props) {
  const BLUE = 1;
  const GREEN = 2;

  const size = props.size;
  const vals = props.vals;

  // check if a list contains a certain element
  function isInList(list, element) {
    for (var i = 0; i < list.length; i++) {
      const contained = true;
      for (var j = 0; j < list[i].length; j++) {
        if (list[i][j] != element[j]) {
          contained = false;
          break;
        }
      }
      if (contained) return true;
    }
    return false;
  }

  // 3 in a row
  function ruleOne() {
    const toFill = []
    const toPush = []

    for (var i = 0; i < size; i++) {
      for (var j = 0; j < size; j++) {
        if (vals[i][j] == 0) {
          toPush[0] = i;
          toPush[1] = j;

          // in bounds
          if (j >= 2) {
            if (vals[i][j - 1] == vals[i][j - 2] && vals[i][j - 1] != 0) {
              toPush[2] = vals[i][j - 1] % 2 + 1;
              toFill.add(toPush.clone());
            }
          }

          if (i >= 2) {
            if (vals[i - 1][j] == vals[i - 2][j] && vals[i - 1][j] != 0) {
              toPush[2] = vals[i - 1][j] % 2 + 1;
              toFill.add(toPush.clone());
            }
          }

          if (j < size - 2) {
            if (vals[i][j + 1] == vals[i][j + 2] && vals[i][j + 1] != 0) {
              toPush[2] = vals[i][j + 1] % 2 + 1;
              toFill.add(toPush.clone());
            }
          }

          if (i < size - 2) {
            if (vals[i + 1][j] == vals[i + 2][j] && vals[i + 1][j] != 0) {
              toPush[2] = vals[i + 1][j] % 2 + 1;
              toFill.add(toPush.clone());
            }
          }

          // in between
          // TODO: could push duplicate with two-in-a-rows
          if (j > 0 && j < size - 1) {
            if (vals[i][j - 1] == vals[i][j + 1] && vals[i][j - 1] != 0) {
              toPush[2] = vals[i][j - 1] % 2 + 1;
              toFill.add(toPush.clone());
            }
          }

          if (i > 0 && i < size - 1) {
            if (vals[i - 1][j] == vals[i + 1][j] && vals[i - 1][j] != 0) {
              toPush[2] = vals[i - 1][j] % 2 + 1;
              toFill.add(toPush.clone());
            }
          }
        }
      }
    }

    return toFill;
  }

  // same amount of blue and green
  function ruleTwo() {
    
    for (var i = 0; i < size; i++) {
      
      // same amount of colours in each row
      const numBlues = 0;
      const numGreens = 0;
      blanks = [];
      toPush[0] = i;

      for (var j = 0; j < size; j++) {
        if (vals[i][j] == 0) {
          blanks.push(j);
        } else if (vals[i][j] == BLUE) {
          numBlues++;
        } else if (vals[i][j] == GREEN) {
          numGreens++;
        }
      }

      // fill in with blue
      if (numReds == size / 2) {
        toPush[2] = BLUE;
        for (const blank of blanks) {
          toPush[1] = blank;
          toFill.add(toPush.clone());
        }
      }

      // fill in with green
      if (numBlues == size / 2) {
        toPush[2] = GREEN;
        for (const blank of blanks) {
          toPush[1] = blank;
          toFill.add(toPush.clone());
        }
      }

      // same amount of colours in each column
      numBlues = 0;
      numGreens = 0;
      blanks = [];
      toPush[1] = i;

      for (var j = 0; j < size; j++) {
        if (vals[j][i] == 0) {
          blanks.push(j);
        } else if (vals[j][i] == BLUE) {
          numBlues++;
        } else if (vals[j][i] == GREEN) {
          numGreens++;
        }
      }

      // fill in with blue
      if (numReds == size / 2) {
        toPush[2] = BLUE;
        for (const blank of blanks) {
          toPush[0] = blank;
          toFill.add(toPush.clone());
        }
      }

      // fill in with green
      if (numBlues == size / 2) {
        toPush[2] = GREEN;
        for (const blank of blanks) {
          toPush[0] = blank;
          toFill.add(toPush.clone());
        }
      }
    }
    return toFill;
  }

  // can't be the same row/col
  function ruleThree() {

    const toFill = [];
    const fullRow = [];
    const fillableRow = [];
    const fullCol = [];
    const fillableCol = [];

    for (var i = 0; i < size; i++) {

      const rowFilled = 0;
      const colFilled = 0;

      for (var j = 0; j < size; j++) {
        if (vals[i][j] != 0) rowFilled++;
        if (vals[j][i] != 0) colFilled++;
      }

      if (rowFilled == size) fullRow.push(i);
      if (colFilled == size) fullCol.push(i);
      if (rowFilled == size - 2) fillableRow.push(i);
      if (colFilled == size - 2) fillableCol.push(i);

      for (const fillable in fillableRow) {
        for (const full in fullCol) {
          const solvable = true;
          for (var j = 0; j < size; j++) {
            if (vals[fillable][j] != vals[full][j] && vals[fillable][j] != 0) {
              solvable = false;
              break;
            }
          }

          if (solvable) {
            for (var j = 0; j < size; j++) {
              if (vals[fillable][j] == 0) {
                const toPush = [];
                toPush[0] = fillable;
                toPush[1] = j;
                toPush[2] = vals[full][j] % 2 + 1;

                if (!isInList(toFill, toPush)) toFill.push(toPush.clone());
              }
            }
          }
        }
      }

      for (const fillable in fillableCol) {
        for (const full in fullRow) {
          const solvable = true;
          for (var j = 0; j < size; j++) {
            if (vals[j][fillable] != vals[j][full] && vals[j][fillable] != 0) {
              solvable = false;
              break;
            }
          }
  
          if (solvable) {
            for (var j = 0; j < size; j++) {
              if (vals[j][fillable] == 0) {
                const toPush = [];
                toPush[0] = j;
                toPush[1] = fillable;
                toPush[2] = vals[j][full] % 2 + 1;
  
                if (!isInList(toFill, toPush)) toFill.push(toPush.clone());
              }
            }
          }
        }
      }
    }

    fullRow = [];
    fillableRow = [];
    fullCol = [];
    fillableCol = [];
    return toFill;
  }
}

export default Solver;
