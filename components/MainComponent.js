import React , { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import DishDetail from './DishdetailComponent';
import { View, Text,  Platform, Image, StyleSheet, ScrollView } from 'react-native';
import { createStackNavigator, createDrawerNavigator,DrawerItems, SafeAreaView } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Aboutus from './AboutusComponent';
import Contact from './ContactComponent';

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu,
    navigationOptions: ({ navigation })=>({
        headerLeft: <Icon name='menu' size={24}
        color='white'
        onPress= {( )=> navigation.toggleDrawer()}
        />
    }) },
    DishDetail: { screen: DishDetail }

},
{
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
            color: '#fff'
        }
    }
});
const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
},
{

    navigationOptions: ({ navigation }) => ({
        headerLeft: <Icon name="menu" size={24} 
        color= 'white'
        onPress={ () => navigation.toggleDrawer() } />
    ,
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
            color: '#fff'
        }
    
    })
  }  );

const AboutusNavigator = createStackNavigator({
    Aboutus: { screen: Aboutus}
},
{
    navigationOptions: ({ navigation }) => ({
        headerLeft: <Icon name="menu" size={24} 
        color= 'white'
        onPress={ () => navigation.toggleDrawer() } />
    ,
        headerStyle:{
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
            color: '#fff'
        }
    })
}
);

const ContactNavigator = createStackNavigator({
    Contact: {screen: Contact}
},
{
    navigationOptions: ({ navigation }) => ({
        headerLeft: <Icon name="menu" size={24} 
        color= 'white'
        onPress={ () => navigation.toggleDrawer() } />
    ,
        headerStyle:{
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
            color: '#fff'
        }
    })
});

const CustomDrawerContentComponent = (props) =>(
    <ScrollView>
        <SafeAreaView style={styles.container}
            forceInset= {{top: 'always', horizontal: 'never'}}
        >
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('./images/logo.png')}
                        style={styles.drawerImage} />
                </View>
                <View style={{flex:2}}>
                    <Text style={styles.drawerHeaderText}>Restornate Con Fusion</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator  = createDrawerNavigator({
    Home:{
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLable: 'Home',
            drawerIcon: ({ tintColor }) =>(
                <Icon
                    name='home'
                    type='font-awesome'
                    size={24}
                    color={ tintColor }
                    />
            )
        }
    },
    Menu:{
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLable: 'Menu',
            drawerIcon: ({ tintColor }) =>(
                <Icon
                    name='list'
                    type='font-awesome'
                    size={24}
                    color={ tintColor }
                    />
            )
        }

    },
    
        Aboutus:{
            screen: AboutusNavigator,
            navigationOptions:{
                title: 'About Us',
                drawerLable: 'About Us',
                drawerIcon: ({ tintColor }) =>(
                    <Icon
                        name='info-circle'
                        type='font-awesome'
                        size={24}
                        color={ tintColor }
                        />
                )
            }
        },
        Contact: {
            screen: ContactNavigator,
            navigationOptions:{
                title: 'Contact Us',
                drawerLable: 'Contact',
                drawerIcon: ({ tintColor }) =>(
                    <Icon
                        name='address-card'
                        type='font-awesome'
                        size={22}
                        color={ tintColor }
                        />
                )
            }
        }

},
    {
        drawerBackgroundColor: '#D1C4E9',
        contentComponent: CustomDrawerContentComponent
});

class Main extends  Component {

    render (){
        return (
            <View style={{flex:1, paddingTop: Platform.OS==='ios' ? 0 : Expo.Constants.statusBarHeight}}>
                    <MainNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader:{
        backgroundColor: "#512DA8",
        height: 140,
        alignItems: 'center',
        justifyContent: "center",
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText:{
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage:{
        margin: 10,
        width: 80,
        height: 60
    }
})

export default Main;