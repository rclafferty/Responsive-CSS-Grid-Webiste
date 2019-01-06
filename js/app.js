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

        let value = ui.checkValid(name, lastName, email);

        // console.log(value);
        if (value)
        {
            let customer = new Customer(name, lastName, email);
            ui.addCustomer(customer);
            ui.clearFields();
            ui.showFeedback('Customer added to the list', 'success');
        }
        else
        {
            ui.showFeedback('Some form values are empty', 'error');
        }
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

// Check for empty values
UI.prototype.checkValid = function(name, lastName, email) {
    let result = true;

    if (name === '' || lastName === '' || email === '')
        result = false;
    else
        result = true;

    return result;
}

UI.prototype.showFeedback = function(message, alert) {
    console.log("Showing feedback of " + message + " and type " + alert);
    let targetClass = '.drink-form__feedback';
    
    if (alert === 'success' || alert === 'error')
    {
        this.showMessage(alert, targetClass, message);
    }
}

UI.prototype.showMessage = function(alert, targetClass, message) {
    let feedback = document.querySelector(targetClass);
    feedback.classList.add(alert); // Add error class
    feedback.innerText = message;

    this.removeAlert(alert, targetClass); // Remove error class after 3 seconds
}

UI.prototype.removeAlert = function(alert, targetClass) {
    setTimeout(function() {
        document.querySelector(targetClass).classList.remove(alert);
    }, 3000); // 3000 ms = 3 sec
}

UI.prototype.addCustomer = function(customer) {
    // const images = [1, 2, 3, 4, 5];
    let random = Math.floor(Math.random() * 5);
    const div = document.createElement('div');
    div.classList.add('person');
    div.innerHTML = `
        <img src="img/person-${random}.jpeg" alt="person" class="person__thumbnail">
        <h4 class="person__name">${customer.name}</h4>
        <h4 class="person__last-name">${customer.lastName}</h4>
    `;
    document.querySelector('.drink-card__list').appendChild(div);
}

UI.prototype.clearFields = function() {
    document.querySelector('.input-name').value = '';
    document.querySelector('.input-lastname').value = '';
    document.querySelector('.input-email').value = '';
}

function Customer(name, lastName, email) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
}