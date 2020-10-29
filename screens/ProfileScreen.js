//import libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const ProfileScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>
                The Profile Screen
            </Text>
        </View>
    )
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});

//make this component available to the app
export default ProfileScreen;
