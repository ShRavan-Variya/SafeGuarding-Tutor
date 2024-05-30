import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import Theme from '../../theme/Theme'
import styles from './styles'
import LessonTimeBox from '../../components/homeLesson/LessonTimeBox'
import HomeMapCard from '../../components/homeLesson/HomeMapCard'

const HomeLesson = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.lessonText}>{'Current Lesson'.toUpperCase()}</Text>
        <View style={styles.firstRow}>
          <View style={[styles.subjectWrapper, {backgroundColor: Theme.colors.planned_online}]}>
            <Text style={[styles.lessonText, {color: Theme.colors.white, fontWeight:'500'}]}>{'Math'.toUpperCase()}</Text>
          </View>
          <Text style={styles.studentName}>{'Oliver Jones'.toUpperCase()}</Text>
        </View>
          <LessonTimeBox 
            title={'Friday March 8'}
            startingIn={'1h24m'}
            startTime={'15:00'}
            endTime={'17:00'}
          />
          <HomeMapCard />
    </SafeAreaView>
  )
}

export default HomeLesson