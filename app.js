const dialog = document.getElementById('dialog');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

openBtn.addEventListener('click', function() {
  dialog.setAttribute('open', true);
})

closeBtn.addEventListener('click', function() {
  dialog.removeAttribute('open');
});