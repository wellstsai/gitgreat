'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventList = function (_React$Component) {
  _inherits(EventList, _React$Component);

  function EventList(props) {
    _classCallCheck(this, EventList);

    var _this = _possibleConstructorReturn(this, (EventList.__proto__ || Object.getPrototypeOf(EventList)).call(this, props));

    _this.state = {
      upcoming: [],
      completed: []
    };
    return _this;
  }

  _createClass(EventList, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.eventData) {
        var upcoming = [];
        var completed = [];
        nextProps.eventData.forEach(function (event) {
          var now = new Date();
          var eventDate = new Date(event.when);
          if (eventDate >= now) {
            upcoming.push(event);
          } else {
            completed.push(event);
          }
        });
        this.setState({ upcoming: upcoming, completed: completed });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { id: 'upcoming' },
          React.createElement(
            'h2',
            null,
            'Upcoming Events'
          ),
          this.state.upcoming.map(function (event, index) {
            return React.createElement(EventListEntry, {
              key: index, event: event,
              handleEntryClick: _this2.props.handleEntryClick
            });
          })
        ),
        React.createElement(
          'div',
          { id: 'completed' },
          React.createElement(
            'h2',
            null,
            'Completed Events'
          ),
          this.state.completed.map(function (event, index) {
            return React.createElement(EventListEntry, {
              key: index, event: event,
              handleEntryClick: _this2.props.handleEntryClick
            });
          })
        )
      );
    }
  }]);

  return EventList;
}(React.Component);

window.EventList = EventList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0V2ZW50TGlzdC5qc3giXSwibmFtZXMiOlsiRXZlbnRMaXN0IiwicHJvcHMiLCJzdGF0ZSIsInVwY29taW5nIiwiY29tcGxldGVkIiwibmV4dFByb3BzIiwiZXZlbnREYXRhIiwiZm9yRWFjaCIsImV2ZW50Iiwibm93IiwiRGF0ZSIsImV2ZW50RGF0ZSIsIndoZW4iLCJwdXNoIiwic2V0U3RhdGUiLCJtYXAiLCJpbmRleCIsImhhbmRsZUVudHJ5Q2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxTOzs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHNIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsRUFEQztBQUVYQyxpQkFBVztBQUZBLEtBQWI7QUFGaUI7QUFNbEI7Ozs7OENBQ3lCQyxTLEVBQVc7QUFDbkMsVUFBSUEsVUFBVUMsU0FBZCxFQUF5QjtBQUN2QixZQUFJSCxXQUFXLEVBQWY7QUFDQSxZQUFJQyxZQUFZLEVBQWhCO0FBQ0FDLGtCQUFVQyxTQUFWLENBQW9CQyxPQUFwQixDQUE0QixVQUFDQyxLQUFELEVBQVc7QUFDckMsY0FBSUMsTUFBTSxJQUFJQyxJQUFKLEVBQVY7QUFDQSxjQUFJQyxZQUFZLElBQUlELElBQUosQ0FBU0YsTUFBTUksSUFBZixDQUFoQjtBQUNBLGNBQUlELGFBQWFGLEdBQWpCLEVBQXNCO0FBQ3BCTixxQkFBU1UsSUFBVCxDQUFjTCxLQUFkO0FBQ0QsV0FGRCxNQUVPO0FBQ0xKLHNCQUFVUyxJQUFWLENBQWVMLEtBQWY7QUFDRDtBQUNGLFNBUkQ7QUFTQSxhQUFLTSxRQUFMLENBQWMsRUFBQ1gsVUFBVUEsUUFBWCxFQUFxQkMsV0FBV0EsU0FBaEMsRUFBZDtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssSUFBRyxVQUFSO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUcsZUFBS0YsS0FBTCxDQUFXQyxRQUFYLENBQW9CWSxHQUFwQixDQUF3QixVQUFDUCxLQUFELEVBQVFRLEtBQVIsRUFBa0I7QUFDekMsbUJBQ0Usb0JBQUMsY0FBRDtBQUNFLG1CQUFLQSxLQURQLEVBQ2MsT0FBT1IsS0FEckI7QUFFRSxnQ0FBa0IsT0FBS1AsS0FBTCxDQUFXZ0I7QUFGL0IsY0FERjtBQU1ELFdBUEE7QUFGSCxTQURGO0FBWUU7QUFBQTtBQUFBLFlBQUssSUFBRyxXQUFSO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUssZUFBS2YsS0FBTCxDQUFXRSxTQUFYLENBQXFCVyxHQUFyQixDQUF5QixVQUFDUCxLQUFELEVBQVFRLEtBQVIsRUFBa0I7QUFDMUMsbUJBQ0Usb0JBQUMsY0FBRDtBQUNFLG1CQUFLQSxLQURQLEVBQ2MsT0FBT1IsS0FEckI7QUFFRSxnQ0FBa0IsT0FBS1AsS0FBTCxDQUFXZ0I7QUFGL0IsY0FERjtBQU1ELFdBUEE7QUFGTDtBQVpGLE9BREY7QUEwQkQ7Ozs7RUFwRHFCQyxNQUFNQyxTOztBQXdEOUJDLE9BQU9wQixTQUFQLEdBQW1CQSxTQUFuQiIsImZpbGUiOiJFdmVudExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFdmVudExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXBjb21pbmc6IFtdLFxuICAgICAgY29tcGxldGVkOiBbXVxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmV2ZW50RGF0YSkge1xuICAgICAgdmFyIHVwY29taW5nID0gW107XG4gICAgICB2YXIgY29tcGxldGVkID0gW107XG4gICAgICBuZXh0UHJvcHMuZXZlbnREYXRhLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgZXZlbnREYXRlID0gbmV3IERhdGUoZXZlbnQud2hlbik7XG4gICAgICAgIGlmIChldmVudERhdGUgPj0gbm93KSB7XG4gICAgICAgICAgdXBjb21pbmcucHVzaChldmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29tcGxldGVkLnB1c2goZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3VwY29taW5nOiB1cGNvbWluZywgY29tcGxldGVkOiBjb21wbGV0ZWR9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgaWQ9J3VwY29taW5nJz4gXG4gICAgICAgICAgPGgyPlVwY29taW5nIEV2ZW50czwvaDI+XG4gICAgICAgICAge3RoaXMuc3RhdGUudXBjb21pbmcubWFwKChldmVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoIFxuICAgICAgICAgICAgICA8RXZlbnRMaXN0RW50cnkgXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH0gZXZlbnQ9e2V2ZW50fSBcbiAgICAgICAgICAgICAgICBoYW5kbGVFbnRyeUNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUVudHJ5Q2xpY2t9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD0nY29tcGxldGVkJz4gXG4gICAgICAgICAgPGgyPkNvbXBsZXRlZCBFdmVudHM8L2gyPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuY29tcGxldGVkLm1hcCgoZXZlbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoIFxuICAgICAgICAgICAgICAgIDxFdmVudExpc3RFbnRyeSBcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IGV2ZW50PXtldmVudH0gXG4gICAgICAgICAgICAgICAgICBoYW5kbGVFbnRyeUNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUVudHJ5Q2xpY2t9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG53aW5kb3cuRXZlbnRMaXN0ID0gRXZlbnRMaXN0OyJdfQ==