const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

async function setupNodeEvents(on,config){
  on('file:preprocessor', cucumber());
  return config;

  on('task', {
    readExcel(filePath) {
      const workbook = XLSX.readFile(filePath);
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      return jsonData;
    }
  });


}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/Integration/framework/*.{js,feature}' // we can run both js as well as .feature files
  },
});
