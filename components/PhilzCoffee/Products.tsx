import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import Animated from "react-native-reanimated";

import { products } from "./Model";

const { width } = Dimensions.get("window");
const SIZE = 200;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface ProductsProps {
  x: Animated.SharedValue<number>;
}

const Products = ({ x }: ProductsProps) => {
  return (
    <View style={styles.container} pointerEvents="none">
      {products.map((product, index) => {
        return (
          <View key={index} style={styles.container}>
            <Image
              source={product.picture}
              style={{ width: SIZE, height: SIZE * product.aspectRatio }}
            />
          </View>
        );
      })}
    </View>
  );
};

export default Products;
