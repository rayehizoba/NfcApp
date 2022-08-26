import {Animated} from 'react-native';

const forSlideScreen = ({current, next, inverted, layouts: {screen}}) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0,
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                64, // Focused, but offscreen in the beginning
                0, // Fully focused
                -64, // Fully unfocused
              ],
              extrapolate: 'clamp',
            }),
            inverted,
          ),
        },
      ],
      opacity: Animated.multiply(
        progress.interpolate({
          inputRange: [0, 0.3, 1, 1.3, 2],
          outputRange: [
            0,
            0, // Focused, but offscreen in the beginning
            1, // Fully focused
            0,
            0, // Fully unfocused
          ],
          extrapolate: 'clamp',
        }),
        inverted,
      ),
    },
  };
};

export default forSlideScreen;
