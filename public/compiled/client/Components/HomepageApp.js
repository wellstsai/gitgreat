'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      eventList: null,
      page: 'homepage',
      featuredEvent: null
    };
    _this.handleEntryClick = _this.handleEntryClick.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var successHandler = function successHandler(data) {
        this.setState({ eventList: data });
      };
      $.ajax({
        method: 'GET',
        url: '/eventTable',
        success: successHandler.bind(this)
      });
    }
  }, {
    key: 'handleEntryClick',
    value: function handleEntryClick(event) {
      this.setState({
        page: 'eventDetails',
        featuredEvent: event
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var view;
      if (this.state.page === 'homepage') {
        view = React.createElement(
          'div',
          null,
          React.createElement(EventList, {
            eventData: this.state.eventList,
            handleEntryClick: this.handleEntryClick
          }),
          ';'
        );
      } else if (this.state.page === 'eventDetails') {
        view = React.createElement(EventPlanning, { featuredEvent: this.state.featuredEvent });
      }

      return React.createElement(
        'div',
        null,
        React.createElement(Nav, null),
        view
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0hvbWVwYWdlQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZXZlbnRMaXN0IiwicGFnZSIsImZlYXR1cmVkRXZlbnQiLCJoYW5kbGVFbnRyeUNsaWNrIiwiYmluZCIsInN1Y2Nlc3NIYW5kbGVyIiwiZGF0YSIsInNldFN0YXRlIiwiJCIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJzdWNjZXNzIiwiZXZlbnQiLCJ2aWV3IiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBQVcsSUFEQTtBQUVYQyxZQUFNLFVBRks7QUFHWEMscUJBQWU7QUFISixLQUFiO0FBS0EsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBUGlCO0FBUWxCOzs7O3dDQUNtQjtBQUNsQixVQUFJQyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQVNDLElBQVQsRUFBZTtBQUNsQyxhQUFLQyxRQUFMLENBQWMsRUFBQ1AsV0FBV00sSUFBWixFQUFkO0FBQ0QsT0FGRDtBQUdBRSxRQUFFQyxJQUFGLENBQU87QUFDTEMsZ0JBQVEsS0FESDtBQUVMQyxhQUFLLGFBRkE7QUFHTEMsaUJBQVNQLGVBQWVELElBQWYsQ0FBb0IsSUFBcEI7QUFISixPQUFQO0FBS0Q7OztxQ0FFZ0JTLEssRUFBTztBQUN0QixXQUFLTixRQUFMLENBQWM7QUFDWk4sY0FBTSxjQURNO0FBRVpDLHVCQUFlVztBQUZILE9BQWQ7QUFJRDs7OzZCQUVRO0FBQ1AsVUFBSUMsSUFBSjtBQUNBLFVBQUksS0FBS2YsS0FBTCxDQUFXRSxJQUFYLEtBQW9CLFVBQXhCLEVBQW9DO0FBQ2xDYSxlQUNHO0FBQUE7QUFBQTtBQUNDLDhCQUFDLFNBQUQ7QUFDRSx1QkFBVyxLQUFLZixLQUFMLENBQVdDLFNBRHhCO0FBRUUsOEJBQWtCLEtBQUtHO0FBRnpCLFlBREQ7QUFBQTtBQUFBLFNBREg7QUFPRCxPQVJELE1BUU8sSUFBSSxLQUFLSixLQUFMLENBQVdFLElBQVgsS0FBb0IsY0FBeEIsRUFBd0M7QUFDN0NhLGVBQU8sb0JBQUMsYUFBRCxJQUFlLGVBQWUsS0FBS2YsS0FBTCxDQUFXRyxhQUF6QyxHQUFQO0FBQ0Q7O0FBRUQsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxHQUFELE9BREY7QUFFR1k7QUFGSCxPQURGO0FBTUQ7Ozs7RUFoRGVDLE1BQU1DLFM7O0FBb0R4QkMsT0FBT3BCLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJIb21lcGFnZUFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBldmVudExpc3Q6IG51bGwsXG4gICAgICBwYWdlOiAnaG9tZXBhZ2UnLFxuICAgICAgZmVhdHVyZWRFdmVudDogbnVsbFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVFbnRyeUNsaWNrID0gdGhpcy5oYW5kbGVFbnRyeUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIHN1Y2Nlc3NIYW5kbGVyID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXZlbnRMaXN0OiBkYXRhfSk7XG4gICAgfTtcbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJy9ldmVudFRhYmxlJyxcbiAgICAgIHN1Y2Nlc3M6IHN1Y2Nlc3NIYW5kbGVyLmJpbmQodGhpcylcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUVudHJ5Q2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBhZ2U6ICdldmVudERldGFpbHMnLFxuICAgICAgZmVhdHVyZWRFdmVudDogZXZlbnRcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgdmlldztcbiAgICBpZiAodGhpcy5zdGF0ZS5wYWdlID09PSAnaG9tZXBhZ2UnKSB7XG4gICAgICB2aWV3ID0gXG4gICAgICAgICg8ZGl2PlxuICAgICAgICAgIDxFdmVudExpc3RcbiAgICAgICAgICAgIGV2ZW50RGF0YT17dGhpcy5zdGF0ZS5ldmVudExpc3R9XG4gICAgICAgICAgICBoYW5kbGVFbnRyeUNsaWNrPXt0aGlzLmhhbmRsZUVudHJ5Q2xpY2t9XG4gICAgICAgICAgLz47XG4gICAgICAgIDwvZGl2Pik7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnBhZ2UgPT09ICdldmVudERldGFpbHMnKSB7XG4gICAgICB2aWV3ID0gPEV2ZW50UGxhbm5pbmcgZmVhdHVyZWRFdmVudD17dGhpcy5zdGF0ZS5mZWF0dXJlZEV2ZW50fS8+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2IC8+XG4gICAgICAgIHt2aWV3fVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbndpbmRvdy5BcHAgPSBBcHA7Il19