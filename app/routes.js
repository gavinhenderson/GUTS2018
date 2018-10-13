module.exports = (app, passport) => {
  app.get("/", (req, res) => {
    if (!req.user) {
      res.redirect("/login");
      return;
    }

    res.render("home", { world: "world", user: req.user });
  });

  app.get("/login", (req, res) => {
    res.render("login");
  });

  app.post("/login", (req, res) => {
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/",
    })(req, res);
  });

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
  });
};
