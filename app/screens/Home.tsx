import * as React from 'react';
import { Text, Button, View } from 'react-native';
import { Epub } from 'epubjs-rn';

export const Home = props => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>dfd</Text>
            {/* <Epub src={"https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf"} */}
		        {/* flow={"paginated"} /> */}
            <Button
                title={'Go to details screen'}
                onPress={() => {
                    props.navigation.openDrawer();
                }}
            />
        </View>
    );
};
