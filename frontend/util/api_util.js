var ApiActions = require('../actions/api_actions');

var ApiUtil = {
  fetchBenches: function () {
    $.ajax({
      type: 'GET',
      url: '/api/benches',
      dataType: 'json',
      success: function (benches) {
        ApiActions.receiveAll(benches);
      }
    });
  }
};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
