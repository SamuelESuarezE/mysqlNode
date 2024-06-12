import { connection } from "../../helpers/conexion.js";


// Detalles de oficinas en un país específico (por ejemplo, 'USA

export const getDetailsAboutOfficesInSpecificCountry = async({countryName} = {countryName: 'USA'})=>{
    
    const [result] = await connection.execute(`SELECT officeCode, city, phone, addressLine1, addressLine2, state, country, postalCode, territory FROM offices WHERE country = ?;`, [countryName] );

    return result;
}

// **Listar todas las oficinas y el número de empleados en cada una:**

export const getAllOfficesWithNumberOfEmployees = async() => {
    const [result] = await connection.query(`select o.officeCode, o.city, count(e.employeeNumber) 'numEmpleados'  FROM offices o INNER JOIN employees e ON o.officeCode = e.officeCode GROUP BY o.officeCode;`)
    return result
}