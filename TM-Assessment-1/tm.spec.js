

const tm = require('./tm')
// import tm from './tm'


// TDD ( Test Driven Development )
// Arrange
it("shud add new task", () => {
    // Act
    let task = tm.addNewTask("go home")
    //Assert
    expect(task.text).toBe("go home")
    expect(task.priority).toBe("p1")
})