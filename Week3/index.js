var http = require("http");
const employees = require("./Employee");
const { stringify } = require("querystring");
console.log("Lab 03 -  NodeJs");

const port = process.env.PORT || 8015

const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            res.setHeader("Content-Type", "text/html")
            res.end("<h1>Welcome to Lab Exercise 03</h1>");
            return;
        }

        if (req.url === '/employee') {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(employees));
            return;
        }

        if (req.url === '/employee/names') {
            const names = employees
                .map(emp => `${emp.firstName} ${emp.lastName}`)
                .sort();
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(names));
            return;
        }

        if (req.url === '/employee/totalsalary') {
            const total = employees.reduce((sum, emp) => sum + emp.Salary, 0);
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({total_Salary: total}));
            return;
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})