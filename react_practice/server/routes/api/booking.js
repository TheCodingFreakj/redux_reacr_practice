const express = require("express");
const router = express.Router();
const Booking = require("../../models/bookings");

router.post("/", async (req, res) => {
  const { time, user } = req.body;
  const id = user._id;

  try {
    let user = await Booking.findOne({ user: id });
    // console.log(user);
    if (user && user.status === "0") {
      return res.status(400).send({
        message: "You have already booked a slot and wait for approval",
      });
    }

    const booking = new Booking({
      time: time,
      user: id,
      name: req.body.user.name,
      status: "0",
    });

    await booking.save();
    return res.status(200).send({ message: "your free booking is done" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send("the request done is falsy..try again with right credentials");
  }
});

router.get("/", async (req, res) => {
  try {
    let bookings = await Booking.find({});

    if (!bookings) {
      return res.status(400).send({
        message: "There is no booking from this user",
      });
    }
    // console.log(bookings);

    return res.status(200).send(bookings);
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "the request done is falsy..try again with right credentials",
    });
  }
});

router.get("/:userid", async (req, res) => {
  try {
    console.log(req.params.userid);

    let bookings = await Booking.find({ user: req.params.userid });
    console.log(bookings)
    if (!bookings) {
      return res.status(400).send({
        message: "There is no booking from this user",
      });
    }
    // console.log(bookings);

    return res.status(200).send(bookings);
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "the request done is falsy..try again with right credentials",
    });
  }
});

router.put("/", async (req, res) => {
  // console.log(req.body);

  const { user } = req.body;

  const time = user.time;
  try {
    let booking = await Booking.findOne({ time: time });

    booking.status = "1";
    await booking.save();
    return res.status(200).send(booking);
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "the request done is falsy..try again with right credentials",
    });
  }
});

router.delete("/", async (req, res) => {
  // console.log(req.body);

  const { user } = req.body;

  const time = user.time;
  try {
    await Booking.findOneAndRemove({ time: time });
    return res.status(200).send({
      message: "userdelete",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "the request done is falsy..try again with right credentials",
    });
  }
});
module.exports = router;
