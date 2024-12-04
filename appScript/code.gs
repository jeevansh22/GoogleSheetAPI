function updateStatus() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) { 
    const age = data[i][2];
    const statusCell = sheet.getRange(i + 1, 4); 
    if (age >= 60) {
      statusCell.setValue('Senior');
    } else {
      statusCell.setValue('Junior');
    }
  }
}
