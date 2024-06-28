import React from 'react';
import Header from '../../components/header/Header';
import {ScrollView, View} from 'react-native';
import IncidentCard from '../../components/incidentCard/IncidentCard';
import styles from './styles';
import Theme from '../../theme/Theme';

const Incidents = () => {
  return (
    <>
      <Header title={'Incidents'} />
      <ScrollView style={styles.container}>
        <IncidentCard
          date={'2/4/2024'}
          image={Theme.icons.Child1}
          name={'Oliver Jones'}
          heading={'Incident title lorem ipsum'}
          description={
            'Incident details lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
        />
        <IncidentCard
          date={'2/4/2024'}
          image={Theme.icons.Child1}
          name={'Oliver Jones'}
          heading={'Incident title lorem ipsum'}
          description={
            'Incident details lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
        />
        <IncidentCard
          date={'2/4/2024'}
          image={Theme.icons.Child1}
          name={'Oliver Jones'}
          heading={'Incident title lorem ipsum'}
          description={
            'Incident details lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
        />
        <IncidentCard
          date={'2/4/2024'}
          image={Theme.icons.Child1}
          name={'Oliver Jones'}
          heading={'Incident title lorem ipsum'}
          description={
            'Incident details lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
        />
        <IncidentCard
          date={'2/4/2024'}
          image={Theme.icons.Child1}
          name={'Oliver Jones'}
          heading={'Incident title lorem ipsum'}
          description={
            'Incident details lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
        />
        <View style={{height: 100}} />
      </ScrollView>
    </>
  );
};

export default Incidents;
