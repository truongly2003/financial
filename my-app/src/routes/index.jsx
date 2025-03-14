import routes from "@configs/routes";
// layout
import DefaultLayout from "@layouts/DefaultLayout";
import ProfileLayout from "@/layouts/ProfileLayout";
// client
import Transaction from "@client/Transaction";
import Statistical from "@client/Statistical";
import Catalog from "@client/Catalog";
import Budget from "@client/Budget";

import Goal from "@/pages/client/Goal";
// authentication
import Login from "@client/Authentication/Login";
import SignUp from "@client/Authentication/SignUp";
import Profile from "@/pages/client/setting/Profile";
import Wallet from "@/pages/client/setting/Wallet";
import BudgetDetail from "@/pages/client/BudgetDetail";
import GoalDetail from "@/pages/client/GoalDetail";

const publicRoutes = [
  // client
  { path: routes.Transaction, component: Transaction, layout: DefaultLayout },
  { path: routes.Statistical, component: Statistical, layout: DefaultLayout },
  { path: routes.Catalog, component: Catalog, layout: ProfileLayout },

  { path: routes.Budget, component: Budget, layout: DefaultLayout },
  { path: routes.BudgetDetail, component: BudgetDetail, layout: DefaultLayout },

  { path: routes.Goal, component: Goal, layout: DefaultLayout },
  { path: routes.GoalDetail, component: GoalDetail, layout: DefaultLayout },

  { path: routes.Login, component: Login, layout: null },
  { path: routes.SignUp, component: SignUp, layout: null },

  // settings
  { path: routes.Profile, component: Profile, layout: ProfileLayout },
  { path: routes.Wallet, component: Wallet, layout: DefaultLayout },
];
export default publicRoutes;
