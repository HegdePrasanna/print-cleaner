const fs = require('fs');

// Clean multiple Python files
function cleanPythonFiles(fileUris) {
    fileUris.forEach((fileUri) => {
        const filePath = fileUri.fsPath;
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        let lines = fileContent.split('\n');
        
        // Iterate through each line of the file
        for (let i = 1; i < lines.length; i++) {
            const currentLine = lines[i];
            const previousLine = lines[i - 1];
            
            // Check if the previous line doesn't contain '#required' or '# required',
            // the current line contains 'print(', and it's not a commented line
            if (!previousLine.includes('#required') && !previousLine.includes('# required') &&
                    currentLine.includes('print(') && !currentLine.trim().startsWith('#')) {
                // Replace 'print(' with '# print(' to comment out the line
                const cleanedLine = currentLine.replace('print(', '# print(');
                lines[i] = cleanedLine;
            }
        }

        // Join the lines back into a single string
        const cleanedContent = lines.join('\n');

        // Overwrite the file with the cleaned content
        fs.writeFileSync(filePath, cleanedContent, 'utf-8');
    });
}


// Clean a single Python file
function cleanPythonFile(fileUri) {
    const filePath = fileUri.fsPath;
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    let lines = fileContent.split('\n');

    // Iterate through each line of the file
    for (let i = 1; i < lines.length; i++) {
        const currentLine = lines[i];
        const previousLine = lines[i - 1];

        // Check if the previous line doesn't contain '#required' or '# required',
        // the current line contains 'print(', and it's not a commented line
        if (!previousLine.includes('#required') && !previousLine.includes('# required') &&
                currentLine.includes('print(') && !currentLine.trim().startsWith('#')) {
            // Replace 'print(' with '# print(' to comment out the line
            const cleanedLine = currentLine.replace('print(', '# print(');
            lines[i] = cleanedLine;
        }
    }

    // Join the lines back into a single string
    const cleanedContent = lines.join('\n');

    // Overwrite the file with the cleaned content
    fs.writeFileSync(filePath, cleanedContent, 'utf-8');
}


// Clean multiple JavaScript/TypeScript files
function cleanJSFiles(fileUris) {
    fileUris.forEach((fileUri) => {
        const filePath = fileUri.fsPath;
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        let lines = fileContent.split('\n');

        // Iterate through each line of the file
        for (let i = 1; i < lines.length; i++) {
            const currentLine = lines[i];
            const previousLine = lines[i - 1];

            // Check if the previous line doesn't contain '//required' or '// required',
            // the current line contains 'console.log', and it's not a commented line
            if (!previousLine.includes('//required') && !previousLine.includes('// required') &&
                    currentLine.includes('console.log') && !currentLine.trim().startsWith('//')) {
                // Replace 'console.log' with '// console.log' to comment out the line
                const cleanedLine = currentLine.replace('console.log', '// console.log');
                lines[i] = cleanedLine;
            }
        }

        // Join the lines back into a single string
        const cleanedContent = lines.join('\n');

        // Overwrite the file with the cleaned content
        fs.writeFileSync(filePath, cleanedContent, 'utf-8');
    });
}


// Clean a single JavaScript/TypeScript file
function cleanJSFile(fileUri) {
    const filePath = fileUri.fsPath;
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    let lines = fileContent.split('\n');
    
    // Iterate through each line of the file
    for (let i = 1; i < lines.length; i++) {
        const currentLine = lines[i];
        const previousLine = lines[i - 1];

        // Check if the previous line doesn't contain '//required' or '// required',
        // the current line contains 'console.log', and it's not a commented line
        if (!previousLine.includes('//required') && !previousLine.includes('// required') &&
                currentLine.includes('console.log') && !currentLine.trim().startsWith('//')) {
            // Replace 'console.log' with '// console.log' to comment out the line
            const cleanedLine = currentLine.replace('console.log', '// console.log');
            lines[i] = cleanedLine;
        }
    }

    // Join the lines back into a single string
    const cleanedContent = lines.join('\n');

    // Overwrite the file with the cleaned content
    fs.writeFileSync(filePath, cleanedContent, 'utf-8');
}


module.exports = {
    cleanPythonFiles,
    cleanJSFiles,
    cleanPythonFile,
    cleanJSFile
};
