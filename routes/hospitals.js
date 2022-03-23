const express = require('express');
const {getHospitals,getHospital,createHospital,updateHospital,deleteHospital,getVacCenters} = require('../controllers/hospitals');

//include other resource routers
const appointments = require('./appointments')

const router=express.Router();

const {protect,authorize} = require('../middleware/auth');

//re-route into other resource routers
router.use('/:hospitalId/appointments/',appointments)

router.route('/').get(getHospitals).post(protect,authorize('admin'),createHospital);
router.route('/vacCenters').get(getVacCenters);
router.route('/:id').get(getHospital).put(protect,authorize('admin'),updateHospital).delete(protect,authorize('admin'),deleteHospital);

module.exports=router;