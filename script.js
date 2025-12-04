const darkModeBtn = document.getElementById('dark-mode-btn');

darkModeBtn.addEventListener('click', () => {
    darkModeBtn.classList.toggle('toggle');
    document.body.classList.toggle('dark');
})