import Character from './Character';
import Team from './Team';

const bowmanOleg = new Character('Oleg', 'Bowman');
const magicianOlga = new Character('Olga', 'Magician');
const bowmanIvan = new Character('Ivan', 'Bowman');

const team = new Team();

team.add(bowmanOleg);
team.add(magicianOlga);
team.add(bowmanIvan);

for (let character of team) {
    console.log(character)
}