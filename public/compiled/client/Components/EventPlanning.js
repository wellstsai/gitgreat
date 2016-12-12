'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventPlanning = function (_React$Component) {
  _inherits(EventPlanning, _React$Component);

  function EventPlanning(props) {
    _classCallCheck(this, EventPlanning);

    var _this = _possibleConstructorReturn(this, (EventPlanning.__proto__ || Object.getPrototypeOf(EventPlanning)).call(this, props));

    _this.state = {
      tab: false
    };

    _this.changeDisplay = _this.changeDisplay.bind(_this);
    return _this;
  }

  _createClass(EventPlanning, [{
    key: 'changeDisplay',
    value: function changeDisplay(e) {
      this.setState({
        tab: e.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var view;
      if (this.state.tab === 'whatToBringBtn') {
        view = React.createElement(WhatToBring, { featuredEvent: this.props.featuredEvent });
      } else if (this.state.tab === 'activitiesBtn') {
        view = React.createElement(Activities, null);
      } else if (this.state.tab === 'reminderBtn') {
        view = React.createElement(Reminders, null);
      } else if (this.state.tab === 'photosBtn') {
        view = React.createElement(Photos, null);
      }
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'EVENT'
        ),
        React.createElement(
          'div',
          null,
          'Event: ',
          this.props.featuredEvent.name
        ),
        React.createElement(FeatureNavigation, { changeDisplay: this.changeDisplay }),
        view
      );
    }
  }]);

  return EventPlanning;
}(React.Component);

window.EventPlanning = EventPlanning;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0V2ZW50UGxhbm5pbmcuanN4Il0sIm5hbWVzIjpbIkV2ZW50UGxhbm5pbmciLCJwcm9wcyIsInN0YXRlIiwidGFiIiwiY2hhbmdlRGlzcGxheSIsImJpbmQiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInZpZXciLCJmZWF0dXJlZEV2ZW50IiwibmFtZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLGE7OztBQUNKLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxXQUFLO0FBRE0sS0FBYjs7QUFJQSxVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJDLElBQW5CLE9BQXJCO0FBTmlCO0FBT2xCOzs7O2tDQUVhQyxDLEVBQUc7QUFDZixXQUFLQyxRQUFMLENBQWM7QUFDWkosYUFBS0csRUFBRUUsTUFBRixDQUFTQztBQURGLE9BQWQ7QUFHRDs7OzZCQUVRO0FBQ1AsVUFBSUMsSUFBSjtBQUNBLFVBQUksS0FBS1IsS0FBTCxDQUFXQyxHQUFYLEtBQW1CLGdCQUF2QixFQUF5QztBQUN2Q08sZUFBTyxvQkFBQyxXQUFELElBQWEsZUFBZSxLQUFLVCxLQUFMLENBQVdVLGFBQXZDLEdBQVA7QUFDRCxPQUZELE1BRU8sSUFBSSxLQUFLVCxLQUFMLENBQVdDLEdBQVgsS0FBbUIsZUFBdkIsRUFBd0M7QUFDN0NPLGVBQU8sb0JBQUMsVUFBRCxPQUFQO0FBQ0QsT0FGTSxNQUVBLElBQUksS0FBS1IsS0FBTCxDQUFXQyxHQUFYLEtBQW1CLGFBQXZCLEVBQXNDO0FBQzNDTyxlQUFPLG9CQUFDLFNBQUQsT0FBUDtBQUNELE9BRk0sTUFFQSxJQUFJLEtBQUtSLEtBQUwsQ0FBV0MsR0FBWCxLQUFtQixXQUF2QixFQUFvQztBQUN6Q08sZUFBTyxvQkFBQyxNQUFELE9BQVA7QUFDRDtBQUNELGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBYSxlQUFLVCxLQUFMLENBQVdVLGFBQVgsQ0FBeUJDO0FBQXRDLFNBRkY7QUFHRSw0QkFBQyxpQkFBRCxJQUFtQixlQUFlLEtBQUtSLGFBQXZDLEdBSEY7QUFJR007QUFKSCxPQURGO0FBUUQ7Ozs7RUFuQ3lCRyxNQUFNQyxTOztBQXFDbENDLE9BQU9mLGFBQVAsR0FBdUJBLGFBQXZCIiwiZmlsZSI6IkV2ZW50UGxhbm5pbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFdmVudFBsYW5uaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRhYjogZmFsc2VcbiAgICB9O1xuXG4gICAgdGhpcy5jaGFuZ2VEaXNwbGF5ID0gdGhpcy5jaGFuZ2VEaXNwbGF5LmJpbmQodGhpcyk7XG4gIH1cblxuICBjaGFuZ2VEaXNwbGF5KGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRhYjogZS50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgdmlldztcbiAgICBpZiAodGhpcy5zdGF0ZS50YWIgPT09ICd3aGF0VG9CcmluZ0J0bicpIHtcbiAgICAgIHZpZXcgPSA8V2hhdFRvQnJpbmcgZmVhdHVyZWRFdmVudD17dGhpcy5wcm9wcy5mZWF0dXJlZEV2ZW50fS8+O1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS50YWIgPT09ICdhY3Rpdml0aWVzQnRuJykge1xuICAgICAgdmlldyA9IDxBY3Rpdml0aWVzIC8+O1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS50YWIgPT09ICdyZW1pbmRlckJ0bicpIHtcbiAgICAgIHZpZXcgPSA8UmVtaW5kZXJzIC8+O1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS50YWIgPT09ICdwaG90b3NCdG4nKSB7XG4gICAgICB2aWV3ID0gPFBob3RvcyAvPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5FVkVOVDwvaDE+XG4gICAgICAgIDxkaXY+RXZlbnQ6IHt0aGlzLnByb3BzLmZlYXR1cmVkRXZlbnQubmFtZX08L2Rpdj5cbiAgICAgICAgPEZlYXR1cmVOYXZpZ2F0aW9uIGNoYW5nZURpc3BsYXk9e3RoaXMuY2hhbmdlRGlzcGxheX0gLz5cbiAgICAgICAge3ZpZXd9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG53aW5kb3cuRXZlbnRQbGFubmluZyA9IEV2ZW50UGxhbm5pbmc7XG5cbiJdfQ==