const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4300;

app.use(express.static(path.join(__dirname, "build")));

app.use("*", (req, res) => {
	res.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

