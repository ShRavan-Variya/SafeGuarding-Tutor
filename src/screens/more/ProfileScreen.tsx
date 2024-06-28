import React, {useState} from 'react';
import {Image, ScrollView, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Theme from '../../theme/Theme';
import InputText from '../../components/inputText/InputText';
import {useNavigation} from '@react-navigation/native';
import {Constants} from '../../utils';

const ProfileScreen = () => {
  const [email, setEmail] = useState('example@gmail.com');
  const [phoneNo, setPhoneNo] = useState('33333333333');
  const nav: any = useNavigation();
  return (
    <ScrollView style={styles.profileContainer}>
      <View style={[styles.flexRow, {marginTop: Theme.responsiveSize.size50}]}>
        <TouchableOpacity
          onPress={() => {
            nav.navigate(Constants.Notification_Screen);
          }}>
          <Image source={Theme.icons.notification} />
        </TouchableOpacity>
        <View style={styles.imgContainer}>
          <Image source={Theme.icons.Child1} style={styles.img} />
          <Text style={styles.nameText}>Roger Lane</Text>
        </View>
        <TouchableOpacity onPress={() => { nav.navigate(Constants.Notification_Screen);}}>
          <Image source={Theme.icons.edit_Pencil} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <InputText
          value={phoneNo}
          onChange={setPhoneNo}
          lebal={'Mobile'}
          editable={false}
        />
        <InputText
          value={email}
          onChange={setEmail}
          lebal={'Email'}
          editable={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.nameText}>Training</Text>
        <View style={styles.trainingContainer}>
          <View style={{flex: Theme.responsiveSize.size1}}>
            <Text style={styles.trainingName}>Training title lorem ipsum</Text>
            <Text style={styles.description}>
              Training description lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt...
            </Text>
          </View>
          <View>
            <Image source={Theme.icons.profileTraining} />
          </View>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.trainingContainer}>
          <View style={{flex: Theme.responsiveSize.size1}}>
            <Text style={styles.trainingName}>Training title lorem ipsum</Text>
            <Text style={styles.description}>
              Training description lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt...
            </Text>
          </View>
          <View>
            <Image source={Theme.icons.profileTraining} />
          </View>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.trainingContainer}>
          <View style={{flex: Theme.responsiveSize.size1}}>
            <Text style={styles.trainingName}>Training title lorem ipsum</Text>
            <Text style={styles.description}>
              Training description lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt...
            </Text>
          </View>
          <View>
            <Image source={Theme.icons.profileTraining} />
          </View>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.trainingContainer}>
          <View style={{flex: Theme.responsiveSize.size1}}>
            <Text style={styles.trainingName}>Training title lorem ipsum</Text>
            <Text style={styles.description}>
              Training description lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt...
            </Text>
          </View>
          <View>
            <Image source={Theme.icons.profileTraining} />
          </View>
        </View>
      </View>
      {/* <View
        style={{
          width: '100%',
          height: '90%',
          position: 'absolute',
          justifyContent: 'center',
        }}>
        <PopUp />
      </View> */}
      <View style={{height: 100}} />
    </ScrollView>
  );
};

export default ProfileScreen;
