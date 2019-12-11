import React, {Component} from 'react';
import AppContainer from './AppContainer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../actions/AppActions';
class AppRouter extends Component {
  // componentDidMount() {
  //     this.removeNotificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen: NotificationOpen) => {
  //         // Get the action triggered by the notification being opened
  //         const action = notificationOpen.action;
  //         // Get information about the notification that was opened
  //         const notification: Notification = notificationOpen.notification;
  //     });
  // }
  //
  // componentWillUnmount() {
  //     this.removeNotificationOpenedListener();
  // }

  render() {
    return <AppContainer screenProps={this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    state: state,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(appActions, dispatch),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppRouter);
