function parseCell(cell) {
    return cell.split(',').map(n => parseInt(n, 10));
}

function serializeCell(coords) {
    return coords.join(',');
}

// Return array of neighours of given cell.
function getNeighbours(cell) {
    var neighboursDeltas = [
        [-1, -1],
        [ 0, -1],
        [ 1, -1],
        [-1,  0],
        [ 1,  0],
        [-1,  1],
        [ 0,  1],
        [ 1,  1]
    ];

    var parsedCell = parseCell(cell);
    var cellX = parsedCell[0];
    var cellY = parsedCell[0];

    return neighboursDeltas.map(delta => serializeCell([
        parsedCell[0] + delta[0],
        parsedCell[1] + delta[1]]));
}

// Return true if cell should be alive given input parameters.
function shouldBeAlive(isAlive, neighbours) {
    if (isAlive && (neighbours == 2 || neighbours == 3)) return true;
    if (!isAlive && neighbours == 3) return true;
    return false;
}

// Return next generation given current one.
function nextGeneration(current) {
    // 1. Map all living cells from current generation to their neighbours (may/should contain duplicates)
    var allNeighbours = _.flatMap(current, getNeighbours);
    // 2. Find how many neighbours from step #1 point to same location.
    var neighboursCount = _.groupBy(allNeighbours);
    // 3. Apply rules (shouldBeAlive) to all (deduplicated) positions from #3 to generate new generation.
    var isAlive = cell => current.indexOf(cell) !== -1;
    return Object.keys(neighboursCount).filter(cell => shouldBeAlive(isAlive(cell), neighboursCount[cell].length));
}
