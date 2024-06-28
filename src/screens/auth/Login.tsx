import {View, Text, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Theme from '../../theme/Theme';
import InputText from '../../components/inputText/InputText';
import Buttons from '../../components/button/Buttons';
import {isValidEmail} from '../../utils/Validations';
import {apiError, isNetworkAvailable, saveToken} from '../../api/api';
import {loginApi} from '../../services/auth';
import {RNToasty} from 'react-native-toasty';
import {saveDataToCachedWithKey} from '../../utils/cacheData';
import {Constants} from '../../utils';
import Loader from '../../components/Loader/Loader';

export default function Login(props: any) {
  const [email, setEmail] = useState('james.brown@gmail.com');
  const [password, setPassword] = useState('Helo*1234');
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const checkValidation = () => {
    let isValid = true;
    setEmailError(false);
    if (!isValidEmail(email)) {
      isValid = false;
      setEmailError(true);
    }
    return isValid;
  };
  const doLogin = async () => {
    const isConnected = await isNetworkAvailable();
    setLoading(true);
    if (isConnected) {
      try {
        const data = {
          email: email,
          password: password,
        };
        const response = await loginApi(data);
        if (response) {
          saveToken(response.token);
          const AsyncItem = Constants.AsyncKeyLiterals;
          saveDataToCachedWithKey(AsyncItem.loginToken, response.token);
          saveDataToCachedWithKey(AsyncItem.userID, response.userId);
          saveDataToCachedWithKey(AsyncItem.userRole, response.userRole);
          setLoading(false);
          props.navigation.reset({
            index: 0,
            routes: [
              {
                name: Constants.TUTOR_BOTTOM,
              },
            ],
          });
        }
      } catch (error: any) {
        setLoading(false);
        RNToasty.Show({
          title: apiError(error),
        });
      }
    } else {
      setLoading(false);
      RNToasty.Show({
        title: 'No internet connection available!',
      });
    }
  };
  return (
    <ScrollView style={styles.loginContainer}>
      <Image
        source={Theme.icons.splash_logo}
        style={[
          styles.image,
          {alignSelf: 'center', marginTop: Theme.responsiveSize.size20},
        ]}
      />
      <View style={styles.padding}>
        <InputText
          onBlur={checkValidation}
          lebal={'Email'}
          onChange={setEmail}
          value={email}
          containerStyle={{width: '95%'}}
        />
        {emailError && (
          <Text style={styles.errorTextStyle}>Please enter a valid email!</Text>
        )}
        <InputText
          onBlur={checkValidation}
          lebal={'Password'}
          onChange={setPassword}
          value={password}
          containerStyle={{width: '95%'}}
        />

        <Buttons
          title={'Login'}
          onPress={() => {
            if (checkValidation()) {
              doLogin();
            }
          }}
        />
      </View>
      <Loader isLoading={loading} />
    </ScrollView>
  );
}
