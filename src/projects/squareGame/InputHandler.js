import React from 'react';

export default (
  <code>
    export default class InputHandler {'{'}<br />
      constructor(character, enemies) {'{'}<br />
        document.addEventListener('keydown', (event) => {'{'}<br />
          switch(event.keyCode) {'{'}<br />
            case 32:<br />
              enemies.forEach((enemy) => {'{'}<br />
                if (enemy.position.x > character.spaceArea.leftX && enemy.position.x {'<'} character.spaceArea.rightX<br />
                  && enemy.position.y {'<'} character.spaceArea.lowerY && enemy.position.y > character.spaceArea.upperY) {'{'}<br />
                  enemy.hopBack(character);<br />
                }<br />
              });<br />
              break;<br />
            case 37:<br />
              character.moveLeft();<br />
              break;<br />
            case 38:<br />
              character.moveUp();<br />
              break;<br />
            case 39:<br />
              character.moveRight();<br />
              break;<br />
            case 40:<br />
              character.moveDown();<br />
              break;<br />
          }<br />
        });<br />
        <br />
        document.addEventListener('keyup', (event) => {'{'}<br />
          switch(event.keyCode) {'{'}<br />
            case 37:<br />
              if (character.speed.x {'<'} 0) character.stopHorizontal();<br />
              break;<br />
            case 38:<br />
              if (character.speed.y {'<'} 0) character.stopVertical();<br />
              break;<br />
            case 39:<br />
              if (character.speed.x > 0) character.stopHorizontal();<br />
              break;<br />
            case 40:<br />
              if (character.speed.y > 0) character.stopVertical();<br />
              break;<br />
          }<br />
        });<br />
      }<br />
    }
  </code>
);
