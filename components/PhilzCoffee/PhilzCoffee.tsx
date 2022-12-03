import React from "react";
import {
  Dimensions,
  View,
  ScrollView,
  StyleSheet,
  // Animated,
} from "react-native";

import { products } from "./Model";
import Card, { CARD_HEIGHT } from "./Card";
import Products from "./Products";
import Cards from "./components/Cards";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  interpolateColor
  // interpolateColor,
} from "react-native-reanimated";
import { mixColor } from "react-native-redash";

const { width } = Dimensions.get("window");
const snapToOffsets = [0, CARD_HEIGHT];

const styles = StyleSheet.create({
  slider: { height: CARD_HEIGHT },
});

const PhilzCoffee = () => {
  const translateX = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { x } }) => {
      translateX.value = x;
    },
  });

  const style = useAnimatedStyle(() => ({
    flex: 1,
    backgroundColor: interpolateColor(
      translateX.value,
      products.map((_, i) => width * i),
      products.map((product)=>product.color2)
      // "#ff3884", "#38ffb3"
    ),
  }));

  return (
    <Animated.View style={style}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        snapToOffsets={snapToOffsets}
        decelerationRate="fast"
        snapToEnd={false}
      >
        <View style={styles.slider}>
          <Animated.ScrollView
            scrollEventThrottle={16}
            onScroll={onScroll}
            snapToInterval={width}
            showsHorizontalScrollIndicator={false}
            horizontal
            decelerationRate="fast"
          >
            {products.map((product, index) => (
              <Card product={product} key={index} />
            ))}
          </Animated.ScrollView>
          <Products x={translateX}/>
        </View>
        <Cards />
      </ScrollView>
    </Animated.View>
  );
};

export default PhilzCoffee;
