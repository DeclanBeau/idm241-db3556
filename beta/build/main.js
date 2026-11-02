const shuffleButton = document.getElementById('shuffle');
const dot = document.getElementById('dot');
const label = document.getElementById('label');
shuffleButton.addEventListener('click', function () {
    shuffleButton.classList.toggle('active');
    dot.classList.toggle('active');

    if (shuffleButton.classList.contains('active')){
        label.textContent = 'Disable Shuffle';
    } else {
        label.textContent = 'Enable Shuffle';
    }
});
