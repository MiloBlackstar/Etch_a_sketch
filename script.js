let gridSize = 16;
let yourColor = 'blue';


// default grid config
const gridContainer = document.querySelector
('#grid-container');

for (i = 0; i < gridSize; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  gridContainer.appendChild(row);

  for (j = 0; j < gridSize; j++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  row.appendChild(cell);
  }
}

//default color config
function colorUwU() {

  const gridCell = document.querySelectorAll('.cell');

  gridCell.forEach(cell => {
    cell.addEventListener('mouseover', function color() {
      cell.style.cssText = `background-color: ${yourColor};`;
    });
  });
}
//-----------------------//

colorUwU();

//----------------------//


//change grid size config

function changeGrid() {
  gridSize = Number(prompt('Enter grid size (min: 4 | max: 32):')); if (gridSize >= 4 && gridSize <= 32) {
        
    gridContainer.innerHTML = '';

    for (i = 0; i < gridSize; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      gridContainer.appendChild(row);

      for (j = 0; j < gridSize; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      row.appendChild(cell);
      }
    }

    colorUwU();

    alert(`Size changed to ${gridSize}x${gridSize}!`)} else {
      alert(`Wrong size!`);
    };
    
}



