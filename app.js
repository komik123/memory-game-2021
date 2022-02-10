document.addEventListener('DOMContentLoaded', () => {
    // card options
    const cardArray = [{
            name: 'fries',
            img: 'src/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png',
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png',
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png',
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png',
        },
        {
            name: 'fries',
            img: 'src/images/fries.png',
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png',
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png',
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png',
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png',
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png',
        },
    ];
    cardArray.sort(() => 0.5 - Math.random())
    console.log(cardArray);
    // Math.random gives you a random number between 0 and 1. Its very good trick to improve shuffle in sort method. It returns that the firs or second value are greater than the other in that method

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    // We are searching through HTML div with class grid
    let cardsChosen = [];
    let cardsChosenIds = [];
    let cardsWon = []



    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            // We are using this to create one single card 

            card.setAttribute('src', 'src/images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
            // By this method we put our card into div.grid
            ;
        }
    };

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        // Its for getting attribute in our case its data-id. We need place to store the data, so you should create let -element
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenIds.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        // We are adding attribute to card.Id and taking from object .img
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
            // We want to make timeout to check if this two cards match to each other if not it will change 
            console.log(cardsChosenIds)
        }
    };

    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]
        if (optionOneId == optionTwoId) {
            alert('You have clicked the same image!')
            cards[optionOneId].setAttribute('src', 'src/images/blank.png')
            cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You have found a match!')
            cards[optionOneId].setAttribute('src', 'src/images/white.png')
            cards[optionTwoId].setAttribute('src', 'src/images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionOneId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
            // We dont want it could be happend
        } else {
            cards[optionOneId].setAttribute('src', 'src/images/blank.png')
            cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
            alert('Fuck you')
        }
        cardsChosen = []
        cardsChosenIds = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'congrats'
        }

        console.log(cardsChosen)
        console.log(cardsWon)

    }
    createBoard();

})