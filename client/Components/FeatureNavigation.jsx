var FeatureNavigation = (props) => (
  <div id="bottomNav">
    <button className="wtbBtn" value="whatToBringBtn" onClick={(e) => props.changeDisplay(e)}>What To Bring</button>
    <button className="actBtn" value="activitiesBtn" onClick={(e) => props.changeDisplay(e)}>Activities (under construction)</button>
    <button className="reminderBtn" value="reminderBtn" onClick={(e) => props.changeDisplay(e)}>Reminders (under construction)</button>
    <button className="chatBtn" value="chatBtn" onClick={(e) => props.changeDisplay(e)}>Chatroom (dummy)</button>
    <button className="photosBtn" value="photosBtn" onClick={(e) => props.changeDisplay(e)}>Photos</button>
  </div>
);

window.FeatureNavigation = FeatureNavigation;