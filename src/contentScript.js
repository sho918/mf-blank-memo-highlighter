'use strict';

// For more information on Content Scripts,
// See https://developer.chrome.com/extensions/content_scripts

const cfUrl = 'https://moneyforward.com/cf';
const currentUrl = window.location.toString();

let cfTable = document.getElementById('cf-detail-table');

const highlightTableRow = (() => {
  if (currentUrl === cfUrl) {
    [...cfTable.rows].forEach(row => {
      if (!row.cells[7].innerText) {
        row.style.background = '#FFCECE';
      }
    });
  }
});

const observer = new MutationObserver(highlightTableRow);
observer.observe(cfTable, { childList: true, subtree: true });

highlightTableRow();
