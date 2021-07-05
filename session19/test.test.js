const {sum} = require("./index")

const {fetchData,isAdmin} = require("./index")

const arr =[1,2,3]

const deArr = [...arr]

test("checking 1 to be 1 " , () => {
    expect(arr).toEqual(deArr)
} )


test( "TEsting async code" , async () => {
    const data = await  fetchData();

    expect(data.id).toBe(1)

}  )


test("Testing middleware" , () => {
    expect(isAdmin()).toBe("Admin")
} )

