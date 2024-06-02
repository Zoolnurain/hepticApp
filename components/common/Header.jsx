import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.hapticQuranAppParent}>
        <Text style={styles.hapticQuranApp}>{`Haptic
Quran App`}</Text>
        <Image
          style={styles.tayyaibahUniversity2}
          contentFit="cover"
          source={require("../../assets/logo.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hapticQuranApp: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0.3,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorSteelblue_100,
    textAlign: "left",
  },
  tayyaibahUniversity2: {
    width: 33,
    height: 41,
    overflow: "hidden",
  },
  hapticQuranAppParent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  header: {
    backgroundColor: Color.colorSkyblue,
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    alignSelf: "stretch",
    paddingTop: 50,
  },
});

export default Header;
