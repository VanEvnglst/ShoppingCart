import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    marginHorizontal: 16
  },
  cartOverview: {
    position: 'absolute',
    bottom: 40, 
    height: 60,
    width: '100%',
    backgroundColor: '#6200EE', 
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between', alignItems: 'center',
    padding: 20
  },
  cartDetails: {
    flexDirection: 'row', alignItems: 'center'
  },
  detailsText: {
     color: 'white'
  },
  highlightedText: {
   color: 'white', 
   fontWeight: '700',
  }
});
