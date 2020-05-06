import React from 'react';

export default (
  <code>
    import Game from './Game.js';<br />
    <br />
    const canvas = document.getElementById('gameScreen');<br />
    const ctx = canvas.getContext('2d');<br />
    <br />
    const SCREEN_WIDTH = 800;<br />
    const SCREEN_HEIGHT = 600;<br />
    <br />
    const game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);<br />
    <br />
    canvas.width = SCREEN_WIDTH;<br />
    canvas.height = SCREEN_HEIGHT;<br />
    <br />
    let lastTime = 0;<br />
    <br />
    function gameLoop(timeStamp) {'{'}<br />
      let deltaTime = timeStamp - lastTime;<br />
      lastTime = timeStamp;<br />
      <br />
      ctx.clearRect(0, 0, 800, 600);<br />
      game.update(deltaTime);<br />
      game.draw(ctx);<br />
      <br />
      requestAnimationFrame(gameLoop);<br />
    }<br />
    <br />
    requestAnimationFrame(gameLoop);
  </code>
);
