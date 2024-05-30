const User = require("../models/user-model");

const addToLikedMovies = async (req, res) => {
    try {
        const { email, data } = req.body;
        console.log(req.body);
        const user = await User.findOne({ email });
        if (user) {
            const { likedMovies } = user;
            const isMovieAlreadyLiked = likedMovies.find(({ id }) => {
                id === data.id
            });
            if (!isMovieAlreadyLiked) {
                await User.findByIdAndUpdate(
                    user._id,
                    {
                        likedMovies: [...user.likedMovies, data],
                    },
                    { new: true }
                );
            } else {
                return res.status(400).json({ msg: "Movie Already Liked" });
            }
        }
        else {
            await User.create({ email, likedMovies: [data] });
        }
        return res.status(201).json({ msg: "Movie Added successfully" });
    } catch (error) {
        return res.status(400).json({ msg: "Error Adding Movie" })
    }
};

const getLikedMovies = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await User.findOne({ email });
        if (user) {
            console.log(user.likedMovies);
            return res.status(200).json({ msg: "success", movies: user.likedMovies });
        } else {
            return res.status(404).json({ msg: "User with given email not found" });
        }
    } catch (error) {
        return res.status(500).json({ msg: "Error fetching movies" });
    }
};


const removeFromLikedMovies = async (req, res) => {
    try {
        const { email, movieId } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            const movies = user.likedMovies;
            const movieIndex = movies.findIndex(({ id }) => id === movieId);
            if (!movieIndex) {
                res.status(400).send({ msg: "Movie not found." });
            }
            movies.splice(movieIndex, 1);
            await User.findByIdAndUpdate(
                user._id,
                {
                    likedMovies: movies,
                },
                { new: true }
            );
            return res.json({ msg: "Movie successfully removed.", movies });
        } else return res.json({ msg: "User with given email not found." });
    } catch (error) {
        return res.json({ msg: "Error removing movie to the liked list" });
    }
};

module.exports = { addToLikedMovies, getLikedMovies, removeFromLikedMovies };