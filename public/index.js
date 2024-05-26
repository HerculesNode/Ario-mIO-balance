const balanceForm = document.getElementById('balanceForm');
const resultDiv = document.getElementById('result');

balanceForm.addEventListener('submit', async function(event) {
  event.preventDefault();

  const walletAddress = document.getElementById('walletAddress').value;

  try {
    const response = await fetch(`/getBalance?walletAddress=${walletAddress}`);
    const data = await response.json();
    resultDiv.textContent = `Wallet: ${data.balance} mIO`;
  } catch (error) {
    resultDiv.textContent = 'An error has occurred. Please try again later.';
  }
});
