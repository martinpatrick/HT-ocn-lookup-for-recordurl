

function HTlookup() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange();
  var app = SpreadsheetApp;
  var numRows = data.getNumRows();
  var startRow = "2"; //assumes a header row and that OCN is in column 1
  var i;

 for (var i = 0; i < (numRows - 1) ; i++) {
  //lookup https://catalog.hathitrust.org/api/volumes/brief/oclc/424023.json
  //resolve https://catalog.hathitrust.org/Record/007407367
  var range = sheet.getRange(startRow, 1);
  var data = range.getValues();
  var ocn =  data
  if (typeof ocn == 'number') {
   var htUrl = "https://catalog.hathitrust.org/api/volumes/brief/oclc/"
   var url = htUrl + ocn + ".json";
   var results = UrlFetchApp.fetch(url);
   var content = results.getContentText();
   var json = JSON.parse(content);
   var recordId = Object.keys(json.records)[0];

   if (recordId) {
     var resolve = "https://catalog.hathitrust.org/Record/"
     var linkUrl = resolve + recordId
     sheet.getRange(startRow, 3).setValue(linkUrl); //assumes OCN in col 1 and something else in col 2
     startRow++;
   } else {
           sheet.getRange(startRow, 3).setValue("No results");
           startRow++;
           { continue; }
           }
          } else
          startRow++;
          {continue; }
 }
}
