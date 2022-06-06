import { combineReducers } from "redux";

import {
	userLoginReducer,
	userRegisterReducer,
	userDetailsReducer,
	userUpdateProfileReducer
} from "./userReducer";

import {
	addCustomerReducer,
	getCustomersReducer,
	editCustomerReducer,
	deleteCustomerReducer,
	singleCustomerTransactionsReducer,
	addSingleCustomerTransactionReducer,
	updateCustomerTransactionReducer,
	getCustomerBalanceReducer,
	getSingleCustomerDetailReducer,
} from './customerReducer'

const rootReducer = combineReducers({
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	getCustomers: getCustomersReducer,
	addCustomer: addCustomerReducer,
	editCustomer: editCustomerReducer,
	deleteCustomer: deleteCustomerReducer,
	singleCustomerTransactions: singleCustomerTransactionsReducer,
	addSingleCustomerTransaction: addSingleCustomerTransactionReducer,
	updateCustomerTransaction: updateCustomerTransactionReducer,
	getCustomerBalance: getCustomerBalanceReducer,
	SingleCustomerDetail: getSingleCustomerDetailReducer,
});

export default rootReducer;
