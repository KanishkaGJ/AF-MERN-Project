const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8070/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // Here you would search for or create a user in your DB.
    // For simplicity, we'll pass the profile to the next middleware.
    return done(null, profile);
  }
));

// Serialize and deserialize user info into session
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});
