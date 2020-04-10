import React, {useState} from 'react';
import {View, StyleSheet, ViewProps} from 'react-native';
import lightFormat from 'date-fns/lightFormat';
import Text from './Text';
import useInterval from '../useInterval';

interface Props {
  location?: string;
  uses24HourClock: boolean;
}

const Time: React.FC<Props & ViewProps> = ({
  location,
  uses24HourClock,
  ...rest
}) => {
  const [time, setTime] = useState(new Date());
  useInterval(() => {
    setTime(new Date());
  }, 1000);

  return (
    <View {...rest}>
      <Text style={styles.location} muted>
        {location}
      </Text>
      <View style={styles.container}>
        <Text style={styles.time}>
          {lightFormat(time, uses24HourClock ? 'H' : 'h')}
        </Text>
        <Text style={styles.time}>{':'}</Text>
        <Text style={styles.time}>{lightFormat(time, 'mm')}</Text>
        {!uses24HourClock && (
          <Text style={styles.ampm} muted>
            {lightFormat(time, 'a')}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  location: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  container: {
    position: 'relative',
    flexDirection: 'row',
  },
  time: {
    fontFamily: 'Lato-Regular',
    fontSize: 80,
    letterSpacing: 3,
    textAlign: 'center',
  },
  ampm: {
    position: 'absolute',
    top: '40%',
    right: -24,
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    letterSpacing: 0.64,
    transform: [
      {
        rotate: '-90deg',
      },
    ],
  },
});

export default Time;
