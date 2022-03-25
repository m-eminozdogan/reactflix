const router = require("express").Router();
const { query } = require("express");
const List = require("../models/List");
const verify = require("../verifyToken");

//CREATE MOVIE list
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);
    try {
      const savedList = await newList.save();
      res.status(200).json(savedList);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("u'r not allowed to add list");
  }
});

//DELETE MOVIE list
router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(200).json("list deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("u'r not allowed to delete list");
  }
});

//GET MOVIE list
router.get("/", async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];

  try {
    if (typeQuery) {
      //so if movie or series selected
      if (genreQuery) {
        //so if any genre selected
        list = await List.aggregate([
          {
            $sample: { size: 10 }, //random 10 list but we dont want random so added condition next
          },
          {
            $match: { type: typeQuery, genre: genreQuery }, //conditon here
          },
        ]);
      } else {
        //movie or series selected but no genre
        list = await List.aggregate([
          {
            $sample: { size: 10 }, //random 10 list but we dont want random so added condition next
          },
          {
            $match: { type: typeQuery }, //conditon here
          },
        ]);
      }
      res.status(200).json(list);
    } else {
      //else is for if thereis no type (so random list)
      list = await List.aggregate([{ $sample: { size: 10 } }]);
      res.status(200).json(list);

    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
