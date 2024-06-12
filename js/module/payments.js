import { connection } from "../../helpers/conexion.js";

// Listar todos los pagos realizados por un cliente específico (por ejemplo, customerNumber = 101):
export const getAllPaymentsMadeByAClient = async({clientCode} = {clientCode: '496'}) => {
    
    const [result] = await connection.execute(`SELECT customerNumber, checkNumber, paymentDate, amount FROM payments WHERE customerNumber = ?`, [clientCode])
    return result
} 

