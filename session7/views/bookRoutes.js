const express = require("express");

const router = express.Router();



router.get("/books"  , (req,res) => {
    res.json({ book1 : "Maths" , book2 : "Javascript"  })
})


router.get("/products"  , (req,res) => {
    res.json({ Message : "Started"  })
})

module.exports = router
