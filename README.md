# GoogleSheetAPI

Google Sheets Automation Project
This project automates the Status column in a Google Sheet based on age using Google Apps Script. The sheet contains columns: Name, Email, Age, and Status. The status is automatically set to 'Senior' for ages 60+ and 'Junior' for ages below 60.

To use, simply share the Google Sheet with the service account and grant editing permissions. Modify the Apps Script to ensure automation works smoothly. The Google Sheet can be accessed via the link provided below.

https://docs.google.com/spreadsheets/d/10c12AV14QdzwnK5Pk_T8_iF8EyNL3lK6SK-_nsy0n9Q/edit?usp=sharing
MAKE SERVICE-ACCOUNT.JSON FILE
{
  "type": "service_account",
  "project_id": "#",
  "private_key_id": "#",
  "private_key": "-----BEGIN PRIVATE KEY-----\n#\n-----END PRIVATE KEY-----\n",
  "client_email": "#@#",
  "client_id": "#",
  "auth_uri": "#",
  "token_uri": "@",
  "auth_provider_x509_cert_url": "#",
  "client_x509_cert_url": #",
  "universe_domain": "#"
}
