function throwDart() {
  const board = document.getElementById('board');
  let dart = document.getElementById('dart');

  if (!dart) {
    dart = document.createElement('div');
    dart.id = 'dart';
    board.appendChild(dart);
  }

  const x = Math.random() * 190;
  const y = Math.random() * 190;

  dart.style.left = `${x}px`;
  dart.style.top = `${y}px`;

  const centerX = 95;
  const centerY = 95;
  const dist = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);

  let score = 0;
  if (dist < 30) score = 50;
  else if (dist < 60) score = 25;
  else if (dist < 90) score = 10;

  document.getElementById('score').textContent = `Score: ${score}`;
}