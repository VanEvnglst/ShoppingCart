import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
container: {
  flex: 1, 
  borderRadius: 16, 
  justifyContent: 'center',
  marginVertical: 12, 
  borderWidth: 0.3, 
  backgroundColor: 'white' 
},
detailsContainer: {
  paddingHorizontal: 12,
  paddingTop: 20,
},
brandNameText: {
  fontWeight: '700',
  marginBottom: 4
},
productNameText: {
  fontWeight: '600',
  marginBottom: 4
},
detailsText: {
  fontSize: 14,
  fontWeight: '300',
  marginBottom: 4
},
priceText: {
  fontSize: 14,
  fontWeight: '700'
},
cartContainer: {
  alignItems: 'center',
},
addToCartButton: {
  margin: 16,
  padding: 5, 
  height: 45,
  borderRadius: 6,
  justifyContent: 'center', 
  alignItems: 'center',
  backgroundColor: '#6200EE',
  alignSelf: 'flex-end'
},
addToCartText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 16
},
quantityText: {
  fontWeight: '700'
}
});
