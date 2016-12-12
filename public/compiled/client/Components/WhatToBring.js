'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WhatToBring = function (_React$Component) {
  _inherits(WhatToBring, _React$Component);

  function WhatToBring(props) {
    _classCallCheck(this, WhatToBring);

    var _this = _possibleConstructorReturn(this, (WhatToBring.__proto__ || Object.getPrototypeOf(WhatToBring)).call(this, props));

    _this.state = {
      itemList: [{ item: 'mashed potatoes', cost: '20', owner: 'Jenn' }],
      currentItem: null,
      currentOwner: null,
      currentCost: null
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleItemChange = _this.handleItemChange.bind(_this);
    _this.handleCostChange = _this.handleCostChange.bind(_this);
    _this.handleOwnerChange = _this.handleOwnerChange.bind(_this);
    _this.fetchItems = _this.fetchItems.bind(_this);
    return _this;
  }

  _createClass(WhatToBring, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchItems();
    }
  }, {
    key: 'fetchItems',
    value: function fetchItems() {
      var eventParam = this.props.featuredEvent.name.split(' ').join('_');
      var successHandler = function successHandler(data) {
        this.setState({ itemList: data });
      };
      $.ajax({
        method: 'GET',
        url: '/itemList?eventName=' + eventParam,
        success: successHandler.bind(this)
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var item = {
        item: this.state.currentItem,
        cost: this.state.currentCost,
        owner: this.state.currentOwner
      };
      var successHandler = function successHandler(data) {
        this.fetchItems();
      };
      var eventParam = this.props.featuredEvent.name.split(' ').join('_');
      $.ajax({
        method: 'POST',
        url: '/itemList?eventName=' + eventParam,
        data: JSON.stringify(item),
        contentType: 'application/json',
        success: successHandler.bind(this)
      });
      event.preventDefault();
    }
  }, {
    key: 'handleItemChange',
    value: function handleItemChange(event) {
      this.setState({
        currentItem: event.target.value
      });
    }
  }, {
    key: 'handleOwnerChange',
    value: function handleOwnerChange(event) {
      this.setState({
        currentOwner: event.target.value
      });
    }
  }, {
    key: 'handleCostChange',
    value: function handleCostChange(event) {
      this.setState({
        currentCost: event.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'What To Bring Page',
        React.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          React.createElement(
            'label',
            null,
            'Owner:',
            React.createElement('input', { type: 'text', name: 'owner',
              onChange: this.handleOwnerChange
            })
          ),
          React.createElement(
            'label',
            null,
            'Item:',
            React.createElement('input', { type: 'text', name: 'item',
              onChange: this.handleItemChange
            })
          ),
          React.createElement(
            'label',
            null,
            'Cost:',
            React.createElement('input', { type: 'text', name: 'cost',
              onChange: this.handleCostChange
            })
          ),
          React.createElement('input', { type: 'submit', value: 'Submit' })
        ),
        React.createElement(
          'table',
          null,
          React.createElement(
            'caption',
            null,
            'Itemlist'
          ),
          React.createElement(
            'thead',
            null,
            React.createElement(
              'tr',
              null,
              React.createElement(
                'th',
                null,
                'Item'
              ),
              React.createElement(
                'th',
                null,
                'Cost'
              ),
              React.createElement(
                'th',
                null,
                'Owner'
              )
            )
          ),
          React.createElement(
            'tbody',
            null,
            this.state.itemList.map(function (item, index) {
              return React.createElement(
                'tr',
                { key: index },
                React.createElement(
                  'th',
                  null,
                  item.item
                ),
                React.createElement(
                  'th',
                  null,
                  item.cost
                ),
                React.createElement(
                  'th',
                  null,
                  item.owner
                )
              );
            })
          )
        )
      );
    }
  }]);

  return WhatToBring;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL1doYXRUb0JyaW5nLmpzeCJdLCJuYW1lcyI6WyJXaGF0VG9CcmluZyIsInByb3BzIiwic3RhdGUiLCJpdGVtTGlzdCIsIml0ZW0iLCJjb3N0Iiwib3duZXIiLCJjdXJyZW50SXRlbSIsImN1cnJlbnRPd25lciIsImN1cnJlbnRDb3N0IiwiaGFuZGxlU3VibWl0IiwiYmluZCIsImhhbmRsZUl0ZW1DaGFuZ2UiLCJoYW5kbGVDb3N0Q2hhbmdlIiwiaGFuZGxlT3duZXJDaGFuZ2UiLCJmZXRjaEl0ZW1zIiwiZXZlbnRQYXJhbSIsImZlYXR1cmVkRXZlbnQiLCJuYW1lIiwic3BsaXQiLCJqb2luIiwic3VjY2Vzc0hhbmRsZXIiLCJkYXRhIiwic2V0U3RhdGUiLCIkIiwiYWpheCIsIm1ldGhvZCIsInVybCIsInN1Y2Nlc3MiLCJldmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250ZW50VHlwZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpbmRleCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFc7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVSxDQUFDLEVBQUNDLE1BQU0saUJBQVAsRUFBMEJDLE1BQU0sSUFBaEMsRUFBc0NDLE9BQU8sTUFBN0MsRUFBRCxDQURDO0FBRVhDLG1CQUFhLElBRkY7QUFHWEMsb0JBQWMsSUFISDtBQUlYQyxtQkFBYTtBQUpGLEtBQWI7QUFNQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JELElBQXRCLE9BQXhCO0FBQ0EsVUFBS0UsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JGLElB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QUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQURGLFdBRkY7QUFTRTtBQUFBO0FBQUE7QUFDRyxpQkFBS1gsS0FBTCxDQUFXQyxRQUFYLENBQW9CaUMsR0FBcEIsQ0FBeUIsVUFBQ2hDLElBQUQsRUFBT2lDLEtBQVA7QUFBQSxxQkFDeEI7QUFBQTtBQUFBLGtCQUFJLEtBQUtBLEtBQVQ7QUFDRTtBQUFBO0FBQUE7QUFBS2pDLHVCQUFLQTtBQUFWLGlCQURGO0FBRUU7QUFBQTtBQUFBO0FBQUtBLHVCQUFLQztBQUFWLGlCQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUtELHVCQUFLRTtBQUFWO0FBSEYsZUFEd0I7QUFBQSxhQUF6QjtBQURIO0FBVEY7QUF0QkYsT0FERjtBQTRDRDs7OztFQWxIdUJnQyxNQUFNQyxTIiwiZmlsZSI6IldoYXRUb0JyaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgV2hhdFRvQnJpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXRlbUxpc3Q6IFt7aXRlbTogJ21hc2hlZCBwb3RhdG9lcycsIGNvc3Q6ICcyMCcsIG93bmVyOiAnSmVubid9XSxcbiAgICAgIGN1cnJlbnRJdGVtOiBudWxsLFxuICAgICAgY3VycmVudE93bmVyOiBudWxsLFxuICAgICAgY3VycmVudENvc3Q6IG51bGxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUl0ZW1DaGFuZ2UgPSB0aGlzLmhhbmRsZUl0ZW1DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNvc3RDaGFuZ2UgPSB0aGlzLmhhbmRsZUNvc3RDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU93bmVyQ2hhbmdlID0gdGhpcy5oYW5kbGVPd25lckNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmV0Y2hJdGVtcyA9IHRoaXMuZmV0Y2hJdGVtcy5iaW5kKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hJdGVtcygpO1xuICB9XG5cbiAgZmV0Y2hJdGVtcygpIHtcbiAgICB2YXIgZXZlbnRQYXJhbSA9IHRoaXMucHJvcHMuZmVhdHVyZWRFdmVudC5uYW1lLnNwbGl0KCcgJykuam9pbignXycpO1xuICAgIHZhciBzdWNjZXNzSGFuZGxlciA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2l0ZW1MaXN0OiBkYXRhfSk7XG4gICAgfTtcbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJy9pdGVtTGlzdD9ldmVudE5hbWU9JyArIGV2ZW50UGFyYW0sXG4gICAgICBzdWNjZXNzOiBzdWNjZXNzSGFuZGxlci5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICB2YXIgaXRlbSA9IHtcbiAgICAgIGl0ZW06IHRoaXMuc3RhdGUuY3VycmVudEl0ZW0sXG4gICAgICBjb3N0OiB0aGlzLnN0YXRlLmN1cnJlbnRDb3N0LFxuICAgICAgb3duZXI6IHRoaXMuc3RhdGUuY3VycmVudE93bmVyXG4gICAgfTtcbiAgICB2YXIgc3VjY2Vzc0hhbmRsZXIgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICB0aGlzLmZldGNoSXRlbXMoKTtcbiAgICB9O1xuICAgIHZhciBldmVudFBhcmFtID0gdGhpcy5wcm9wcy5mZWF0dXJlZEV2ZW50Lm5hbWUuc3BsaXQoJyAnKS5qb2luKCdfJyk7XG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgdXJsOiAnL2l0ZW1MaXN0P2V2ZW50TmFtZT0nICsgZXZlbnRQYXJhbSxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGl0ZW0pLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIHN1Y2Nlc3M6IHN1Y2Nlc3NIYW5kbGVyLmJpbmQodGhpcylcbiAgICB9KTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgaGFuZGxlSXRlbUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudEl0ZW06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlT3duZXJDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRPd25lcjogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDb3N0Q2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50Q29zdDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+V2hhdCBUbyBCcmluZyBQYWdlXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgT3duZXI6XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J293bmVyJyBcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU93bmVyQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBJdGVtOiBcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdpdGVtJyBcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSXRlbUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBDb3N0OiBcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdjb3N0JyBcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ29zdENoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPGNhcHRpb24+SXRlbWxpc3Q8L2NhcHRpb24+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+SXRlbTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Db3N0PC90aD5cbiAgICAgICAgICAgICAgPHRoPk93bmVyPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5pdGVtTGlzdC5tYXAoIChpdGVtLCBpbmRleCkgPT4gXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8dGg+e2l0ZW0uaXRlbX08L3RoPlxuICAgICAgICAgICAgICAgIDx0aD57aXRlbS5jb3N0fTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPntpdGVtLm93bmVyfTwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59Il19