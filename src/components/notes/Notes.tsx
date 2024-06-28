import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Theme from '../../theme/Theme';
import InputText from '../inputText/InputText';

interface Props {
  heading: string;
  title?: string;
  description?: string;
  isIncident: boolean;
}
export default function Notes(props: Props) {
  const [incident, setIncident] = useState('');

  return (
    <View>
      <Text style={styles.headingText}>{props.heading}</Text>
      {props.isIncident ? (
        <View style={styles.rowPadding}>
          <View style={styles.margin}>
            <Text style={styles.titleHeading}>Title</Text>
            <Text style={styles.titleText}>{props.title}</Text>
          </View>
          <View>
            <Text style={styles.titleHeading}>Description</Text>
            <Text style={styles.titleText}>{props.description}</Text>
          </View>
        </View>
      ) : (
        <View style={[styles.rowPadding, styles.margin]}>
          <InputText
            lebal={'Content Covered'}
            onChange={setIncident}
            value={incident}
            style={{
              maxHeight: Theme.responsiveSize.size300,
              textAlignVertical: 'top',
              paddingTop: Theme.responsiveSize.size10,
              height: Theme.responsiveSize.size260,
            }}
            placeholder={'What has been covered in the lesson...'}
          />
          <InputText
            lebal={'Highlights (Wins /Success)'}
            onChange={setIncident}
            value={incident}
            style={{
              maxHeight: Theme.responsiveSize.size300,
              textAlignVertical: 'top',
              paddingTop: Theme.responsiveSize.size10,
              height: Theme.responsiveSize.size260,
            }}
            placeholder={'Lesson highlights...'}
          />
          <InputText
            lebal={'Areas to work on'}
            onChange={setIncident}
            value={incident}
            style={{
              maxHeight: Theme.responsiveSize.size300,
              textAlignVertical: 'top',
              paddingTop: Theme.responsiveSize.size10,
              height: Theme.responsiveSize.size260,
            }}
            placeholder={'What the student needs to work on...'}
          />
          <InputText
            lebal={'Student Progress'}
            onChange={setIncident}
            value={incident}
            style={{
              maxHeight: Theme.responsiveSize.size300,
              textAlignVertical: 'top',
              paddingTop: Theme.responsiveSize.size10,
              height: Theme.responsiveSize.size260,
            }}
            placeholder={'What progress has the student made...'}
          />
          <InputText
            lebal={'Homework / Activities'}
            onChange={setIncident}
            value={incident}
            style={{
              maxHeight: Theme.responsiveSize.size300,
              textAlignVertical: 'top',
              paddingTop: Theme.responsiveSize.size10,
              height: Theme.responsiveSize.size260,
            }}
            placeholder={'Homework or activities...'}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: Theme.responsiveSize.size16,
    fontWeight: '600',
    color: Theme.colors.textColor29,
  },
  titleHeading: {
    fontSize: Theme.responsiveSize.size12,
    fontWeight: '600',
    color: Theme.colors.textColor29,
  },
  titleText: {
    fontSize: Theme.responsiveSize.size14,
    fontWeight: '400',
    color: Theme.colors.textColor29,
    paddingTop: Theme.responsiveSize.size5,
  },
  rowPadding: {
    rowGap: Theme.responsiveSize.size20,
  },
  margin: {
    marginTop: Theme.responsiveSize.size10,
  },
});
