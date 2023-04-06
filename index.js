
form.addEventListener('submit', (e) => {
  let value = choice.value - 1;
  e.preventDefault();
  let seconds = 59;
  countdownDisplay.innerHTML += `<li id="countdown-${value}">${value} : ${seconds}</li>`;
  function delai() {
    const countdownElement = document.getElementById(`countdown-${value}`);
    const intervalId = setInterval(() => {
      if (seconds >= 1) {
        seconds = seconds - 1;
      } else {
        seconds = 59;
        value = value - 1;
      }
      countdownElement.textContent = `${value} : ${seconds}`;
      if (value === -1) {
        clearInterval(intervalId);
        countdownElement.textContent = `0 : 00`
      }
    }, 1);
  }
  delai();
});
    



