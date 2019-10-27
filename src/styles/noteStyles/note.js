import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '97%',
        marginVertical: 8,
        borderWidth: 0.5,
        alignSelf: 'center',
        zIndex: 55
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20
    },
    createdAt: {
        borderBottomWidth: 0.5,
        alignItems: 'center',
        height: 40,
        flexDirection: 'row',
        backgroundColor: '#24a0ed',
    },
    createdAtText: {
        color: 'rgba(252, 252, 255, 0.8)',
        fontSize: 16,
        fontFamily: 'FontAwesome5_Solid',
        marginLeft: 5
    },
    titleContainer:{
        backgroundColor: 'rgba(17, 19, 184, 0.1)',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleNote: {
        color: 'rgba(52, 52, 52, 0.8)',
        fontSize: 15,
        fontFamily: "FontAwesome5_Solid",
        marginLeft: 10,
        maxWidth: 200
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginRight: 10,
        height: 50,
        width: 100
    }
})