import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCards from './components/ActionCards';
import ContactList from './components/ContactList';

const AppPro = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCards />
      <ElevatedCards/>
      <FancyCards/>
      <ActionCards/>
      <ContactList/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppPro;
