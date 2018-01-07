import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

export default class App extends React.Component {
  state = {
    radius: new Animated.Value(0),
    loading: false
  };

  _onPressButton = () => {
    this.setState({ loading: true });
    this.state.radius.setValue(0);

    Animated.timing(this.state.radius, {
      toValue: 200,
      duration: 500
    }).start(() => {
      this.setState({ loading: false });
    });
  };

  render() {
    const opacity = this.state.radius.interpolate({
      inputRange: [0, 200],
      outputRange: [1, 0]
    });

    return (
      <TouchableOpacity style={styles.container} onPress={this._onPressButton}>
        <SafeAreaView style={styles.container}>
          {this.state.loading === false ? (
            <Text style={styles.text}>Tap on screen</Text>
          ) : (
            <Animated.View
              style={[
                styles.circle,
                {
                  opacity,
                  width: this.state.radius,
                  height: this.state.radius
                }
              ]}
            />
          )}
        </SafeAreaView>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#ff7676",
    fontWeight: "bold",
    fontSize: 30
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#17ead9"
  }
});
