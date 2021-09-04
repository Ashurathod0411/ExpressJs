const { response, request } = require("express");
const express = require("express");
const app = express();
const port = 8080;
const fs = require("fs");
app.use(express.json());

//let studentInformation = {};

app.post("/Student", (request, response) => {
    fs.writeFile("studentDetail.json", JSON.stringify(request.body), err => {
        if (err) throw err; 
        console.log("Done writing"); 
        response.status(200).send({ Result : "Success"});
        });
    });

app.get("/getStudentInfo" , (request, response) => {
    fs.readFile("studentDetails.json", (err, data) => {
        if (err) throw err;
        const studentInformation = JSON.parse(data);
        console.log("studentInformation", studentInformation);
        response.status(200).send(studentInformation);
        });
    });


app.listen(port, () => {
    console.log("Server has been listening to port " + port);
});

