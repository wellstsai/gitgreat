"use strict";

var FeatureNavigation = function FeatureNavigation(props) {
  return React.createElement(
    "div",
    { id: "bottomNav" },
    React.createElement(
      "button",
      { className: "wtbBtn", value: "whatToBringBtn", onClick: function onClick(e) {
          return props.changeDisplay(e);
        } },
      "What To Bring"
    ),
    React.createElement(
      "button",
      { className: "actBtn", value: "activitiesBtn", onClick: function onClick(e) {
          return props.changeDisplay(e);
        } },
      "Activities (under construction)"
    ),
    React.createElement(
      "button",
      { className: "reminderBtn", value: "reminderBtn", onClick: function onClick(e) {
          return props.changeDisplay(e);
        } },
      "Reminders (under construction)"
    ),
    React.createElement(
      "button",
      { className: "chatBtn", value: "chatBtn", onClick: function onClick(e) {
          return props.changeDisplay(e);
        } },
      "Chatroom (dummy)"
    ),
    React.createElement(
      "button",
      { className: "photosBtn", value: "photosBtn", onClick: function onClick(e) {
          return props.changeDisplay(e);
        } },
      "Photos"
    )
  );
};

window.FeatureNavigation = FeatureNavigation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9Db21wb25lbnRzL0ZlYXR1cmVOYXZpZ2F0aW9uLmpzeCJdLCJuYW1lcyI6WyJGZWF0dXJlTmF2aWdhdGlvbiIsInByb3BzIiwiZSIsImNoYW5nZURpc3BsYXkiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsb0JBQW9CLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQ3RCO0FBQUE7QUFBQSxNQUFLLElBQUcsV0FBUjtBQUNFO0FBQUE7QUFBQSxRQUFRLFdBQVUsUUFBbEIsRUFBMkIsT0FBTSxnQkFBakMsRUFBa0QsU0FBUyxpQkFBQ0MsQ0FBRDtBQUFBLGlCQUFPRCxNQUFNRSxhQUFOLENBQW9CRCxDQUFwQixDQUFQO0FBQUEsU0FBM0Q7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBUSxXQUFVLFFBQWxCLEVBQTJCLE9BQU0sZUFBakMsRUFBaUQsU0FBUyxpQkFBQ0EsQ0FBRDtBQUFBLGlCQUFPRCxNQUFNRSxhQUFOLENBQW9CRCxDQUFwQixDQUFQO0FBQUEsU0FBMUQ7QUFBQTtBQUFBLEtBRkY7QUFHRTtBQUFBO0FBQUEsUUFBUSxXQUFVLGFBQWxCLEVBQWdDLE9BQU0sYUFBdEMsRUFBb0QsU0FBUyxpQkFBQ0EsQ0FBRDtBQUFBLGlCQUFPRCxNQUFNRSxhQUFOLENBQW9CRCxDQUFwQixDQUFQO0FBQUEsU0FBN0Q7QUFBQTtBQUFBLEtBSEY7QUFJRTtBQUFBO0FBQUEsUUFBUSxXQUFVLFNBQWxCLEVBQTRCLE9BQU0sU0FBbEMsRUFBNEMsU0FBUyxpQkFBQ0EsQ0FBRDtBQUFBLGlCQUFPRCxNQUFNRSxhQUFOLENBQW9CRCxDQUFwQixDQUFQO0FBQUEsU0FBckQ7QUFBQTtBQUFBLEtBSkY7QUFLRTtBQUFBO0FBQUEsUUFBUSxXQUFVLFdBQWxCLEVBQThCLE9BQU0sV0FBcEMsRUFBZ0QsU0FBUyxpQkFBQ0EsQ0FBRDtBQUFBLGlCQUFPRCxNQUFNRSxhQUFOLENBQW9CRCxDQUFwQixDQUFQO0FBQUEsU0FBekQ7QUFBQTtBQUFBO0FBTEYsR0FEc0I7QUFBQSxDQUF4Qjs7QUFVQUUsT0FBT0osaUJBQVAsR0FBMkJBLGlCQUEzQiIsImZpbGUiOiJGZWF0dXJlTmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBGZWF0dXJlTmF2aWdhdGlvbiA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGlkPVwiYm90dG9tTmF2XCI+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3dGJCdG5cIiB2YWx1ZT1cIndoYXRUb0JyaW5nQnRuXCIgb25DbGljaz17KGUpID0+IHByb3BzLmNoYW5nZURpc3BsYXkoZSl9PldoYXQgVG8gQnJpbmc8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFjdEJ0blwiIHZhbHVlPVwiYWN0aXZpdGllc0J0blwiIG9uQ2xpY2s9eyhlKSA9PiBwcm9wcy5jaGFuZ2VEaXNwbGF5KGUpfT5BY3Rpdml0aWVzICh1bmRlciBjb25zdHJ1Y3Rpb24pPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZW1pbmRlckJ0blwiIHZhbHVlPVwicmVtaW5kZXJCdG5cIiBvbkNsaWNrPXsoZSkgPT4gcHJvcHMuY2hhbmdlRGlzcGxheShlKX0+UmVtaW5kZXJzICh1bmRlciBjb25zdHJ1Y3Rpb24pPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjaGF0QnRuXCIgdmFsdWU9XCJjaGF0QnRuXCIgb25DbGljaz17KGUpID0+IHByb3BzLmNoYW5nZURpc3BsYXkoZSl9PkNoYXRyb29tIChkdW1teSk8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBob3Rvc0J0blwiIHZhbHVlPVwicGhvdG9zQnRuXCIgb25DbGljaz17KGUpID0+IHByb3BzLmNoYW5nZURpc3BsYXkoZSl9PlBob3RvczwvYnV0dG9uPlxuICA8L2Rpdj5cbik7XG5cbndpbmRvdy5GZWF0dXJlTmF2aWdhdGlvbiA9IEZlYXR1cmVOYXZpZ2F0aW9uOyJdfQ==