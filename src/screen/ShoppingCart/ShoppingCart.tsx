import {View, Text, Button, Image, StyleSheet} from 'react-native';

const ShoppingCart = ({navigation}) => {
  return (
    // VIew 的默认样式是{display: "flex",flexDirection:'column'}。
    // 也就是说，父容器是弹性盒子，且主轴是纵轴，子元素会沿着纵轴（主轴）方向排列，
    // 因此在父元素不写任何样式时，子元素是从上往下排列的。
    <View>
      <View>
        <Text>名称</Text>
        <Text>价格</Text>
        <Text>数量</Text>
      </View>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}
    </View>
  );
};

// 样式表
const styles = StyleSheet.create({});
export default ShoppingCart;
