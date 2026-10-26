document.addEventListener('click', function (event) {
  if (event.target.closest('#teacherInfo')) {
    var panel = document.getElementById('teacherPanel');
    if (panel) { panel.hidden = false; panel.classList.add('open'); }
  }
  if (event.target.closest('#closeTeacher') || event.target.id === 'teacherPanel') {
    var openPanel = document.getElementById('teacherPanel');
    if (openPanel) { openPanel.hidden = true; openPanel.classList.remove('open'); }
  }
});
