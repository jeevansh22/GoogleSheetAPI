const express = require('express');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));
const SHEET_ID = 'YOUR_SHEET_ID_HERE'; 
const auth = new google.auth.GoogleAuth({
    keyFile: './service-account.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets'], 
});

const sheets = google.sheets({ version: 'v4', auth });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/submit', async (req, res) => {
    const { name, email, age } = req.body; 
    try {
        await sheets.spreadsheets.values.append({
            spreadsheetId: "10c12AV14QdzwnK5Pk_T8_iF8EyNL3lK6SK-_nsy0n9Q",
            range: 'Sheet1!A:D', 
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [[name, email, age, age >= 60 ? 'Senior' : 'Junior']], 
            },
        });

        res.status(200).send('Data successfully submitted to Google Sheets.');
    } catch (error) {
        console.error('Error submitting data:', error);
        res.status(500).send('Failed to submit data.');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
