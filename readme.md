# Real Estate Property Management
================================

Features
--------

### Home Page

* Displays property cards in a responsive grid
* Shows key property details (price, bedrooms, area, location)
* Links to property detail pages

### Property Detail Page

* Shows comprehensive property information
* Displays all attributes from the database

### Admin Panel

* Property management table with CRUD operations
* Add/edit property forms with validation
* Delete confirmation through direct action

### Backend API

* RESTful endpoints for all CRUD operations
* MySQL database integration
* CORS configuration for React frontend


## API Endpoints

```
http://localhost:8080/api/properties
```

---

### 1. Get All Properties

* **Method:** `GET`
* **URL:** `/api/properties`
* **Headers:**

  * `Content-Type: application/json`
* **Body:** None

---

### 2. Get Property by ID

* **Method:** `GET`
* **URL:** `/api/properties/{id}`
* **Headers:**

  * `Content-Type: application/json`
* **Body:** None

---

### 3. Create a New Property

* **Method:** `POST`
* **URL:** `/api/properties`
* **Headers:**

  * `Content-Type: application/json`
* **Body (JSON):**

```json
{
  "title": "Luxury Villa",
  "description": "Beautiful 4 BHK villa with modern amenities",
  "price": 2500000.00,
  "address": "123 Palm Avenue",
  "city": "Mumbai",
  "state": "Maharashtra",
  "bedrooms": 4,
  "bathrooms": 3,
  "areaSqft": 3200,
  "propertyType": "VILLA"
}
```

---

### 4. Update a Property

* **Method:** `PUT`
* **URL:** `/api/properties/{id}`
* **Headers:**

  * `Content-Type: application/json`
* **Body (JSON):**

```json
{
  "title": "Updated Luxury Villa",
  "description": "Beautiful 4 BHK villa with modern amenities and swimming pool",
  "price": 2750000.00,
  "address": "123 Palm Avenue",
  "city": "Mumbai",
  "state": "Maharashtra",
  "bedrooms": 4,
  "bathrooms": 3,
  "areaSqft": 3200,
  "propertyType": "VILLA"
}
```

---

### 5. Delete a Property

* **Method:** `DELETE`
* **URL:** `/api/properties/{id}`
* **Headers:**

  * `Content-Type: application/json`
* **Body:** None

---

## ⚠️ Notes

* The base URL assumes the app runs on `localhost:8080`. Adjust the port if needed.
* `propertyType` values (case-sensitive): `APARTMENT`, `VILLA`, `PLOT`, `COMMERCIAL`.
* `id` is auto-generated and **should not** be provided when creating a property.
* `price` can be an integer or decimal.
