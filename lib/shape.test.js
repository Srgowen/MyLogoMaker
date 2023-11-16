const { Circle, Triangle, Square } = require("./shape.js");

describe("Shape Test", () => {
    test("Triangle should match the user input", () => {
        const shape = new Triangle();
        shape.setColor("purple");
        expect(shape.render()).toEqual('<polygon points="130, 25 200, 150 70, 150" fill="purple"/>');
    });

    test("Circle should match the user input", () => {
        const shape = new Circle();
        shape.setColor("yellow");
        expect(shape.render()).toEqual('<circle cx="120" cy="80" r="30" fill="yellow"/>');
    });

    test("Square should match the user input", () => {
        const shape = new Square();
        shape.setColor("orange");
        expect(shape.render()).toEqual('<rect x="80" y="40" width="100" height="100" fill="orange"/>');
    });
});
