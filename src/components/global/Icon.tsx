import React from 'react';
import {FC} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
interface IconsProps {
  color: string;
  size: number;
  name: string;
  iconFamily: 'Ionicons' | 'MaterialCommunityIcons' | 'MaterialIcons';
}
const Icons: FC<IconsProps> = ({color, size, name, iconFamily}) => {
  return (
    <>
      {iconFamily === 'Ionicons' && (
        <Ionicons size={size} name={name} color={color} />
      )}
      {iconFamily === 'MaterialCommunityIcons' && (
        <MaterialCommunityIcons size={size} name={name} color={color} />
      )}
      {iconFamily === 'MaterialIcons' && (
        <MaterialIcons size={size} name={name} color={color} />
      )}
    </>
  );
};

export default Icons;
