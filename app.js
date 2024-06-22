// const logger = require("./middlewares/logger")
// const { notFound, errorHanlder } = require("./middlewares/errors")
require("dotenv").config()
const express = require("express");
const app = express();

// app.use(logger)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", require("./routes/auth"));
// app.use("/api/users", require("./routes/users"));




// app.use(notFound);
// app.use(errorHanlder);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));
