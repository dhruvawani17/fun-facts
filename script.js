function createFactCard(fact) {
    return `
        <div class="fact-card">
            <h3>${fact.title}</h3>
            <p>${fact.content}</p>
        </div>
    `;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayFacts() {
    const shuffledFacts = shuffleArray([...facts]);
    const factContainer = document.getElementById('factContainer');
    factContainer.innerHTML = shuffledFacts.map(createFactCard).join('');
}

document.getElementById('refresh-btn').addEventListener('click', displayFacts);

// Initial display
displayFacts();
