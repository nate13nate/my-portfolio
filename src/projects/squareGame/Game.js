import React from 'react';

export default (
  <code>
    import Character from './Character.js';<br />
    import Enemy from './Enemy.js';<br />
    import PointsBlock from './PointsBlock.js';<br />
    import InputHandler from './InputHandler.js';<br />
    <br />
    export default class Game {'{'}<br />
      constructor(gameWidth, gameHeight) {'{'}<br />
        this.points = 0;<br />
        this.gameWidth = gameWidth;<br />
        this.gameHeight = gameHeight;<br />
        <br />
        this.characterWidth = new Character({'{'} x: 0, y: 0 }).width;<br />
        this.characterHeight = new Character({'{'} x: 0, y: 0 }).height;<br />
        this.character = new Character({'{'} x: gameWidth / 2 - this.characterWidth / 2, y: gameHeight / 2 - this.characterHeight / 2});<br />
        <br />
        this.enemy1 = new Enemy(gameWidth, gameHeight);<br />
        this.enemy2 = new Enemy(gameWidth, gameHeight);<br />
        this.enemy3 = new Enemy(gameWidth, gameHeight);<br />
        this.enemy4 = new Enemy(gameWidth, gameHeight);<br />
        this.enemy5 = new Enemy(gameWidth, gameHeight);<br />
        <br />
        this.enemies = [ this.enemy1, this.enemy2, this.enemy3, this.enemy4, this.enemy5 ];<br />
        <br />
        this.pointsBlock = new PointsBlock(gameWidth, gameHeight);<br />
        <br />
        this.inputHandler = new InputHandler(this.character, this.enemies);<br />
        <br />
        this.elementsArray = [<br />
          this.character,<br />
          this.enemy1,<br />
          this.enemy2,<br />
          this.enemy3,<br />
          this.enemy4,<br />
          this.enemy5,<br />
          this.pointsBlock,<br />
        ];<br />
      }<br />
      <br />
      draw(ctx) {'{'}<br />
        ctx.fillStyle = 'black';<br />
        ctx.fillText(this.points, 10, 10);<br />
        this.elementsArray.forEach((element) => {'{'}<br />
          element.draw(ctx);<br />
        });<br />
      }<br />
      <br />
      update(deltaTime) {'{'}<br />
        this.elementsArray.forEach((element) => {'{'}<br />
          element.update(deltaTime, this.character, this.increasePoints);<br />
        });<br />
        <br />
        this.enemies.forEach((enemy) => {'{'}<br />
          if (enemy.position.x + enemy.width > this.character.position.x && enemy.position.x {'<'} this.character.position.x + this.characterWidth<br />
            && enemy.position.y + enemy.height > this.character.position.y && enemy.position.y {'<'} this.character.position.y + this.characterHeight) {'{'}<br />
            this.points -= 1;<br />
            enemy.position = {'{'} x: Math.random() * this.gameWidth, y: Math.random() * this.gameHeight }<br />
          }<br />
        });<br />
        <br />
        if (this.pointsBlock.position.x + this.pointsBlock.width > this.character.position.x && this.pointsBlock.position.x {'<'} this.character.position.x + this.character.width<br />
          && this.pointsBlock.position.y + this.pointsBlock.height > this.character.position.y && this.pointsBlock.position.y {'<'} this.character.position.y + this.character.height) {'{'}<br />
          this.points += 1;<br />
          this.pointsBlock.position = {'{'} x: Math.random() * this.gameWidth, y: Math.random() * this.gameHeight }<br />
        }<br />
      }<br />
    }
  </code>
);
