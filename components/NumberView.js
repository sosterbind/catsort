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
    fontSize:30
  },
  viewsText: {
    color: "grey",
    fontSize: 30
  },
  textWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'mistyrose'
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
 let images = [
      {
        views: 5,
        url:
          "https://user-images.githubusercontent.com/34967988/62828293-78fd1180-bbb0-11e9-97e3-c93a692d8eaa.jpg"
      },
      {
        views: 0,
        url:
          "https://user-images.githubusercontent.com/34967988/62828312-0e98a100-bbb1-11e9-87a6-b76251b55baa.JPG"
      },
      {
        views: 0,
        url:
          "https://user-images.githubusercontent.com/34967988/62828301-9c27c100-bbb0-11e9-91e5-e2cc165e8d12.jpg"
      },
      {
        views: 0,
        url:
          "https://user-images.githubusercontent.com/34967988/62828309-e6a93d80-bbb0-11e9-8db6-ee07eb9b7be1.jpg"
      }
    ];

export default class NumberView extends Component {
  constructor(props) {
    super()
    this.images = {...images}
    // super(props)
    // props.images = images
    this.getIndex = this.getIndex.bind(this)
    this.getViews = this.getViews.bind(this)
  }

  getIndex(index) {
    console.log("current index:")
    console.log(index)
    console.log("view count at index 0:")
    console.log(this.images[index]["views"])
   // increment view count
    this.images[index].views ++
    // console.log("something that was modified", this.images)
  }
 
  getViews(index) {
    return this.images[index].views
  }


  // increseViews(images, index) {
  //   let curIdx = images[index]
  //   if (curIdx === this.getIndex(index)){
  //     let views = this.images[index]["views"]
  //     views += 1
  //   }
  // }
  render() {
    this.images = {...this.images}
    console.log("this was supposedly incremented:")
    console.log(this.images[0].views)
    return (
      <Swiper
        style={styles.wrapper}
        renderPagination={renderPagination}
        loop={true}
        onIndexChanged={this.getIndex}
      >
        {images.map((image, index) => (
          <View
            key={index}
            style={styles.slide}
         
          >
            <Image style={styles.image} source={{ uri: image.url }} />
            <View style={styles.textWrapper}>
            <Text style={styles.viewsText}>Views:{this.getViews(index)}</Text>
            </View>
            <View style={styles.textWrapper}>
            <Text style={styles.hotText}>Hotness:{image.views}</Text>
            </View>
            
          </View>
        ))}
     
      </Swiper>
    );
  }
}
