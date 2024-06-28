import React, {useState} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

import RBSheet from 'react-native-raw-bottom-sheet';
import Theme from '../../theme/Theme';
import InputText from '../inputText/InputText';
import Buttons from '../button/Buttons';
const {height} = Dimensions.get('window');

const BottomSheet = (props: any) => {
  const [message, setMessage] = useState('');
  const [messageFlag, setMessageFlag] = useState(0);

  return (
    <RBSheet
      ref={props.refRBSheet}
      openDuration={600}
      draggable
      dragOnContent
      customStyles={{container:{
        borderTopLeftRadius:10,
        borderTopRightRadius:10
      }}}
      height={height - Theme.responsiveSize.size75}>
      <ScrollView>
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Messages</Text>
          <TouchableOpacity
            style={
              messageFlag == 1
                ? styles.messageContainer2
                : styles.messageContainer
            }
            onPress={() => {
              setMessageFlag(1);
              setMessage('Running late but will be there soon');
            }}>
            <Text
              style={
                messageFlag == 1 ? styles.messageText2 : styles.messageText
              }>
              {'Running late but will be there soon'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              messageFlag == 2
                ? styles.messageContainer2
                : styles.messageContainer
            }
            onPress={() => {
              setMessageFlag(2);
              setMessage('Will be there in 5 minutes');
            }}>
            <Text
              style={
                messageFlag == 2 ? styles.messageText2 : styles.messageText
              }>
              {'Will be there in 5 minutes'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              messageFlag == 3
                ? styles.messageContainer2
                : styles.messageContainer
            }
            onPress={() => {
              setMessageFlag(3);
              setMessage('I have a problem, can you please call me');
            }}>
            <Text
              style={
                messageFlag == 3 ? styles.messageText2 : styles.messageText
              }>
              {'I have a problem, can you please call me'}
            </Text>
          </TouchableOpacity>
          <InputText
            lebal={'Custom message'}
            onChange={setMessage}
            value={message}
            multiline={true}
            style={{
              maxHeight: Theme.responsiveSize.size160,
              textAlignVertical: 'top',
              paddingTop: Theme.responsiveSize.size10,
              height: Theme.responsiveSize.size150,
            }}
            placeholder={'Type your message...'}
          />
        </View>
        {/* <Buttons title={''} onPress={()=>{}}/> */}
      </ScrollView>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: Theme.responsiveSize.size1,
    padding: Theme.responsiveSize.size10,
    rowGap: Theme.responsiveSize.size10,
    borderRadius: 20
  },
  listTitle: {
    fontSize: Theme.responsiveSize.size16,
    fontWeight: '700',
    color: Theme.colors.textColor29,
    marginBottom: Theme.responsiveSize.size20,
  },
  messageContainer: {
    padding: Theme.responsiveSize.size10,
    height: Theme.responsiveSize.size50,
    backgroundColor: Theme.colors.sheetMessageColor,
    borderTopRightRadius: Theme.responsiveSize.size12,
    borderTopLeftRadius: Theme.responsiveSize.size12,
    borderBottomRightRadius: Theme.responsiveSize.size12,
    justifyContent: 'center',
  },
  messageContainer2: {
    padding: Theme.responsiveSize.size10,
    height: Theme.responsiveSize.size50,
    backgroundColor: Theme.colors.appColorParent,
    borderTopRightRadius: Theme.responsiveSize.size12,
    borderTopLeftRadius: Theme.responsiveSize.size12,
    borderBottomRightRadius: Theme.responsiveSize.size12,
    justifyContent: 'center',
  },
  messageText: {
    fontSize: Theme.responsiveSize.size14,
    fontWeight: '600',
    color: Theme.colors.textColor29,
  },
  messageText2: {
    fontSize: Theme.responsiveSize.size14,
    fontWeight: '600',
    color: Theme.colors.white,
  },
});

export default BottomSheet;
