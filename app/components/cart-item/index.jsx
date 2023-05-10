import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';


const CartItem = ({ name, category, price, quantity, onPress}) => {

return (
  <View style={styles.container}>
    <View style={styles.detailsContainer}>
      <View style={styles.productNameContainer}>
      <Text 
        style={styles.productNameText}
        numberOfLines={2}  
      >{name}</Text>
      <Text 
        style={styles.detailsText}
      >{category}</Text>
      </View>
      <Text 
        style={styles.priceText}  
      >{price} Pesos</Text>
    </View>
    <View style={styles.bottomContainer}>
    <Text style={styles.detailsText}
    
      >Quantity: {quantity}</Text>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={onPress}
      >
      <Text 
        style={styles.removeText}  
      >Remove Item</Text>
      </TouchableOpacity> 
    </View>
    </View>
)
}

export default CartItem;