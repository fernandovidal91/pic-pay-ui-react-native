import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';
import { Button, Label } from './styles';

export default function PayButton({ onPress, focused }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Button
                colors={
                    focused
                        ? ['#04da60', '#049e47']
                        : ['#00fc6c', '#00ac4a']
                }
                start={[1, 0.2]}
            >
            <MaterialIcons
                name="attach-money"
                size={30}
                color={'#FFFFFF'}
            />
            <Label focused={focused}>Pagar</Label>
        </Button>
        </TouchableWithoutFeedback>
    );
}