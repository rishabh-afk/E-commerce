import EmailIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PhoneIcon from 'react-native-vector-icons/Entypo';
import BirthDayIcon from 'react-native-vector-icons/FontAwesome';
import LocationIcon from 'react-native-vector-icons/MaterialIcons';
import {StyledView, StyledText, StyledImage} from '../styles/styles';
import {Modal, ScrollView} from 'react-native';
import {useState} from 'react';

const TabDetail = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <StyledView classes={['justify:center', 'items:center', 'mt-10']}>
        <ScrollView>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <StyledView classes={['justify:center', 'items:center', 'mt-10']}>
              <StyledView
                classes={[
                  'mt:4/5',
                  'bg:white',
                  'h:48',
                  'w:4/5',
                  'shadow:2xl',
                  'rounded:lg',
                  'py:10',
                  'px:5',
                ]}>
                <StyledText
                  classes={['text:2xl', 'color:black', 'text-align:center']}>
                  Do you want to Logout?
                </StyledText>
                <StyledView classes={['flex:row', 'justify:evenly', 'my:5']}>
                  <StyledText
                    onPress={() => setModalVisible(!modalVisible)}
                    classes={[
                      'color:white',
                      'rounded:lg',
                      'px:5',
                      'py:2',
                      'text:lg',
                      'bg:[#f4511e]',
                    ]}>
                    Cancel
                  </StyledText>
                  <StyledText
                    onPress={() => setModalVisible(!modalVisible)}
                    classes={[
                      'color:white',
                      'rounded:lg',
                      'px:5',
                      'py:2',
                      'text:lg',
                      'bg:[#f4511e]',
                    ]}>
                    Logout
                  </StyledText>
                </StyledView>
              </StyledView>
            </StyledView>
          </Modal>
        </ScrollView>
      </StyledView>
      <StyledView classes={['flex:1', 'flex:col']}>
        <StyledView classes={['items:center', 'mt:[50]', 'z:10']}>
          <StyledImage
            classes={[
              'w:[175]',
              'h:[175]',
              'resize:contain',
              'rounded:lg',
              'items:center',
            ]}
            source={require('../images/banner1.jpg')}
          />
        </StyledView>
        <StyledView
          classes={[
            'flex:1',
            'relative',
            'z:0',
            'bottom:8',
            'mx:[25]',
            'p:[25]',
            'pt:[60]',
            'rounded:lg',
            'bg:white',
          ]}>
          <StyledText
            classes={[
              'color:[#f4511e]',
              'text:2xl',
              'font-weight:bold',
              'text-align:center',
            ]}>
            Personal Details
          </StyledText>
          <StyledView classes={['mt:4']}>
            <StyledView classes={['flex:row', 'py:2']}>
              <PhoneIcon
                name="users"
                size={25}
                style={{marginRight: 10}}
                color={'#f4511e'}
              />
              <StyledText classes={['color:[#f4511e]', 'text:lg']}>
                Rishabh gupta
              </StyledText>
            </StyledView>
            <StyledView classes={['flex:row', 'py:2']}>
              <EmailIcon
                name="gender-male"
                size={25}
                style={{marginRight: 10}}
                color={'#f4511e'}
              />
              <StyledText classes={['color:[#f4511e]', 'text:lg']}>
                Male
              </StyledText>
            </StyledView>
            <StyledView classes={['flex:row', 'py:2']}>
              <BirthDayIcon
                name="birthday-cake"
                size={25}
                style={{marginRight: 10}}
                color={'#f4511e'}
              />
              <StyledText classes={['color:[#f4511e]', 'text:lg']}>
                17th October, 1999
              </StyledText>
            </StyledView>
            <StyledView classes={['flex:row', 'py:2']}>
              <EmailIcon
                name="email-check"
                size={25}
                style={{marginRight: 10}}
                color={'#f4511e'}
              />
              <StyledText classes={['color:[#f4511e]', 'text:lg']}>
                guptarishabh792@gmail.com
              </StyledText>
            </StyledView>
            <StyledView classes={['flex:row', 'py:2']}>
              <PhoneIcon
                name="phone"
                size={25}
                style={{marginRight: 10}}
                color={'#f4511e'}
              />
              <StyledText classes={['color:[#f4511e]', 'text:lg']}>
                +91 99324 32833
              </StyledText>
            </StyledView>
            <StyledView classes={['flex:row', 'py:2']}>
              <LocationIcon
                name="location-pin"
                size={25}
                style={{marginRight: 10}}
                color={'#f4511e'}
              />
              <StyledText classes={['flex:1', 'color:[#f4511e]', 'text:lg']}>
                WZ - 228/A, street Number - 16/3 , New Delhi - 110045
              </StyledText>
            </StyledView>
            <StyledView classes={['flex:row', 'justify:center', 'my:5']}>
              <StyledText
                classes={[
                  'color:white',
                  'rounded:lg',
                  'px:5',
                  'py:2',
                  'text:lg',
                  'bg:[#f4511e]',
                  'mr:5',
                ]}>
                Account Details
              </StyledText>
              <StyledText
                onPress={() => setModalVisible(true)}
                classes={[
                  'color:white',
                  'rounded:lg',
                  'px:5',
                  'py:2',
                  'text:lg',
                  'bg:[#f4511e]',
                ]}>
                Logout
              </StyledText>
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledView>
    </>
  );
};

export default TabDetail;
