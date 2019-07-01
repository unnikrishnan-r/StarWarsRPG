$(document).ready(function () {
    var bgImageUrl =
        "./assets/images/Star_Wars_Star_Wars_The_Force_Awakens_movie_poster_Film_posters-1159543.jpg!d";

    var attackCount = 0;
    var defeatedEnemyCount = 0;


    //Declaring an object which hold properties of each character
    var starWarsChar = [{
            charNumber: 0,
            name: "Obi Wan kenobi",
            healthPoints: 200,
            attackPower: 20,
            counterAttackPower: 20,
            imageUrl: "./assets/images/wankenobi.jpeg"
        },
        {
            charNumber: 1,
            name: "Sky Walker",
            healthPoints: 100,
            attackPower: 30,
            counterAttackPower: 5,
            imageUrl: "./assets/images/anakin_skywalker_rots_6.png"
        },
        {
            charNumber: 2,
            name: "Darth Sidious",
            healthPoints: 180,
            attackPower: 15,
            counterAttackPower: 15,
            imageUrl: "./assets/images/Darth_Sidious_Max.jpg"
        },
        {
            charNumber: 3,
            name: "Darth Maul",
            healthPoints: 150,
            attackPower: 20,
            counterAttackPower: 40,
            imageUrl: "./assets/images/darthmaul.jpg"
        }
    ]

    //Only value that will be modified in the object is Healthpoints. We are storing the orihin
    var originalHealthPoints = [];
    for (var i = 0; i < 4; i++) {
        originalHealthPoints.push(starWarsChar[i].healthPoints);
    };
    /*This function defines the initial page layout
      - Row 1 - Shows each character
      - Row 2 - Selected character
      - Row 3 - Enemy Characters
      - Row 4 - Selected Enemy aka Dedender
    */
    function initialPageSetup() {


        //Dynamically creating a pagelayout
        $('body').html($('<div>', {
            class: 'container'
        }));

        //Setting background image when page loads
        $('.container').css({
            'background-image': 'url(' + bgImageUrl + ')',
            'background-repeat': 'no-repeat',
            'height' : '100vh'
        });


        //First row would hold all the character names, images and health points
        {
            $('.container').append($('<div>', {
                class: 'row justify-content-md-left',
                id: 'characterRow'
            }));

            for (var i = 0; i < 4; i++) {
                $('#characterRow').append($('<div>', {
                    class: 'col-2 character',
                    id: 'charNumber' + starWarsChar[i].charNumber
                }));
                $('#charNumber' + starWarsChar[i].charNumber).append($('<div>', {
                    class: 'charText',
                    text: starWarsChar[i].name
                }));
                $('#charNumber' + starWarsChar[i].charNumber).append($('<img>', {
                    class: 'charImage',
                    id: 'charImage' + starWarsChar[i].charNumber,
                    src: starWarsChar[i].imageUrl,
                    attr: {
                        'characterNumber': starWarsChar[i].charNumber
                    }

                }));
                $('#charNumber' + starWarsChar[i].charNumber).append($('<div>', {
                    class: 'charHealthPoints',
                    text: starWarsChar[i].healthPoints
                }));
                var currentImage = $('#charImage' + starWarsChar[i].charNumber);
                currentImage.wrap("<a href='#'></a>");
            }

            // Setting up on click event since these are dynamically created classes
            $('.charImage').on('click', function () {
                // console.log("clicked a char");
                var clickedChar = $(this).attr("characterNumber");
                selectedChar(clickedChar);
            });
        }

        //Second row would hold the selected character
        {
            $('.container').append($('<div>', {
                class: 'row justify-content-md-left',
                id: 'yourCharacter'
            }));

            $('#yourCharacter').append($('<div>', {
                class: 'col-12 sectionHeadings',
                text: 'Your Character'
            }));
        }

        //Third row would hold the enemy characters
        {
            $('.container').append($('<div>', {
                class: 'row justify-content-md-left',
                id: 'enemyCharacters'
            }));

            $('#enemyCharacters').append($('<div>', {
                class: 'col-12 sectionHeadings',
                text: 'Enemies Available to attack'
            }));
        }

        //Fourth row would hold the defender characters
        {
            $('.container').append($('<div>', {
                class: 'row justify-content-md-left',
                id: 'defenderCharacter'
            }));

            $('#defenderCharacter').append($('<div>', {
                class: 'col-12 sectionHeadings',
                text: 'Defender'
            }));
        }

        //Fifth row would hold the Game messages
        {
            $('.container').append($('<div>', {
                class: 'row justify-content-md-left',
                id: 'gameMessages'
            }));

            $('#gameMessages').append($('<span>', {
                class: 'col-12',
                id: 'gameMessageText'
            }));
        }
    };  

    /* When a character is clicked below functioni is invoked and it does the below
       - Moves the selected character to Row 2
       - Moves rest of the characters to Row 3 (Enemies)
       - Removes first row
    */
    function selectedChar(clickedChar) {
        {
            $('#yourCharacter').append($('<div>', {
                class: 'col col-2 character',
                id: 'yourCharacter' + starWarsChar[clickedChar].charNumber
            }));

            $('#yourCharacter' + starWarsChar[clickedChar].charNumber).append($('<div>', {
                class: 'charText',
                text: starWarsChar[clickedChar].name
            }));
            $('#yourCharacter' + starWarsChar[clickedChar].charNumber).append($('<img>', {
                class: 'charImage',
                id: 'yourCharImage' + starWarsChar[clickedChar].charNumber,
                src: starWarsChar[clickedChar].imageUrl,
                attr: {
                    'characterNumber': starWarsChar[clickedChar].charNumber
                }
            }));
            $('#yourCharacter' + starWarsChar[clickedChar].charNumber).append($('<div>', {
                class: 'charHealthPoints',
                text: starWarsChar[clickedChar].healthPoints
            }));
        }


        {
            for (var i = 0; i < 4; i++) {

                if (i != clickedChar) {

                    $('#enemyCharacters').append($('<div>', {
                        class: 'col-2 enemyCharacter',
                        id: 'enemyCharNumber' + starWarsChar[i].charNumber
                    }));
                    $('#enemyCharNumber' + starWarsChar[i].charNumber).append($('<div>', {
                        class: 'charText',
                        text: starWarsChar[i].name
                    }));
                    $('#enemyCharNumber' + starWarsChar[i].charNumber).append($('<img>', {
                        id: 'enemyCharImage' + starWarsChar[i].charNumber,
                        src: starWarsChar[i].imageUrl,
                        class: 'enemyImages',
                        attr: {
                            'enemycharacterNumber': starWarsChar[i].charNumber
                        }
                    }));
                    $('#enemyCharNumber' + starWarsChar[i].charNumber).append($('<div>', {
                        class: 'enemyHealthPoints',
                        text: starWarsChar[i].healthPoints
                    }));

                    var currentImage = $('#enemyCharImage' + starWarsChar[i].charNumber);
                    currentImage.wrap("<a href='#'></a>");
                }
            }
        }

        //Removes the character row and also setsup click event for enemy images
        {
            $('#characterRow').remove();
            $('.enemyImages').on('click', function () {
                var clickedChar = $(this).attr("enemycharacterNumber");
                selectDefender(clickedChar);
            });
        }

    };

    /* When a enemy is clicked below function is invoked and it does the below ...
       - Moves the selected enemy to Row 4 (Defender)
       - Removes enemy from Row 3 (Enemies)
       - Makes rest of enemies unlickable
       - Setup attack button
       - Turn off clicakility on other enemy images
    */
    function selectDefender(clickedChar) {
        // console.log("Starting selectDefender function");
        {
            $('#gameMessageText').text('');

            $('#defenderCharacter').append($('<div>', {
                class: 'col col-2 defenderCharacter',
                id: 'defenderCharacter' + starWarsChar[clickedChar].charNumber
            }));

            $('#defenderCharacter' + starWarsChar[clickedChar].charNumber).append($('<div>', {
                class: 'defenderText',
                text: starWarsChar[clickedChar].name
            }));
            $('#defenderCharacter' + starWarsChar[clickedChar].charNumber).append($('<img>', {
                class: 'defenderImage',
                id: 'defenderCharImage' + starWarsChar[clickedChar].charNumber,
                src: starWarsChar[clickedChar].imageUrl,
                attr: {
                    'defendercharacterNumber': starWarsChar[clickedChar].charNumber
                }

            }));
            $('#defenderCharacter' + starWarsChar[clickedChar].charNumber).append($('<div>', {
                class: 'defenderHealthPoints',
                text: starWarsChar[clickedChar].healthPoints
            }));
        }

        {
            // console.log(starWarsChar[clickedChar].charNumber);
            $('#enemyCharNumber' + starWarsChar[clickedChar].charNumber).remove();
        }

        {
            if (defeatedEnemyCount == 0) {
                $('.container').append($('<div>', {
                    class: 'row justify-content-md-left',
                    id: 'attackButton'
                }));

                $('#attackButton').append($('<div>', {
                    class: 'col-xs-3 btn btn-primary btn-lg mt-3',
                    text: 'Attack Button',
                    id: 'attackBtn'
                }));

                {
                    $('#attackBtn').on('click', function () {
                        processAttack($('.charImage').attr('characternumber'), $('.defenderImage').attr('defendercharacterNumber'));
                    })
                }
            }
        }
        // Tur off clickability for enemyImages while game in progress
        $('.enemyImages').off('click');
        // console.log("End of selectDefender function");

    };

    /* Processes the attack functionality
        - If no defender is available, throw a message
        - Maintain health points of player and defender
        - Increase players attack power in multiples of the attack count
        - If player lost invoke - processPlayerLoss()
        - If defender lost invoke - processDefenderLoss()
    */
    function processAttack(playerCharNum, defenderCharNum) {
        var gameMessage1 = '';
        var gameMessage2 = '';
        if (defenderCharNum === undefined) {
            $('#gameMessageText').text("Choose a defender first");

        } else {
            attackCount++;
            starWarsChar[playerCharNum].healthPoints -= starWarsChar[defenderCharNum].counterAttackPower;
            starWarsChar[defenderCharNum].healthPoints -= starWarsChar[playerCharNum].attackPower * attackCount;

            // console.log('***************************');
            // console.log("Attack Count : " + attackCount);
            // console.log(starWarsChar[playerCharNum].name + " : " + starWarsChar[playerCharNum].healthPoints + " ," + starWarsChar[playerCharNum].attackPower * attackCount);
            // console.log(starWarsChar[defenderCharNum].name + " : " + starWarsChar[defenderCharNum].healthPoints);

            gameMessage1 = "You attacked " + starWarsChar[defenderCharNum].name + " for " + starWarsChar[playerCharNum].attackPower * attackCount + " damage.";
            gameMessage2 = starWarsChar[defenderCharNum].name + " attacked you back for " + starWarsChar[defenderCharNum].counterAttackPower + " damage.";

            $('.charHealthPoints').text(starWarsChar[playerCharNum].healthPoints);
            $('.defenderHealthPoints').text(starWarsChar[defenderCharNum].healthPoints);
            $('#gameMessageText').text(gameMessage1 + '\n' + gameMessage2);

            if (starWarsChar[playerCharNum].healthPoints <= 0) {
                processPlayerLoss(playerCharNum);
            } else if (starWarsChar[defenderCharNum].healthPoints <= 0) {
                processDefenderLoss(defenderCharNum);
            }
        }
    };

    /* Defender Loss
       - Show message on screen to choose next enemy
       - If all 3 enemies defeated, show "you won" message and setup restart
       - If enemies are remaining, setup click event on enemy images
    */
    function processDefenderLoss(defenderCharNum) {
        defeatedEnemyCount++;
        // console.log("defeated count: " +defeatedEnemyCount);
        if (defeatedEnemyCount < 3) {
            $('#gameMessageText').text("You have defeated " + starWarsChar[defenderCharNum].name + ". Choose another enemy to continue");
            $('#defenderCharacter' + defenderCharNum).remove();

            $('.enemyImages').on('click', function () {
                var clickedChar = $(this).attr("enemycharacterNumber");
                // console.log('Selected defender: ' + starWarsChar[clickedChar].name);
                selectDefender(clickedChar);
            });

        } else {
            $('#gameMessageText').text("You won !!!! GAME OVER!!!");
            $('#defenderCharacter' + defenderCharNum).remove();
            setupRestart();

        }
        // console.log("End of processDefenderLoss");

    };

    // Player Loss - Show message and setup restart
    function processPlayerLoss(playerCharNum) {
        $('#gameMessageText').text("You lost, GAME OVER!!!");
        setupRestart();
    };

    /* Setting up restart
        - Replace attack button with Restart
        - Set up click event on restart button
    */
    function setupRestart() {
        $('#attackButton').remove();
        // console.log("Setting up Restart");

        {
            $('.container').append($('<div>', {
                class: 'row justify-content-md-left',
                id: 'restartButton'
            }));

            $('#restartButton').append($('<div>', {
                class: 'col-xs-3 btn btn-primary btn-lg mt-3',
                text: 'Restart',
                id: 'restartBtn'

            }));

            $('#restartBtn').on('click', function () {
                // console.log("Restarting Game");
                restartGame();
            })

        }
    };

    /* Restarting the game -
        - Blank on game messages
        - Remove restart button
        - reinitialize variables and original health counts
        - Invoke fresh page again
    */
    function restartGame() {
        $('#restartButton').remove();
        $('#gameMessageText').text('');
        attackCount = 0;
        defeatedEnemyCount = 0;
        for (var i = 0; i < 4; i++) {
            starWarsChar[i].healthPoints = originalHealthPoints[i];
        }

        initialPageSetup();

    };

    initialPageSetup();
});