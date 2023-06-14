// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const { cleanPythonFile, cleanJSFile, cleanPythonFiles, cleanJSFiles } = require('./utils');


function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "print-cleaner" is now active!');

    let disposable = vscode.commands.registerCommand('print-cleaner.removePrintStatement', function () {
        vscode.window.showQuickPick(['Current File', 'Selected File', 'Complete Project'], {
            placeHolder: 'Select the scope of cleaning',
        }).then((selectedScope) => {
            if (selectedScope === 'Current File') {
                const currentEditor = vscode.window.activeTextEditor;
                if (currentEditor && currentEditor.document.languageId === 'python') {
					// const fileName = path.basename(currentEditor.document.uri.fsPath);
                    cleanPythonFile(currentEditor.document.uri);
					// vscode.window.showInformationMessage(`Print statements removed from the file: ${fileName}`);
                } else if (currentEditor && (currentEditor.document.languageId === 'javascript' || currentEditor.document.languageId === 'typescript')) {
					// const fileName = path.basename(currentEditor.document.uri.fsPath);
					cleanJSFile(currentEditor.document.uri);
					// vscode.window.showInformationMessage(`Console.log statements removed from the file: ${fileName}`);
                } else {
                    vscode.window.showErrorMessage('Unsupported file type.');
                }
            } else if (selectedScope === 'Selected File') {
				vscode.window.showOpenDialog({
					canSelectFiles: true,
					canSelectFolders: false,
					canSelectMany: true,
					openLabel: 'Select File',
				}).then((fileUris) => {
					if (fileUris && fileUris.length > 0) {
						fileUris.forEach((fileUri) => {
							const fileExtension = path.extname(fileUri.fsPath);
							if (fileExtension === '.py') {
								// const fileName = path.basename(fileUri.fsPath);
								cleanPythonFile(fileUri);
								// vscode.window.showInformationMessage(`Print statements removed from the file: ${fileName}`);
							} else if (fileExtension === '.js' || fileExtension === '.ts') {
								// const fileName = path.basename(fileUri.fsPath);
								cleanJSFile(fileUri);
								// vscode.window.showInformationMessage(`Console.log statements removed from the file: ${fileName}`);
							} else {
								vscode.window.showErrorMessage('Unsupported file type.');
							}
						});
					}
				});
			} else if (selectedScope === 'Complete Project') {
                const pythonFiles = vscode.workspace.findFiles('**/*.py', '**/node_modules/**', 1000);
                const jsTsFiles = vscode.workspace.findFiles('**/*.{js,ts}', '**/node_modules/**', 1000);
                
                pythonFiles.then((pythonFileUris) => {
                    cleanPythonFiles(pythonFileUris);
					vscode.window.showInformationMessage('Print statements removed from all Python files in the project.');
                });
        
                jsTsFiles.then((jsTsFileUris) => {
                    cleanJSFiles(jsTsFileUris);
					vscode.window.showInformationMessage('Console.log statements removed from all JavaScript/TypeScript files in the project.');
                });
            }
        });
    });

    context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
    activate,
    deactivate
};
