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
        return `<circle cx="120" cy="80" r="90" fill="${this.color}"/>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="390, 75 600, 450 210, 450" fill="${this.color}"/>`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="240" y="120" width="300" height="300" fill="${this.color}"/>`;
    }
}

module.exports = { Circle, Triangle, Square };
