const router = require("express").Router();

const locationsData = [
  {
    name: "Riverside South",
    housesAffected: 100,
    floodDamage: "Severe",
    medianIncome: "100000",
    services: ["food", "shelter"],
  },
  {
    name: "Gatineau",
    housesAffected: 50,
    floodDamage: "Moderate",
    medianIncome: "100000",
    services: ["food", "shelter"],
  },
  {
    name: "Downtown Ottawa",
    housesAffected: 100,
    floodDamage: "Severe",
    medianIncome: "100000",
    services: ["food", "shelter"],
  },
  {
    name: "Barrhaven",
    housesAffected: 10,
    floodDamage: "Insignificant",
    medianIncome: "100000",
    services: ["food", "shelter"],
  },
  {
    name: "Manotick",
    housesAffected: 100,
    floodDamage: "Severe",
    medianIncome: "100000",
    services: ["food", "shelter"],
  },
  {
    name: "Orleans",
    housesAffected: 150,
    floodDamage: "Severe",
    medianIncome: "240000",
    services: ["food", "shelter", "welfare"],
  },

  {
    name: "Nepean",
    housesAffected: 75,
    floodDamage: "Moderate",
    medianIncome: "95000",
    services: ["food", "shelter"],
  },
  {
    name: "Alta Vista",
    housesAffected: 35,
    floodDamage: "Minor",
    medianIncome: "110000",
    services: ["food", "shelter", "medical"],
  },
  {
    name: "Elmvale Acres",
    housesAffected: 45,
    floodDamage: "Moderate",
    medianIncome: "85000",
    services: ["food", "shelter", "medical"],
  },
  {
    name: "Vanier",
    housesAffected: 120,
    floodDamage: "Severe",
    medianIncome: "72000",
    services: ["food", "shelter", "welfare"],
  },
  {
    name: "Overbrook",
    housesAffected: 90,
    floodDamage: "Moderate",
    medianIncome: "78000",
    services: ["food", "shelter"],
  },
  {
    name: "Hintonburg",
    housesAffected: 30,
    floodDamage: "Minor",
    medianIncome: "105000",
    services: ["food", "shelter"],
  },
  {
    name: "Carlington",
    housesAffected: 65,
    floodDamage: "Moderate",
    medianIncome: "82000",
    services: ["food", "shelter", "welfare"],
  },
  {
    name: "Bells Corners",
    housesAffected: 40,
    floodDamage: "Minor",
    medianIncome: "98000",
    services: ["food", "shelter"],
  },
  {
    name: "Kanata",
    housesAffected: 25,
    floodDamage: "Insignificant",
    medianIncome: "125000",
    services: ["food", "shelter"],
  },
  {
    name: "Stittsville",
    housesAffected: 20,
    floodDamage: "Insignificant",
    medianIncome: "130000",
    services: ["food", "shelter"],
  },
  {
    name: "Beacon Hill",
    housesAffected: 55,
    floodDamage: "Moderate",
    medianIncome: "102000",
    services: ["food", "shelter", "medical"],
  },
  {
    name: "Blackburn Hamlet",
    housesAffected: 35,
    floodDamage: "Minor",
    medianIncome: "108000",
    services: ["food", "shelter"],
  },
  {
    name: "Cumberland",
    housesAffected: 60,
    floodDamage: "Moderate",
    medianIncome: "115000",
    services: ["food", "shelter"],
  },
  {
    name: "Leitrim",
    housesAffected: 85,
    floodDamage: "Severe",
    medianIncome: "105000",
    services: ["food", "shelter", "welfare"],
  },
  {
    name: "Fallowfield",
    housesAffected: 50,
    floodDamage: "Moderate",
    medianIncome: "118000",
    services: ["food", "shelter"],
  },
];

router.get("/locations", (req, res) => {
  console.log("Request for Ottawa locations received.");
  res.json(locationsData);
});

module.exports = router;