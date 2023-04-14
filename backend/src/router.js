const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const beerList = [
  {
    id: 1,
    name: "Punk IPA 2007-2010",
    abv: 6.0,
    ibu: 60.0,
    ebc: 17.0,
    srm: 8.5,
  },
  {
    id: 2,
    name: "Bad Pixie",
    abv: 4.7,
    ibu: 45.0,
    ebc: 8.0,
    srm: 4.0,
  },
  {
    id: 3,
    name: "Buzz",
    abv: 4.5,
    ibu: 60.0,
    ebc: 20.0,
    srm: 10.0,
  },
  {
    id: 4,
    name: "Trashy Blonde",
    abv: 4.1,
    ibu: 41.5,
    ebc: 15.0,
    srm: 15.0,
  },
  {
    id: 5,
    name: "Berliner weiss with yuzu",
    abv: 4.2,
    ibu: 8.0,
    ebc: 8.0,
    srm: 4.0,
  },
  {
    id: 6,
    name: "Pilsen lager",
    abv: 6.3,
    ibu: 55.0,
    ebc: 30.0,
    srm: 15.0,
  },
  {
    id: 7,
    name: "Avery brown dredge",
    abv: 7.2,
    ibu: 59.0,
    ebc: 10.0,
    srm: 5.0,
  },
  {
    id: 8,
    name: "Eletric India",
    abv: 5.2,
    ibu: 38.0,
    ebc: 15.0,
    srm: 7.5,
  },
  {
    id: 9,
    name: "AB:12",
    abv: 11.2,
    ibu: 35.0,
    ebc: 80.0,
    srm: 40.0,
  },
  {
    id: 10,
    name: "Fake lager",
    abv: 4.7,
    ibu: 40.0,
    ebc: 12.0,
    srm: 6.0,
  },
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
