import {createStyleBuilder} from 'react-native-zephyr';
import {View, Text, Image} from 'react-native';

export const {styles, useStyles, makeStyledComponent, styled} =
  createStyleBuilder();

// Export some styled components
export const StyledView = makeStyledComponent(View);
export const StyledImage = makeStyledComponent(Image);
export const StyledText = makeStyledComponent(Text);
