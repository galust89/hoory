const Authentication = require("./controllers/authentication");
const Assistant = require("./controllers/assistant");
const passportService = require("./services/passport");
const passport = require("passport");
const { Router } = require("express");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

const router = Router();

router.get("/", requireAuth, function (req, res) {
  res.send({ hi: "there" });
});

// Authentication
router.post("/signin", requireSignin, Authentication.signin);
router.post("/signup", Authentication.signup);
router.get("/user", requireAuth, Authentication.getOne);

// Assistant
router.get("/assistants", requireAuth, Assistant.getMany);
router.post("/assistants", requireAuth, Assistant.create);
router.put("/assistants", requireAuth, Assistant.update);
router.post("/deleteAssistant", requireAuth, Assistant.delete);

module.exports = router;
