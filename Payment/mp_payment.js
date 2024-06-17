function showCustomNotification() {
    var notification = document.getElementById('sumbitNotification');
    notification.style.display = 'block';
    var sumbitText = document.getElementById('sumbitText');
    sumbitText.style.display = 'block';

    // Start countdown
    var count = 5;
    var countdownElement = document.getElementById('countdownsumbit');

    var countdownInterval = setInterval(function() {
        countdownElement.innerText = 'Redirecting in ' + count + ' seconds...';
        count--;

        if (count < 0) {
            clearInterval(countdownInterval);
            window.location.href = '../Home/mp_home.html';  
        }
    }, 1000);
}

function showCancelNotification() {
    var notification = document.getElementById('cancelNotification');
    notification.style.display = 'block';
    var cancelText = document.getElementById('cancelText');
    cancelText.style.display = 'block';
}

function hideCancelNotification() {
    var notification = document.getElementById('cancelNotification');
    notification.style.display = 'none';
}

function cancelOrder() {
    var notification = document.getElementById('cancelNotification');
    notification.style.display = 'block';
    var cancelText = document.getElementById('cancelText');
    cancelText.style.display = 'none';
    var buttons = document.querySelectorAll('#cancelNotification button');
    buttons.forEach(function(button) {
        button.style.display = 'none';
    });

    var backToMenuText = document.getElementById('backToMenuText');
    backToMenuText.style.display = 'block';
    

    // Start countdown
    var count = 5;
    var countdownElement = document.getElementById('countdowncancel');

    var countdownInterval = setInterval(function() {
        countdownElement.innerText = 'Redirecting in ' + count + ' seconds...';
        count--;

        if (count < 0) {
            clearInterval(countdownInterval);
            window.location.href = '../Menu/mp_menu.html';  
        }
    }, 1000);
}



