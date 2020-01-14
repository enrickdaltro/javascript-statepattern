// set the state
const PageState = function() {
    let currentState = new homeState(this);

    //methods
    this.init = function() {
        // this.change is going to be used to change the current state
        this.change(new homeState());
    };

    this.change = function(state) {
        currentState = state;
    };
};

// Home State
const homeState = function(page) {
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
        <div class="jumbotron">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>`;
};

// About state
const aboutState = function(page) {
    document.querySelector('#heading').textContent = 'About us';
    document.querySelector(
        '#content'
    ).innerHTML = `<p>This is the about page</p>`;
};

// Contact State
const contactState = function(page) {
    document.querySelector('#heading').textContent = 'Contact us';
    document.querySelector('#content').innerHTML = `
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// Event listerners that will change the state
// set UI vars
const home = document.querySelector('#home'),
    about = document.querySelector('#about'),
    contact = document.querySelector('#contact');

// home
home.addEventListener('click', e => {
    page.change(new homeState());
    e.preventDefault();
});

// about
about.addEventListener('click', e => {
    page.change(new aboutState());
    e.preventDefault();
});

// contact
contact.addEventListener('click', e => {
    page.change(new contactState());
    e.preventDefault();
});
