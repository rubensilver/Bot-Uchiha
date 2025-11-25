// xp.js

// Optimized XP System

class XPSystem {
    constructor() {
        this.xp = 0;
        this.level = 1;
        this.xpToNextLevel = 100;
    }

    addXP(amount) {
        this.xp += amount;
        this.checkLevelUp();
    }

    checkLevelUp() {
        while (this.xp >= this.xpToNextLevel) {
            this.xp -= this.xpToNextLevel;
            this.level++;
            this.xpToNextLevel = Math.floor(this.xpToNextLevel * 1.5); // Increase XP needed for next level
            console.log(`Level Up! You are now level ${this.level}`);
        }
    }

    getXP() {
        return this.xp;
    }

    getLevel() {
        return this.level;
    }
}

module.exports = XPSystem;