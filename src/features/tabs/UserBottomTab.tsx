import DeliveryScreen from '@features/delivery/DeliveryScreen';
import DiningScreen from '@features/dining/DiningScreen';
import LiveScreen from '@features/live/LiveScreen';
import RecorderScreen from '@features/reorder/ReorderScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FC} from 'react';

const Tab = createBottomTabNavigator();

const UserBottonTab: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen name="Delivery" component={DeliveryScreen} />
      <Tab.Screen name="Recorder" component={RecorderScreen} />
      <Tab.Screen name="Dining" component={DiningScreen} />
      <Tab.Screen name="Live" component={LiveScreen} />
    </Tab.Navigator>
  );
};

export default UserBottonTab;
