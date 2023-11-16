class Shape {
    constructor() {
        this.color = "";
    }

    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="120" cy="80" r="30" fill="${this.color}"/>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="130, 25 200, 150 70, 150" fill="${this.color}"/>`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="80" y="40" width="100" height="100" fill="${this.color}"/>`;
    }
}

module.exports = { Circle, Triangle, Square };
