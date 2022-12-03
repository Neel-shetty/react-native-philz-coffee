import React from "react";
import {
  Dimensions,
  View,
  ScrollView,
  StyleSheet,
  Animated,
} from "react-native";

import { products } from "./Model";
import Card, { CARD_HEIGHT } from "./Card";
import Products from "./Products";
import Cards from "./components/Cards";
import {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  interpolateColor,
} from "react-native-reanimated";
// import { interpolateColor } from "react-native-redash";

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
  //   const style = useAnimatedStyle(() => ({
  // const backgroundColor = interpolateColor(
  //       translateX.value,
  //       products.map((_, i) => width * i),
  //       products.map((product) => product.color2)
  //     ) as string;
  //     return { flex: 1, backgroundColor };
  //     ),
  // //   }));
  // const style = useAnimatedStyle(() => {
  //   const backgroundColor = interpolateColor(
  //     translateX.value,
  //     products.map((_, i) => width * i),
  //     products.map((product) => product.color2)
  //   ) as string;
  //   return { flex: 1, backgroundColor };
  // });
  return (
    <View >
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        snapToOffsets={snapToOffsets}
        decelerationRate="fast"
        snapToEnd={false}
      >
        <View style={styles.slider}>
          <Animated.ScrollView
            // scrollEventThrottle={16}
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
          <Products />
        </View>
        <Cards />
      </ScrollView>
    </View>
  );
};

export default PhilzCoffee;
