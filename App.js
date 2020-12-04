import React from 'react';
import { AppLoading } from 'expo';
import { Toast, Root, Button, Icon, H1 } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }


  openSnackBar(success) {
    Toast.show({
      text: success ? 'Payment Process succeeded ' : 'Payment Process Failed',
      buttonText: success ? 'Done' : 'Re-try',
      type: success ? 'success' : 'danger',
      duration: 3000

    })
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Root>
        <View style={styles.container}>
          <H1 style={styles.message}>Process your payment: 59.99$</H1>
          <Button full rounded style={styles.payBtn} onPress={() => this.openSnackBar(false)}>
            <Icon name="payment" type="MaterialIcons" />
            <Text style={styles.PayBtnTxt}>Pay</Text>
          </Button>
        </View>
      </Root>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  payBtn: {
    width: '80%',
    alignSelf: 'center'
  },
  PayBtnTxt: {
    color: 'white'
  },
  message: {
    color: '#A3A9AC',
    marginBottom: 20
  }
})
