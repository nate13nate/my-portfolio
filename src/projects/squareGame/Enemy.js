import React from 'react';

export default (
  <code>
    export default class Enemy {'{'}<br />
      constructor(gameWidth, gameHeight) {'{'}<br />
        this.position = {'{'} x: Math.random() * gameWidth, y: Math.random() * gameHeight };<br />
        <br />
        this.width = 15;<br />
        this.height = 15;<br />
        this.speed = {'{'} x: 0, y: 0 };<br />
        this.maxSpeed = 25;<br />
      }<br />
      <br />
      draw(ctx) {'{'}<br />
          ctx.fillStyle = 'green';<br />
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);<br />
      }<br />
      <br />
      update(deltaTime, character) {'{'}<br />
        this.speed = {'{'} x: 0, y: 0 };<br />
        if (this.position.x > character.position.x) this.speed.x = -this.maxSpeed;<br />
        if (this.position.x {'<'} character.position.x) this.speed.x = this.maxSpeed;<br />
        if (this.position.y > character.position.y) this.speed.y = -this.maxSpeed;<br />
        if (this.position.y {'<'} character.position.y) this.speed.y = this.maxSpeed;<br />
        <br />
        this.position.x += this.speed.x / deltaTime;<br />
        this.position.y += this.speed.y / deltaTime;<br />
      }<br />
      <br />
      hopBack(character) {'{'}<br />
        if (character.position.x > this.position.x) this.position.x -= 100;<br />
        if (character.position.x {'<'} this.position.x) this.position.x += 100;<br />
        if (character.position.y > this.position.y) this.position.y -= 100;<br />
        if (character.position.y {'<'} this.position.y) this.position.y += 100;<br />
      }<br />
    }
  </code>
);
