const balanceEl = document.getElementById('balanceDisplay');
const lastUpdatedEl = document.getElementById('lastUpdated');
let balance = 1250.00;

function formatMoney(num) {
  return '$' + num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function updateDisplay() {
  balanceEl.textContent = formatMoney(balance);
  const now = new Date();
  lastUpdatedEl.textContent = now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}

document.getElementById('depositBtn').addEventListener('click', () => {
  const amt = prompt('Enter deposit amount:', '100');
  if (amt !== null) {
    const parsed = parseFloat(amt);
    if (!isNaN(parsed) && parsed > 0) {
      balance += parsed;
      updateDisplay();
      alert('Deposited ' + formatMoney(parsed));
    } else {
      alert('Invalid amount.');
    }
  }
});

document.getElementById('withdrawBtn').addEventListener('click', () => {
  const amt = prompt('Enter withdrawal amount:', '50');
  if (amt !== null) {
    const parsed = parseFloat(amt);
    if (!isNaN(parsed) && parsed > 0) {
      if (parsed > balance) {
        alert('Insufficient funds.');
        return;
      }
      balance -= parsed;
      updateDisplay();
      alert('Withdrew ' + formatMoney(parsed));
    } else {
      alert('Invalid amount.');
    }
  }
});

updateDisplay();
