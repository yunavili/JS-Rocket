/*setTimeout(function () {
    location.href = 'rocket.html'
}, 2000)*/

var timer = null;
var countDownNumber = 10;
document.querySelector('.countdown').innerHTML = countDownNumber;

var changeState = function (state) {
    document.body.className = 'body-state' + state;
    clearInterval(timer);

    if (state === 2) {
        timer = setInterval(function () {
            countDownNumber = countDownNumber - 1;
            document.querySelector('.countdown').innerHTML = countDownNumber;
            if (countDownNumber <= 0) {
                changeState(3);
            };
        }, 500);
    } else if (state === 3) {
        var success = setTimeout(function () {
            var randomNumber = Math.round(Math.random() * 10);
            console.log('randomNumber: ' + randomNumber)
            if (randomNumber > 3) {
                changeState(4);

            } else {
                changeState(5);//o nii!
            }
        }, 2000);
    };
};  