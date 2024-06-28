import React, {useEffect} from 'react';
import {Image, ImageBackground, StatusBar, View} from 'react-native';
import Theme from '../../theme/Theme';
import {styles} from './styles';
import {Constants} from '../../utils';
import {getDataFromCachedWithKey} from '../../utils/cacheData';
import {saveToken} from '../../api/api';

const Splash = (props: any) => {
  useEffect(() => {
    setTimeout(async () => {
      try {
        const token = await getDataFromCachedWithKey(
          Constants.AsyncKeyLiterals.loginToken,
        );
        if (token) {
          saveToken(token);
          props.navigation.reset({
            index: 0,
            routes: [
              {
                name: Constants.LOGIN_SCREEN,
              },
            ],
          });
        } else {
          props.navigation.reset({
            index: 0,
            routes: [
              {
                name: Constants.LOGIN_SCREEN,
              },
            ],
          });
        }
      } catch (e: any) {
        props.navigation.reset({
          index: 0,
          routes: [
            {
              name: Constants.LOGIN_SCREEN,
            },
          ],
        });
      }
    }, 2000);
  });
  return (
    <>
      <StatusBar hidden />
      <View style={styles.image_wrapper}>
        <ImageBackground
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={Theme.icons.splash_background}
          imageStyle={{resizeMode: 'repeat'}}>
          <Image style={styles.image} source={Theme.icons.splash_logo} />
        </ImageBackground>
      </View>
    </>
  );
};

export default Splash;
