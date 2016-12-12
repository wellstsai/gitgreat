class EventPlanning extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: false
    };

    this.changeDisplay = this.changeDisplay.bind(this);
  }

  changeDisplay(e) {
    this.setState({
      tab: e.target.value
    });
  }

  render() {
    var view;
    if (this.state.tab === 'whatToBringBtn') {
      view = <WhatToBring featuredEvent={this.props.featuredEvent}/>;
    } else if (this.state.tab === 'activitiesBtn') {
      view = <Activities />;
    } else if (this.state.tab === 'reminderBtn') {
      view = <Reminders />;
    } else if (this.state.tab === 'photosBtn') {
      view = <Photos />;
    }
    return (
      <div>
        <h1>EVENT</h1>
        <div>Event: {this.props.featuredEvent.name}</div>
        <FeatureNavigation changeDisplay={this.changeDisplay} />
        {view}
      </div>
    );
  }
}
window.EventPlanning = EventPlanning;

