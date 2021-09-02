/**
 * Ref: https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/#refresh_token_persistance
 * 1. The user logs in with a login API call.
 * 2. Server generates JWT Token and refresh_token
 * 3. Server sets a HttpOnly cookie with refresh_token. jwt_token and jwt_token_expiry are returned back to the client as a JSON payload.
 * 4. The jwt_token is stored in memory.
 * 5. A countdown to a future silent refresh is started based on jwt_token_expiry
 */

const path = require("path");
const jsonServer = require("json-server");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
// const router = jsonServer.router({
//   posts: [...Array(20).keys()].map((id) => ({
//     id,
//     title: "json-server",
//     author: "typicode",
//   })),
// });

// Set default middlewares (logger, static, cors and no-cache)
const middlewares = jsonServer.defaults();
server.use(cors({ origin: "http://localhost:3000", credentials: true }));
server.use(middlewares);
server.use(cookieParser());

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

const tokens = {
  refresh_token: "refresh_token",
  access_token: "",
};

// const refreshTokens = () => {
//   tokens.access_token = `access_token_${Date.now() + 10000}`;

//   return tokens;
// };

const isTokenExpired = (token) => {
  return parseInt(token.split("_").pop()) < Date.now() - 10000;
};

const user = {
  email: "tvthong1995@gmail.com",
  password: "password",
};

// middleware
const authenticate = (req, res, next) => {
  // parse cookies
  const { access_token } = req.cookies;

  if (!access_token) {
    return res.status(401).send("unauthorized");
  }
  next();
};

server.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email !== user.email) {
    return res
      .status(404)

      .json({ email: "email is not found" });
  }

  if (password !== user.password) {
    return res.status(400).json({ password: "password is incorrect" });
  }

  return res
    .status(200)
    .cookie("access_token", "ThongTheW", {
      sameSite: "strict",
      path: "/",
      expires: new Date(new Date().getTime() + 100 * 1000),
      httpOnly: true,
    })
    .send("cookie being initialised");
});

server.post("/api/logout", (req, res) => {
  tokens.access_token = "";

  return res.json({ message: "logout success" });
});

// server.post("/api/refresh_token", (req, res) => {
//   const { refresh_token } = req.body;

//   if (refresh_token === tokens.refresh_token) {
//     return res.json(refreshTokens());
//   }

//   return res.status(400).json({ message: "refresh_token is incorrect" });
// });

// Use default router
server.use("/api", authenticate, router);
server.listen(5000, () => {
  console.log("JSON Server is running");
});
