const router = require("express").Router();
const EmployeeModel = require("../../models/Employee");


router.get("/api/employee", async (request, response) => {
  const employee = await EmployeeModel.find({});

  try {
    response.send(employee);
  } catch (error) {
    response.status(500).send(error);
  }
});





router.post("/api/employee", async (request, response) => {
  const employee = new EmployeeModel(request.body);

  try {
    await employee.save();
    response.send(employee);
  } catch (error) {
    response.status(500).send("nothing here");
  }
});

// router.patch("/api/developers/:id", async (request, response) => {
//   try {
//     await developerModel.findByIdAndUpdate(request.params.id, request.body);
//     await developerModel.save();
//     response.send(developer);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });




// router.delete("/api/developers/:id", async (request, response) => {
//   try {
//     const developer = await developerModel.findByIdAndDelete(request.params.id);

//     if (!developer) response.status(404).send("No item found");
//     response.status(200).send("deleted");
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });


module.exports = router;