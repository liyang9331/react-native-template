import {View, Text, Button, Image, StyleSheet} from 'react-native';

const Styles = ({navigation}) => {
  return (
    // VIew 的默认样式是{display: "flex",flexDirection:'column'}。
    // 也就是说，父容器是弹性盒子，且主轴是纵轴，子元素会沿着纵轴（主轴）方向排列，
    // 因此在父元素不写任何样式时，子元素是从上往下排列的。
    <View>
      <Text>从上往下排列布局</Text>
      <View>
        <View style={{height: 50, backgroundColor: 'powderblue'}} />
        <View style={{height: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 50, backgroundColor: 'steelblue'}} />
      </View>
      <Text>左图右文布局</Text>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: 'https://placeimg.com/640/480/cats'}}
        />
        <Text style={{flex: 1, fontSize: 18}}>我是文字</Text>
      </View>
      <Text>文字居中布局</Text>
      <View style={styles.container}>
        <Text style={styles.texts}>我是文字1</Text>
      </View>
    </View>
  );
};

// 样式表
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // 高度确定
    height: 60,
    borderWidth: 1,
  },
  texts: {
    fontSize: 18,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
export default Styles;
