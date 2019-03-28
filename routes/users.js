var express = require('express');
var router = express.Router();
const crm = require('../control/CrmInput')
const common = require('../config/common')

/* GET users listing. */
router.get('/test', function(req, res, next) {
  res.json({test: ource'respond with a resource'});
});

/* Insert a customer. */
router.post('/insertContact', function(req, res, next) {
  const name = req.body.name
  const phone = req.body.phone
  const address = req.body.address
  const sourceId = req.body.sourceId
  const medium = req.body.medium
  const content = req.body.content

  crm.insertContact(name, phone, address, sourceId, medium, content)
      .then(rows => {
        const codeRes = common.StatusCodes.OK
          res.status(codeRes).json(common.responseOk({code: codeRes}))
      }).catch(err => {
          console.error(err)
          const codeRes = common.StatusCodes.InternalError
          res.status(codeRes).json(common.responseErr({
            code: codeRes,
            desc: 'Cannot connect DB'
          }))
      })
});
module.exports = router;
