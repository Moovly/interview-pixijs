// install pixi.js

// Select the DOM element with id: "root"

// Create a PixiJS Application

// Render out a circle graphic in the middle of the container (left aligned)

// Make the circle move horizontally across the screen

// switch direction when hitting the edge of the screen.

import * as PIXI from 'pixi.js';

const container = document.getElementById('root');

const width = 800;
const height = 600;

const app = new PIXI.Application(width, height, {backgroundColor : 0x1099bb});
container.appendChild(app.view);

const graphics = new PIXI.Graphics();
const radius = 60;

graphics.lineStyle(0);
graphics.beginFill(0xFFFF0B, 0.5);
graphics.drawCircle(radius, height /2, radius);
graphics.endFill();

app.stage.addChild(graphics);

let movingRight = true;

function toggleDirection() {
  movingRight = !movingRight;
}

function hitBound() {
  return movingRight ? graphics.x + radius * 2 >= width : graphics.x <= 0
}

function animateObject(delta) {
  graphics.x = movingRight ? graphics.x + 1 * delta : graphics.x - 1 * delta;
}

app.ticker.add(function(delta) {
  if(hitBound()) {
    toggleDirection();
  }

  animateObject(delta);
});