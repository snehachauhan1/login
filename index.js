const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const path = require('path');

const usersFile = path.join(__dirname, 'users.json');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (req.method === 'GET') {
    if (pathname === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    /* Your CSS */
    /* Rest of your CSS code */
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css");
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ddd;
  font-size: 14px;
}

.container {
  background-color: #fff;
  width: 760px;
  max-width: 100vw;
  height: 480px;
  position: relative;
  overflow-x: hidden;
}
.container .forms-container {
  position: relative;
  width: 50%;
  text-align: center;
}
.container .forms-container .form-control {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 480px;
  transition: all 0.5s ease-in;
}
.container .forms-container .form-control h2 {
  font-size: 2rem;
}
.container .forms-container .form-control form {
  display: flex;
  flex-direction: column;
  margin: 0px 30px;
}
.container .forms-container .form-control form input {
  margin: 10px 0px;
  border: none;
  padding: 15px;
  background-color: #efefef;
  border-radius: 5px;
}
.container .forms-container .form-control form button {
  border: none;
  padding: 20px;
  margin-top: 5px;
  background-color: #059669;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}
.container .forms-container .form-control form button:focus {
  outline: none;
}
.container .forms-container .form-control span {
  margin: 10px 0px;
}
.container .forms-container .form-control .socials i {
  margin: 0 5px;
  color: #fff;
  border-radius: 50%;
}
.container .forms-container .form-control .socials .fa-facebook-f {
  padding: 5px 8px;
  background-color: #3b5998;
}
.container .forms-container .form-control .socials .fa-google-plus-g {
  padding: 5px 4px;
  background-color: #db4a39;
}
.container .forms-container .form-control .socials .fa-linkedin-in {
  padding: 5px 6px;
  background-color: #0e76a8;
}
.container .forms-container .form-control.signup-form {
  opacity: 0;
  z-index: 1;
  left: 200%;
}
.container .forms-container .form-control.signin-form {
  opacity: 1;
  z-index: 2;
  left: 0%;
}
.container .intros-container {
  position: relative;
  left: 50%;
  width: 50%;
  text-align: center;
}
.container .intros-container .intro-control {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 480px;
  color: #fff;
  background: linear-gradient(170deg, #34d399, #059669);
  transition: all 0.5s ease-in;
}
.container .intros-container .intro-control .intro-control__inner {
  margin: 0px 30px;
}
.container .intros-container .intro-control button {
  border: none;
  padding: 15px 30px;
  background-color: #10b981;
  border-radius: 50px;
  color: #fff;
  margin: 10px 0px;
  cursor: pointer;
}
.container .intros-container .intro-control button:focus, .container .intros-container .intro-control button:hover {
  outline: none;
  background-color: #059669;
}
.container .intros-container .intro-control h3,
.container .intros-container .intro-control p {
  margin: 10px 0px;
}
.container .intros-container .intro-control.signin-intro {
  opacity: 1;
  z-index: 2;
}
.container .intros-container .intro-control.signup-intro {
  opacity: 0;
  z-index: 1;
}

.change .forms-container .form-control.signup-form {
  opacity: 1;
  z-index: 2;
  transform: translateX(-100%);
}
.change .forms-container .form-control.signup-form button {
  background-color: #2563eb !important;
}
.change .forms-container .form-control.signin-form {
  opacity: 0;
  z-index: 1;
  transform: translateX(-100%);
}
.change .intros-container .intro-control {
  transform: translateX(-100%);
  background: linear-gradient(170deg, #3b82f6, #2563eb);
}
.change .intros-container .intro-control #signin-btn {
  background-color: #2563eb;
}
.change .intros-container .intro-control.signin-intro {
  opacity: 0;
  z-index: 1;
}
.change .intros-container .intro-control.signup-intro {
  opacity: 1;
  z-index: 2;
}

@media screen and (max-width: 480px) {
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .container .forms-container {
    order: 2;
    width: 100%;
    height: 50vh;
  }
  .container .forms-container .form-control {
    position: absolute;
    height: 50vh;
  }
  .container .forms-container .form-control.signup-form {
    left: 0%;
    margin-top: 70px;
  }
  .container .intros-container {
    order: 1;
    width: 100%;
    left: 0%;
    height: 40vh;
  }
  .container .intros-container .intro-control {
    position: absolute;
    height: 40vh;
  }

  .change .forms-container .form-control.signup-form {
    transform: translateX(0%);
  }
  .change .forms-container .form-control.signin-form {
    transform: translateX(0%);
  }
  .change .intros-container .intro-control {
    transform: translateX(0%);
  }
}
    </style>
</head>
<body>
    <div class="container">
        <div class="forms-container">
          <div class="form-control signup-form">
            <form action="/signup" method="POST">
              <h2>Signup</h2>
              <input type="text" name="username" placeholder="Username" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="password" placeholder="Password" required />
              <input type="password" name="confirmPassword" placeholder="Confirm password" required />
              <button type="submit">Signup</button>
            </form>
            <span>or signup with</span>
            <div class="socials">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-google-plus-g"></i>
              <i class="fab fa-linkedin-in"></i>
            </div>
          </div>
          <div class="form-control signin-form">
            <form action="/login" method="POST">
              <h2>Signin</h2>
              <input type="text" name="username" placeholder="Username" required />
              <input type="password" name="password" placeholder="Password" required />
              <button type="submit">Signin</button>
            </form>
            <span>or signin with</span>
            <div class="socials">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-google-plus-g"></i>
              <i class="fab fa-linkedin-in"></i>
            </div>
          </div>
        </div>
        <div class="intros-container">
          <div class="intro-control signin-intro">
            <div class="intro-control__inner">
              <h2>Welcome back!</h2>
              <p>
                Welcome back! We are so happy to have you here. It's great to see you again. We hope you had a safe and enjoyable time away.
              </p>
              <button id="signup-btn">No account yet? Signup.</button>
            </div>
          </div>
          <div class="intro-control signup-intro">
            <div class="intro-control__inner">
              <h2>Come join us!</h2>
              <p>
                We are so excited to have you here. If you haven't already, create an account to get access to exclusive offers, rewards, and discounts.
              </p>
              <button id="signin-btn">Already have an account? Signin.</button>
            </div>
          </div>
        </div>
      </div>
      <script>
        const signupBtn = document.getElementById("signup-btn");
        const signinBtn = document.getElementById("signin-btn");
        const mainContainer = document.querySelector(".container");

        signupBtn.addEventListener("click", () => {
          mainContainer.classList.toggle("change");
        });
        signinBtn.addEventListener("click", () => {
          mainContainer.classList.toggle("change");
        });
      </script>
</body>
</html>
      `);
    } else if (pathname === '/home') {
      fs.readFile(usersFile, 'utf8', (err, data) => {
        if (err) {
          console.error(`Error reading file: ${err}`);
          res.writeHead(500, { 'Content-Type': 'text/html' });
          res.end('Internal Server Error');
          return;
        }

        const users = JSON.parse(data);

        let tableRows = users.map(user => {
          return `<tr><td>${user.username}</td><td>${user.password}</td></tr>`;
        }).join('');

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>User List</title>
              <style>
                  table {
                      width: 50%;
                      margin: auto;
                      border-collapse: collapse;
                  }
                  th, td {
                      padding: 10px;
                      border: 1px solid #ddd;
                      text-align: left;
                  }
                  th {
                      background-color: #059669;
                      color: white;
                  }
              </style>
          </head>
          <body>
              <h1>User List</h1>
              <table border="1">
                  <thead>
                      <tr>
                          <th>Username</th>
                          <th>Password</th>
                      </tr>
                  </thead>
                  <tbody>
                      ${tableRows}
                  </tbody>
              </table>
          </body>
          </html>
        `);
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('Page not found');
    }
  } else if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const parsedBody = qs.parse(body);

      if (pathname === '/signup') {
        const email = parsedBody.email;
        if (!email.endsWith('@gmail.com')) {
          res.writeHead(400, { 'Content-Type': 'text/html' });
          res.end('<script>alert("Please provide a valid Gmail address."); window.location="/";</script>');
          return;
        }

        const newUser = {
          username: parsedBody.username,
          email: parsedBody.email,
          password: parsedBody.password
        };

        fs.readFile(usersFile, 'utf8', (err, data) => {
          if (err && err.code !== 'ENOENT') {
            console.error(`Error reading file: ${err}`);
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('Internal Server Error');
            return;
          }

          let users = [];
          if (data) {
            users = JSON.parse(data);
          }

          const userExists = users.some(user => user.username === newUser.username);

          if (userExists) {
            res.writeHead(400, { 'Content-Type': 'text/html' });
            res.end('<script>alert("User already exists"); window.location="/";</script>');
          } else {
            users.push(newUser);
            fs.writeFile(usersFile, JSON.stringify(users, null, 2), err => {
              if (err) {
                console.error(`Error writing file: ${err}`);
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('Internal Server Error');
                return;
              }
              res.writeHead(200, { 'Content-Type': 'text/html' });
              res.end('<script>alert("Registration successful! You can now login."); window.location="/";</script>');
            });
          }
        });
      } else if (pathname === '/login') {
        fs.readFile(usersFile, 'utf8', (err, data) => {
          if (err) {
            console.error(`Error reading file: ${err}`);
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('Internal Server Error');
            return;
          }

          const users = JSON.parse(data);
          const user = users.find(user => user.username === parsedBody.username && user.password === parsedBody.password);

          if (user) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<script>alert("Login successful"); window.location="/home";</script>');
          } else {
            res.writeHead(400, { 'Content-Type': 'text/html' });
            res.end('<script>alert("Invalid username or password"); window.location="/";</script>');
          }
        });
      } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('Page not found');
      }
    });
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
