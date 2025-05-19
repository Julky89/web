const container = document.getElementById('corazones-container');

for (let i = 0; i < 30; i++) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = '100vh';
  heart.style.animationDelay = (Math.random() * 5) + 's';
  container.appendChild(heart);
}