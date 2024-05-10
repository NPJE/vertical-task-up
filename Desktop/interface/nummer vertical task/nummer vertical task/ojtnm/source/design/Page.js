import { StyleSheet } from "react-native";

const Page = StyleSheet.create({
    spend:{
        padding: 10,
        backgroundColor: '#040506',
        textAlign: 'center',
        borderRadius: 0,
        color:'white',
        fontSize: 15,
        fontWeight: '400',
        borderBottomWidth: 0.8,
        borderBottomColor: '#4743af5a',
    },
    Gems:{
        display: 'flex',
        padding: 10,
        flexDirection: 'row',
    },
    Gems01:{
        display: 'flex',
        padding: 10,
        flexDirection: 'row',
        // backgroundColor: '#3533CD',
        paddingLeft: 30,
        paddingRight: 30,
    },
    Gems011:{
        display: 'flex',
        padding: 10,
        // flexDirection: 'row',
        // backgroundColor: '#3533CD',
        paddingLeft: 30,
        paddingRight: 30,
        alignItems:'center',
        flexWrap: 'wrap',
        alignSelf:'center'
    },
    gemsCoinsIcon:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    gemsCoinsIcon01:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#040506',
        flexWrap: 'wrap',
        alignSelf:'flex-end'
    },
    threeButtons:{
        display:'flex',
        flexDirection:'row',
        backgroundColor: '#010021',
    },
    threeButtons01:{
        display:'flex',
        flexDirection:'row',
       
        flexWrap:'wrap',
        alignSelf: 'center'
    },
    mid01:{
        backgroundColor: '#010021',
        borderTopWidth: 1,
        borderTopColor: '#4743af5a'
    },
    imageRound:{
        height: '97%', 
        width: '90%', 
        borderRadius: 100,
        alignSelf: 'center', 
        marginLeft: 8,
        borderRadius: 10
    },
    loopStyleProfile:{
        backgroundColor: '#010021',
        borderRadius: 0,
        flexWrap: 'wrap'
    },
    imageContainer:{
        display:'flex',
        flexDirection:'row'
    },
    imageR01:{
        height: 80, 
        width: 80, 
        padding: 10, 
        backgroundColor: '#4743af5a', 
        borderRadius: 100,
        margin: 10
    },
    namei:{
        color: 'white',
        fontSize: 14,
        letterSpacing: 0.5,
    },
    progressBarHolder:{
        alignSelf: 'center',
        paddingTop: 5,
    },


})
export default Page