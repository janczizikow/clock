import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import {useTheme} from './Theme';

interface OwnProps {
  muted?: boolean;
}

type Props = OwnProps & TextProps;

const Text: React.FC<Props> = ({muted, style, ...rest}) => {
  const {theme} = useTheme();
  return (
    <RNText
      style={[style, {color: muted ? theme.muted : theme.text}]}
      {...rest}
    />
  );
};

export default Text;
