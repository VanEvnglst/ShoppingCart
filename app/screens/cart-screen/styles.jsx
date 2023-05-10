import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  cartContainer: {
    flex: 1,
    justifyContent: 'center', 
  },
  checkoutContainer: {
    flex: 1,
    marginTop: 20
  },
  totalPriceText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  checkoutButton: {
    marginTop: 12, 
    backgroundColor: '#6200EE', 
    height: 55, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 6,
  },
  checkoutText: {
    color: 'white', 
    fontWeight: '700'
  },
  noItemsContainer: {
    marginTop: 20,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  noItemsText: {
    fontSize: 20, 
    fontWeight: 'bold'
  }
});
