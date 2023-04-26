
import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

const LoadingScreen = () => {
  const primaryColor = useTheme().colors.primary
  return (
    <ActivityIndicator size="large" color={primaryColor} style={styles.loading}/>
  )
}
const styles = StyleSheet.create({
 loading : { flex:1, alignSelf: "center"}
})
export default LoadingScreen;
