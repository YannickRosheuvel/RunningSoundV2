import { StatusBar } from 'react-native';

export const HomeStyles = {

    // scrollView: {
    //     backgroundColor: 'pink',
    //     marginHorizontal: 20,
    // },
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000'
    },
    imageText: {
        position: "absolete",
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    container1: {
        flex: 1,
        
    },
    StepCounter: {
        flex: 5,
        paddingTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1,
        fontSize: 24,
        position: 'absolute',
        top: 30,
        right: 30,
        fontFamily: 'Ubuntu_500Medium',
        fontWeight: 'bold',
        color: '#8F8F8F'
    },
    hello: {
        fontSize: 40,
        position: 'absolute',
        top: 30,
        left: 20,
        fontFamily: 'Ubuntu_500Medium',
        fontWeight: 'bold',
        color: '#8F8F8F'
    },
    input: {
        outlineStyle: 'none',
        fontFamily: 'Ubuntu_500Medium',
        fontWeight: 'bold',
        fontSize: 24,
        position: 'absolute',
        top: 30,
        fontSize: 40,
        left: 140,
        width: 190
    },
    avatar: {
        top: 13,
        right: 19,
        width: 70,
        height: 70,
        position: 'absolute'
    },
    box: {
        width: '90%',
        backgroundColor: '#737373',
        height: 211,
        borderRadius: 30,
        overflow: 'hidden',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 100,
        position: 'absolute',
        marginLeft: 40,
      },

      iconWrapper: {
        flexDirection: 'row',
        alignItems: 'start',
        
      },
      iconWrapperCards: {
        flexDirection: 'row',
        alignItems: 'start',
        marginLeft: 20,
        marginTop: 10,
        
      },
      icon: {
        width: 30,
        height: 30,
        marginRight: 10,
      },
      box2: {
        width: '90%',
        backgroundColor: '#737373',
        borderRadius: 30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'left',
        top: 20,
        position: 'absolute',
        marginLeft:40,
    },
    box3: {
        width: '90%',
        backgroundColor: '#737373',
        borderRadius: 30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'left',
        top: 20,
        position: 'absolute',
        marginLeft:40,
    },
    columns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    columnsCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft:30,
    },
    column: {
        width: '50%',
        padding: 10,
    },
    
    columnCard: {
        width: '50%',
        padding: 10,
    },
    columnText: {
        fontSize: 45,
        color: 'white',
        fontFamily: 'Ubuntu_500Medium',
        fontWeight: 'bold',

    },
    columnTextBpm: {
        fontSize: 45,
        color: 'white',
        fontFamily: 'Ubuntu_500Medium',
        fontWeight: 'bold',
        color: '#78D478',

    },
    columnTextCard: {
        fontSize: 15,
        color: 'white',
        fontFamily: 'Ubuntu_500Medium',
        fontWeight: 'bold',
    },
    columnTextCardBpm: {
        marginLeft: 0,
        fontSize: 20,
        color: 'white',
        fontFamily: 'Ubuntu_500Medium',
        fontWeight: 'bold',
        color: '#78D478',

    },
    createRun: {
        marginLeft: 0,
        fontSize: 40,
        alignItems: 'center',
        color: 'white',
        fontFamily: 'Ubuntu_500Medium',
        fontWeight: 'bold',
        color: '#FFFFFF',

    },
    backgroundBox: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -1,
    },
    level: {
        fontSize: 96,        
        lignItems: 'center',
        fontFamily: 'Ubuntu_500Medium',
        fontWeight: 'bold',
        color: '#fff'
        ,    
        marginLeft: 0,
        marginTop: 10,
    },
    progress: {
        fontSize: 30,
        color: 'white', // Add this line
        fontFamily: 'Ubuntu_500Medium',
        fontWeight: 'bold',
        marginLeft: 0,
        textAlign: 'left', 
        // alignSelf: ''
        
    },
    progressCard: {
        fontSize: 24,
        color: 'white', // Add this line
        fontFamily: 'Ubuntu_500Medium',
        fontWeight: 'bold',
        marginLeft: 0,
        textAlign: 'left', 
        // alignSelf: ''
        
    },
    iconProgress: {
        width: 40,
        height: 40,
      },
    cardCenter: {
        fontSize: 24,
        color: 'white', // Add this line
        fontFamily: 'Ubuntu_500Medium',
        fontWeight: 'bold',
        // textAlign: 'left',
        paddingLeft: 50, /* adjust as needed */
        lineHeight: 120, /* adjust as needed */
        // alignSelf: 'center'
    },
    exercises: {
        fontSize: 28,
        color: 'white', // Add this line
        fontFamily: 'Ubuntu_500Medium',
        fontWeight: 'bold',
        position: 'absolute',
        left: 19,
        top: 463
    },
    historyText: {
        fontSize: 36,
        color: 'white', // Add this line
        fontFamily: 'Ubuntu_500Medium',
        fontWeight: 'bold',
        position: 'absolute',
        left: 19,
        top: 25
    },
    latertext: {
        fontSize: 36,
        color: 'white', // Add this line
        fontFamily: 'Ubuntu_500Medium',
        fontWeight: 'bold',
        position: 'absolute',
        left: 19,
        top: 400
    },
    scroll: {
        flex: 1,
        backgroundColor: "#1C1C1EFF"

    },
    cardList: {
        width: '90%',
        flex: 1,
        gap: 50,
        position: 'fixed',
        top: 310,
        flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
        // paddingHorizontal: 30,
    },
    createList: {
        width: '90%',
        flex: 1,
        gap: 50,
        position: 'fixed',
        top: 300,
        flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
        // paddingHorizontal: 30,
    },
    HistoryList: {
        width: '90%',
        flex: 1,
        gap: 50,
        position: 'fixed',
        top: 75,
        flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
        // paddingHorizontal: 30,
    },
    card: {
        width: '100%',
        height: 120,
        borderRadius: 30,
        marginVertical: 10,
        backgroundColor: "#737373"

        // width: '100%',
        // marginVertical: 10,
    },
    cardEmpty: {
        width: '100%',
        height: 120,
        borderRadius: 30,
        marginVertical: 10,

        // width: '100%',
        // marginVertical: 10,
    },
    touch: {
        borderRadius: 30
    }
}