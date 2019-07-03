# StarWarsRPG
Star Wars RPG game built with Jquery, Bootstrap, some custom CSS and HTML

## Game Rules
There are 4 characters for the player to choose from. Each character has Health Points, Attack Power and Counter Attack Power.
Only the health points are revealed to the player upfront.

Once a character is chosen, the remaining characters become enemies. The goal of the game is to defeat every enemy before the player's health points run out.

### Attack and Counter Attack
The player moves the game forward by attacking, to which the enemy immediately counter attacks.
When the player attacks: The health points of the enemy goes down by the "Current Attacking Power" of the player.
Similarly when the enemy attacks: The health points of the player goes down by the "Counter Attack Power" of the enemy.

The "Counter Attack Power" of the enemy is always constant, while the "Current Attacking Power" increases by multiples of the "Attacking Power".

Below is an illustration of the scenario:
| Player |Attack Count|Original HP| Attacking Power  |Counter Attacking Power | Current Attacking Power|Current HP|
|--|--|--|--|--|--|-
| Sky Walker | 1 |100|15|20|15|85|
|Darth Sidious|1| 120|15|15|15|105|
|Sky Walker  | 2 |100|15|20|30|70|
|Darth Sidious|2| 120|15|15|15|75|
|Sky Walker | 3|100|15|20|45|55|
|Darth Sidious|3| 120|15|15|15|30|
|Sky Walker | 4|100|15|20|60|40|
|Darth Sidious|4| 120|15|15|15|-30|

Though Dark Sidious started with a higher HP, Sky Walker was able to defeat him due to attack power multiplying per attack.
For next enemy, Sky Walker would start with an attacking power of 120!

# Logical Flow of the program

The application works primarily on jquery and dynamically creates every html element. The html page has no place holder tags defined.

Using [Bootstrap's](https://getbootstrap.com/docs/4.3/layout/grid/) grid system, the page is divided in to 4 rows:

 **1. Character Row**
     Shows all available characters at the beginning of the game.
 **2. Your Character**
      Once player chooses a character, this row is populated
 **3. Enemies**
	 Once a player chooses a character, rest of the characters become enemies
 **4. Defender**
	 The player can then choose an enemy to start the game.

**Functions Used:**  
 1. **initialPageSetup** : Populates the initial page, with background image, character's and place holders for rows 2-5
 2. **selectedChar** : This function accepts the character number (clicked by the user) as an input and populates rows 2-3. It also removes row 1 for rest of the game.
 3. **selectDefender** : This function is similar to selectedChar(), with the difference that it chooses an enemy to populate row 4. Note that this function also disables clicking of remaining enemies till the current defender is defeated
 4. **processAttack** : This function is responsible to calculate the current attacking power and health points of the player and defender. If player losses the function processPlayerLoss() is invoked ; if defender losses the function processDefenderLoss is invoked.
 5. **processDefenderLoss & processPlayerLoss** These functions are similar in nature. They display appropriate game messages on who won, and provide instructions to either restart the game (player Loss) or Choose next enemy (defender loss). If all enemies have been defeated then the player has won the game.
 6. **setupRestart & restartGame**: These functions are responsible for restarting the game.

**Objects Used**
The game is primarily based on available characters and their properties like Name, Health Points, Attacking Power, Counter Attacking Power.
Along with above attributes every character is assigned a number and image url. All of these are stored as an arracy with each character being a element in the array which are also objects.

    var starWarsChar = [{
    charNumber: 0,
    name: "Obi Wan kenobi",
    healthPoints: 200,
    attackPower: 20,
    counterAttackPower: 20,
    imageUrl: "./assets/images/wankenobi.jpeg"
    }