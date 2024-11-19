// ashamlan@flyakeed.com
function knightMove(startPoint, endPoint) {
  const [startX, startY] = startPoint;
  const [endX, endY] = endPoint;

  const directions = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  const movesQueue = [[startX, startY, 0]]; // [x, y, moves]
  const visited = new Set();

  while (movesQueue.length > 0) {
    const [currentX, currentY, currentMoves] = movesQueue.shift();

    // Check if the destination is reached
    if (currentX === endX && currentY === endY) {
      return currentMoves;
    }

    const moveKey = `${currentX},${currentY}`;
    if (!visited.has(moveKey)) {
      visited.add(moveKey);

      for (const [dx, dy] of directions) {
        const [nextX, nextY] = generateMove([currentX, currentY], [dx, dy]);

        if (validateMove([nextX, nextY])) {
          movesQueue.push([nextX, nextY, currentMoves + 1]);
        }
      }
    }
  }

  return -1;
}

function validateMove([x, y]) {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function generateMove([currentX, currentY], [dx, dy]) {
  return [currentX + dx, currentY + dy];
}

const startPoint = [0, 0];
const endPoint = [7, 7];
console.log(`Minimum knight moves: ${knightMove(startPoint, endPoint)}`);
