import React, { useRef } from 'react';
import { Dimensions, FlatList, ListRenderItemInfo } from 'react-native';
import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, interpolate, Extrapolation } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import styled from '@emotion/native';

const { width } = Dimensions.get('window');

interface CarouselProps {
  data: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const translateX = useSharedValue(0);
  const animatedStyles = useRef(data.map(() => useAnimatedStyle(() => ({}))));

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      translateX.value = event.contentOffset.x;
    },
  });

  data.forEach((_, index) => {
    animatedStyles.current[index] = useAnimatedStyle(() => {
      const scale = interpolate(
        translateX.value,
        [(index - 1) * width, index * width, (index + 1) * width],
        [0.8, 1, 0.8],
        Extrapolation.CLAMP
      );

      return {
        transform: [{ scale }],
      };
    });
  });

  const renderItem = ({ item, index }: ListRenderItemInfo<React.ReactNode>) => {
    return (
      <AnimatedItemContainer style={animatedStyles.current[index]}>
        {item}
      </AnimatedItemContainer>
    );
  };

  return (
    <PanGestureHandler>
      <Animated.View>
        <Animated.FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
        />
      </Animated.View>
    </PanGestureHandler>
  );
};

const AnimatedItemContainer = styled(Animated.View)`
  width: ${width}px;
  justify-content: center;
  align-items: center;
`;

export default Carousel;