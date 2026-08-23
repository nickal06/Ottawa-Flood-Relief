const router = require("express").Router()

const locationsData = [
  
{
  name: "Riverside South",
  housesAffected: 100,
  floodDamage: "Severe",
  medianIncome: "100000",
  services: [
    "food",
    "shelter",
  ]
},

{
  name: "Gatineau",
  housesAffected: 50,
  floodDamage: "Moderate",
  medianIncome: "1000",
  services: [
    "food",
    "shelter",
  ]
},

{
  name: "Downtown Ottawa",
  housesAffected: 100,
  floodDamage: "Severe",
  medianIncome: "100000",
  services: [
    "food",
    "shelter",
  ]
},

{
  name: "Barrhaven",
  housesAffected: 10,
  floodDamage: "Insignificant",
  medianIncome: "100000",
  services: [
    "food",
    "shelter",
  ]
},

{
  name: "Manotick",
  housesAffected: 100,
  floodDamage: "Severe",
  medianIncome: "100000",
  services: [
    "food",
    "shelter",
  ]
},

{
  name: "Orleans",
  housesAffected: 150,
  floodDamage: "Severe",
  medianIncome: "240000",
  services: [
    "food",
    "shelter",
    "welfare",
  ]
}]

router.get("/locations", (req, res) => {
  
  console.log("Request for Ottawa locations recieved.")

  res.json(locationsData);

})

module.exports = router;