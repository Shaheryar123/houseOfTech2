import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const Index = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  return (
    <TabView
      navigationState={{index: index, routes: routes}}
      renderScene={renderScene}
      onIndexChange={index => setIndex({index})}
      initialLayout={{width: Dimensions.get('window').width}}
    />
  );
};

export default Index;
{
  /* <TabView
navigationState={{index, routes}}
renderScene={renderScene}
onIndexChange={setIndex}
initialLayout={{width: layout.width}}
/> */
}
