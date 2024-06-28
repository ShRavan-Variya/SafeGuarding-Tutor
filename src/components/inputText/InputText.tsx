import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Theme from '../../theme/Theme';
import {TextInput} from 'react-native-paper';

interface Props {
  lebal: string;
  value: string;
  placeholder?: string;
  style?: any;
  editable?:boolean
  containerStyle?: any;
  multiline?: boolean;
  onBlur?:()=>void;
  onChange: (i: any) => void;
}
export default function InputText(props: Props) {
  return (
    <View style={props.containerStyle}>
      <Text style={styles.lebal}>{props.lebal}</Text>
      <TextInput
        placeholderTextColor={Theme.colors.placeholderColor}
        style={[styles.input]}
        contentStyle={props.style}
        underlineColor={'white'}
        activeUnderlineColor={Theme.colors.appColorTutor}
        mode={'flat'}
        onBlur={props.onBlur}
        multiline={props.multiline}
        placeholder={props.placeholder}
        value={props.value}
        editable={props.editable}
        onChangeText={(e: any) => props.onChange(e)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  lebal: {
    alignSelf: 'flex-start',
    fontSize: Theme.responsiveSize.size12,
    fontWeight: '600',
    color: Theme.colors.textColor29,
    marginBottom: Theme.responsiveSize.size5,
  },
  input: {
    borderWidth: Theme.responsiveSize.size1,
    borderColor: Theme.colors.inputBackground,
    borderRadius: Theme.responsiveSize.size5,
    height: Theme.responsiveSize.size40,
    fontSize: Theme.responsiveSize.size14,
    fontWeight: '700',
    color: Theme.colors.textColor29,
    padding: 0,
    backgroundColor: Theme.colors.white,
  },
});
