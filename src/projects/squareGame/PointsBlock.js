import React from 'react';

export default (
  <code>
    export default class PointsBlock {'{'}<br />
      constructor(gameWidth, gameHeight) {'{'}<br />
        this.gameWidth = gameWidth;<br />
        this.gameHeight = gameHeight;<br />
        <br />
        this.width = 20;<br />
        this.height = 20;<br />
        <br />
        this.position = {'{'} x: Math.random() * gameWidth, y: Math.random() * gameHeight };<br />
      }<br />
      <br />
      draw(ctx) {'{'}<br />
        ctx.fillStyle = 'Yellow';<br />
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);<br />
      }<br />
      <br />
      update() {'{'}}<br />
    }
  </code>
);
