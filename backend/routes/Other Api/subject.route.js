const express = require("express");
const { 
  getSubject, 
  addSubject, 
  deleteSubject,
  getSubjectsByBranchAndSemester 
} = require("../../controllers/Other/subject.controller");
const router = express.Router();

router.get("/getSubject", getSubject);
router.get("/getSubjectsByBranchAndSemester", getSubjectsByBranchAndSemester);
router.post("/addSubject", addSubject);
router.delete("/deleteSubject/:id", deleteSubject);

module.exports = router;
