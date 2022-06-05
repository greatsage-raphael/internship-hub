const GoogleStrategy = require("passport-google-oauth20").Strategy;
 const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "370724628472-flhh84lp271aqiujuel0l2itp11emih3.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "d8b2134bf777b2103c8a";
const GITHUB_CLIENT_SECRET = "d629bb941081bc226d38ef17cd59d320ef3a59f2";



passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});