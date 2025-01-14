const express = require('express');
const multer = require('multer');
const { createTender,getAllTenders, getTenderById, getNewSrNumber, updateTender } = require('../controllers/tenderController'); 
const router = express.Router();
const companyMiddleware = require("../middleware/companyMiddleware");
const {uploadDocument,uploadImage, upload} = require("../middleware/upload");

router.use(companyMiddleware);
// const upload = multer({ dest: 'uploads/' }); 

router.post('/createTender', upload.fields([
    { name: 'tenderCopy', maxCount: 1 },
    { name: 'technicalDocuments', maxCount: 1 },
    { name: 'tenderFees', maxCount: 1 },
    { name: 'emdCopy', maxCount: 1 },
    { name: 'boq', maxCount: 1 },
    { name: 'pricing', maxCount: 1 },
    { name: 'performanceGuarantee', maxCount: 1 },
    { name: 'mou', maxCount: 1 },
    { name: 'other', maxCount: 1 },
]), createTender);

// Route to get all tenders
router.get('/getAllTenders',getAllTenders); 

// Route to get a tender by ID
router.get('/getTenderById/:id', getTenderById); 

router.get('/getSrNoForTender', getNewSrNumber);

router.put('/updateTender/:id', upload.fields([
    { name: 'tenderCopy', maxCount: 1 },
    { name: 'technicalDocuments', maxCount: 1 },
    { name: 'tenderFees', maxCount: 1 },
    { name: 'emdCopy', maxCount: 1 },
    { name: 'boq', maxCount: 1 },
    { name: 'pricing', maxCount: 1 },
    { name: 'performanceGuarantee', maxCount: 1 },
    { name: 'mou', maxCount: 1 },
    { name: 'other', maxCount: 1 },
]), updateTender);

module.exports = router;
