import { connection } from "../../helpers/conexion.js";

// Nombres y Cantidad de personas con cierto cargo
export const getAllJobTitle = async({cargo} = {cargo: "Sales Rep"})=>{
    const [result] = await connection.execute(`SELECT CONCAT(firstName," ", lastName) as 'fullName' FROM employees where jobTitle = ?`, [cargo] );
    result["count"] = result.length;
    return result;
}



export const getAllLastNames = async() => {
    const [result] = await connection.query(`
    SELECT lastName FROM employees
    `)

    return result
}

export const getAllFullNameJob = async() => {
    const [result] = await connection.query(`
    SELECT concat(firstName, ' ', lastName) as fullname, jobTitle FROM employees
    `)

    return result
}

export const getAll = async() => {
    const [result] = await connection.query(`
    SELECT employeeNumber,
        lastName,
        firstName,
        extension,
        email,
        officeCode,
        reportsTo,
        jobTitle
    FROM employees`)

    return result
}