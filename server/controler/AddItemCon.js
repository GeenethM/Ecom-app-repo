const Item = require("../models/AddItem")
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + file.originalname)
    }
})
  
const upload = multer({ storage: storage })


const addnewItem = (upload.single('imagedata'), async (req,res) => {
    try {
        const dataimg = req.file.filename;
        const data = await Item.create({Image: dataimg});
        res.json(data)
    } catch (error) {
        res.json("Error in AddItemCon "+error)
    }
})

module.exports = {addnewItem}