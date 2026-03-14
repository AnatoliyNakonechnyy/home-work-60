## Quick start

1. Install dependencies

   ```powershell
   npm install
   ```

2. Create `.env` in project root (example):

   ```
   PORT=3000
   ```

3. Run

   ```powershell
   node ./src/app.js
   ```

   or for development with automatic restart (if you have nodemon)

   ```powershell
   npx nodemon ./src/app.js
   ```

4. Open API:
   - GET / — health/info
   - GET /users — list users
   - POST /users — create user
   - GET /users/:id — get user
   - PUT /users/:id — update user
   - DELETE /users/:id — delete user
   - GET /transactions
   - POST /transactions
   - GET /transactions/:id
   - PUT /transactions/:id
   - DELETE /transactions/:id

## Project layout

- src/
  - app.js — application entry point
  - middleware/logger.js — request logger middleware
  - routs/ — route definitions (root, users, transactions)
  - controllers/ — request handlers
  - (other homework files)

## Development notes

- Modules use ESM imports. Ensure `"type": "module"` is set in package.json if required.
- Logger middleware prints: `[ISO-timestamp] METHOD URL`.
- Route modules include JSDoc headers for clarity.

## Testing

Add Jest tests as needed. To run tests (after adding):

```powershell
npm test
```

## Error handling

Controllers are minimal and respond with plain text. For production, add validation, proper status codes and centralized error handling.

## License

MIT
