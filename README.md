# 👁️ VisionIQ Backend

# 🚀 Tech Stack

| Layer                         | Technology            | Why We Use It                                   |
| ----------------------------- | --------------------- | ----------------------------------------------- |
| Runtime                       | Node.js               | JavaScript runtime for backend services         |
| Framework                     | Express.js            | Lightweight and flexible REST API framework     |
| Language                      | TypeScript            | Static typing and improved maintainability      |
| Database                      | PostgreSQL (Supabase) | Reliable relational database                    |
| ORM                           | Drizzle ORM           | Type-safe SQL with excellent TypeScript support |
| Authentication                | Supabase Auth         | Secure Email/Password and Google Authentication |
| Validation                    | Zod                   | Runtime validation and type inference           |
| Logging                       | Pino                  | High-performance structured logging             |
| Security                      | Helmet                | Secure HTTP headers                             |                  |
| Environment                   | dotenv                | Environment variable management                 |
| API Documentation *(planned)* | OpenAPI (Swagger)     | Interactive API documentation                   |                      |
| Package Manager               | pnpm                  | Fast and efficient dependency management        |

---

# 📂 Project Structure

```
src/
│
├── config/
│   ├── env.ts
│   └── logger.ts
│
├── db/
│   ├── client.ts
│   └── schema/
│
├── docs/
│
├── error/
│
├── lib/
│   └── supabase.ts
│
├── middleware/
│
├── modules/
│   ├── auth/
│   ├── symptoms/
│   ├── appointments/
│   ├── family-history/
│   └── exam-records/
│
├── response/
│
├── routes/
│
├── app.ts
└── server.ts
```

---

# ✨ Features

## Authentication

* Email Registration
* Email Login
* Google OAuth Login *(Backend Ready)*
* Forgot Password
* Current User (`/me`)
* JWT Authentication Middleware
* Protected Routes


---

# 🔐 Security

* JWT Authentication
* Route Protection Middleware
* Input Validation with Zod
* Helmet Security Headers
* Environment Variable Validation
* Centralized Error Handling
* Structured Logging


# 📦 Implemented Modules

* Express Server
* TypeScript Configuration
* Environment Configuration
* Logger
* Error Handler
* Async Handler
* Response Helper
* Validation Middleware


# 📋 API Endpoints

## Authentication

Once the server is running, open:

swagger:   http://localhost:3000/api-docs  for swagger apis


| Method | Endpoint                | Status                      |
| ------ | ----------------------- | --------------------------- |
| POST   | `/auth/signup`          | ✅                           |
| POST   | `/auth/login`           | ✅                           |
| GET    | `/auth/me`              | ✅                           |
| POST   | `/auth/logout`          | ✅                           |
| POST   | `/auth/forgot-password` | ✅                           |
| GET    | `/auth/google`          | ✅ *(Configuration Pending)* |


---

# 🛠️ Development

Install dependencies

```bash
pnpm install
```

Start development server

```bash
pnpm dev
```
http://localhost:3000

```bash
pnpm build
```



# Environment Variables

Create a `.env` file.

```env
PORT=3000

SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

DATABASE_URL=

FRONTEND_URL=
GOOGLE_REDIRECT_URI=
```


# 👨‍💻 Backend Developer

**Piyush**



