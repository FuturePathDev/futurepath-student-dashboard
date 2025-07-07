window.addEventListener('DOMContentLoaded', () => {
  const dateContainer = document.getElementById('current-date');
  if (dateContainer) {
    const today = new Date();
    dateContainer.textContent = today.toLocaleDateString();
  }
});
