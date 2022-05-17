import React from "react";
import {Navigation} from "./navigation";
import { Provider } from "react-redux";
import store from "./store";
import {SafeAreaView, StyleSheet} from "react-native";
import {Colors} from "./assets/styles";

export default function App() {

  return (
		  <Provider store={store}>
			  <Navigation />
		  </Provider>
  )
}
