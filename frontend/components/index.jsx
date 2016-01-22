var React = require('react'),
    BenchStore = require('../stores/bench'),
    ApiUtil = require('../util/api_util');

var Index = React.createClass({
  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function () {
    BenchStore.addListener(this._benchesChanged);
    ApiUtil.fetchBenches();
  },

  _benchesChanged: function () {
    this.setState({ benches: BenchStore.all() });
  },

  render: function () {
    var benches = this.state.benches.map(function (bench) {
      return(
        <li key={bench.id} bench={bench}>
          {bench.description}
        </li>
      );
    });

    return <ul className="benches-list">{benches}</ul>;
  }
});

module.exports = Index;
