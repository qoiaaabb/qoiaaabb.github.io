var table = document.getElementById("price-table");
const trList = [0, 8, 11, 14, 17, 20]
const tdList = [0, 3, 4, 5, 6, 7]
for (var i = 1; i <= 6; i++) {
    var row = document.createElement("tr");

    for (var j = 1; j <= 6; j++) {
        var cell = document.createElement("td");

        if (i == 1 && j == 2) {
            cell.innerHTML = `5號餐<br>8元`;
        }
        if (i == 1 && j == 3) {
            cell.innerHTML = `4號餐<br>11元`;
        }
        if (i == 1 && j == 4) {
            cell.innerHTML = `3號餐<br>14元`;
        }
        if (i == 1 && j == 5) {
            cell.innerHTML = `2號餐<br>17元`;
        }
        if (i == 1 && j == 6) {
            cell.innerHTML = `1號餐<br>20元`;
        }

        if (i == 2 && j == 1) {
            cell.innerHTML = `3`;
        }
        if (i == 3 && j == 1) {
            cell.innerHTML = `4`;
        }
        if (i == 4 && j == 1) {
            cell.innerHTML = `5`;
        }
        if (i == 5 && j == 1) {
            cell.innerHTML = `6`;
        }
        if (i == 6 && j == 1) {
            cell.innerHTML = `7`;
        }
        if (i != 1 && j != 1) {
            const rowIdx = i - 1;
            const colIdx = j - 1;
            cell.innerHTML = `${tdList[colIdx]}*${trList[rowIdx]}=${tdList[colIdx] * trList[rowIdx]}`;
        }

        if (i === 1 || j === 1) {
            cell.classList.add('tableTitle');
        }
        row.appendChild(cell);
    }

    table.appendChild(row);
}