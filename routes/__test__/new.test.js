const request = require("supertest")
const app = require("../../app")

it("Can send emails with valid inputs", async () => {
    return request(app)
    .post("/api/mail")
    .send({
        to: "ifbarnetche@gmail.com",
        subject: "Asunto",
        text: "Probando api",
        html: "<strong> Proyecto Final</strong>",
        sandboxMode: true
    }).expect(201);
});

it("returns a 400 status code with invalid credentials", async () =>{
    return request(app)
    .post("/api/mail")
    .send({
        to: "",
        subject: "",
        text: "Probando api",
        html: "<strong> Proyecto Final</strong>",
        sandboxMode: true
    }).expect(400);
})