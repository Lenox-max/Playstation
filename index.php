<?php
session_start();
if (!isset($_SESSION["user"])) {
   header("Location: login.php");
}
?>
<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>User Dashboard</title>
</head>
<body>
    <div class="container">
        <h1>Welcome to Dashboard</h1>
        <a href="logout.php" class="btn btn-warning">Logout</a>
    </div>
</body>
</html> -->

<!DOCTYPE html>
<html>
<head>
    <title>PlayStation Studios - User Page</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>Welcome to PlayStation Studios</h2>
        <button><a href="admin.html">Admin</a></button>
        <div class="game-list" id="gameList">
            <!-- Games will be dynamically loaded here -->
        </div>

        <div class="user-interaction">
            <h3>Select a Game</h3>
            <div class="game-info" id="selectedGameInfo">
                <div class="game-image">
                    <!-- Selected game image will be displayed here -->
                </div>
                <div class="game-details">
                    <div class="game-title" id="selectedGameTitle"></div>
                    <div class="game-rate" id="selectedGameRate"></div>
                </div>
            </div>
            <button id="startButton">Start</button>
            <button id="stopButton">Stop</button>
            <div id="sessionDuration">Session Duration: 0 seconds</div>
            <div id="paymentAmount">Amount to Pay: $0.00</div>
            <button><a href="logout.php" class="btn btn-warning">Logout</a></button>
        </div>
    </div>

    <script src="app.js"></script>
</body>
</html>