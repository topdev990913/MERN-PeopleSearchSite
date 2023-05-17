let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()
const multer = require('multer');
// Student Model
let userSchema = require('../Models/Student')
const Papa = require("papaparse");
const csv = require('csvtojson');
const Student = require('../Models/Student');


const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, './uploads/');
  },
  filename(req, file, callback) {
    callback(null, `tmp.csv`);
  },
});

const upload = multer({ storage }).single('csv');


// CREATE Student
router.route('/create-student').post((req, res, next) => {
  userSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log("data", data)
      res.json(data)
    }
  })
})

router.route('/read-file').post((req, res) => {
  upload(req, res, function (err) {
    if (err) {
      return res.status(500).send({
        message: err.message
      })
    }
    const csvFilePath = './uploads/tmp.csv';
    csv()
      .fromFile(csvFilePath)
      .then(async (jsonObj) => {
        for (let i = 0; i < jsonObj.length; i++) {
          const item = jsonObj[i]
          const student = new userSchema()
          student.RUT = item.RUT
          student.DV = item.DV
          student.NOMBRE = item.NOMBRE
          student.DIRECCION = item.DIRECCION
          student.COMUNA = item.COMUNA
          student.REGION = item.REGION
          student.SALUD = item.SALUD
          student.Fec_Nac = item.Fec_Nac
          student.CORREO = item.CORREO
          student.CELULAR = item.CELULAR
          await student.save()
        }
        res.send('Success')
      });


  })
})




// READ Students
router.route('/').get((req, res) => {
  userSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log("data", data)
      res.json(data)
    }
  })
})

// Get Single Student
router.route('/edit-student/:id').get((req, res) => {
  userSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Student
router.route('/update-student/:id').put((req, res, next) => {
  userSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('Student updated successfully !')
      }
    },
  )
})

// Delete Student
router.route('/delete-student/:id').delete((req, res, next) => {
  userSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router
