import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Context } from '../../context';
import CartItem from '../../components/cart-item';
import styles from './styles';


const ShoppingCartScreen = () => {
  const { state, dispatch } = useContext(Context);
  const { cart } = state;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    for(const [key, value] of Object.entries(cart)) {
      total = total + cart[key].price * cart[key].quantity;
    }
    setTotalPrice(total);
  }, [cart]);

  const removeItemFromCart = (cart) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: cart
    })
  }

  return (
      <View style={styles.container}>
      {Object.entries(cart).length === 0 && (
        <View style={styles.noItemsContainer}>
          <Text style={styles.noItemsText}>No items in the cart.</Text>
        </View>
      )
      }
      {Object.entries(cart).map(([key, value]) => {
        return (
          <CartItem
            name={cart[key].display_name}
            category={cart[key].category}
            price={cart[key].price}
            quantity={cart[key].quantity}
            onPress={() => removeItemFromCart(cart[key])}
          />
        )
      })}
      <View style={styles.checkoutContainer}>
        <Text style={styles.totalPriceText}>Total amount: {totalPrice} pesos</Text>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => alert('Order placed')}
        >
          <Text style={styles.checkoutText}>
            Checkout
          </Text>

        </TouchableOpacity>
      </View>
      </View>
  )
}

export default ShoppingCartScreen;
