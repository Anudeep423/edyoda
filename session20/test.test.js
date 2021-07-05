
const request = require("supertest")


const app = require("./index")

// test("sum of two numbers" , () => {
//     expect(sum(2,3)).toBe(5)
// } )


// test( " Check if completed" , async () => {

//    const response =  await fetchData()

//    expect(response.completed).toBe(false)

// } )

// test("TEst  get / route " , (done) => {

//     request(app)
//     .get("/")
//     .expect(206)
//     .expect(/hello/,done)

// } )




// Problem Details

// The objective of this project is to manage gym membership. 



// Features:

// Super-users should be able to perform CRUD for members and workout regimens.


// Workout Regimen:

// BMI stands for Body Mass Index


// BMI < 18.5: Use the following workout regimen:
// Mon: Chest
// Tue: Biceps
// Wed: Rest
// Thu: Back
// Fri: Triceps
// Sat: Rest
// Sun: Rest


// BMI < 25:

// Mon: Chest
// Tue: Biceps
// Wed: Cardio/Abs
// Thu: Back
// Fri: Triceps
// Sat: Legs
// Sun: Rest


// BMI < 30:

// Mon: Chest
// Tue: Biceps
// Wed: Abs/Cardio
// Thu: Back
// Fri: Triceps
// Sat: Legs
// Sun: Cardio


// BMI > 30:

// Mon: Chest
// Tue: Biceps
// Wed: Cardio
// Thu: Back
// Fri: Triceps
// Sat: Cardio
// Sun: Cardio


// Member Creation:

// Following details should be required to create a member: Full Name, Age, Gender, Mobile Number, Email, BMI, Password , Membership Duration in months (1, 3, 6, or 12).
// Based on BMI a predefined workout regimen should be assigned.


// The profile can be viewed by the superuser by entering the contact number.



// Superuser should see the following options:

// Create Member
// View Member
// Delete Member
// Update Member - It should include a way to extend and revoke membership.
// Create Regimen
// View Regimen
// Delete Regimen
// Update Regimen
// get progress 



// Member should see the following options:

// My Regimen
// My Profile.
// My Progress
// Create Progress (Protected route can only be viewed by the user himself and super-user)
// Update Progress (Protected route can only be viewed by the user himself and super-user)
