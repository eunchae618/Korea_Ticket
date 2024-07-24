// const express = require("express");
// const app = express();
// const port = 3000;

// app.get()
// app.listen(port, () => {
//   console.log(`Server is listening on ${port}`);
// });

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const todoList = [
  {
    id: 1,
    text: "todo1",
    done: false,
  },
];

app.get("/", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("/api/todo", (req, res) => {
  res.json(todoList);
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${process.env.PORT}`);
});
