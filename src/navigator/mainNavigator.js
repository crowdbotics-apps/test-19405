import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2188033Navigator from '../features/BlankScreen2188033/navigator';
import BlankScreen2088032Navigator from '../features/BlankScreen2088032/navigator';
import BlankScreen1988030Navigator from '../features/BlankScreen1988030/navigator';
import Settings88015Navigator from '../features/Settings88015/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2188033: { screen: BlankScreen2188033Navigator },
BlankScreen2088032: { screen: BlankScreen2088032Navigator },
BlankScreen1988030: { screen: BlankScreen1988030Navigator },
Settings88015: { screen: Settings88015Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
