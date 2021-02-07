const Potion = require('../lib/Potion');

test('creates a player object', () => {
    const player = new Player ('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
});

function Player(name = '') {
    this.name = name;
    this.inventory = [new Potion('health'), new Potion()];
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
  }
  
  module.exports = Player;