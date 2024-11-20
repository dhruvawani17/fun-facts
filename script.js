// facts array
const facts = [
    { title: "Human Body", content: "Your nose can remember 50,000 different scents, and smell is the sense most closely linked to memory." },
    { title: "Space", content: "One day on Venus is longer than one year on Venus. Venus takes 243 Earth days to rotate on its axis but only 225 Earth days to orbit the Sun." },
    { title: "Animal Kingdom", content: "Honeybees can recognize human faces. They learn faces the same way we do, using the configuration of features." },
    { title: "Ocean", content: "The Pacific Ocean is so large that all of Earth's continents could fit into it with room to spare." },
    { title: "Technology", content: "The first computer mouse was made of wood. It was invented by Doug Engelbart in the 1960s and was made from a wooden shell with two metal wheels." },
    { title: "Desert Life", content: "The Sahara Desert was once a lush grassland with lakes and abundant wildlife about 10,000 years ago." },
    { title: "Human Eyes", content: "Your eyes can distinguish approximately 10 million different colors." },
    { title: "Lightning Facts", content: "A single bolt of lightning can heat the air around it to temperatures five times hotter than the sun's surface." },
    { title: "Penguin Proposal", content: "Male penguins propose to female penguins by presenting them with a pebble." },
    { title: "Brain Power", content: "Your brain uses 20% of your body's total energy every day." },
    { title: "Plant Communication", content: "Trees can communicate with each other through an underground network of fungi called the 'Wood Wide Web'." },
    { title: "Heart Facts", content: "Your heart beats about 115,000 times each day, pumping approximately 2,000 gallons of blood." },
    { title: "Ancient Rome", content: "Ancient Romans used crushed mouse brains as toothpaste." },
    { title: "DNA Facts", content: "If you uncoiled all the DNA in your body, it would stretch out to about 10 billion miles." },
    { title: "Ocean Mystery", content: "More than 80% of the ocean has never been mapped, explored, or even seen by humans." },
    { title: "Honey Power", content: "Honey is the only food that doesn't spoil. Archaeologists have found 3000-year-old honey in ancient Egyptian tombs." },
    { title: "Animal Sleep", content: "Dolphins sleep with one half of their brain at a time, keeping one eye open to watch for predators." },
    { title: "Language Facts", content: "A new word is added to the English dictionary every two hours." },
    { title: "Space Time", content: "One year on Mercury is just 88 Earth days long." },
    { title: "Animal Strength", content: "Ants can lift up to 50 times their own body weight and pull 30 times their own body weight." }
];

// Function to shuffle facts
function shuffleFacts(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

// Function to create and display a single fact card
function displayFactCard(fact) {
    return `
        <div class="fact-card">
            <div class="fact-card-inner">
                <div class="fact-card-front">
                    <h3>${fact.title}</h3>
                    <p>${fact.content}<p>
                
                </div>
                <div class="fact-card-back">
                    <p>${fact.content}</p>
                </div>
            </div>
        </div>
    `;
}

// Function to handle card display and flipping
function showNewFact() {
    // Shuffle facts and get a random one
    const shuffledFacts = shuffleFacts(facts);
    const fact = shuffledFacts[0];

    // Get the container to display the fact card
    const factContainer = document.getElementById('factContainer');

    // Clear the existing content
    factContainer.innerHTML = displayFactCard(fact);

    // Select the fact card element
    const factCard = document.querySelector('.fact-card');

    // Add event listener to flip the card on click
    factCard.addEventListener('click', function() {
        factCard.querySelector('.fact-card-inner').classList.toggle('flipped');
    });
}

// Refresh button to display a new fact
document.getElementById('refresh-btn').addEventListener('click', showNewFact);

// Display the first fact when the page loads
showNewFact();
