import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import ClothCardItems from '../components/organisms/ClothCardItems/ClothCardItems.component';
import ClothsCheckout from '../components/organisms/ClothsCheckout/ClothsCheckout.component';
import CheckoutView from '../components/organisms/ClothCardItems/check';
import Products from '../components/organisms/ClothCardItems/check1';

export default function MyntraHome() {
    return (
        <>
            {/* <ClothCardItems /> */}
            {/* <ClothsCheckout /> */}
            {/* { <CheckoutView /> } */}
            { <Products /> }
        </>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#f5f5f5',
    },
});
