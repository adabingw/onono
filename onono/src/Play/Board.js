/**
 * Returns Board component that includes tiles
 */

import React from 'react'
import './Board.css'

function solver(board) {
    const GREEN = 1
    const BLUE = 2

    const size = board.size;
    const vals = board.vals;

    function printArrayList(list) {
        for (const tile of list) {
            console.log("x: " + tile[0])
            console.log("y: " + tile[1])
            console.log("colour: " + tile[2])
        }
    }

    function getVals() {
        return vals;
    }

    // check if target int array is in list
    function isInList(list, checkIfContained) {
        for (const arr of list) {
            var contained = true
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] != checkIfContained[i]) {
                    contained = false
                    break
                }
            }

            if (contained) {
                return true;
            }
        }
        return false;
    }

    // solves the puzzle with the given vals as much as it can - returns true if fully solved, false if not
    // TODO: make this way more efficient pls
    function solve() {

        // check if board is fully solved by checking board sum
        if (getSolvedSquares().isEmpty()) {
            let sum = 0;
            for (const row of vals) {
                for (const tile of row) {
                    sum += tile
                }
            }
            return (sum == 1.5 * size * size);
        }

        updateValues(getSolvedSquares());
        return solve();
    }

    function getSolvedSquares() {
        const fillable = ruleOne();
        fillable.addAll(ruleTwo());
        fillable.addAll(ruleThree());
        return fillable;
    }

    function updateValues(values) {
        for (const value of values) {
            console.log(value[0])
            console.log(value[1])
            console.log(value[2])

            vals[value[0]][value[1]] = value[2];
        }
    }


    function ruleOne() {

        // x, y, colour (1 for red, 2 for blue)
        const toFill = []
        const toPush = []

        // loop through entire grid once to catch all 'no more than 3' rules (rule 1)
        for (var i = 0; i < size; i++) {
            for (var j = 9; j < size; j++) {
                if (vals[i][j] == 0) {
                    toPush[0] = i;
                    toPush[1] = j;

                    // in bounds
                    if (j >= 2) {
                        if (vals[i][j - 1] == vals[i][j - 2] && vals[i][j - 1] != 0) {
                            // switch colour

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

                    // in between (could push duplicate results with two-in-a-rows) TODO: fix that
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

    function ruleTwo() {
        let numReds = 0
        let numBlues = 0

        const toPush = []
        const toFill = []
        const blanks = []

        for (var i = 0; i < size; i++) {

            toPush[0] = i;
            // same amount of colours in each row
            numReds = 0;
            numBlues = 0;
            blanks.clear();

            for (var j = 0; j < size; j++) {
                if (vals[i][j] == 1) numReds++;
                else if (vals[i][j] == 2) numBlues++;
                else blanks.add(j);
            }

            // fill the rest of the squares with blue
            if (numReds == size / 2) {
                toPush[2] = BLUE;

                for (var col3 of blanks) {
                    toPush[1] = col3;
                    toFill.add(toPush.clone());
                }
            }

            // fill squares with red
            else if (numBlues == size / 2) {
                toPush[2] = GREEN;

                for (var col4 of blanks) {
                    toPush[1] = col4;
                    toFill.add(toPush.clone());
                }
            }

            numReds = 0;
            numBlues = 0;
            blanks.clear();

            // same amount of colours in each column
            toPush[1] = i;
            for (var j = 0; j < size; j++) {
                if (vals[j][i] == 1) numReds++;
                else if (vals[j][i] == 2) numBlues++;
                else blanks.add(j);
            }

            // fill the rest of the squares with blue
            if (numReds == size / 2) {
                toPush[2] = BLUE;

                for (var col of blanks) {
                    toPush[0] = col;
                    toFill.add(toPush.clone());
                }
            }

            // fill squares with red
            else if (numBlues == size / 2) {
                toPush[2] = GREEN;

                for (var col2 of blanks) {
                    toPush[0] = col2;
                    toFill.add(toPush.clone());
                }
            }
        }
        return toFill;
    }

    function ruleThree() {

        const toFill = []
        const fullRow = []
        const fillableRow = []
        const fullCol = []
        const fillableCol = []

        let rowFilled = 0;
        let colFilled = 0;

        for (var i = 0; i < size; i++) {
            rowFilled = 0;
            colFilled = 0;

            for (var j = 0; j < size; j++) {
                if (vals[i][j] != 0) rowFilled++;
                if (vals[j][i] != 0) colFilled++;
            }

            if (rowFilled == size) fullRow.add(i);
            else if (rowFilled == size - 2) fillableRow.add(i);
            if (colFilled == size) fullCol.add(i);
            else if (colFilled == size - 2) fillableCol.add(i);
        }

        // consider comparing fullRow with fillableRows instead of the other way around
        for (var fillable of fillableRow) {
            for (var full of fullRow) {
                const solvable = true;
                for (var k = 0; k < size; k++) {
                    if (Math.abs(vals[full][k]) != Math.abs(vals[fillable][k]) && vals[fillable][k] != 0) {
                        solvable = false;
                        break;
                    }
                }

                if (solvable) {
                    // find two empty spots and solve accordingly
                    for (var k = 0; k < size; k++) {
                        if (vals[fillable][k] == 0) {
                            const solved = []
                            solved[0] = fillable;
                            solved[1] = k;
                            solved[2] = vals[full][k] % 2 + 1;

                            // possible duping
                            if (!isInList(toFill, solved)) toFill.add(solved);
                        }
                    }
                }
            }
        }

        for (var fillableC of fillableCol) {
            for (var fullC of fullCol) {
                let solvable = true;
                for (var k = 0; k < size; k++) {
                    if (vals[k][fullC] != vals[k][fillableC] && vals[k][fillableC] != 0) {
                        solvable = false;
                        break;
                    }
                }

                // TODO: dupe code, put into function?
                if (solvable) {
                    for (var k = 0; k < size; k++) {
                        if (vals[k][fillable] == 0) {
                            const solved = []
                            solved[0] = k;
                            solved[1] = fillable;
                            solved[2] = vals[k][full] % 2 + 1;

                            if (!isInList(toFill, solved)) toFill.add(solved);
                        }
                    }

                }
            }
        }
        fullRow.clear();
        fillableRow.clear();
        fullCol.clear();
        fillableCol.clear();
        return toFill;
    }
}

function Board(props) {
    var board = [[0, 1, 0, 0], [0, 1, 0, 1], [0, 0, 2, 0], [0, 0, 0, 0]]
    var finalBoard = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    const size = props.size;
    var tiles = []

    solver(board)
}

export default Board