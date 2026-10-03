const http = require("http");

const PORT = 3000;

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>DevOps Docker Task</title>
  <style>
    body { font-family: Arial, sans-serif; background:#0f172a; color:#fff;
           display:flex; justify-content:center; align-items:center; height:100vh; margin:0; }
    .card { background:#1e293b; padding:40px; border-radius:16px; text-align:center; }
    h1 { margin-top:0; }
    p { color:#cbd5e1; }
  </style>
</head>
<body>
  <div class="card">
    <h1>DevOps Docker Task</h1>
    <p><b>Student Name:</b> Dua</p>
    <p><b>Student ID:</b> 35045</p>
    <p><b>Course Name:</b> DevOps</p>
    <p>This application is running inside a Docker container.</p>
  </div>
</body>
</html>`;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  })
  .listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));