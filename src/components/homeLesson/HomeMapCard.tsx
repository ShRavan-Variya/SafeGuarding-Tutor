import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import Theme from '../../theme/Theme'

interface Props{
    Arrive: ()=> void;
    name: string;
    address: string;
    distance: string;
    refRBSheet:any;
}
const HomeMapCard = (props:Props) => {
  return (
    <>
    <View style={[styles.container, {backgroundColor: Theme.colors.bgHeading1}]}>
        <View style={[styles.row, {paddingHorizontal: Theme.responsiveSize.size10}]}>
            <View style={styles.secondColumn}>
                <View style={styles.row}>
                    <Text style={styles.heading}>{props.name}</Text>
                    <View style={styles.startingInWrrapper}>
                        <Text style={styles.subText}>{props.distance}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.subText}>{props.address}</Text>
                </View>
            </View>
            <TouchableOpacity style={[styles.secondColumn, {justifyContent:'center'}]}>
                <Image style={styles.timmerImage} source={Theme.icons.navigation} />
            </TouchableOpacity>
        </View>
        <View>
            <Image style={styles.mapImage} source={Theme.icons.map}/>
        </View>
        <TouchableOpacity style={styles.arriveButton} onPress={()=> props.Arrive()}>
            <Text style={styles.arriveButtonText}>{'Arrive'}</Text>
        </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.messageButton} onPress={()=>props.refRBSheet.current.open()}>
        <Image style={styles.messageButtonImage} source={Theme.icons.send_message} />
        <Text style={styles.messageButtonText}>{'Send Meassage'}</Text>
    </TouchableOpacity>
    </>
  )
}

export default HomeMapCard