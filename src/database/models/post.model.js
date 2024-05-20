const PostModel = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            references: {
                model: 'Users',
                key: 'id'
            },
        },
        published: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updated: {
            allowNull: false,
            type: DataTypes.DATE,
        }
    }, { 
        createdAt: 'published',
        updatedAt: 'updated',
     });

    Post.associate = (models) => {
        Post.belongsTo(models.User, {
            foreingKey: 'userId', as: 'user',
        })
    }

    return Post;
}

export default PostModel;