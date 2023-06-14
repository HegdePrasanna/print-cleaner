const fs = require('fs');

function cleanPythonFiles(fileUris) {
    fileUris.forEach((fileUri) => {
        const filePath = fileUri.fsPath;
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        let lines = fileContent.split('\n');

        for (let i = 1; i < lines.length; i++) {
            const currentLine = lines[i];
            const previousLine = lines[i - 1];

            if (!previousLine.includes('#required') && !previousLine.includes('# required') &&
                    currentLine.includes('print(') && !currentLine.trim().startsWith('#')) {
                const cleanedLine = currentLine.replace('print(', '# print(');
                lines[i] = cleanedLine;
            }
        }

        const cleanedContent = lines.join('\n');
        fs.writeFileSync(filePath, cleanedContent, 'utf-8');
    });
}


function cleanPythonFile(fileUri) {
    const filePath = fileUri.fsPath;
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    let lines = fileContent.split('\n');

    for (let i = 1; i < lines.length; i++) {
        const currentLine = lines[i];
        const previousLine = lines[i - 1];

        if (!previousLine.includes('#required') && !previousLine.includes('# required') &&
            currentLine.includes('print(') && !currentLine.trim().startsWith('#')) {
            const cleanedLine = currentLine.replace('print(', '# print(');
            lines[i] = cleanedLine;
        }
    }
    const cleanedContent = lines.join('\n');
    fs.writeFileSync(filePath, cleanedContent, 'utf-8');
}


function cleanJSFiles(fileUris) {
    fileUris.forEach((fileUri) => {
        const filePath = fileUri.fsPath;
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        let lines = fileContent.split('\n');

        for (let i = 1; i < lines.length; i++) {
            const currentLine = lines[i];
            const previousLine = lines[i - 1];

            if (!previousLine.includes('//required') && !previousLine.includes('// required') &&
                    currentLine.includes('console.log') && !currentLine.trim().startsWith('//')) {
                const cleanedLine = currentLine.replace('console.log', '// console.log');
                lines[i] = cleanedLine;
            }
        }

        const cleanedContent = lines.join('\n');
        fs.writeFileSync(filePath, cleanedContent, 'utf-8');
    });
}


function cleanJSFile(fileUri) {
    const filePath = fileUri.fsPath;
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    let lines = fileContent.split('\n');
    
    for (let i = 1; i < lines.length; i++) {
        const currentLine = lines[i];
        const previousLine = lines[i - 1];

        if (!previousLine.includes('//required') && !previousLine.includes('// required') &&
            currentLine.includes('console.log') && !currentLine.trim().startsWith('//')) {
            const cleanedLine = currentLine.replace('console.log', '// console.log');
            lines[i] = cleanedLine;
        }
    }

    const cleanedContent = lines.join('\n');
    fs.writeFileSync(filePath, cleanedContent, 'utf-8');
}


module.exports = {
    cleanPythonFiles,
    cleanJSFiles,
    cleanPythonFile,
    cleanJSFile
};
