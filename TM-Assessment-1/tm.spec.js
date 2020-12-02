

const tm=require('./tm')


it("should return 4 tasks",()=>{
    expect(tm.viewTasks().length).toBe(4)
})