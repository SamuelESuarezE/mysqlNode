import { connection } from "../../helpers/conexion.js";

// **Obtener todos los pedidos con estado 'Shipped':**
export const getAllOrdersShipped = async() => {
    const [result] = await connection.query(`SELECT orderNumber, orderDate, requiredDate, shippedDate, status, comments, customerNumber FROM orders WHERE status = 'Shipped';`)
    return result
}

// **Obtener todos los pedidos realizados por un cliente específico (por ejemplo, customerNumber = 101) con detalles del producto:**

export const getOrdersMadeByAnSpecificClient = async({clientCode} = {clientCode: '141'})=>{
    
    const [result] = await connection.execute(`SELECT o.customerNumber, o.orderNumber, p.productCode,  p.productName, od.quantityOrdered, p.buyPrice FROM orders o INNER JOIN orderdetails od on o.orderNumber = od.orderNumber INNER JOIN products p on od.productCode = p.productCode WHERE o.customerNumber = ?`, [clientCode] );

    return result;
}