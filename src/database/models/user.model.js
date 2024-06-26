const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING
    }, { timestamps: false });

    User.associate = (models) => {
        User.hasMany(models.Post, {
            foreingKey: 'userId', as: 'posts',
        })
    }

    return User;
}

export default UserModel;