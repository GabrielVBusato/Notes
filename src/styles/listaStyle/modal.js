import { StyleSheet, Dimensions  } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default StyleSheet.create({
    modalWrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        zIndex: 9,
        position: 'absolute',
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    contentContainer: {
        backgroundColor: '#fff',
        height: screenHeight*0.46,
        width: screenWidth*0.8,
        borderRadius: 8,
        elevation: 10,
        overflow: 'hidden',
        zIndex: 101
    },
    titleText: {
        borderBottomWidth: 0.5,
        backgroundColor: '#24a0ed',
        fontSize: 25,
        padding: 10,
        color: '#fff',
        borderColor: 'black',
        fontFamily: 'FontAwesome5_Solid',
        paddingLeft: 20
    },
    inputContainer: {
        padding: 10,
    },
    inputTitle: {
        padding: 0,
        borderBottomWidth: 1,
        marginHorizontal: 5,
        paddingLeft: 5
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    descriptionInput: {
        borderWidth:1 ,
        marginHorizontal: 5,
        marginTop: 5,
        borderRadius: 5,
        paddingLeft: 10,
    },
    submitButton: {
        backgroundColor: '#24a0ed',
        marginTop: 15,
        marginHorizontal: 5,
        borderRadius: 5,
        width: 120,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 50,
        alignItems: 'center'
    },
    textButton:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
})