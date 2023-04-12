const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const beerList = [
  { id: 1, name: "#Mashtag 2013", ebc: 40, srm: 20, ibu: 50, abv: 7.5 },
  {
    id: 2,
    name: "Bashah (w/ Stone Brewing Co)",
    ebc: 30,
    srm: 15.3,
    ibu: 100,
    abv: 9.7,
  },
  { id: 3, name: "Sorachi Ace", ebc: 30, srm: 15, ibu: 75, abv: 7.5 },
  { id: 4, name: "East Of Vermont", ebc: 20, srm: 10, ibu: 15, abv: 7.8 },
  { id: 5, name: "The Physics", ebc: 65, srm: 32.5, ibu: 47, abv: 5 },
];

router.get("/beers", (req, res) => {
  res.json(beerList);
});

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
