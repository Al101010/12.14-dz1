export default class Team {
    constructor() {
        this.members = [];

        this[Symbol.iterator] = this.iterator;
    }

    iterator () {
        console.log('итератор');
        let current = 0;
        const { members } = this;

        return {
            next() {
                if (current < members.length) {
                    return {
                        value: members[current++],
                        done: false
                    }
                }

                return {
                    done: true
                }
            }
        };
    }
  
    add(item) {
        if (this.members.includes(item)) {
            throw new Error('такой персонаж уже существует в команде!');
        } else {
            this.members.push(item);
        }
    }

    addAll(...allItem) {
        allItem.forEach((item) => {
            this.members.push(item);
        });
    }

    toArray() {
        return [...this.members];
    }
}