Sure! Here are the SQL queries for each of the API endpoints:

### 1. `GET /products` with optional query parameters

Retrieve all products with optional filtering by category, region, and price range.

```sql
-- Base query
SELECT * FROM Products WHERE 1=1

-- Optional filtering by category
AND (category_id = ? OR ? IS NULL)

-- Optional filtering by region
AND (region_id = ? OR ? IS NULL)

-- Optional filtering by price range
AND (price BETWEEN ? AND ? OR (? IS NULL AND ? IS NULL));
```

Parameters:

- `?` placeholders to be replaced with actual values or `NULL` for no filtering.

### 2. `GET /products/{id}`

Retrieve details of a specific product by its ID.

```sql
SELECT * FROM Products WHERE id = ?;
```

Parameters:

- `?` to be replaced with the specific product ID.

### 3. `POST /cart`

Add a product to the cart.

```sql
INSERT INTO Cart (product_id, quantity) VALUES (?, ?);
```

Parameters:

- First `?` to be replaced with the product ID.
- Second `?` to be replaced with the quantity.

### 4. `GET /cart`

Retrieve the contents of the cart.

```sql
SELECT Cart.id, Products.name, Cart.quantity, Products.price
FROM Cart
JOIN Products ON Cart.product_id = Products.id;
```

### 5. `PUT /cart/{id}`

Update the quantity of a product in the cart.

```sql
UPDATE Cart SET quantity = ? WHERE id = ?;
```

Parameters:

- First `?` to be replaced with the new quantity.
- Second `?` to be replaced with the cart item ID.

### 6. `DELETE /cart/{id}`

Remove a product from the cart.

```sql
DELETE FROM Cart WHERE id = ?;
```

Parameters:

- `?` to be replaced with the cart item ID.

### 7. `GET /stock/{id}`

Check the stock quantity of a specific product.

```sql
SELECT stock_quantity FROM Products WHERE id = ?;
```

Parameters:

- `?` to be replaced with the product ID.

These queries can be incorporated into your API routes to interact with the database accordingly.
