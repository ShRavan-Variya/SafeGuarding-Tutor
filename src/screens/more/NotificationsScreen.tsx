import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import Header from '../../components/header/Header';
import Theme from '../../theme/Theme';

const NotificationsScreen = () => {
  return (
    <>
      <Header title={'Notifications'} isGoBack={true} />
      <ScrollView style={[styles.profileContainer, {paddingHorizontal: 0}]}>
        <View style={styles.notificationContainer}>
          <Image source={Theme.icons.upCommingNotification} />
          <View style={{rowGap: Theme.responsiveSize.size5}}>
            <Text style={styles.notificationTitle}>Notification title</Text>
            <Text style={[styles.notificationTitle, {fontWeight: '400',}]}>
              Notification description lorem ipsum dolor sit amet description
            </Text>
          </View>
        </View>
        <View style={styles.notificationContainer}>
          <Image source={Theme.icons.upCommingNotification} />
          <View style={{rowGap: Theme.responsiveSize.size5}}>
            <Text style={styles.notificationTitle}>Notification title</Text>
            <Text style={[styles.notificationTitle, {fontWeight: '400'}]}>
              Notification description lorem ipsum dolor sit amet description
            </Text>
          </View>
        </View>
        <View style={styles.notificationContainer}>
          <Image source={Theme.icons.upCommingNotification} />
          <View style={{rowGap: Theme.responsiveSize.size5}}>
            <Text style={styles.notificationTitle}>Notification title</Text>
            <Text style={[styles.notificationTitle, {fontWeight: '400'}]}>
              Notification description lorem ipsum dolor sit ametv description
            </Text>
          </View>
        </View>
        <View style={styles.notificationContainer}>
          <Image source={Theme.icons.upCommingNotification} />
          <View style={{rowGap: Theme.responsiveSize.size5}}>
            <Text style={styles.notificationTitle}>Notification title</Text>
            <Text style={[styles.notificationTitle, {fontWeight: '400'}]}>
              Notification description lorem ipsum dolor sit amet description
            </Text>
          </View>
        </View>
        <View style={styles.notificationContainer}>
          <Image source={Theme.icons.upCommingNotification} />
          <View style={{rowGap: Theme.responsiveSize.size5}}>
            <Text style={styles.notificationTitle}>Notification title</Text>
            <Text style={[styles.notificationTitle, {fontWeight: '400'}]}>
              Notification description lorem ipsum dolor sit amet lorem
            </Text>
          </View>
        </View>
        <View style={styles.notificationContainer}>
          <Image source={Theme.icons.upCommingNotification} />
          <View style={{rowGap: Theme.responsiveSize.size5}}>
            <Text style={styles.notificationTitle}>Notification title</Text>
            <Text style={[styles.notificationTitle, {fontWeight: '400'}]}>
              Notification description lorem ipsum dolor sit amet lorem
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default NotificationsScreen;
