import React from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import './src/global/translate/i18n';
import {useAppTranslation} from './src/global/translate/hook/useAppTranslation';

const data = [
  {
    id: 'brazil',
    key: 'pt_br',
    image: require('./src/assets/images/brazil.png'),
  },
  {
    id: 'spain',
    key: 'es',
    image: require('./src/assets/images/spain.png'),
  },
  {
    id: 'usa',
    key: 'en',
    image: require('./src/assets/images/usa.png'),
  },
];

type ListItem = (typeof data)[0];

function App(): JSX.Element {
  const {translate, translateActions} = useAppTranslation();

  function renderItem({item}: ListRenderItemInfo<ListItem>) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.buttonImage}
        onPress={() => translateActions.changeLanguage(item.key)}>
        <Image source={item.image} style={styles.itemImage} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'} />
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          contentInsetAdjustmentBehavior="automatic">
          <Text style={styles.headingLarge}>{translate('hello')}</Text>

          <Text style={styles.paragraphLarge}>{translate('welcome')}</Text>

          <View style={styles.form}>
            <Text style={styles.label}>{translate('email_label')}</Text>
            <TextInput
              style={[styles.input, styles.intpuWithMarginBottom]}
              placeholder={translate('email_placeholder')}
            />

            <Text style={styles.label}>{translate('password_label')}</Text>
            <TextInput
              style={styles.input}
              placeholder={translate('password_placeholder')}
            />

            <Text style={styles.forgotPassword}>
              {translate('forgot_password')}
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.button, styles.filled]}>
            <Text style={styles.buttonText}>{translate('sign_in')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.button, styles.outlined]}>
            <Text style={[styles.buttonText, styles.outlineText]}>
              {translate('create_account')}
            </Text>
          </TouchableOpacity>

          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            contentContainerStyle={styles.countryContainer}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
  },
  scrollContainer: {
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  headingLarge: {
    fontSize: 40,
    fontWeight: '600',
    color: '#222222',
  },
  paragraphLarge: {
    fontSize: 32,
    fontWeight: '400',
    color: '#222222',
  },
  forgotPassword: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    textAlign: 'right',
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#0575E6',
  },
  filled: {
    backgroundColor: '#0575E6',
  },
  outlined: {
    borderColor: '#0575E6',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  outlineText: {
    color: '#0575E6',
  },
  form: {
    marginVertical: 40,
  },
  input: {
    borderWidth: 2,
    borderColor: '#dae6f1',
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  intpuWithMarginBottom: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  buttonImage: {
    marginHorizontal: 5,
  },
  itemImage: {
    width: 40,
    height: 40,
  },
  countryContainer: {
    marginTop: 12,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
