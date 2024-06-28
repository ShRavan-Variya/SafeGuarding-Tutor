import { StyleSheet } from "react-native";
import Theme from "../../theme/Theme";

const styles = StyleSheet.create({
    container:{
        borderRadius: Theme.responsiveSize.size10,
        backgroundColor: Theme.colors.planned_face,
        width: '100%',
        marginTop: Theme.responsiveSize.size15,
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
    },
    arriveButton:{
        borderRadius: Theme.responsiveSize.size8,
        backgroundColor: Theme.colors.appColorTutor,
        paddingVertical: Theme.responsiveSize.size10,
        paddingHorizontal: Theme.responsiveSize.size10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        position: 'absolute',
        alignSelf: 'center',
        bottom: Theme.responsiveSize.size15
    },
    arriveButtonText:{
        color: Theme.colors.white,
        fontSize: Theme.responsiveSize.size16,
        fontWeight: '600'
    },
    messageButton:{
        borderRadius: Theme.responsiveSize.size8,
        borderColor: Theme.colors.appColorTutor,
        borderWidth: Theme.responsiveSize.size2,
        paddingVertical: Theme.responsiveSize.size10,
        paddingHorizontal: Theme.responsiveSize.size10,
        marginTop: Theme.responsiveSize.size40,
        display: 'flex',
        flexDirection: 'row',
        gap: Theme.responsiveSize.size8,
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        alignSelf: 'center',
        bottom: Theme.responsiveSize.size20
    },
    messageButtonText:{
        color: Theme.colors.appColorTutor,
        fontSize: Theme.responsiveSize.size16,
        fontWeight: '600',
    },
    messageButtonImage:{
        width: Theme.responsiveSize.size22,
        height: Theme.responsiveSize.size22,
    }
});

export default styles;