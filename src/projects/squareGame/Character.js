import React from 'react';

export default (
  <code>
    export default class Character {'{'}<br />
      constructor(position) {'{'}<br />
        this.position = position;<br />
        <br />
        this.width = 20;<br />
        this.height = 20;<br />
        this.speed = {'{'} x: 0, y: 0 };<br />
        this.maxSpeed = 30;<br />
        <br />
        this.spaceSize = 100;<br />
        this.spaceArea = {'{'}<br />
          leftX: this.position.x - this.spaceSize + this.width / 2,<br />
          rightX: this.position.x + this.spaceSize - this.width / 2,<br />
          upperY: this.position.y - this.spaceSize + this.width / 2,<br />
          lowerY: this.position.y + this.spaceSize - this.width / 2,<br />
        };<br />
      }<br />
      <br />
      draw(ctx) {'{'}<br />
        ctx.fillStyle = 'blue';<br />
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);<br />
      }<br />
      <br />
      update(deltaTime) {'{'}<br />
        this.position.x += this.speed.x / deltaTime;<br />
        this.position.y += this.speed.y / deltaTime;<br />
        this.spaceArea = {'{'}<br />
          leftX: this.position.x - this.spaceSize + this.width / 2,<br />
          rightX: this.position.x + this.spaceSize - this.width / 2,<br />
          upperY: this.position.y - this.spaceSize + this.width / 2,<br />
          lowerY: this.position.y + this.spaceSize - this.width / 2,<br />
        };<br />
      }<br />
      <br />
      moveUp() {'{'}<br />
        this.speed.y = -this.maxSpeed;<br />
      }<br />
      <br />
      moveDown() {'{'}<br />
        this.speed.y = this.maxSpeed;<br />
      }<br />
      <br />
      moveLeft() {'{'}<br />
        this.speed.x = -this.maxSpeed;<br />
      }<br />
      <br />
      moveRight() {'{'}<br />
        this.speed.x = this.maxSpeed;<br />
      }<br />
      <br />
      stopHorizontal() {'{'}<br />
        this.speed.x = 0;<br />
      }<br />
      <br />
      stopVertical() {'{'}<br />
        this.speed.y = 0;<br />
      }<br />
    }
  </code>
);
