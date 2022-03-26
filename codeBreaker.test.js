const cb = require("./codeBreaker");

describe('test match function', ()=> {
  beforeEach(()=>{
    cb.setSecret('1234');
    cb.userAttempts = 0;
  })
  test("full match all digits", () => {
    const {result} = cb.match("1234"); //Act
    expect(result).toBe("XXXX"); //Assert
  });
  
  test("digits not exist", () => {
    const {result} = cb.match("9578");
    expect(result).toBe("");
  });
  
  describe("Digits exit in same position", () => {
  
    test("only 1 digit in first position", () => {
      const {result} = cb.match("1765");
      expect(result).toBe("X");
    });
    test("1 digit in the same position but in any location", () => {
      const {result} = cb.match("9635");
      expect(result).toBe("X");
    });
  
    test("2 digit in the same position but in any location", () => {
      const {result} = cb.match("9238");
      expect(result).toBe("XX");
    });
  
    test("3 digit in the same position but in any location", () => {
      const {result} = cb.match("1237");
      expect(result).toBe("XXX");
    });
  });
  
  describe("Digit exist but other location", () => {
  
    test("1 digit exist but other location", () => {
      const {result} = cb.match("5761");
      expect(result).toBe("-");
    });
  
    test("2 digit exist but in a different position", () => {
      const {result} = cb.match("8743");
      expect(result).toBe("--");
    });
  
    test("3 digits exist but in a different position", () => {
      const {result} = cb.match("9143");
      expect(result).toBe("---");
    });
  
    test("Digits exist but in a different position", () => {
      const {result} = cb.match("2143");
      expect(result).toBe("----");
    });
  });
  
  test("1 digit in the same position and 1 digit in any location", () => {
      const {result} = cb.match("1647");
      expect(result).toBe("X-");
    });  
  
  test("2 digit in the same position and 1 digit in any location", () => {
    const {result} = cb.match("1247");
    expect(result).toBe("XX-");
  });
  
  test("2 digit in the same position and 2 digit in any location", () => {
    const {result} = cb.match("1243");
    expect(result).toBe("XX--");
  });
})

describe('test getUserAttempts', () => {
  beforeEach(()=>{
    cb.setSecret('1234');
    cb.resetAttempts();
  })
  test("should be 0 if match has not been called before", () => {
    const attempts = cb.getAttempts();
    expect(attempts).toBe(0);
  });  

  test("should be 1 if match has been called before", () => {
    cb.match('1234');
    const attempts = cb.getAttempts();
    expect(attempts).toBe(1);
  });  
})

describe('test setSecret', () => {
  beforeEach(()=>{
    cb.setSecret('1234');
  })
  test("should be 1234", () => {
    expect(cb.getSecret()).toBe('1234');
  });  

  test("should be 1 if match has been called before", () => {
    cb.setSecret('1235');
    expect(cb.getSecret()).toBe('1235')
  });  
})