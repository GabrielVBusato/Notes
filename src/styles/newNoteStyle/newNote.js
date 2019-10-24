import {StyleSheet, Dimensions} from 'react-native'
export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#4b6a96',
    },
    content: {
        backgroundColor: '#fff',
        flex:1, 
    },
    titleText:{
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
        marginTop: 20
    },
    titleInput: {
        marginHorizontal: 15,
        paddingTop: 5,
        borderBottomWidth: 1
    },
    descriptionInput:{
        borderWidth:1 ,
        marginHorizontal: 15,
        marginTop: 5,
        borderRadius: 5,
        paddingLeft: 10
    },
    submitButton: {
        backgroundColor: '#24a0ed',
        marginTop: 15,
        marginHorizontal: 15,
        borderRadius: 5,
        width: 150,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 40,
    },
    textButton:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
})