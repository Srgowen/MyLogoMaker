const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { Circle, Triangle, Square } = require("./shape.js");

function CLI() {
    inquirer.prompt([
        {
            type: "list",
            name: "shapeType",
            message: "What kind of shape would you like?.",
            choices: ["circle", "triangle", "square"]
        },
        {
            type: "input",
            name: "shapeColor",
            message: "What color would you like your logo to be?"
        },
        {
            type: "input",
            name: "text",
            message: "What do you want your logo to say?",
            validate: () => true,
        },
        {
            type: "input",
            name: "textColor",
            message: "Pick a color for your font."
        }

    ]).then(({ shapeType, shapeColor, text, textColor }) => {
        let newShape;
        switch (shapeType) {
            case "circle":
                newShape = new Circle();
                break;
            case "triangle":
                newShape = new Triangle();
                break;
            case "square":
                newShape = new Square();
                break;
            default:
                newShape = new Circle();
                break;
        }
        newShape.setColor(shapeColor);

        writeFile("example/logo.svg", generateSVG(newShape, text, textColor));
    });
}

function generateSVG(newShape, text, textColor) {
    return `<svg width="1000" height="1000" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${newShape.render()} 
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;
}

module.exports = CLI;
