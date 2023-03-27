const terminalInput = document.querySelector('.command-input');
const typedText = document.querySelector('.typed-text');

terminalInput.addEventListener('input', (event) => {
  typedText.textContent = event.target.value;
});

terminalInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const command = terminalInput.value.trim();
    if (command === 'go') {
      window.location.href = 'test.html';
    } else {
      const content = document.querySelector('.content');
      const line = document.createElement('p');
      line.classList.add('line');
      line.textContent = `Command "${command}" is not recognized as an internal or external command,
      operable program or batch file.`;
      content.appendChild(line);
      terminalInput.value = '';
      typedText.textContent = '';
    }
  }
});