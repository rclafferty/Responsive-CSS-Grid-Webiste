// Hide preloader when all images, scripts, and links have finished loading
// --> LOAD event

// Window event listener
eventListeners();

function eventListeners() {
    const ui = new UI();

    // Load window event
    window.addEventListener('load', function() {
        ui.hidePreloader();
    })

    // Nav Button click handler
    document.querySelector('.navBtn').addEventListener('click', function() {
        ui.showNavBar();
    })

    // Video Switch handler
    document.querySelector('.video__switch').addEventListener('click', function() {
        ui.videoControl();
    })

    // Submit the form
    document.querySelector('.drink-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.querySelector('.input-name').value;
        const lastName = document.querySelector('.input-lastname').value;
        const email = document.querySelector('.input-email').value;

        let value = ui.checkEmpty(name, lastName, email);
    })
}

function UI() {

}

UI.prototype.hidePreloader = function() {
    // Select preloader and Hide preloader
    document.querySelector('.preloader').style.display = "none";
}

UI.prototype.showNavBar = function() {
    // Hide or show the nav bar
    document.querySelector('.nav').classList.toggle('nav--show');
}

UI.prototype.videoControl = function() {
    // Play or pause the video
    // document.querySelector('.video__switch-button').style.left = 50%;
    // document.querySelector('.video')
    let videoButton = document.querySelector('.video__switch-button');
    if (!videoButton.classList.contains('video__switch-button-slide'))
    {
        videoButton.classList.add('video__switch-button-slide');
        document.querySelector('.video__item').pause();
    }
    else
    {
        videoButton.classList.remove('video__switch-button-slide');
        document.querySelector('.video__item').play();
    }
}

UI.prototype.checkEmpty() {

}