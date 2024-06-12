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

// Ejercicios


// **Lista de empleados que trabajan en una oficina específica (por ejemplo, '1'):**
export const getAllEmployeesInAnOffice = async({officeCode} = {officeCode: '1'})=>{
    
    const [result] = await connection.execute(`select employeeNumber, officeCode FROM employees WHERE officeCode = ?`, [officeCode] );

    result["count"] = result.length;
    return result;
}

// Lista de todos los empleados con su jefe (si tienen)

export const getAllEmployeesWithBoss= async()=>{
    
    const [result] = await connection.execute(`SELECT e.employeeNumber 'Numero', concat(e.lastName, ' ', e.firstName) 'empleado', concat(b.lastName, ' ', b.firstName) 'Jefe'
    FROM employees e
    INNER JOIN employees b on e.reportsTo = b.employeeNumber;`);

    return result;
}

// **Listar todos los empleados junto con la oficina en la que trabajan:**

export const getAllEmployeesWithOffice = async()=>{
    
    const [result] = await connection.execute(`select e.employeeNumber, concat(e.lastName, ' ', e.firstName) 'empleado', o.officeCode, o.city FROM employees e INNER JOIN offices o on e.officeCode = o.officeCode;`);

    return result;
}