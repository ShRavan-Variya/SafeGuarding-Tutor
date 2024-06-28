import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../components/header/Header';
import styles from './styles';
import InputText from '../../../components/inputText/InputText';
import Theme from '../../../theme/Theme';
import Buttons from '../../../components/button/Buttons';
import {useNavigation} from '@react-navigation/native';
import {Constants} from '../../../utils';

export default function SendIncident() {
  const [incident, setIncident] = useState('');
  const nav: any = useNavigation();
  return (
    <>
      <Header
        title="Incident"
        isGoBack={true}
        isLesson={true}
        studentName={'Oliver Jones'}
      />
      <ScrollView style={styles.container}>
        <View style={styles.incidentContainer}>
          <View style={styles.padding}>
            <InputText
              lebal={'What is the incident?'}
              onChange={setIncident}
              value={incident}
              placeholder={'Incident Title'}
            />
            <InputText
              lebal={'What is the incident?'}
              onChange={setIncident}
              value={incident}
              style={{
                maxHeight: Theme.responsiveSize.size300,
                textAlignVertical: 'top',
                paddingTop: Theme.responsiveSize.size10,
                height: Theme.responsiveSize.size300,
              }}
              placeholder={'Incident details...'}
            />
          </View>
          <Buttons
            title={'send'}
            onPress={() => {
              nav.navigate(Constants.Incident_Sent_Screen);
            }}
          />
        </View>
      </ScrollView>
    </>
  );
}
