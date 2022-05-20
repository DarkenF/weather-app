import React, {FC} from 'react';
import {View, StyleSheet, Text, StatusBar, ActivityIndicator} from "react-native";

interface Props {

}

export const Loading: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
	    <ActivityIndicator size="large" />
      <Text style={styles.text}>Получение данных...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#ffffff",
  },
  text: {
    fontSize: 26,
    color: "#2c2c2c"
  }
})
