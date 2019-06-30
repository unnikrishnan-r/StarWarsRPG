$(document).ready(function () {
    var bgImageUrl =
        "./assets/images/Star_Wars_Star_Wars_The_Force_Awakens_movie_poster_Film_posters-1159543.jpg!d";

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

    /*This function defines the initial page layout
      - Row 1 - Shows each character
      - Row 2 - Selected character
      - Row 3 - Enemy Characters
      - Row 4 - Selected Enemy aka Dedender
    */
    function initialPageSetup() {

        //Setting background image when page loads
        // $('body').css({
        //     'background-image': 'url(' + bgImageUrl + ')',
        //     'background-repeat': 'no-repeat'
        // });

        //Dynamically creating a pagelayout
        $('body').html($('<div>', {
            class: 'container'
        }));

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
    }

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
                        class: 'col-2 character',
                        id: 'enemyCharNumber' + starWarsChar[i].charNumber
                    }));
                    $('#enemyCharNumber' + starWarsChar[i].charNumber).append($('<div>', {
                        class: 'charText',
                        text: starWarsChar[i].name
                    }));
                    $('#enemyCharNumber' + starWarsChar[i].charNumber).append($('<img>', {
                        class: 'enemyImages',
                        id: 'enemyCharImage' + starWarsChar[i].charNumber,
                        src: starWarsChar[i].imageUrl
                    }));
                    $('#enemyCharNumber' + starWarsChar[i].charNumber).append($('<div>', {
                        class: 'charHealthPoints',
                        text: starWarsChar[i].healthPoints
                    }));

                    var currentImage = $('#enemyCharImage' + starWarsChar[i].charNumber);
                    currentImage.wrap("<a href='#'></a>");

                }


                $('#characterRow').remove();
            }
        }
    }

    initialPageSetup();
    $('.charImage').on('click', function () {
        // console.log("clicked a char");
        var clickedChar = $(this).attr("characterNumber");
        console.log(clickedChar);
        selectedChar(clickedChar);
        console.log('Checking if accessing charImage class is working ');
        console.log($('.charImage'));
        console.log('Checking if accessing enemyCharImagx class is working ');
        console.log($('.enemyImages'));
    });

    $('.enemyImages').on('click', function () {
        console.log("test")
    });


});
