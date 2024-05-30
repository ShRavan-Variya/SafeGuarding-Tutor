import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'
import Theme from '../../theme/Theme'

const HomeMapCard = () => {
  return (
    <View style={[styles.container, {backgroundColor: Theme.colors.bgHeading1}]}>
        <View style={styles.row}>
            <View style={styles.secondColumn}>
                <View style={styles.row}>
                    <Text style={styles.heading}>{'Richmond village'}</Text>
                    <View style={styles.startingInWrrapper}>
                        <Text style={styles.subText}>{'0.6mil'}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.subText}>{'Richmond Rd, Cardiff CF24 3EU'}</Text>
                </View>
            </View>
            <View style={[styles.secondColumn, {justifyContent:'center'}]}>
                <Image style={styles.timmerImage} source={Theme.icons.navigation} />
            </View>
        </View>
        <View>
            <Image style={styles.mapImage} source={Theme.icons.map}/>
        </View>
    </View>
  )
}

export default HomeMapCard