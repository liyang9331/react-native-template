// import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import TopBar from '../../features/TopBar';
import List from '../../features/List';

/**
 * React Query 是一个流行的库，用于在 React 应用程序中管理和缓存异步数据。
 * 它提供了一组钩子和实用程序，简化了从各种来源（如 REST API、GraphQL 端点或本地存储）获取、缓存和更新数据的过程。
 */
import {QueryClient, QueryClientProvider, focusManager} from 'react-query';
import React from 'react';

const queryClient = new QueryClient({
  defaultOptions: {queries: {retry: 2}},
});

const ShoppingHome = ({}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{flex: 1}}>
        <TopBar />
        <List />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default ShoppingHome;
