import { connection } from "../../helpers/conexion.js";

export const getAllLastAndFirstNames = async() => {
    const [result] = await connection.execute(`
    SELECT contactLastname, contactFirstname 
    FROM customers 
    ORDER BY contactLastname DESC, contactFirstname ASC;
    `);
    return result;
}

// **Detalles de un cliente específico (por ejemplo, customerNumber = 101):**

export const getDetailsAboutAClient = async({clientCode} = {clientCode: 125}) => {

    const [result] = await connection.execute(`
    SELECT customerNumber, customerName, contactLastName, contactFirstName, phone, addressLine1, addressLine2, city, state, postalCode, country, salesRepEmployeeNumber, creditLimit FROM customers WHERE customerNumber = ?;
    `, [clientCode]);


    return result;
}

// **Listar todos los clientes en una ciudad específica (por ejemplo, 'Madrid'):**

export const getAllClientsFromAnSpecificCity = async({cityName} = {cityName: 'Madrid'})=>{
    
    const [result] = await connection.execute(`SELECT customerNumber, customerName, contactLastName, contactFirstName, phone, addressLine1, addressLine2, city, state, postalCode, country, salesRepEmployeeNumber, creditLimit FROM customers WHERE city = ?`, [cityName] );

    return result;
}

// **Listar todos los clientes junto con su representante de ventas:**

export const getAllClientsWithSaleRep = async() => {
    const [result] = await connection.execute(`
    SELECT c.customerNumber, c.customerName, e.employeeNumber 'repVentasCode', concat(e.lastName, ' ', e.firstName) 'repVentasName' FROM customers c INNER JOIN employees e on c.salesRepEmployeeNumber = e.employeeNumber;
    `);
    return result;
}
