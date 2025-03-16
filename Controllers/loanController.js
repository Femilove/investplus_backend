const Loan = require('../model/Loan')

const createNewLoans = async (req,res) => {
    const { name, amount } = req.body;
    const loan = new Loan({ name, amount, approved: true }); // Simulate approval
    await loan.save();
    res.status(201).json(loan);
}

module.exports = {
    createNewLoans
}