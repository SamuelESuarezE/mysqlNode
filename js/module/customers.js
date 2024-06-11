import { connection } from "../../helpers/conexion.js";

export const getAllLastAndFirstNames = async() => {
    const [result] = await connection.execute(`
    SELECT contactLastname, contactFirstname 
    FROM customers 
    ORDER BY contactLastname DESC, contactFirstname ASC;
    `);
    return result;
}