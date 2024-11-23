import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/Splash';
import HomeScreen from '../Screens/Home'
import InstructionScreen from '../Screens/Instruction'
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Splash" >
      <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
      <Stack.Screen name="Splash" component={SplashScreen}   options={{ headerShown: false }} />
      <Stack.Screen name="Instruction" component={InstructionScreen}  options={{ headerShown: false }}/>
      {/* <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}










//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       {loading ? (
//         <App /> // Render the splash screen while loading
//       ) : (
//         <>
//           <Cam /> 
//           <Link href="/instruction" style={styles.iconContainer}>
//             <Ionicons name="information-circle-outline" size={32} color="blue" />
//           </Link>
//           <Calculator />
//         </>
//       )}
//     </View>
//   );
// }

