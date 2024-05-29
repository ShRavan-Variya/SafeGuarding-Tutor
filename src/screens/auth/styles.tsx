import { StyleSheet } from "react-native";
import Theme from "../../theme/Theme";

export const styles = StyleSheet.create({
    image_wrapper:{
        flex: Theme.responsiveSize.size1, 
        backgroundColor: Theme.colors.appColorLight,
    },
    image:{
        resizeMode: 'contain',
        width: '80%'
    }
})