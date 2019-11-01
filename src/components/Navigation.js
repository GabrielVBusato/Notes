import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Lista, NewNote, SplashScreen } from '../views/index'

const Stack = createStackNavigator({
    main: {
        screen: Lista,
        navigationOptions: {
            headerShown: false
        }
    },
    splashScreen: {
        screen: SplashScreen,
        navigationOptions: {
            headerShown :false
        }
    },
    newNote: {
        screen: NewNote,
        navigationOptions: {
            title: 'Nova nota',
            headerStyle: { backgroundColor: '#24a0ed', },
            headerTitleStyle: { color: '#fff', fontFamily: 'FontAwesome5_Solid', fontSize: 20 },
            headerTintColor: '#fff',
            headerBackgroundTransitionPreset: 'fade',
            gesturesEnabled: true,
            gestureResponseDistance: {
                horizontal: 200
            },
            mode: 'card'
        }
    }
    },
    {
        initialRouteName: 'splashScreen',
        headerMode: 'float',
        headerLayoutPreset: 'center',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#24a0ed'
            }
        }
    })

export default createAppContainer(Stack);