const rows = document.querySelectorAll('.row');
let rowIndex = 0;
let tileIndex = 0;

function updateFocus() {
  document.querySelectorAll('.tile').forEach(tile => tile.classList.remove('focused'));
  const currentTile = rows[rowIndex].children[tileIndex];
  currentTile.classList.add('focused');
}

document.addEventListener('keydown', (e) => {
  const currentRow = rows[rowIndex];
  const tiles = currentRow.children;

  if (e.key === 'ArrowRight') {
    tileIndex = Math.min(tileIndex + 1, tiles.length - 1);
  } else if (e.key === 'ArrowLeft') {
    tileIndex = Math.max(tileIndex - 1, 0);
  } else if (e.key === 'ArrowDown') {
    rowIndex = Math.min(rowIndex + 1, rows.length - 1);
    tileIndex = Math.min(tileIndex, rows[rowIndex].children.length - 1);
  } else if (e.key === 'ArrowUp') {
    rowIndex = Math.max(rowIndex - 1, 0);
    tileIndex = Math.min(tileIndex, rows[rowIndex].children.length - 1);
  }

  updateFocus();
});

updateFocus();
