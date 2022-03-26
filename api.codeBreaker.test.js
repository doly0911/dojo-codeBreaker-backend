const request = require("supertest");
const api= require("./api.codeBreaker"); // Arrange
const cb = require('./codeBreaker');

describe("testing /secret path", () => {
 test("it should return status code 200", done => {
      request(api)
      .post("/secret") // Act
      .then(response => {
          expect(response.statusCode).toBe(200); //Assert
          done();
      });
    });

    test("it should return application/json content type", done => {
      request(api)
      .post("/secret") // Act
      .then(response => {
          expect(response.type).toBe('application/json'); //Assert
          done();
      });
    });

    test("it should return valid response", done => {
      request(api)
      .post("/secret") // Act
      .then(response => {
          expect(response.body).not.toBeNull(); //Assert
          expect(response.body.result).not.toBeUndefined(); //Assert
          done();
      });
    });

    test("it should return correct result", done => {
      request(api)
      .post("/secret") // Act
      .then(response => {
          expect(response.body).not.toBeNull(); //Assert
          expect(response.body.result).toBe('Secret has been set'); //Assert
          done();
      });
    });
})


describe("testing /math path", () => {
  beforeEach(()=>{
    cb.setSecret('1234');
    cb.resetAttempts();
  })
  test("it should return status code 200", done => {
    request(api)
    .get("/match?val=1234") // Act
    .then(response => {
        expect(response.statusCode).toBe(200); //Assert
        done();
    });
  });

  test("it should return application/json content type", done => {
    request(api)
    .get("/match?val=1234") // Act
    .then(response => {
        expect(response.type).toBe('application/json'); //Assert
        done();
    });
  });

  test("it should return valid response", done => {
    request(api)
    .get("/match?val=1234") // Act
    .then(response => {
        expect(response.body).not.toBeNull(); //Assert
        expect(response.body.result).not.toBeUndefined(); //Assert
        done();
    });
  });

  test("it should return correct result", done => {
    request(api)
    .get("/match?val=1234") // Act
    .then(response => {
        expect(response.body).not.toBeNull(); //Assert
        expect(response.body.result).toBe('XXXX'); //Assert
        expect(response.body.attempts).toBe(1)
        done();
    });
  });
})


describe("testing /getAttempts path", () => {
  beforeEach(()=>{
    cb.resetAttempts();
  })
  test("it should return status code 200", done => {
    request(api)
    .get("/getAttempts") // Act
    .then(response => {
        expect(response.statusCode).toBe(200); //Assert
        done();
    });
  });

  test("it should return application/json content type", done => {
    request(api)
    .get("/getAttempts") // Act
    .then(response => {
        expect(response.type).toBe('application/json'); //Assert
        done();
    });
  });

  test("it should return valid response", done => {
    request(api)
    .get("/getAttempts") // Act
    .then(response => {
        expect(response.body).not.toBeNull(); //Assert
        expect(response.body.result).not.toBeUndefined(); //Assert
        done();
    });
  });

  test("it should return correct result", done => {
    request(api)
    .get("/getAttempts") // Act
    .then(response => {
        expect(response.body).not.toBeNull(); //Assert
        expect(response.body.result).toBe(0); //Assert
        done();
    });
  });

  test("it should return correct result", done => {
    request(api).get('/match?val=1234').then()
    request(api)
    .get("/getAttempts") // Act
    .then(response => {
        expect(response.body).not.toBeNull(); //Assert
        expect(response.body.result).toBe(1); //Assert
        done();
    });
  });
})