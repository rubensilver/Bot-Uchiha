// xpSystem.js

class XPSystem {
    constructor() {
        this.level = 1;
        this.xp = 0;
        this.xpToNextLevel = 100;
    }

    addXP(amount) {
        this.xp += amount;
        this.checkLevelUp();
    }

    checkLevelUp() {
        while (this.xp >= this.xpToNextLevel) {
            this.levelUp();
        }
    }

    levelUp() {
        this.level++;
        this.xp -= this.xpToNextLevel;
        this.xpToNextLevel = Math.floor(this.xpToNextLevel * 1.5); // Increase the XP needed for the next level
        console.log(`Leveled up! You are now level ${this.level}.`);
    }

    getCurrentLevel() {
        return this.level;
    }

    getCurrentXP() {
        return this.xp;
    }

    getXPToNextLevel() {
        return this.xpToNextLevel;
    }
}

module.exports = XPSystem;