import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  shop: {backgroundColor: '#000', height: '100%'},
  topImg: {height: 150, width: '100%'},
  pageCont: {marginTop: 30, marginHorizontal: 20},
  image: {height: 100, width: 100, borderRadius: 5},
  shopTitle: {color: '#fff', fontWeight: '600'},
  shopDetail: {color: '#fff', marginTop: 5},
  midText: {color: '#fff', marginTop: 20, fontSize: 21, fontWeight: '500'},
  shopFeats: {flexDirection: 'row', marginTop: 20},
  shopFeatImage: {height: 160, width: 160, borderRadius: 10},
  shopFeatText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
    fontWeight: '500',
    width: 160,
  },
  shopFeatItems: {color: '#fff', textAlign: 'center'},
  searchbarCont: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  searchBar: {
    backgroundColor: '#323333',
    borderRadius: 25,
    color: '#fff',
  },
  filterIcon: {
    backgroundColor: '#323333',
    borderRadius: 50,
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
