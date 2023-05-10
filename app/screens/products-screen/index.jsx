import React, { useEffect, useState, createContext, useContext } from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import ProductItem from '../../components/product-item';
import { Context } from '../../context';
import { mockResponse } from '../../response'; 

import styles from './styles';

export const ProductsContext = createContext();
export const CartContext = createContext();


const ProductsScreen = ({ navigation }) => {
  const [productsList, setProductsList] = useState([]);
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    const fetchProducts = () => {
      setProductsList(mockResponse);
    }
    fetchProducts();
  }, []);

  const navigateToCart = () => {
    navigation.navigate('Cart');
  }

  const CartOverview = () => {
    const { cart } = state;
    let itemCount = 0;

    for (const [key, value] of Object.entries(cart)) {
      itemCount = itemCount + cart[key].quantity;
    }
    return (
      <TouchableOpacity 
        style={styles.cartOverview}
        onPress={() => navigateToCart()}  
      >
        <View style={styles.cartDetails}>
          <Text style={styles.detailsText}>Total Items: </Text>
          <Text style={styles.highlightedText}>{itemCount}</Text>
        </View>
        <View style={styles.cartDetails}>
          <Text style={styles.detailsText}>{`Proceed to Checkout =>`}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
      <FlatList
        data={productsList}
        renderItem={({item}) => {
          const { brand, display_name: displayName, category, barcode, price } = item;
          
          return (
            <ProductItem
              productBrand={brand}
              name={displayName}
              category={category}
              barcode={barcode}
              price={price}
              onPress={() => dispatch({
                type: 'ADD_TO_CART',
                payload: item
              })}
            />
          )
        }  
        }
        keyExtractor={item => item.id}
      />
      <CartOverview/>
      </View>
    </SafeAreaView>
  )
}

export default ProductsScreen;
