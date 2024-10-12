import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Touchable,
  Pressable,
} from 'react-native';
/**
 * Pressable 组件响应的整体流程，是从触摸屏识别物理手势开始，到系统和框架 Native 部分把物理手势
 * 转换为 JavaScript 手势事件，再到框架 JavaScript 部分确定响应手势的组件，
 * 最后到 Pressable 组件确定是点击还是长按。
 */
const Buttons = ({}) => {
  function handlePress() {}
  function handlePressIn() {}
  function handlePressOut() {}
  function handleLogPress() {}
  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.texts}>第一代 Touchable 组件</Text>
      {/* <Touchable/> */}
      <Text style={styles.texts}>第二代 Button 组件</Text>
      <Text style={styles.texts}>第三代 Pressable 组件</Text>
      <Pressable
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onLongPress={handleLogPress}
        style={({pressed}) => [
          /* 动态样式 */ styles.baseStyle,
          {opacity: pressed ? 0.5 : 1},
        ]}>
        <Text>按钮</Text>
      </Pressable>
    </ScrollView>
  );
};

// 样式表
const styles = StyleSheet.create({
  baseStyle: {width: 50, height: 50, backgroundColor: 'red'},
  texts: {
    fontSize: 18,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
export default Buttons;
