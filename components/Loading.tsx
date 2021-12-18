import React, {FC} from 'react';
import {View, StyleSheet, Text, StatusBar} from "react-native";

interface Props {

}

export const Loading: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <Text style={styles.text}>Получение погоды...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#8fd0f8",
  },
  text: {
    fontSize: 26,
    color: "#2c2c2c"
  }
})
