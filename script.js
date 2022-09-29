const el = document.getElementById('box');

const hiddenEl = document.getElementById('hidden');

// ✅ Show hidden DIV on hover
el.addEventListener('mouseover', function handleMouseOver() {
  hiddenEl.style.display = 'block';

  // 👇️ if you used visibility property to hide div
  // hiddenEl.style.visibility = 'visible';
});

// ✅ (optionally) Hide element on mouse out
el.addEventListener('mouseout', function handleMouseOut() {
  hiddenEl.style.display = 'none';

  // 👇️ if you used visibility property to hide div
  // hiddenEl.style.visibility = 'hidden';
});
