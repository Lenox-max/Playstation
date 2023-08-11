// Sample game data (to simulate dynamic loading)
const games = [
    {
      "name": "Mortal Kombat 11",
      "rate": 0.5,
      "image": "https://upload.wikimedia.org/wikipedia/en/7/7e/Mortal_Kombat_11_cover_art.png"
    },
    {
      "name": "Game 2",
      "rate": 0.75,
      "image": "https://how.africa/wp-content/uploads/2023/07/EA-SPORTS-FC-24-Release-date.jpg"
    },
    {
      "name": "Game 3",
      "rate": 0.98,
      "image": "https://www.gameshub.com/wp-content/uploads/sites/5/2023/07/nba-2k24-kobe-bryant-black-mamba-.jpg"
    },
    {
      "name": "Game 4",
      "rate": 0.8,
      "image": "https://cellularkenya.co.ke/wp-content/uploads/2022/05/ImgW-15.jpeg"
    },
    {
      "name": "Game 5",
      "rate": 0.7,
      "image": "https://images.pushsquare.com/23c352ff0efd2/spike-volleyball-cover.cover_large.jpg"
    },
    {
      "name": "Game 6",
      "rate": 0.9,
      "image": "https://images-na.ssl-images-amazon.com/images/I/71pkFSwODJL._AC_UL900_SR615,900_.jpg"
    },
    {
      "name": "Game 7",
      "rate": 0.55,
      "image": "https://image.api.playstation.com/vulcan/img/rnd/202010/3016/ZeK4Mhh4mgGGTKXRuRcvH2cf.png"
    },
    {
      "name": "Game 8",
      "rate": 0.65,
      "image": "https://www.mascomintl.com/themes/images/mascom/FIFA%2021%203%20Cropped.jpg"
    },
    {
      "name": "Game 9",
      "rate": 0.75,
      "image": "https://tv-it.com/storage/products/1608523.webp"
    }
  ];

document.addEventListener("DOMContentLoaded", function () {
    // Function to create a game card element
    function createGameCard(game) {
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");
        gameCard.innerHTML = `
            <div class="game-image">
                <img src="${game.image}" alt="${game.name}">
            </div>
            <div class="game-title">${game.name}</div>
            <div class="game-rate">$${game.rate.toFixed(2)}</div>
        `;
        return gameCard;
    }

    // Load available games dynamically
    const gameListElement = document.getElementById("gameList");
    games.forEach(game => {
        const gameCard = createGameCard(game);
        gameListElement.appendChild(gameCard);
    });

    // User Interaction
    const selectedGameInfo = document.getElementById("selectedGameInfo");
    const selectedGameTitle = document.getElementById("selectedGameTitle");
    const selectedGameRate = document.getElementById("selectedGameRate");
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");
    const sessionDurationElement = document.getElementById("sessionDuration");
    const paymentAmountElement = document.getElementById("paymentAmount");
    const logoutButton = document.getElementById("logoutButton");
    let selectedGame = null;
    let sessionStartTime = null;

    gameListElement.addEventListener("click", function (event) {
        const gameCard = event.target.closest(".game-card");
        if (gameCard) {
            selectedGameTitle.textContent = gameCard.querySelector(".game-title").textContent;
            selectedGameRate.textContent = gameCard.querySelector(".game-rate").textContent;
            selectedGame = {
                name: selectedGameTitle.textContent,
                rate: parseFloat(selectedGameRate.textContent.slice(1)) // Remove the '$' sign
            };
            selectedGameInfo.style.display = "block";
        }
    });

    startButton.addEventListener("click", function () {
        if (!selectedGame) {
            alert("Please select a game.");
            return;
        }

        sessionStartTime = new Date();
        startButton.disabled = true;
        stopButton.disabled = false;
    });

    stopButton.addEventListener("click", function () {
        if (!selectedGame) {
            alert("Please select a game before starting the session.");
            return;
        }
        if (!sessionStartTime) {
            alert("Session not started. Please click Start to begin the session.");
            return;
        }

        const sessionEndTime = new Date();
        const sessionDuration = (sessionEndTime - sessionStartTime) / 1000;
        sessionDurationElement.textContent = `Session Duration: ${sessionDuration.toFixed(2)} seconds`;

        const amountToPay = (sessionDuration * selectedGame.rate).toFixed(2);
        paymentAmountElement.textContent = `Amount to Pay: $${amountToPay}`;

        startButton.disabled = false;
        stopButton.disabled = true;
        sessionStartTime = null;
    });

    logoutButton.addEventListener("click", function () {
        // Redirect to the logout page (e.g., index.html) or perform logout action
        // Replace 'index.html' with the correct path for your logout page
        window.location.href = "index.html";
    });
});
