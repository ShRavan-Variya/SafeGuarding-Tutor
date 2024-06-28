import React, {useEffect, useRef, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import GetLocation from 'react-native-get-location';
import MapView, {Marker, PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GoogleApiKey} from '../../utils/Constants';
import Theme from '../../theme/Theme';

const HomeTracking = () => {
  const [userLocation, setuserLocation] = useState({
    latitude: 30.72317014395912,
    longitude: 72.60657710272861,
  });
  const latitude = 30.7123;
  const longitude = 72.61654;
  const mapRef: any = useRef();

  // useEffect(() => {
  //   GetLocation.getCurrentPosition({
  //     enableHighAccuracy: false,
  //     timeout: 5000,
  //   })
  //     .then(location => {
  //       setuserLocation({
  //         latitude: location.latitude,
  //         longitude: location.longitude,
  //       });
  //       // if (mapRef) {
  //       //   mapRef.current.animateToRegion({
  //       //     latitude: location.latitude,
  //       //     longitude: location.longitude,
  //       //     latitudeDelta: 0.002,
  //       //     longitudeDelta: 0.001,
  //       //   });
  //       // }
  //       const coordinates = [
  //         {latitude: location.latitude, longitude: location.longitude},
  //         {
  //           latitude: latitude,
  //           longitude: longitude,
  //         },
  //       ];
  //       mapRef.current.fitToCoordinates(coordinates, {
  //         edgePadding: {top: 200, right: 70, bottom: 70, left: 70},
  //         animated: true,
  //       });
  //     })
  //     .catch(error => {
  //       const {code, message} = error;
  //       console.warn(code, message);
  //     });
  // }, []);

  const origin = {
    latitude: userLocation.latitude,
    longitude: userLocation.longitude,
  };
  const destination = {
    latitude: latitude,
    longitude: longitude,
  };
  const coordinates = [
    {latitude: userLocation.latitude, longitude: userLocation.longitude},
    {
      latitude: latitude,
      longitude: longitude,
    },
  ];
  return (
    <>
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsMyLocationButton
          showsUserLocation
          initialRegion={{
            latitude: userLocation ? userLocation?.latitude : 37.78825,
            longitude: userLocation ? userLocation?.longitude : -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: userLocation?.latitude,
              longitude: userLocation?.longitude,
            }}
          />
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
            pinColor="#E14E96">
            <Image source={Theme.icons.target_Loaction} />
          </Marker>
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GoogleApiKey}
            strokeColor="hotpink"
            strokeWidth={4}
          />

          <Polyline
            coordinates={coordinates}
            strokeColor="#E14E96"
            strokeWidth={3}
          />
        </MapView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default HomeTracking;
