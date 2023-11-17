Logo Generator CLI
This is a command-line application that allows users to generate custom logos in SVG format.

Prerequisites
Make sure you have Node.js installed on your machine. If not, you can download it from https://nodejs.org/.

Installation
Clone the repository:

bash
Copy code
git clone git@github.com:Srgowen/MyLogoMaker.git
Navigate to the project directory:

bash
Copy code
cd logo-generator-cli
Install dependencies:

bash
Copy code
npm install
Usage
Run the CLI by executing the following command:

bash
Copy code
node index.js
Follow the prompts to customize your logo. You'll be asked to enter text, choose a text color, select a shape (circle, triangle, or square), and specify the shape's color. Once all prompts are complete, an SVG file named logo.svg will be generated in the example directory.

After running the CLI, you can open the generated logo.svg file in a browser to view the resulting logo.

Example
Here's an example of how to run the CLI:

bash
Copy code
node index.js
Follow the prompts:

Enter text: "My Logo"
Choose text color: "blue"
Select shape: "circle"
Choose shape color: "#FF5733" or simply "red"
The CLI will generate the logo.svg file in the example directory.

SVG Output
The generated logo.svg file will contain the specified text and shape, with the chosen colors. You can open this file in a browser to view your custom logo.

Contributing
If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.