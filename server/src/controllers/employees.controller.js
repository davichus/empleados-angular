const employeesCtrl = {};

employeesCtrl.getEmployees = (req, res) => {
    res.send('Retorna listado de empleados');
};

employeesCtrl.createEmployee = (req, res) => {
    res.send('Crea un nuevo empleado');
};

employeesCtrl.getEmployeeId = (req, res) => {
    res.send('Retorna un empleado por ID');
};

employeesCtrl.updateEmployee = (req, res) => {
    res.send('Actualiza un empleado por ID');
};

employeesCtrl.deleteEmployee = (req, res) => {
    res.send('Elimina un empleado por ID');
};

module.exports = employeesCtrl;