mysql2
```npm install --save mysql2```

1. **Obtener todos los productos en stock:**

   ```sql
   select productName, quantityInStock from products;
   ```

2. **Lista de empleados que trabajan en una oficina específica (por ejemplo, '1'):**

   ```sql
   select employeeNumber, officeCode FROM employees WHERE officeCode = 1;
   ```

3. **Detalles de un cliente específico (por ejemplo, customerNumber = 101):**

   ```sql
   SELECT customerNumber, customerName, contactLastName, contactFirstName, phone, addressLine1, addressLine2, city, state, postalCode, country, salesRepEmployeeNumber, creditLimit FROM customers WHERE customerNumber = 125;
   ```

4. **Listar todos los pagos realizados por un cliente específico (por ejemplo, customerNumber = 101):**

   ```sql
   select customerNumber, checkNumber, paymentDate, amount FROM payments WHERE customerNumber = 496;
   ```

5. **Obtener todos los pedidos con estado 'Shipped':**

   ```sql
    SELECT orderNumber, orderDate, requiredDate, shippedDate, status, comments, customerNumber FROM orders WHERE status = 'Shipped';
   ```

6. **Cantidad total de productos en stock:**

   ```sql
   select sum(quantityInStock) 'Cantidad productos en stock'  from products;
   ```

7. **Lista de todos los empleados con su jefe (si tienen):**

   ```sql
   SELECT e.employeeNumber 'Numero', concat(e.lastName, ' ', e.firstName) 'Empleado', concat(b.lastName, ' ', b.firstName) 'Jefe'
       FROM employees e
       INNER JOIN employees b on e.reportsTo = b.employeeNumber;
   ```

8. **Detalles de oficinas en un país específico (por ejemplo, 'USA'):**

   ```sql
   SELECT officeCode, city, phone, addressLine1, addressLine2, state, country, postalCode, territory FROM offices WHERE country = 'USA';
   ```

9. **Listar todos los clientes en una ciudad específica (por ejemplo, 'Madrid'):**

   ```sql
   SELECT customerNumber, customerName, contactLastName, contactFirstName, phone, addressLine1, addressLine2, city, state, postalCode, country, salesRepEmployeeNumber, creditLimit FROM customers WHERE city = 'Madrid';
   ```

10. **Productos con precio de compra mayor a 50:**

    ```sql
    SELECT productCode,
         productName,
         buyPrice
         FROM products 
         WHERE buyPrice > 50;
    ```

### Consultas Multitabla

1. **Obtener todos los pedidos realizados por un cliente específico (por ejemplo, customerNumber = 101) con detalles del producto:**

   ```sql
   SELECT o.customerNumber, o.orderNumber, p.productCode,  p.productName, od.quantityOrdered, p.buyPrice FROM orders o INNER JOIN orderdetails od on o.orderNumber = od.orderNumber INNER JOIN products p on od.productCode = p.productCode WHERE o.customerNumber = 141;
   ```

2. **Listar todos los empleados junto con la oficina en la que trabajan:**

   ```sql
   select e.employeeNumber, concat(e.lastName, ' ', e.firstName), o.officeCode, o.city FROM employees e INNER JOIN offices o on e.officeCode = o.officeCode;
   ```

3. **Listar todos los clientes junto con su representante de ventas:**

   ```sql
    SELECT c.customerNumber, c.customerName, e.employeeNumber 'Rep Ventas', concat(e.lastName, ' ', e.firstName) FROM customers c INNER JOIN employees e on c.salesRepEmployeeNumber = e.employeeNumber;
   ```

4. **Obtener el nombre y la cantidad total ordenada de cada producto:**

   ```sql
   SELECT p.productCode, p.productName, SUM(od.quantityOrdered) FROM products AS p INNER JOIN orderdetails AS od ON p.productCode = od.productCode GROUP BY p.productCode;
   ```

5. **Listar todas las oficinas y el número de empleados en cada una:**

   ```sql
   select o.officeCode, o.city, count(e.employeeNumber) 'Cantidad Empleados'  FROM offices o INNER JOIN employees e ON o.officeCode = e.officeCode GROUP BY o.officeCode;
   ```

**Obtener detalles de los pedidos, incluyendo la información del cliente y los productos ordenados:**  

```sql
select od.orderNumber, c.customerNumber, c.customerName, p.productCode, p.productName, p.buyPrice, od.quantityOrdered, od.priceEach, od.orderLineNumber FROM orderdetails od INNER JOIN products p ON od.productCode = p.productCode INNER JOIN orders o on od.orderNumber = o.orderNumber INNER JOIN customers c on o.customerNumber = c.customerNumber;
```

**Listar todos los pagos realizados, junto con la información del cliente y su representante de ventas:**  

```sql
 SELECT 
     p.checkNumber,
     p.paymentDate,
     p.amount,
     p.customerNumber, 
     c.customerName,
     e.employeeNumber,
     concat(e.lastName, ' ', e.firstName) as 'Rep Ventas'
     FROM payments p
     INNER JOIN customers c ON p.customerNumber = c.customerNumber
     INNER JOIN employees e ON c.salesRepEmployeeNumber = e.employeeNumber
      WHERE e.jobTitle = 'Sales Rep';
```

**Obtener una lista de todos los productos, junto con sus líneas de productos y el total de cantidad ordenada:**

```sql
select p.productCode, p.productName, p.productLine, sum(od.quantityOrdered) 'Total Ordenados' FROM products p INNER JOIN orderdetails od ON od.productCode = p.productCode GROUP BY p.productCode;
```

  **Listar todos los pedidos con detalles del cliente y el nombre del representante de ventas:** 

```sql
 select 
     o.orderNumber,
     o.customerNumber,
     c.customerName,
     e.employeeNumber,
     concat(e.lastName, ' ', e.firstName) 'Rep Ventas'
     FROM orders o
     INNER JOIN customers c ON o.customerNumber = c.customerNumber
     INNER JOIN employees e ON c.salesRepEmployeeNumber = e.employeeNumber
     WHERE e.jobTitle = 'Sales Rep';
```

**Obtener el total de pagos realizados por cada cliente y el nombre del representante de ventas asignado:**

```sql
SELECT
	c.customerNumber,
	c.customerName, 
	count(p.customerNumber) 'Cantidad Pagos', 
	e.employeeNumber, concat(e.lastName, ' ', e.firstName) 'Rep Ventas'
    FROM payments p 
    INNER JOIN customers c ON p.customerNumber = c.customerNumber
    INNER JOIN employees e ON c.salesRepEmployeeNUmber = e.employeeNumber
    GROUP BY c.customerNumber
     WHERE e.jobTitle = 'Sales Rep'
    ;
```

