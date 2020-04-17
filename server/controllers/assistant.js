const mongoose = require("mongoose");

const Assistant = mongoose.model("assistant");

exports.getMany = (req, res) => {
  const { user } = req;
  Assistant.find({ user: user._id })
    .then((assistants) => {
      res.json({ error: false, assistants });
    })
    .catch((e) => {
      console.log(e);
      res.json({ error: "Unable to fetch data from DB", assistants: [] });
    });
};

exports.create = (req, res) => {
  const {
    user,
    body: { name, style },
  } = req;
  if (!name || name.length < 2) {
    return res.json({ error: "Name should be more than 2 characters" });
  }

  Assistant.create({
    name,
    style,
    user,
  })
    .then((assistant) => {
      res.json({ error: false, assistant });
    })
    .catch((e) => {
      console.log(e);
      res.json({ error: "Unable to save assistant to DB", assistant: null });
    });
};

exports.update = (req, res) => {
  const {
    user,
    body: { name, style, _id },
  } = req;

  if (!name || name.length < 2) {
    return res.json({ error: "Name should be more than 2 characters" });
  }

  let objectId = _id;
  try {
    objectId = mongoose.Types.ObjectId(_id);
  } catch (e) {
    return res.json({ error: "Invalid ID provided" });
  }
  Assistant.findOne({
    user: user._id,
    _id: objectId,
  })
    .then((assistant) => {
      if (!assistant) {
        return null;
      }

      assistant.name = name;
      assistant.style = style;
      return assistant.save();
    })
    .then((assistant) => {
      if (!assistant) {
        return res.json({ error: "Unable to find assistant" });
      }

      res.json({ error: false, assistant });
    })
    .catch((e) => {
      console.log(e);
      res.json({ error: "Unable to update in DB" });
    });
};

exports.delete = (req, res) => {
  const {
    user,
    body: { _id },
  } = req;
  let objectId = _id;
  try {
    objectId = mongoose.Types.ObjectId(_id);
  } catch (e) {
    return res.json({ error: "Invalid ID provided" });
  }

  Assistant.findOne({
    user: user._id,
    _id: objectId,
  })
    .then((assistant) => {
      if (!assistant) {
        return null;
      }

      return assistant.remove();
    })
    .then((assistant) => {
      if (!assistant) {
        return res.json({ error: "Unable to find assistant" });
      }

      res.json({ error: false });
    })
    .catch((e) => {
      console.log(e);
      res.json({ error: "Unable to find in DB" });
    });
};
