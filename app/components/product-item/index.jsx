import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ProductItem = ({ productBrand, name, price, barcode, category, onPress, testID }) => {
return (
  <View 
    style={styles.container}
    testID={testID}  
  >
    <View style={styles.detailsContainer}>
      <Text style={styles.brandNameText}>{productBrand}</Text>
      <Text 
        style={styles.productNameText} 
        ellipsizeMode='tail' 
        numberOfLines={2}
        testID='product-name'
      >{name}</Text>
      <Text 
        style={styles.detailsText}
        testID='product-category'  
      >Category - {category}</Text>
      <Text 
        style={styles.detailsText}
        testID='product-barcode'  
      >{barcode}</Text>
      <Text 
        style={styles.priceText}
        testID='product-price'  
      >{price} pesos</Text>
    </View>
    <TouchableOpacity
      accessibilityRole='button'
      style={styles.addToCartButton}
      onPress={onPress}
      testID='add-to-cart-button'
    >
      <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
  </View>
)
}

export default ProductItem;

