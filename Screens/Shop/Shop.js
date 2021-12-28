import React, {useState} from 'react';
import {ScrollView, Text, Image, View} from 'react-native';
import styles from './ShopStyles';
import Header from '../../Components/Header/Header';
import Products from './Products';
import Icon from 'react-native-vector-icons/Ionicons';
import {Searchbar} from 'react-native-paper';

import headerImage from '../../assets/headerImage.jpg';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import {Col, Row, Grid} from 'react-native-easy-grid';

const data = [
  {image: image1, text: 'Featured', items: '4 items'},
  {image: image3, text: 'Food & Drink Pet Costume', items: '5 items'},
  {image: image4, text: 'Pot Try', items: '8 items'},
];
const prodData = [
  {image: image1, text: 'Featured', items: '4 items'},
  {image: image2, text: 'Featured', items: '4 items'},
  {image: image3, text: 'Food & Drink Pet Costume', items: '5 items'},
  {image: image4, text: 'Pot Try', items: '8 items'},
];

const Shop = () => {
  const [search, setSearch] = useState('');

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.shop}>
      <Header headerName="Shop" />
      <View>
        <Image source={headerImage} style={styles.topImg} />
      </View>

      <View style={styles.pageCont}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image source={image2} style={styles.image} />
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={styles.shopTitle}>Lorem ipsum</Text>
            <Text style={styles.shopDetail}>Thailand</Text>
            <Text style={styles.shopDetail}>131 Sales</Text>
          </View>
        </View>

        <View>
          <Text style={styles.midText}>Browse by section</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} horizontal={true}>
          <View style={styles.shopFeats}>
            {data?.map((e, index) => (
              <View key={index} style={{marginLeft: 10}}>
                <Image source={e.image} style={styles.shopFeatImage} />
                <View>
                  <Text style={styles.shopFeatText}>{e.text}</Text>
                  <Text style={styles.shopFeatItems}>{e.items}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>

        <View style={styles.searchbarCont}>
          <View style={{width: '80%'}}>
            <Searchbar
              style={styles.searchBar}
              iconColor="#fff"
              color="#fff"
              placeholderTextColor="#fff"
              placeholder="Search"
              onChangeText={e => setSearch(e)}
              value={search}
            />
          </View>
          <View style={styles.filterIcon}>
            <Icon name="filter" size={30} color="#fff" />
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <Grid>
            <Row>
              {prodData?.map((e, index) => (
                <Col key={index}>
                  <Products data={e} />
                </Col>
              ))}
            </Row>
          </Grid>
        </View>
      </View>
    </ScrollView>
  );
};

export default Shop;
