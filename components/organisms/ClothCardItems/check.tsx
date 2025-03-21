import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView
} from 'react-native';

interface CartProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

const cartItems: CartProduct[] = [
  {
    id: 1,
    title: 'iPhone 16 Pro Max 128 GB',
    description: 'Apple',
    price: 135999,
    quantity: 3,
  },
  {
    id: 2,
    title: 'Samsung S25 Ultra',
    description: 'Samsung',
    price: 125000,
    quantity: 3,
  },
  {
    id: 3,
    title: 'Sony Play Station 5',
    description: 'Sony',
    price: 55000,
    quantity: 3,
  },
  {
    id: 4,
    title: 'Sony Play Station 5',
    description: 'Sony',
    price: 55000,
    quantity: 3,
  },
  {
    id: 5,
    title: 'Sony Play Station 5',
    description: 'Sony',
    price: 55000,
    quantity: 3,
  },
  {
    id: 6,
    title: 'Sony Play Station 5',
    description: 'Sony',
    price: 55000,
    quantity: 3,
  },
  {
    id: 7,
    title: 'Sony Play Station 5',
    description: 'Sony',
    price: 55000,
    quantity: 3,
  },
  {
    id: 8,
    title: 'Sony Play Station 5',
    description: 'Sony',
    price: 55000,
    quantity: 3,
  },
];

const CartProduct = ({title, description, price}: CartProduct) => {
  return (
    <View style={styles.cartProductContainer}>
      <View style={styles.cartProductImg}>
        <Text>IMG</Text>
      </View>
      <View style={styles.cartProductDetails}>
        <View>
          <View style={styles.cartProductHeader}>
            <Text style={[styles.textStrong, styles.text300]}>{title}</Text>
            <TouchableOpacity>
              <Text>x</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.textLight}>{description}</Text>
          </View>
        </View>

        <View style={styles.productCardFooter}>
          <Text>{price}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity>
              <Text>-</Text>
            </TouchableOpacity>

            <Text>4</Text>

            <TouchableOpacity>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const CartSummaryView = () => {
  return (
    <View style={styles.checkoutSummaryContainer}>
      <View style={styles.promoCodeContainer}>
        <TextInput
          style={styles.promoCodeInput}
          placeholder="Enter promo code"
        />
        <TouchableOpacity>
          <Text>Apply</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.shippingChargesContainer}>
        <View style={[styles.dFlex, styles.row, styles.jSpaceBet]}>
          <Text>Subtotal</Text>
          <Text>$590</Text>
        </View>
        <View style={[styles.dFlex, styles.row, styles.jSpaceBet]}>
          <Text>Shipping</Text>
          <Text>$20</Text>
        </View>
        <View style={styles.dotSeparator} />
        <View style={[styles.dFlex, styles.row, styles.jSpaceBet]}>
          <Text style={[styles.textStrong]}>Total</Text>
          <Text>$320</Text>
        </View>
      </View>
    </View>
  );
};

const CheckoutOption = () => {
  return (
    <TouchableOpacity style={[styles.checkoutBtn, styles.flexCenter]}>
      <Text style={styles.checkoutBtnTitle}>Checkout</Text>
      <Text style={[styles.checkoutBtnTitle, styles.checkoutBtnTitleIcon]}>
        iii
      </Text>
    </TouchableOpacity>
  );
};

const CheckoutView = () => {
  return (
    <SafeAreaView style={styles.container}>
    
      {/* ScrollView wraps both cart and summary */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <FlatList
          data={cartItems}
          renderItem={({item}) => <CartProduct {...item} />}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={false} // Disable FlatList scrolling since ScrollView will handle it
        />
        <CartSummaryView />
      </ScrollView>

      {/* Checkout Button (Fixed at Bottom) */}
      <View style={styles.checkoutFooter}>
        <CheckoutOption />
      </View>
    </SafeAreaView>
  );
};

export default CheckoutView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  scrollContainer: {
    paddingBottom: 100, // Prevents content from being hidden behind fixed footer
  },

  cartProductContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f3f3f3',
  },
  cartProductImg: {
    height: 80,
    width: 80,
    backgroundColor: 'olive',
    borderRadius: 10,
  },
  cartProductDetails: {
    flex: 1,
    padding: 12,
  },
  cartProductHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text300: {
    fontSize: 18,
  },
  textStrong: {
    fontWeight: 'bold',
  },
  textLight: {
    fontWeight: '400',
    color: '#8f8f8f',
  },
  productCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#cfcfcf',
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 25,
  },
  checkoutSummaryContainer: {
    padding: 12,
  },
  promoCodeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 6,
    borderRadius: 8,
  },
  promoCodeInput: {
    flex: 1,
  },
  dFlex: {
    display: 'flex',
  },
  row: {
    flexDirection: 'row',
  },
  jSpaceBet: {
    justifyContent: 'space-between',
  },
  shippingChargesContainer: {
    marginTop: 12,
    gap: 12,
  },
  dotSeparator: {
    borderWidth: 0.5,
    borderStyle: 'dotted',
    borderColor: 'silver',
  },

  checkoutFooter: {
    padding: 12,
    backgroundColor: '#fff',
    elevation: 10, // Adds shadow for better visibility
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  checkoutBtn: {
    backgroundColor: '#e78129',
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  checkoutBtnTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  checkoutBtnTitleIcon: {
    position: 'absolute',
    right: 40,
    fontWeight: 'normal',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
