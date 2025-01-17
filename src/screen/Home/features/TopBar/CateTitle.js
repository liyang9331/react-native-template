import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';


const CateTitle = ({
  active,
  handlePress,
  cateId,
  children,
}) => {
  return (
    <Pressable onPress={() => handlePress(cateId)}>
      <Text style={[styles.CateTitle, active && styles.activeFont]}>
        {children}
      </Text>
      {active && <View style={styles.activeBottomLine} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  CateTitle: {
    marginHorizontal: 20,
    fontSize: 14,
  },
  activeFont: {
    fontWeight: 'bold',
  },
  activeBottomLine: {
    marginTop: 2,
    height: 2,
    width: 28,
    backgroundColor: '#FF4C39',
    marginHorizontal: 20,
  },
});

export default CateTitle;
