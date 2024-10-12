import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';

/**
 * React Native 的 Image 组件一共支持 4 种加载图片的方法：
 * 静态图片资源；
 * 网络图片；
 * 宿主应用图片；
 * Base64 图片。
 */
const staticIcon = require('../../assets/img/public/testing.png');
const Base64 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==';
// 图片预加载接口 Image.prefetch
Image.prefetch('https://reactjs.org/logo-og.png');
const Images = ({}) => {
  return (
    // VIew 的默认样式是{display: "flex",flexDirection:'column'}。
    // 也就是说，父容器是弹性盒子，且主轴是纵轴，子元素会沿着纵轴（主轴）方向排列，
    // 因此在父元素不写任何样式时，子元素是从上往下排列的。
    <ScrollView style={styles.scrollView}>
      <Text style={styles.texts}>静态图片</Text>
      <Image source={staticIcon} style={styles.image} />
      <Text style={styles.texts}>网络图片</Text>
      <Image
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={{width: 400, height: 400}}
      />
      <Text style={styles.texts}>宿主应用图片</Text>
      <Image source={staticIcon} style={styles.image} />
      <Text style={styles.texts}>Base64图片</Text>
      <Image source={{uri: Base64}} style={styles.image} />
    </ScrollView>
  );
};

// 样式表
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
  image: {
    // width: '100%',
    width: 200,
    height: 200,
    // flex: 1,
    // height: 'auto',
  },
});
export default Images;
