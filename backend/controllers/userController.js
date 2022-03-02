const registerUser = (req, res) => {
    res.status(200).json({ message: 'Register user' });
}

const loginUser = (req, res) => {
    res.status(200).json({ message: 'Login user' });
}

export { registerUser, loginUser }
