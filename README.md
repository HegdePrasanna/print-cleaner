# Print Cleaner

Print Cleaner is a Visual Studio Code extension that allows you to comment out print statements in Python files with the option to exclude statements that follow a particular pattern. This extension helps in cleaning up code by quickly and easily commenting out print statements that are no longer needed for debugging or logging purposes.

## Features

- Comments out print statements in Python, JavaScript, and TypeScript files within the project directory.
- Skips commenting print statements if the previous line contains `# required` or `// required`.
- Works with individual files, selected files, or the entire workspace.
- Supports Python, JavaScript, and TypeScript files.

## Installation

1. Launch Visual Studio Code.
2. Go to the Extensions view by clicking on the square icon on the left sidebar or by pressing `Ctrl+Shift+X`.
3. Search for "Print Cleaner" in the Extensions Marketplace.
4. Click on the "Install" button for the "Print Cleaner" extension.
5. Once installed, the extension is ready to use.

## Usage

1. Open your project in Visual Studio Code.
2. Press `Ctrl+Shift+P` to open the Command Palette.
3. Type "Print Cleaner: Remove Print Statement" and select the command from the list.
4. Choose one of the following options:
   - "Current File": Comments out print statements in the currently active file.
   - "Select File(s)": Allows you to select multiple files from the project directory to comment out print statements.
   - "Workspace": Comments out print statements in all Python, JavaScript, and TypeScript files in the workspace.
5. The extension will process the selected files or workspace and comment out the print statements.
6. If a line containing `# required` or `// required` precedes a print statement, it will be skipped and not commented.
7. After processing, a message will be displayed to indicate that the print statements have been commented out.

## License

This extension is licensed under the [MIT License](LICENSE).

## Contributing

Contributions to Print Cleaner are welcome! If you encounter any issues or have suggestions for improvements, please create a GitHub issue or submit a pull request. For major changes, please open an issue first to discuss the changes with the project maintainers.

## Credits

Print Cleaner is developed and maintained by [Prasanna Hegde](https://github.com/HegdePrasanna).

## Feedback

If you have any feedback, questions, or suggestions, please feel free to reach out to the project maintainers or open an issue on GitHub.

Enjoy cleaning up your Python code with Print Cleaner!
