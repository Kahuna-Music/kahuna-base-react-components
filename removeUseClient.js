const fs = require('fs')
const path = require('path')

// Function to remove "use client" directive from a file
const removeUseClientDirective = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8')
  const updatedContent = content.replace(/^['"]use client['"];/, '')
  fs.writeFileSync(filePath, updatedContent, 'utf8')
};

// Specify the paths to the files that contain "use client"
const reactCalendarPath = path.resolve(__dirname, 'node_modules', 'react-calendar', 'dist', 'esm')
const filesToUpdate = [
  path.join(reactCalendarPath, 'Calendar.js'),
  path.join(reactCalendarPath, 'Calendar', 'Navigation.js'),
  // Add any other necessary files
];

// Remove the directive from each file
filesToUpdate.forEach(removeUseClientDirective)

console.log('Removed "use client" directives from react-calendar.')
