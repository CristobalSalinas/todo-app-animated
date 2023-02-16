import React from "react";
import {Text,Box,Center} from 'native-base';

export default function MainScreen(){
    return(
        <Center 
            _dark={{bg:'blueGray.900'}}
            _light={{bg:'blueGray:50'}}
            p={4}
            flex={1}>
            <Box>
                <Text>Hola</Text>
            </Box>
        </Center>
    );
}
