/*Code written by Harsh, 98353124*/

document.getElementById('mpsBtn').addEventListener('click', () => {
  const accountNo = document.getElementById('mps_account').value;
  const selectedMonth = document.getElementById('mps_month').value;
  const selectedYear = document.getElementById('mps_year').value;
  const fileName = `${accountNo}.pdf`;

  if (accountNo.trim() === '') {
    alert('Account number cannot be blank!');
    return;
  }
  else if (accountNo.length != 8) {
    alert('Account number should be of 8 digits!');
    return;
  }
  const filePath = `./mps/${selectedMonth}${selectedYear}/${fileName}`;

  const link = document.createElement('a');
  link.href = filePath;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});