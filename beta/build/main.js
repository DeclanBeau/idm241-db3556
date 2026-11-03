const shuffleButton = document.getElementById('shuffle');
const repeatButton = document.getElementById('repeat');
const dot = document.getElementById('dot');
const repeatDot = document.getElementById('repeat-dot');
const label = document.getElementById('label');
const repeatLabel = document.getElementById('repeat-label');
const repeatOne = document.getElementById('repeat-one');
const repeatIcon = repeatButton.querySelector('svg');

let repeatState = 0;


shuffleButton.addEventListener('click', function () {
    shuffleButton.classList.toggle('active');
    dot.classList.toggle('active');

    if (shuffleButton.classList.contains('active')){
        label.textContent = 'Disable Shuffle';
    } else {
        label.textContent = 'Enable Shuffle';
    }
});


repeatButton.addEventListener('click', function () {

    repeatState++;

    if (repeatState > 2) {
        repeatState = 0;
    }

    if(repeatState === 0){
        repeatButton.classList.remove('active');
        repeatDot.classList.remove('active');
        repeatOne.classList.remove('active');

        repeatLabel.textContent = 'Enable Repeat';

    } else if (repeatState === 1){

        repeatButton.classList.add('active');
        repeatOne.classList.remove('active');

        repeatDot.classList.add('active');

        repeatLabel.textContent = 'Enable Repeat One';
    } else if (repeatState === 2){
        repeatButton.classList.add('active');
        repeatOne.classList.add('active');

        repeatDot.classList.add('active');

        repeatLabel.textContent = 'Disable Repeat';
    }
});

repeatButton.addEventListener('mouseenter', function () {

    if (!repeatButton.classList.contains('active')) {
        repeatIcon.classList.add('spin');
    }

});

repeatIcon.addEventListener('animationend', function () {
    repeatIcon.classList.remove('spin');
});