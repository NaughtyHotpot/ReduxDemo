import React, {Component} from 'react';
import AppContainer from './AppContainer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../actions/AppActions';
import {
  ActivityIndicator,
  Text,
  View,
  Modal,
  SafeAreaView,
  Platform,
} from 'react-native';
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
    const progressBar = (
      <ActivityIndicator
        animating={true}
        style={{alignSelf: 'center', marginTop: 5, marginBottom: 20}}
        size="small"
      />
    );
    return (
      <View style={{flex: 1}}>
        <Modal
          animationType="fade"
          transparent={true}
          onRequestClose={() => {}}
          visible={this.props.state.appState.isInProgress}>
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                width: 300,
                alignSelf: 'center',
                borderRadius: 20,
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  padding: 20,
                  ...Platform.select({
                    ios: {
                      paddingBottom: 5,
                    },
                    android: {
                      paddingBottom: 20,
                    },
                  }),
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    alignSelf: 'center',
                  }}>
                  In progress...
                </Text>
              </View>

              {progressBar}
            </View>
          </SafeAreaView>
        </Modal>
        <AppContainer screenProps={this.props} />
      </View>
    );
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
