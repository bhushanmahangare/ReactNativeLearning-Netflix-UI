import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  PanGestureHandler,
  State as GestureState,
} from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import {
  onGestureEvent,
  clamp,
  withSpring,
  useValues,
  timing,
  between,
} from "react-native-redash";

const {
  useCode,
  eq,
  set,
  cond,
  and,
  divide,
  block,
  call,
  interpolate,
  Extrapolate,
} = Animated;

const SWIPE_ACTIVE_THRESHOLD = 120;

export const SPRING_CONFIG = {
  damping: 40,
  mass: 1,
  stiffness: 500,
  overshootClamping: true,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
};

function Tab() {
  const [count, setCount] = useState(0);
  const [
    state,
    translationX,
    velocityX,
    animateSwipeActive, // animation state
    swipeActiveAnimation, // animation value used for interpolation
  ] = useValues([GestureState.UNDETERMINED, 0, 0, 0, 0], []);

  const gestureHandler = onGestureEvent({
    state,
    translationX,
    velocityX,
  });

  // Assign the clamped value to translateX
  const translateX = clamp(
    // Clamp the return value of withSpring
    withSpring({
      // When gesture state === GestureState.END
      // Add spring physics to translationX based on velocityX
      // And snap to 0
      state,
      value: translationX,
      velocity: velocityX,
      config: SPRING_CONFIG,
      snapPoints: [0],
    }),
    -SWIPE_ACTIVE_THRESHOLD,
    SWIPE_ACTIVE_THRESHOLD
  );

  const addCounter = () => setCount((prev) => prev + 1);

  const undoCounter = () => setCount((prev) => prev - 1);

  useCode(
    () =>
      block([
        // When the tab snaps back to position
        // If it's in range and animation state equals 1, reset animation value and state
        cond(
          and(
            eq(animateSwipeActive, 1),
            between(translateX, -10, 10),
            eq(state, GestureState.END)
          ),
          [set(animateSwipeActive, 0), set(swipeActiveAnimation, 0)]
        ),
        // When the tab hits negative threshold
        // Set animate state to 1 and call JS function
        cond(
          and(
            eq(translateX, -SWIPE_ACTIVE_THRESHOLD),
            eq(animateSwipeActive, 0)
          ),
          [set(animateSwipeActive, 1), call([], addCounter)]
        ),
        // When the tab hits positive threshold
        // Set animate state to 1 and call JS function
        cond(
          and(
            eq(translateX, SWIPE_ACTIVE_THRESHOLD),
            eq(animateSwipeActive, 0)
          ),
          [set(animateSwipeActive, 1), call([], undoCounter)]
        ),
      ]),
    []
  );

  useCode(
    () =>
      // When animate state equals 1
      // Set animation to return value from the timing function
      cond(eq(animateSwipeActive, 1), [
        set(swipeActiveAnimation, timing({ from: 0, to: 1, duration: 160 })),
      ]),
    [animateSwipeActive]
  );

  const tabScale = interpolate(swipeActiveAnimation, {
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.9, 1],
  });

  const animatedTabStyles = {
    transform: [{ translateX }, { scale: tabScale }],
  };

  const animateButtonStyles = {
    transform: [{ translateX: divide(translateX, 2) }],
  };

  const animateLeftButtonStyles = {
    ...animateButtonStyles,
    opacity: interpolate(translateX, {
      inputRange: [0, SWIPE_ACTIVE_THRESHOLD / 2],
      outputRange: [0, 1],
      extrapolate: Extrapolate.CLAMP,
    }),
  };

  const animateRightButtonStyles = {
    ...animateButtonStyles,
    opacity: interpolate(translateX, {
      inputRange: [-SWIPE_ACTIVE_THRESHOLD / 2, 0],
      outputRange: [1, 0],
      extrapolate: Extrapolate.CLAMP,
    }),
  };

  const animateThresholdMetButtonStyles = {
    transform: [
      {
        scale: interpolate(swipeActiveAnimation, {
          inputRange: [0, 0.4, 1],
          outputRange: [1, 1.2, 1],
        }),
      },
    ],
    opacity: interpolate(swipeActiveAnimation, {
      inputRange: [0, 1],
      outputRange: [1, 0.2],
    }),
  };

  return (
    <View style={styles.tabWrapper}>
      <Animated.View style={[styles.leftButton, animateLeftButtonStyles]}>
        <Animated.View style={animateThresholdMetButtonStyles}>
          <MaterialCommunityIcons name="minus" size={32} color="white" />
        </Animated.View>
      </Animated.View>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View style={animatedTabStyles}>
          <View style={styles.tab}>
            <Text style={styles.tabText}>{count}</Text>
          </View>
        </Animated.View>
      </PanGestureHandler>
      <Animated.View style={[styles.rightButton, animateRightButtonStyles]}>
        <Animated.View style={animateThresholdMetButtonStyles}>
          <MaterialIcons name="add" size={32} color="white" />
        </Animated.View>
      </Animated.View>
    </View>
  );
}

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={["cyan", "blue"]}>
      {[...Array(6)].map((_, i) => (
        <Tab key={i} />
      ))}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  tabWrapper: {
    marginBottom: 12,
    justifyContent: "center",
  },
  tab: {
    height: 60,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 30,
    marginHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  rightButton: {
    position: "absolute",
    right: -10,
  },
  leftButton: {
    position: "absolute",
    left: -10,
  },
});