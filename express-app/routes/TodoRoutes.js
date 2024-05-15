
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const Todos = require("../models/Todos");
const { Router } = require("express");

const TodosRouter = Router();

// GET REQUESTS

// Alle Todos von einer UserId
TodosRouter.get("/byuserid", async (req, res) => {
  const userId = req.query.userId;
  if (!userId) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .send(ReasonPhrases.BAD_REQUEST + " Keine userID");
    return;
  }
 
  const userTodos = await Todos.filterAll({ where: { userId: userId } });

  res.status(StatusCodes.OK).json(userTodos);
});

// Get Todo by id
TodosRouter.get("/byid", async (req, res) => {
  const todoId = req.query.todoId;
  if (!todoId) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }
  const todo = await Todos.findOne({ where: { id: todoId } });

  res.status(StatusCodes.OK).json({ todo: todo });
});

// PUT REQUESTS
TodosRouter.put("/mark", async (req, res) => {
  const { id, newIsDone } = req.body;

  await Todos.mark(
    {
      isDone: newIsDone,
    },
    { where: { id: id } }
  );

 const todo = await Todos.findByPk(id);

  res.status(StatusCodes.OK).json({ updatedTodo: todo });
});

TodosRouter.put("/update", async (req, res) => {
  const { todoId, newTask, newIsDone, newDueDate } = req.body;

  await Todos.update(
    {
      task: newTask,
      isDone: newIsDone,
      dueDate: newDueDate,
    },
    { where: { id: todoId } }
  );

  const todo = await Todos.findByPk(todoId);

  res.status(StatusCodes.OK).json({ updatedTodo: todo });
});

// POST REQUESTS
TodosRouter.post("/create", async (req, res) => {
  const { newTask, newIsDone, newDueDate, newUserId } = req.body;

  const newTodo = {
    task: newTask,
    isDone: newIsDone,
    dueDate: new Date(newDueDate),
    userId: newUserId,
  };

  const todo = await Todos.create(newTodo);

  res.status(StatusCodes.OK).json({ todo: todo });
});

// DELETE REQUEST
TodosRouter.delete("/delete", async (req, res) => {
  const { todoId } = req.body; //req.body.todoId

  await Todos.destroy({ where: { id: todoId } });

  res.status(StatusCodes.OK).json({ deletedTodosId: todoId });
});

module.exports = TodosRouter;
