import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Label from '../Screens/Label';
import Notes from '../Screens/Notes';
import LabelNotes from '../Screens/LabelNotes'; 
import Reminders from '../Screens/Reminders';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawerContent from './CustomDrawerContent';
import Archive from '../Screens/Archive';
import Bin from '../Screens/Bin';
import Settings from '../Screens/Settings';
import Feedback from '../NotWorking/Feedback';
import MyWebScreen from '../Screens/MyWebScreen';
import { createStackNavigator } from '@react-navigation/stack';
import NoteEdit from '../Screens/NoteEdit';
import { NoteContext } from '../logic/NoteContext';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const { labels } = useContext(NoteContext);
  
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false, drawerStyle: { backgroundColor: '#2F2F34'}}}
    >
      <Drawer.Screen name="Home" component={Notes} />
      <Drawer.Screen name="Reminders" component={Reminders} />
      
      {/* Add dynamic routes for all labels from context */}
      {Object.keys(labels).map((label) => (
        <Drawer.Screen key={label} name={label} component={LabelNotes} />
      ))}
      
      <Drawer.Screen name="Label" component={Label} />
      <Drawer.Screen name="Archive" component={Archive} />
      <Drawer.Screen name="Bin" component={Bin} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Feedback" component={Feedback} />
      <Drawer.Screen name="MyWebScreen" component={MyWebScreen} options={{headerShown: true, drawerStyle: { backgroundColor: '#2F2F34'}}} />
    </Drawer.Navigator>
  );
};

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
      <Stack.Screen name="Notes" component={Notes} />
      <Stack.Screen name="NoteEdit" component={NoteEdit} />
    </Stack.Navigator>
  );
}

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default Navigator;