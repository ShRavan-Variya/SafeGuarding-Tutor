import { StyleSheet } from "react-native";
import Theme from "../theme/Theme";

export const styles = StyleSheet.create({
    image_wrapper:{
        display:'flex', 
        flexDirection:'row', 
        // position: 'absolute',
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: Theme.responsiveSize.size75,
        height: Theme.responsiveSize.size35,
        // marginLeft: -Theme.responsiveSize.size21, 
        marginTop: -Theme.responsiveSize.size8, 
        paddingHorizontal: Theme.responsiveSize.size7, 
        paddingVertical: Theme.responsiveSize.size10, 
        borderRadius: Theme.responsiveSize.size40,
        elevation: Theme.responsiveSize.size2
    },
    top_image_wrapper:{
        display:'flex', 
        flexDirection:'row', 
        minWidth: Theme.responsiveSize.size85,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    top_label:{
        color:Theme.colors.appColorLight,
        fontSize:Theme.responsiveSize.size14,
        fontWeight:'600',
        marginLeft: Theme.responsiveSize.size10
    },
    label:{
        color:Theme.colors.white,
        fontSize:Theme.responsiveSize.size10,
        fontWeight:'600'
    },
    image:{
        width:Theme.responsiveSize.size16,
        height:Theme.responsiveSize.size16,
        marginRight:Theme.responsiveSize.size4,
    }
})