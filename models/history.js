module.exports = function (sequelize, DataTypes) {
    var History = sequelize.define("History", {
        numCorrectGuess: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        numTotalGuess: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
    return History;
};
