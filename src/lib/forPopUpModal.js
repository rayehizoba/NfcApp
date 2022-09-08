import tw from './tailwind';

const forPopUpModal = ({current: {progress}}) => ({
  cardStyle: {
    transform: [
      {
        scale: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0.8, 1],
        }),
      },
    ],
    opacity: progress.interpolate({
      inputRange: [0, 0.5, 0.9, 1],
      outputRange: [0, 0.25, 0.7, 1],
    }),
  },
  overlayStyle: {
    opacity: progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.75],
      extrapolate: 'clamp',
    }),
    backgroundColor: tw.color('black/70'),
  },
});

export default forPopUpModal;
