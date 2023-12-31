const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
      this.field = field;
      this.playerPosition = { x: 0, y: 0 }; // Starting position
      this.hatPosition = this.findHatPosition();
      this.inGame = true;
    }
  
    findHatPosition() {
      for (let y = 0; y < this.field.length; y++) {
        for (let x = 0; x < this.field[y].length; x++) {
          if (this.field[y][x] === '^') {
            return { x, y };
          }
        }
      }
      return null; // Handle the case where hat is not found
    }
  
    print() {
      for (let row of this.field) {
        console.log(row.join(''));
      }
    }
  
    move(direction) {
      const newPosition = { ...this.playerPosition };
  
      switch (direction) {
        case 'up':
          newPosition.y -= 1;
          break;
        case 'down':
          newPosition.y += 1;
          break;
        case 'left':
          newPosition.x -= 1;
          break;
        case 'right':
          newPosition.x += 1;
          break;
        default:
          console.log('Invalid move!');
          return;
      }
  
      if (this.isOutsideField(newPosition) || this.isHole(newPosition)) {
        console.log('Game Over!');
        this.inGame = false;
      } else if (this.isHat(newPosition)) {
        console.log('Congratulations! You found your hat!');
        this.inGame = false;
      } else {
        this.field[this.playerPosition.y][this.playerPosition.x] = '*';
        this.playerPosition = newPosition;
        this.print();
      }
    }
  
    isOutsideField(position) {
      return (
        position.x < 0 ||
        position.y < 0 ||
        position.x >= this.field[0].length ||
        position.y >= this.field.length
      );
    }
  
    isHole(position) {
      return this.field[position.y][position.x] === 'O';
    }
  
    isHat(position) {
      return this.field[position.y][position.x] === '^';
    }
  
    static generateField(height, width, holePercentage) {
      // Implementation to generate a randomized field
      // with specified height, width, and holePercentage
    }
  }
  
  // Example usage:
  const Field = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
  
  myField.print();
  myField.move('right');
  
  class Field {
    // ... (previous code)
  
    static generateField(height, width, holePercentage) {
      const field = [];
  
      for (let y = 0; y < height; y++) {
        const row = [];
        for (let x = 0; x < width; x++) {
          const isHole = Math.random() < holePercentage / 100;
          row.push(isHole ? 'O' : '░');
        }
        field.push(row);
      }
  
      // Place the hat randomly
      const hatY = Math.floor(Math.random() * height);
      const hatX = Math.floor(Math.random() * width);
      field[hatY][hatX] = '^';
  
      // Ensure the player starts in an open space
      field[0][0] = '*';
  
      return field;
    }
  }
  
  // Example usage to generate a new field:
  const newField = Field.generateField(4, 5, 20);
  const myField = new Field(newField);
  myField.print();
