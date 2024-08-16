import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/Lists";
import PermissionCamera from "./src/screens/Permission";
import imageScreen from "./src/screens/ImageScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Lists: ListScreen,
    Permission: PermissionCamera,
    Images: imageScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Teste",
    },
  }
);

export default createAppContainer(navigator);
