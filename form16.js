/*Code written by Harsh, 8353124*/

document.getElementById('form16Btn').addEventListener('click', () => {
    const accountNo = document.getElementById('f16_account').value;
    const selectedYear = document.getElementById('f16_year').value;
    const fileName = `${accountNo}.pdf`;
    
    if (accountNo.trim() === '') {
      alert('Account number cannot be blank!');
      return;
    }
    else if (accountNo.length != 7) {
      alert('Account number should be of 7 digits!');
      return;
    }
    const filePath = `file path to be given`;
console.log(filePath);

    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });                                    