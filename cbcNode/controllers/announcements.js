const Announcement = require("../models/Announcement");
const handleError = require("../utils/handleError");

async function createAnnouncement(req, res) {
  try {
    const { title, description } = req.body;
    new Announcement({ title, description })
      .save()
      .then((announcement) => {
        res.json({
          success: true,
          announcement: {
            title: announcement.title,
            description: announcement.description,
            _id: announcement._id,
          },
        });
      })
      .catch((error) => {
        res.json({
          success: false,
          errors: handleError(error),
        });
      });
  } catch (e) {
    res.status(500).send("Something went wrong");
  }
}

async function getAnnouncements(req, res) {
  try {
    const announcements = await Announcement.find({})
      .sort({ updatedAt: -1 })
      .select("-updatedAt -createdAt -__v")
      .exec();
    return res.json({
      success: true,
      announcements,
    });
  } catch (e) {
    res.status(500).send("Something went wrong");
  }
}

async function deleteAnnouncement(req, res) {
  try {
    const announcement = await Announcement.findByIdAndDelete(
      req.body.announcementId
    ).exec();
    if (announcement) {
      res.json({ success: true, msg: "announcement deleted successfully." });
    } else {
      res.json({ success: false, msg: "wrong id." });
    }
  } catch (e) {
    res.status(500).send("Something went wrong");
  }
}

module.exports = {
  createAnnouncement,
  deleteAnnouncement,
  getAnnouncements,
};
