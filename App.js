import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image
} from "react-native";

import StateView from "./components/StateView"

const renderInfo = (index, total, context) => {
  return (
    <View style={styles.infoStyle}>
      <Text style={{ color: "grey" }}>
        <Text style={styles.infoText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  );
};

export default function App() {
  // let image1 = "./assets/images/cute.jpg";
  return (
    <View style={styles.container}>
      {/* <NumberView /> */}
      <StateView />
      {/* <Swiper
        renderPagination={renderInfo}
        showsPagination={false}
        style={styles.wrapper}
        loop={true}
      >
        <View
          style={styles.slide}
          title={
            <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
          }
        >
          <Image
            style={styles.image}
            source={require("./assets/images/cute.jpg")}
          />
        </View>
        <View
          style={styles.slide}
          title={
            <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
          }
        >
          <Image
            style={styles.image}
            source={require("./assets/images/flowerRug.jpg")}
          />
        </View>
        <View
          style={styles.slide}
          title={
            <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
          }
        >
          <Image
            style={styles.image}
            source={require("./assets/images/thinking.jpg")}
          />
        </View>
        <View
          style={styles.slide}
          title={
            <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
          }
        >
          <Text>hello</Text>
        </View>
      </Swiper> */}
    </View>
  );
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  image: {
    width,
    flex: 1
  },
  infoStyle: {
    position: "absolute",
    bottom: 10,
    right: 10
  },
  infoText: {
    color: "white",
    fontSize: 20
  }
});
