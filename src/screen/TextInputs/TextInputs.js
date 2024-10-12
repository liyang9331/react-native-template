import React from 'react';
import {StyleSheet, TextInput, ScrollView} from 'react-native';

const TextInputs = ({}) => {
  const textRef = React.useRef('');
  return (
    <ScrollView style={styles.scrollView}>
      <TextInput
        onChangeText={text => {
          textRef.current = text;
        }}>
        输入
      </TextInput>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: 'pink',
    flex: 1,
  },
  texts: {
    fontSize: 18,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
export default TextInputs;
