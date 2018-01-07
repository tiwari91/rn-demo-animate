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
    radius: new Animated.Value(0)
  };

  _onPressButton = () => {
    this.state.radius.setValue(0);
    Animated.timing(this.state.radius, {
      toValue: 200,
      duration: 500
    }).start();
  };

  render() {
    const opacity = this.state.radius.interpolate({
      inputRange: [0, 200],
      outputRange: [1, 0]
    });

    return (
      <TouchableOpacity style={styles.container} onPress={this._onPressButton}>
        <SafeAreaView style={styles.container}>
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
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "red"
  }
});
