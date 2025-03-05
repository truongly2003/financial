import routes from "@configs/routes";
// layout
import DefaultLayout from "@layouts/DefaultLayout";
// client
import Home from "@client/home";
import Statistical from "@client/Statistical";
import Report from "@client/Report";
import Catalog from "@client/Catalog";
import Option from "@client/Option";
import Budget from "@client/Budget";
// import Transaction from "@client/Transaction";
import AddTransaction from "@/pages/client/Transaction/addTransaction";
import UpdateTransaction from "@/pages/client/Transaction/updateTransaction";
import Debt from "@/pages/client/Debt";
import Goal from "@/pages/client/Goal";
// authentication
import Login from "@client/Authentication/Login";
import SignUp from "@client/Authentication/SignUp";
import Profile from "@/pages/client/Profile";

const publicRoutes = [
  // client
  { path: routes.Home, component: Home, layout: DefaultLayout },
  { path: routes.Statistical, component: Statistical, layout: DefaultLayout },
  { path: routes.Report, component: Report, layout: DefaultLayout },
  { path: routes.Catalog, component: Catalog, layout: DefaultLayout },
  { path: routes.Option, component: Option, layout: DefaultLayout },
  { path: routes.Budget, component: Budget, layout: DefaultLayout },
  { path: routes.AddTransaction, component: AddTransaction, layout: DefaultLayout },
  { path: routes.UpdateTransaction, component: UpdateTransaction, layout: DefaultLayout },

  { path: routes.Goal, component: Goal, layout: DefaultLayout },
  { path: routes.Debt, component: Debt, layout: DefaultLayout },

  { path: routes.Login, component: Login, layout: null },
  { path: routes.SignUp, component: SignUp, layout: null },

  // settings 
  { path: routes.Profile, component: Profile, layout: DefaultLayout },


];
export default publicRoutes;
