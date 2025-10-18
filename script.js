function calculateLove() {
  const name1 = document.getElementById('name1').value.trim();
  const name2 = document.getElementById('name2').value.trim();
  const result = document.getElementById('result');

  if (!name1 || !name2) {
    result.innerHTML = "Please enter both names 💔";
    return;
  }

  const lovePercent = Math.floor(Math.random() * 101); // 0 - 100
  let message = 'Queen';

  if (lovePercent > 100) message = "Soulmates! 💞";
  else if (lovePercent > 75) message = "Perfect Match! 💖";
  else if (lovePercent > 50) message = "There's a spark ✨";
  else if (lovePercent > 30) message = "Maybe just friends? 💬";
  else message = "Hmm... keep looking 😅";

  result.innerHTML = `${name1} ❤️ ${name2}<br><strong>${lovePercent}%</strong><br>${message}`;
}
