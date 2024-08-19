import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListsScreen";
import PermissionCamera from "./src/screens/PermissionScreen";
import imageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import UpdateNameScreen from "./src/screens/UpdateNameScreen";
import ColorScreen from "./src/screens/ColorScreen";
import AdjustColorScreen from "./src/screens/AdjustColoScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Lists: ListScreen,
    Permission: PermissionCamera,
    Images: imageScreen,
    Counter: CounterScreen,
    NameUpdate: UpdateNameScreen,
    Color: ColorScreen,
    AdjustColor: AdjustColorScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Study in progress",
    },
  }
);

export default createAppContainer(navigator);
