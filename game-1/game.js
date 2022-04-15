const gameState = {};

function preload() {
  this.load.image(
    "codey",
    "https://content.codecademy.com/courses/learn-phaser/codey.png"
  );
}

function create() {
  gameState.codey = this.add.sprite(150, 200, "codey");
  // Set cursor keys here!
  gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  // Update based on keypress here!
  if (gameState.cursors.right.isDown) {
    gameState.codey.x += 5;
  }
  if (gameState.cursors.left.isDown) {
    gameState.codey.x -= 5;
  }
  if (gameState.cursors.up.isDown) {
    gameState.codey.y -= 5;
  }
  if (gameState.cursors.down.isDown) {
    gameState.codey.y += 5;
  }
}

const config = {
  type: Phaser.AUTO,
  width: 1400,
  height: 600,
  backgroundColor: "#5f2a55",
  scene: {
    preload,
    create,
    update,
  },
};

const game = new Phaser.Game(config);
