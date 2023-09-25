const db = require("../config/connection");
const { User, Manifestation } = require("../models");
const userSeeds = require("./userSeeds.json");
const manifestationSeeds = require("./manifestationSeeds.json");


db.once("open", async () => {
  try {

    await User.deleteMany({});
    await Manifestation.deleteMany({});

    await User.create(userSeeds);
    await Manifestation.create(manifestationSeeds)

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
    console.log("Done!")
    process.exit(0);
});