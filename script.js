const periodicTableDiv = document.getElementById('periodic-table');

// Example data (replace with actual periodic table data)
const elements = [
    { symbol: 'H', name: 'Hydrogen', details: '...' },
    { symbol: 'He', name: 'Helium', details: '...' },
    // ... add more elements
];

elements.forEach(element => {
    const elementDiv = document.createElement('div');
    elementDiv.classList.add('element');
    elementDiv.textContent = element.symbol;

    elementDiv.addEventListener('mouseover', () => {
        alert(element.name + ': ' + element.details); // Basic popup
    });

    periodicTableDiv.appendChild(elementDiv);
});