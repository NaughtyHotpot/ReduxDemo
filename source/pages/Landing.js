import React, {Component} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import {MyButton} from '../components/Button';
export default class Landing extends Component<> {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
    };
  }
  componentDidMount(): void {
    console.log('componentDidMount');
  }

  handleOnChange = text => {
    this.setState({value: text, mobile: text});
  };
  doRegister = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Landing</Text>
          <Text style={styles.normalText}>Hello!</Text>
          <View style={styles.centerBlock}>
            <Image
              style={{width: 20, height: 20}}
              source={{uri: this.props.navigation.state.params.data.avatar}}
            />
            <Text>{this.props.navigation.state.params.data.name}</Text>
          </View>
          <MyButton title="Continue" onPress={this.doRegister} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  content: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
    margin: 5,
    marginTop: 64,
  },
  boldText: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    opacity: 0.75,
    margin: 5,
    marginTop: 32,
  },
  normalText: {
    fontSize: 12,
    textAlign: 'center',
    opacity: 0.75,
    margin: 5,
    marginTop: 5,
  },
  textBox: {
    fontSize: 16,
    height: 50,
    width: '80%',
    borderColor: '#E9ECEE',

    borderWidth: 1,
    paddingLeft: 20,
    marginTop: 5,
    padding: 15,
    backgroundColor: '#E9ECEE',
  },
  centerBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
