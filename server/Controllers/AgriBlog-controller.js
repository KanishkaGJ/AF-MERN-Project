const AgriBlog = require("../Models/AgriBlog");

//add a agri blog
const addAgriBlog = async (req, res, next) => {
  const { Title, Description, Thumbnail } = req.body;

  const newAgriBlog = new AgriBlog({
    Title,
    Description,
    Thumbnail,
  });

  newAgriBlog
  .save()
  .then(() => {
    res.status(201).json({ message: "Agri Blog Added!" }); // Use status 201 for created
  })
  .catch((err) => {
    console.error("Error adding Agriculture blog:", err); // Log detailed error for debugging
    res.status(500).json({ message: "Failed to add Agriculture blog. Please try again later." }); // Generic message for client
  });
};

//read all agri blogs
const getAllAgriBlogs = async (req, res, next) => {
  AgriBlog.find()
    .then((agriblogs) => {
      if (!agriblogs || agriblogs.length === 0) {
        return res.status(404).json({ message: "No Agriculture Blogs found." });
      }
      res.status(200).json(agriblogs); // Success response
    })
    .catch((err) => {
      console.error("Error retrieving Agriculture blogs:", err); // Log detailed error
      res.status(500).json({ message: "Unable to retrieve blogs. Please try again later." }); // Generic message for client
    });
};


//get agri blog by id
exports.getAgriById = async (req, res) => {
  let agriId = req.params.id;

  const agri = await AgriBlog.findById(agriId)
    .then((agri) => {
      res.status(200).send({ status: "Blog fetched" , agri});
    })
    .catch(() => {
      console.log(err.message);
      res.status(500).send({ status: "Could not fetch Blog", error: err.message });
    });
};

//update agri blog
const updateAgriBlog = async (req, res, next) => {
  let agriBlogId = req.params.id;
  const { Title, Description, Thumbnail } = req.body;
  const updateAgriBlog = {
    Title,
    Description,
    Thumbnail,
  };

  //check whether the agri blog is available
  const update = await AgriBlog.findOneAndUpdate(agriBlogId, updateAgriBlog)
    .then(() => {
      res.status(200).send({ status: "Agri Blog updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error in updating agri blog", error: err.message });
    });
};

//delete agri blog
const deleteAgriBlog = async (req, res, next) => {
  let agriBlogId = req.params.id;

  await AgriBlog.findOneAndDelete(agriBlogId)
    .then(() => {
      res.status(200).send({ status: "Agri blog deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error in deleting agri Blog", error: err.message });
    });
};

exports.addAgriBlog = addAgriBlog;
exports.getAllAgriBlogs = getAllAgriBlogs;
exports.updateAgriBlog = updateAgriBlog;
exports.deleteAgriBlog = deleteAgriBlog;
