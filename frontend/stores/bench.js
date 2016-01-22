var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BenchConstants = require('../constants/bench_constants');
var _benches = [];

var BenchStore = new Store(AppDispatcher);

BenchStore.all = function () {
  return _benches.slice(0);
};

BenchStore.reset = function (benches) {
  _benches = benches;
};

BenchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      this.reset(payload.benches);
      BenchStore.__emitChange();
      break;
  }
};

window.BenchStore = BenchStore;

module.exports = BenchStore;
