import Character from '../Character'

test('should myFunction: Bowman', () => {
    const bowmanOleg = {name: 'Oleg', health: 100, level: 1, type: 'Bowman', attack: 25, defence: 25};
    const result = new Character('Oleg', 'Bowman');
    expect(result).toEqual(bowmanOleg);
  });

test('should myFunction: !Bowman', () => {
    expect(() => new Character('')).toThrow("10 >= name >= 2");
  });


test('should myFunction: Swordsman', () => {
    const swordsmanOleg = {name: 'Oleg', health: 100, level: 1, type: 'Swordsman', attack: 40, defence: 10};
    const result = new Character('Oleg', 'Swordsman');
    expect(result).toEqual(swordsmanOleg);
  });

test('should myFunction: !Swordsman', () => {
    expect(() => new Character('O', 'Swordsman')).toThrow("10 >= name >= 2");
    expect(() => new Character('Oleggggggggggggggg', 'Swordsman')).toThrow("10 >= name >= 2");
  });


test('should myFunction: Magician', () => {
    const magicianOleg = {name: 'Oleg', health: 100, level: 1, type: 'Magician', attack: 10, defence: 40};
    const result = new Character('Oleg', 'Magician');
    expect(result).toEqual(magicianOleg);
  });

test('should myFunction: !Magician', () => {
    expect(() => new Character('O', 'Magician')).toThrow("10 >= name >= 2");
    expect(() => new Character('Oleggggggggggggggg', 'Magician')).toThrow("10 >= name >= 2");
  });


  test('should myFunction: Undead', () => {
    const undeadOleg = {name: 'Oleg', health: 100, level: 1, type: 'Undead', attack: 25, defence: 25};
    const result = new Character('Oleg', 'Undead');
    expect(result).toEqual(undeadOleg);
  });

test('should myFunction: !Undead', () => {
    expect(() => new Character('O', 'Undead')).toThrow("10 >= name >= 2");
    expect(() => new Character('Oleggggggggggggggg', 'Undead')).toThrow("10 >= name >= 2");
  });


  test('should myFunction: Zombie', () => {
    const zombieOleg = {name: 'Oleg', health: 100, level: 1, type: 'Zombie', attack: 40, defence: 10};
    const result = new Character('Oleg', 'Zombie');
    expect(result).toEqual(zombieOleg);
  });

test('should myFunction: !Zombie', () => {
    expect(() => new Character('O', 'Zombie')).toThrow("10 >= name >= 2");
    expect(() => new Character('Oleggggggggggggggg', 'Zombie')).toThrow("10 >= name >= 2");
  });


test('should myFunction: Daemon', () => {
    const daemonOleg = {name: 'Oleg', health: 100, level: 1, type: 'Daemon', attack: 10, defence: 40};
    const result = new Character('Oleg', 'Daemon');
    expect(result).toEqual(daemonOleg);
  });

test('should myFunction: !Daemon', () => {
    expect(() => new Character('O', 'Daemon')).toThrow("10 >= name >= 2");
    expect(() => new Character('Oleggggggggggggggg', 'Daemon')).toThrow("10 >= name >= 2");
  });


test('should myFunction: !Type', () => {
    expect(() => new Character('Oleg', '')).toThrow("one of the types: Bowman, Swordsman, Magician, Daemon, Undead, Zombie");
  });
