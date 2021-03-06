// local vars factory
function getLocals(){
    return { 
        layoutTitle: 'Template: Node with Passport Authentication',
        brandName: 'Template'
    };
};

// export function 
module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        // get locals object
        var locals = getLocals();
        locals.user = req.user;
        
        // render view
        res.render('index', locals); 
    });
    
    // =====================================
    // ABOUT PAGE ==========================
    // =====================================
    app.get('/about', function(req, res) {
        // get locals object
        var locals = getLocals();
        locals.user = req.user;
        
        // render view
        res.render('about', locals); 
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {
        // get locals object
        var locals = getLocals();
        locals.message = req.flash('loginMessage');

        // render the page and pass in any flash data if it exists
        res.render('login', locals); 
    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {
        // get locals object
        var locals = getLocals();
        locals.message = req.flash('signupMessage');

        // render the page and pass in any flash data if it exists
        res.render('signup', locals);
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        // get locals object
        var locals = getLocals();
        locals.user = req.user; // get the user out of session and pass to template
        
        // render profile
        res.render('profile', locals);
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    // =====================================
    // TWITTER ROUTES ======================
    // =====================================
    // route for twitter authentication and login
    app.get('/auth/twitter', passport.authenticate('twitter'));

    // handle the callback after twitter has authenticated the user
    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            successRedirect : '/profile',
            failureRedirect : '/'
    }));
    
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}