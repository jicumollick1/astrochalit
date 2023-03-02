// module.exports = (sequelize, Sequelize) => {
//     const Transactions = sequelize.define("transactions", {
//         id: {
//             type: Sequelize.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         name: {
//             type: Sequelize.STRING
//         },
//         email: {
//             type: Sequelize.STRING
//         },
//         amount: {
//             type: Sequelize.INTEGER
//         },
//         paymentId: {
//             type: Sequelize.STRING
//         },
//         paymentRequestId: {
//             type: Sequelize.STRING
//         },
//         status: {
//             type: Sequelize.STRING
//         },
//         datetime: {
//             type: Sequelize.DATE
//         }
//     });
//     return Transactions;
// }