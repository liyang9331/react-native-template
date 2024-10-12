import axios from 'axios';
import { Dimensions } from 'react-native';

// 这里用的是 https://mockapi.io，如果是业务请求，建议将首屏主要接口合并成一个，减少闪屏
export const animalsUrl = 'https://61c48e65f1af4a0017d9966d.mockapi.io/animals';
export const catsUrl = 'https://61c48e65f1af4a0017d9966d.mockapi.io/cats';
export const iconsUrl = 'https://61c48e65f1af4a0017d9966d.mockapi.io/icons';

const halfWindowWidth = Dimensions.get('window').width / 2;

export async function queryIcons() {
  const {data} = await axios.get(`${iconsUrl}`);
  return data.map(item => ({
    ...item,
    image: item.image.replace('http://', 'https://'),
  }));
}

export async function queryAnimals({ pageParam = 0 }) {
  const { data } = await axios.get(`${animalsUrl}?page=${pageParam}`);
  // 真正从需要从后端拿到的数据
  return formatMock(data);
}

export async function queryCats({ pageParam = 0 }) {
  const { data } = await axios.get(`${catsUrl}?page=${pageParam}`);
  // 真正从需要从后端拿到的数据
  return formatMock(data);
}

// mock 数据源，不完全符合业务需求，此处做了兼容
function formatMock(mockData) {
  const items = mockData.items.map((item, index) => {
    // recyclerListView 的高度需要服务端下发，这里随机了生成的
    const imageWidth = halfWindowWidth + ((index % 9) + 4);
    const imageHeight = ((index % 8) + 5) * 20;

    return {
      ...item,
      id: item.id + mockData.requestId,
      // 改用 https
      // 测试图片源地址一样，但每次请求返回图片都不一样，因此有时候渲染后还会再渲染一次，使用固定 CDN 图片不会存在这种情况
      image: item.image.replace('http://', 'https://'),
      imageWidth,
      imageHeight,
    };
  });
  return { ...mockData, items };
}
