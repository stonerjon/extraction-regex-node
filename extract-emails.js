const fs = require('fs');

// Read the JSON file, data.json
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);

        // Extract email addresses using a regular expression
        const emailRegex = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/g;
        const allEmails = JSON.stringify(jsonData).match(emailRegex) || [];

        // Display the extracted email addresses
        console.log('Extracted Email Addresses:');
        allEmails.forEach((email) => {
            console.log(email);
        });
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
});

/*      I usually pipe the output into a file like this

node email.js > clean-emails.txt

*\
