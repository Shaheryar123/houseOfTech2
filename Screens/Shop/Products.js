import React, {useState} from 'react';
import {Text, Image, View} from 'react-native';
import styles from './ShopStyles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Col, Row, Grid} from 'react-native-easy-grid';

const Products = ({data}) => {
  return (
    <View>
      <Image source={data.image} style={{width: wp(30), height: hp(20)}} />
      <Text style={{color: '#fff'}}>dd</Text>
    </View>
  );
};

export default Products;

//   const [search, setSearch] = useState('');
//   const renderItem = ({item}) => (
//     <Text style={{color: '#fff'}}>{item.text}</Text>
//   );

{
  /* <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
<Image
  source={e.image}
  style={{flexBasis: '40%', width: wp(30), height: hp(30)}}
  //   style={{width: wp(30), height: heightPercentageToDP(30)}}
/>
{/* <Text style={{color: '#fff'}}>sadasd</Text> */
}
// </View>
