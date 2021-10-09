import { AsyncStorage } from "react-native";

export const token = AsyncStorage.getItem('token');
export const backendUrl = 'https://fleetcon-version2.herokuapp.com/api';
