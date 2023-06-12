// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "print-cleaner" is now active!');

	let disposable = vscode.commands.registerCommand('print-cleaner.removePrintStatement', function () {
		const pythonFiles = vscode.workspace.findFiles('**/*.py', '**/node_modules/**', 1000);
		pythonFiles.then((files) => {
			files.forEach((fileUri) => {
				const filePath = fileUri.fsPath;
				const fileContent = fs.readFileSync(filePath, 'utf-8');
				let lines = fileContent.split("\n");
				
				for (let i = 1; i < lines.length; i++) {
					const currentLine = lines[i];
					const previousLine = lines[i - 1];
					
					if (!previousLine.includes("#required") && currentLine.includes("print(")) {
						const cleanedLine = currentLine.replace("print(", `# print(`);
						lines[i] = cleanedLine;
					}
				}
				
				const cleanedContent = lines.join("\n");
				fs.writeFileSync(filePath, cleanedContent, 'utf-8');
			});
		});
		
		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World from Print Cleaner!');
	});
	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
