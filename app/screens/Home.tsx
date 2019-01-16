import * as React from 'react';
import { Text, Button, View } from 'react-native';

export const Home = props => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>this is not</Text>
            <Button
                title={'Go to details screen'}
                onPress={() => {
                    props.navigation.openDrawer();
                }}
            />
        </View>
    );
};
