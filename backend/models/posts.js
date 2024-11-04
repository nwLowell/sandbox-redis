const pool = require("../controllers/database/pool");
const redisClient = require("../controllers/cache/redis");

const Posts = function () {
    return {
        add: (request, response) => {
            const { name, email } = request.body;

            pool.query(
                "INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *",
                [name, email],
                (error, results) => {
                    if (error) {
                        throw error;
                    }
                    response
                        .status(201)
                        .send(`User added with ID: ${results.rows[0].id}`);
                }
            );
        },

        get: async (request, response) => {
            const cachedData = await redisClient.get("posts");
            if (cachedData) {
                console.log("Data retrieved from Redis cache");
                response.json({data: JSON.parse(cachedData), cached: true});
            } else {
                pool.query(
                    "SELECT * FROM posts ORDER BY id ASC",
                    async (error, results) => {
                        if (error) {
                            throw error;
                        }
                        const data = results.rows;
                        await redisClient.set(
                            "posts",
                            JSON.stringify(data)
                        );
                        response.status(200).json({data});
                    }
                );
            }
        },
        getById: async (request, response) => {
            const { id } = request.params;
            pool.query(
                "SELECT * FROM posts WHERE id = $1",
                [id],
                (error, results) => {
                    if (error) {
                        throw error;
                    }
                    response.status(200).json(results.rows);
                }
            );
        },
    };
};

module.exports = Posts;
