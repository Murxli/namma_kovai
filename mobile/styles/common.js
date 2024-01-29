import { StyleSheet } from 'react-native';
import {COLORS} from '@/constants/theme';

const commstyles = StyleSheet.create({
    homeArea: {
      flex:1,
      backgroundColor:COLORS.white,
      justifyContent:"center",
      alignItems:"center"
    },
    safeArea: {
      flex: 1,
      backgroundColor: "#e7e7e7",
    },
    container: {
      flex: 1,
      paddingRight: 35,
      paddingLeft: 35,
    },
    headerSection: {
      height: 70,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  
  })

export default commstyles