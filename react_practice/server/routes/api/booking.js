const express = require("express");
const router = express.Router();
const Booking = require("../../models/bookings");

router.post("/", async (req, res) => {
  const { time, user } = req.body;
  const id = user._id;

  try {
    let user = await Booking.findOne({ user: id });
    console.log(user);
    if (user && user.status === "0") {
      return res.status(400).send({
        message: "You have already booked a slot and wait for approval",
      });
    }

      const booking = new Booking({
        time: time,
        user: id,
        status: "0",
      });

      await booking.save();
      return res.status(200).send({ message: "your free booking is done" });
   
  } catch (err) {
    console.log("this is hit");
    return res
      .status(500)
      .send("the request done is falsy..try again with right credentials");
  }
});

module.exports = router;
