const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

module.exports = (on, config) => {
  on('task', {
    readExcel(filePath) {
      const workbook = XLSX.readFile(filePath);
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      return jsonData;
    }
  });
};
