const terminalInput = document.querySelector('.command-input');
const typedText = document.querySelector('.typed-text');
const content = document.querySelector('.content');

terminalInput.addEventListener('input', (event) => {
  typedText.textContent = event.target.value;
});

terminalInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const command = terminalInput.value.trim();
    if (command === 'go') {
      window.location.href = 'test.html';
    } else if (command === 'socials') {
      const socialLinks = ['https://www.roblox.com/users/1528783616/profile', 'https://twitter.com/connnyO_o', 'https://steamcommunity.com/id/perc55/'];
      socialLinks.forEach((link) => {
        const line = document.createElement('p');
        line.classList.add('line');
        const linkEl = document.createElement('a');
        linkEl.href = link;
        linkEl.textContent = link;
        line.appendChild(linkEl);
        content.appendChild(line);
      });
    } else {
      const line = document.createElement('p');
      line.classList.add('line');
      line.textContent = `Command "${command}" is not recognized as an internal or external command,
      operable program or batch file.`;
      content.appendChild(line);
    }
    terminalInput.value = '';
    typedText.textContent = '';
  }
});