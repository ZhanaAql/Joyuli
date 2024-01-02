function copyAccountNumber(accountId) {
  const copyButton = document.getElementById(
    `copy-button-${accountId.slice(-1)}`
  );
  const originalText = copyButton.innerHTML;

  const accountNumber = document.getElementById(accountId);
  const tempInput = document.createElement("input");
  tempInput.value = accountNumber.innerText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  copyButton.innerText = "Copied";
  copyButton.disabled = true;

  setTimeout(function () {
    copyButton.innerHTML = originalText;
    copyButton.disabled = false;
  }, 1000);
}
