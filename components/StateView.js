import React, { Component } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
const { width } = Dimensions.get("window");

const styles = {
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
  paginationStyle: {
    position: "absolute",
    bottom: 10,
    right: 10
  },
  paginationText: {
    color: "white",
    fontSize: 20
  },
  hotText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 30
  },
  viewsText: {
    color: "grey",
    fontSize: 30
  },
  textWrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "mistyrose"
  }
};

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: "grey" }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  );
};

export default class StateView extends Component {
  constructor(props) {
    super(props);
    let prefix =
      "https://raw.githubusercontent.com/sosterbind/catsort/master/assets/images";
    let abc = `${prefix}/IMG_4621.JPG`;
    let images = [
      {
        views: 3,
        rightSwipe: 0,
        leftSwipe: 0,
        url: `${prefix}/welcome.png`
      },
      {
        views: 3,
        rightSwipe: 0,
        leftSwipe: 0,
        url:
          "https://user-images.githubusercontent.com/34967988/62828293-78fd1180-bbb0-11e9-97e3-c93a692d8eaa.jpg"
      },
      {
        views: 0,
        rightSwipe: 0,
        leftSwipe: 0,
        url:
          "https://user-images.githubusercontent.com/34967988/62828312-0e98a100-bbb1-11e9-87a6-b76251b55baa.JPG"
      },
      {
        views: 0,
        rightSwipe: 0,
        leftSwipe: 0,
        url:
          "https://user-images.githubusercontent.com/34967988/62828301-9c27c100-bbb0-11e9-91e5-e2cc165e8d12.jpg"
      },
      {
        views: 0,
        rightSwipe: 0,
        leftSwipe: 0,
        url:
          "https://user-images.githubusercontent.com/34967988/62828309-e6a93d80-bbb0-11e9-8db6-ee07eb9b7be1.jpg"
      },
      {
        views: 0,
        rightSwipe: 0,
        leftSwipe: 0,
        url: `${prefix}/apple.JPG`
      },
      {
        views: 0,
        rightSwipe: 0,
        leftSwipe: 0,
        url: `${prefix}/box.JPG`
      },
      {
        views: 0,
        rightSwipe: 0,
        leftSwipe: 0,
        url: `${prefix}/double.JPG`
      },
      {
        views: 0,
        rightSwipe: 0,
        leftSwipe: 0,
        url: `${prefix}/garden.JPG`
      },
      {
        views: 0,
        rightSwipe: 0,
        leftSwipe: 0,
        url: `${prefix}/glasses.jpg`
      },
      {
        views: 0,
        rightSwipe: 0,
        leftSwipe: 0,
        url: `${prefix}/pug.jpg`
      },
      {
        views: 0,
        rightSwipe: 0,
        leftSwipe: 0,
        url: `${prefix}/selfie.JPG`
      },
      {
        views: 0,
        rightSwipe: 0,
        leftSwipe: 0,
        url: `${prefix}/IMG_4621.JPG`
      }
    ];

    let lastIndex = images.length - 1;

    this.state = {
      images: images,
      currIdx: 0,
      prevIdx: lastIndex
    };
  }

  handleSwipe = index => {
    let newImages = [...this.state.images];
    let prev = this.state.currIdx
    let newCurIdx = index
    let direction = this.getDirection(
      index,
      prev,
      this.state.images.length
    );
    console.log(`prev: ${prev}\tindex: ${index}\tdirection: ${direction}`)
    // update previous image's swipes
    newImages[index] = {
      ...newImages[index],
      views: newImages[index].views + 1
    }
    
    if (direction === "left") {
      newImages[prev] = {
        ...newImages[prev],
        leftSwipe: newImages[prev].leftSwipe + 1
      };
    } else {
      newImages[prev] = {
        ...newImages[prev],
        rightSwipe: newImages[prev].rightSwipe + 1
      };
    }

    

    this.setState({
      ...this.state,
      images: [...newImages],
      currIdx: newCurIdx,
      prevIdx: prev
    });
  };

  getDirection = (currIdx, prevIdx, arrayLength) => {
    let lastIndex = arrayLength - 1;
    if (prevIdx === lastIndex && currIdx === 0) {
      console.log("loop, left");
      return "left";
    } else if (prevIdx === 0 && currIdx === lastIndex) {
      console.log("right");
      return "right";
    } else if (prevIdx < currIdx) {
      console.log("left");
      return "left";
    } else {
      console.log("right");
      return "right";
    }
  };

  getViews = index => {
    return this.state.images[index].views;
  };

  getHotness = index => {
    let left = this.state.images[index].leftSwipe;
    let right = this.state.images[index].rightSwipe;
    return 100 - left + right;
  };

  render() {
    return (
      <Swiper
        style={styles.wrapper}
        renderPagination={renderPagination}
        loop={true}
        onIndexChanged={this.handleSwipe}
      >
         {this.state.images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image style={styles.image} source={{ uri: image.url }} />
            <View style={styles.textWrapper}>
              <Text style={styles.viewsText}>👀 Views:{this.getViews(index)}</Text>
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.hotText}>🔥Hotness:{this.getHotness(index)}</Text>
            </View>
          </View>
        ))}
      </Swiper>
    );
  }
}
