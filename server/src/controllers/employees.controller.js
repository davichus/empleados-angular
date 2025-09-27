
const employeesCtrl = {};
const Employee = require('../models/Employee');

employeesCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.send(employees);
};

employeesCtrl.createEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.send({message: 'Empleado creado'});
};

employeesCtrl.getEmployeeId = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.send(employee);
};

employeesCtrl.updateEmployee =  async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.send({message: 'Empleado actualizado'});
};

employeesCtrl.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.send({message: 'Empleado eliminado'});
};

module.exports = employeesCtrl;