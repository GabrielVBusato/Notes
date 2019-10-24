import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Lista, NewNote } from '../views/index'

const Stack = createStackNavigator({
    main: {
        screen: Lista,
        navigationOptions: {
            headerShown: false
        }
    },
    newNote: {
        screen: NewNote,
        navigationOptions: {
            title: 'Nova nota',
        }
    }
},
    {
        headerMode: 'float',
        headerLayoutPreset: 'center'
    })

export default createAppContainer(Stack);