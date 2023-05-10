import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    marginVertical: 12, 
    borderBottomWidth: 0.3,
    padding: 8, 
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start', 
    justifyContent: 'space-between'
  },
  productNameContainer: {
    width: '60%',
  },
  productNameText: {
    fontWeight: 'bold',  
    marginBottom: 4
  },
  detailsText: {
    fontSize: 14
  },
  priceText: {
    fontWeight: 'bold'
  },
  bottomContainer: {
    marginTop: 16, 
    marginBottom: 8, 
    flexDirection: 'row', 
    alignItems: 'flex-start', 
    justifyContent: 'space-between'
  },
  removeText: {
    textDecorationLine: 'underline', 
    color: 'red' 
  }
});