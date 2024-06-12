import { getAllClientsFromAnSpecificCity, getAllClientsWithSaleRep, getAllLastAndFirstNames, getDetailsAboutAClient } from "./js/module/customers.js";
import {getAll, getAllLastNames, getAllFullNameJob, getAllJobTitle, getAllEmployeesInAnOffice, getAllEmployeesWithBoss, getAllEmployeesWithOffice} from "./js/module/employees.js";
import { getAllOfficesWithNumberOfEmployees, getDetailsAboutOfficesInSpecificCountry } from "./js/module/offices.js";
import { getAllOrdersShipped, getOrdersMadeByAnSpecificClient } from "./js/module/orders.js";
import { getAllPaymentsMadeByAClient } from "./js/module/payments.js";
import { getAllProductsWithStock, getProductNameAndQuantityOrdered, getProductsWithBuyPriceGreatherThan50, getTotalStockProducts } from "./js/module/products.js";


console.log(await getAllOfficesWithNumberOfEmployees());