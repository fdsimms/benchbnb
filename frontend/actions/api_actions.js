var AppDispatcher = require('../dispatcher/dispatcher'),
    BenchConstants = require('../constants/dispatcher');

var ApiActions = {
  receiveAll: function (benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  }
};

module.exports = ApiActions;
