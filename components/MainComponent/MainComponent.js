import React, { Component } from "react";
import Menu from "../MenuComponent/MenuComponent";
import { DISHES } from "../../shared/dishes";
import Home from "../HomeComponent/HomeComponent";
import Dishdetail from "../Dishdetail/Dishdetail";
import { View, Platform } from "react-native";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";

const MenuNavigator = createStackNavigator(
  {
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail }
  },
  {
    initialRouteName: "Menu",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#512DA8"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#512DA8"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: "Home",
        drawerLable: "Home"
      }
    },
    Menu: {
      screen: MenuNavigator,
      navigationOptions: {
        title: "Menu",
        drawerLable: "Menu"
      }
    }
  },
  {
    drawerBackgroundColor: "#D1C4E9"
  }
);

class Main extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dishes: DISHES,
  //     selectedDish: null
  //   };
  // }
  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId });
  // }
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
        }}
      >
        <MainNavigator />
        {/* <MenuNavigator />
        Platform.OS === 'ios'
         //   dishes={this.state.dishes}
        //   onPress={dishId => this.onDishSelect(dishId)}
        // />
        // <Dishdetail
        //   dish={
        //     this.state.dishes.filter(
        //       dish => dish.id === this.state.selectedDish
        //     )[0]
        //   }
        // /> */}
      </View>
    );
  }
}

export default Main;
