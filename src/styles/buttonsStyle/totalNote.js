import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#4b6a96',
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 20,
        bottom: 20
    },
    badge: {
        backgroundColor: '#9cbcdb',
        borderWidth: 1,
        borderColor: '#4b6a96',
        width: 30,
        height: 30,
        borderRadius: 20,
        position: 'absolute',
        right: -10,
        top: -10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    badgeText:{
        color: '#fff',
        fontSize: 15
    }
})