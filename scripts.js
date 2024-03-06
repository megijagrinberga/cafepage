document.addEventListener('DOMContentLoaded', function () {
    let currIndex = 0;
    const cards = document.querySelectorAll('.best-sellers-card');
    const nextButton = document.querySelector('.slider.next');

    function displayCards() {
        cards.forEach((card, index) => {
            //nekam nederīgs mēģinājums
            if (index >= currIndex && index < currIndex + 4 || (index <= 3 - (cards.length - currIndex) && cards.length - currIndex <= 3)) {
                card.style.display = 'block';
            }
            else {
                card.style.display = 'none';
            }
        });
    }

    function goNextSlide() {
        currIndex = (currIndex + 1) % cards.length; //0+1 % 6 = 1 = currIndex
        displayCards();
    }   
    nextButton.addEventListener('click', goNextSlide);

    displayCards();
});
