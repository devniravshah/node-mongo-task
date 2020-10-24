const userViewModel = require('../models/userView');

module.exports = (app) => {
  app.get('/api/user-view-report', (req, res, next) => {

    let { startDate, endDate } = req.query;
    startDate = startDate ? new Date(startDate) : new Date('0');
    endDate = endDate ? new Date(endDate) : new Date();
    userViewModel.aggregate([

      { $match: { 'date': { $gte: startDate, $lt: endDate } } },
      {
        $group: { _id: '$productId', uniqueUsers: { $addToSet: "$userId" }, users: { $push: "$userId" } }
      }, {
        $addFields: { uniqueUserCount: { $size: '$uniqueUsers' }, totalUser: { $size: "$users" } }
      }
    ], function (err, result) {
      if (err) {
        const errorObj = {
          message: err.message,
          statusCode: '500'
        };
        return next(errorObj);
      }
      res.setHeader('Content-type', 'application/json');
      res.statusCode = '200';
      res.end(JSON.stringify(result));
    });
  })

};