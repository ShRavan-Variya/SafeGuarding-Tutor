import { StyleSheet } from "react-native";
import Theme from "../../theme/Theme";

const styles = StyleSheet.create({
    container:{
        flex: Theme.responsiveSize.size1,
        backgroundColor: Theme.colors.white,
        paddingHorizontal: Theme.responsiveSize.size10,
        paddingVertical: Theme.responsiveSize.size15,

    },
    lessonText:{
        fontSize: Theme.responsiveSize.size14,
        color: Theme.colors.textColor4
    },
    studentName:{
        fontSize: Theme.responsiveSize.size16,
        color: Theme.colors.textColor2,
        fontWeight: '700',
        marginLeft: Theme.responsiveSize.size10
    },
    firstRow:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: Theme.responsiveSize.size10,
        alignItems: 'center'
    },
    subjectWrapper:{
        borderRadius: 20,
        paddingHorizontal: Theme.responsiveSize.size10,
        paddingVertical: Theme.responsiveSize.size5,
    }
});

export default styles;