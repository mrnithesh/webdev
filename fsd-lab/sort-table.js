let sortDirections = [];

function sortTable(columnIndex) {
    const table = document.getElementById("data-table");
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.rows);

    if (sortDirections[columnIndex] === undefined) {
        sortDirections[columnIndex] = 1;
    } else {
        sortDirections[columnIndex] *= -1;
    }

    const currentDirection = sortDirections[columnIndex];

    rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].textContent.trim();
        const cellB = rowB.cells[columnIndex].textContent.trim();

        let comparison = 0;

        if (!isNaN(parseFloat(cellA)) && !isNaN(parseFloat(cellB))) {
            comparison = parseFloat(cellA) - parseFloat(cellB);
        } else {
            comparison = cellA.localeCompare(cellB);
        }

        return comparison * currentDirection;
    });

    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    rows.forEach(row => {
        tbody.appendChild(row);
    });
}
