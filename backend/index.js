const PORT = process.env.PORT || 5000;
const session = require("express-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const app = express();

app.use(
  session({
    secret: "mlh",
    name: "uniqueSessionID",
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 360000,
      secure: false,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "https://internship-hub.vercel.app/",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen(PORT, () => {
  console.log("Server is running!");
});
