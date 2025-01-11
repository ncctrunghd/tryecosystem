import config from "../config";
import CreateWalletButton from "../page/CreateWalletButton";
import BatchTransactionComponent from "../page/interactTransaction";

//Public routes
const publicRoutes = [
  { path: '/', component: CreateWalletButton },
  { path: '/Interact', component: BatchTransactionComponent },
];

export { publicRoutes };
