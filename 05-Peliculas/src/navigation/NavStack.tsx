import { createStackNavigator } from '@react-navigation/stack';
import { Cast, Movie } from '../interfaces/movieDB';
import { ActorBioScreen } from '../screens/ActorBio';
import { DetallesScreen } from '../screens/Detalles';
import { HomeScreen } from '../screens/Home';


export type RootStackProps = {
  HomeScreen: undefined;
  DetallesScreen: Movie;
  ActorBioScreen: Cast;
}

/* 
~ miStack va a tener "forma" de RootStackProps 
  (Solo esas 2 rutas y en Detalles pasaré por Props algo de la forma "Movie" ) 
*/
const miStack = createStackNavigator<RootStackProps>();


export const NavStack = () => {
  return (
    <miStack.Navigator screenOptions={{ 
      headerShown: false,
      cardStyle: {
        backgroundColor: 'white'
        // backgroundColor: 'darkviolet'
      } 
      }} >
      <miStack.Screen name="HomeScreen" component={HomeScreen} />
      <miStack.Screen name="DetallesScreen" component={DetallesScreen} />
      <miStack.Screen name="ActorBioScreen" component={ActorBioScreen} />
    </miStack.Navigator>
  );
}