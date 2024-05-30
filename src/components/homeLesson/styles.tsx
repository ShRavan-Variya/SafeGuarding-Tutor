import { StyleSheet } from "react-native";
import Theme from "../../theme/Theme";

const styles = StyleSheet.create({
    container:{
        borderRadius: Theme.responsiveSize.size10,
        backgroundColor: Theme.colors.planned_face,
        width: '100%',
        padding: Theme.responsiveSize.size15,
        marginTop: Theme.responsiveSize.size15
    },
    firstColumn:{
        alignItems: 'center',
        justifyContent: 'center',
        width:'20%'
    },
    secondColumn:{
        width:'80%'
    },
    row:{
        flexDirection: 'row',
        marginVertical: Theme.responsiveSize.size5
    },
    timmerImage:{
        width: Theme.responsiveSize.size40,
        height: Theme.responsiveSize.size40,
    },
    heading:{
        fontSize: Theme.responsiveSize.size16,
        color: Theme.colors.textColor2,
        fontWeight: '700'
    },
    startingInWrrapper:{
        borderRadius: Theme.responsiveSize.size10,
        backgroundColor: Theme.colors.white,
        paddingHorizontal: Theme.responsiveSize.size10,
        marginLeft: Theme.responsiveSize.size15
    },
    subText:{
        fontSize: Theme.responsiveSize.size14,
        color: Theme.colors.textColor2,
        fontWeight: '300'
    },
    separator:{
        borderWidth:0.3, 
        borderColor: Theme.colors.white, 
        height:'80%', 
        marginHorizontal: Theme.responsiveSize.size10
    },
    mapImage:{
        width: '100%'
    }
});

export default styles;