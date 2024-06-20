// Select the search bar and data table elements
const searchBar = document.getElementById('searchBar');

const dataTable = document.getElementById('dataTable');

// Add an event listener to detect input changes
searchBar.addEventListener('input', filterTable);

function filterTable() {
  // Get the search query and convert to lower case
  const query = searchBar.value.toLowerCase();
  
  // Select all table rows in the tbody
  const rows = dataTable.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
  
  // Loop through each table row
  Array.from(rows).forEach((row) => {
    // Get the text content of each cell in the row and join them into a single string
    const rowText = Array.from(row.getElementsByTagName('td'))
                        .map(cell => cell.textContent.toLowerCase())
                        .join(' ');
    
    // Check if the row text includes the query
    if (rowText.includes(query)) {
      // If it includes, make sure the row is visible
      row.classList.remove('hidden');
    } else {
      // Otherwise, hide the row
      row.classList.add('hidden');
    }
  });
}

