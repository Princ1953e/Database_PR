const userModal = require("../Modal/database/mongoose");

const localHost = async (req, res) => {
  const user = await userModal.find();

  res.render("index", { user });
};

const userSubmit = async (req, res) => {
  console.log("Body Is", req.body);

  const user = new userModal({
    Budget: req.body.firstName,
    Transactions: req.body.Select,
    category: req.body.SelectCat,
    amount: req.body.amount,
    description: req.body.Description,
    date: req.body.date,
  });
  console.log("user", user);
  await user.save();

  res.redirect("/");
};

const editUser = async (req, res) => {
  let { id } = req.params;

  const userData = await userModal.findOne({ _id: id });

  console.log("rec", userData);
  res.render("edit", { edit: userData });
};

const updateUser = async (req, res) => {
  let { id } = req.params;
  console.log("Jay Hooooooo...", req.body);

  const updateData = await userModal.findByIdAndUpdate(
    { _id: id },
    {
      Budget: req.body.firstName,
      Transactions: req.body.Select,
      category: req.body.SelectCat,
      amount: req.body.amount,
      description: req.body.Description,
      date: req.body.date,
    },
    {
      new: true,
    }
  );

  console.log("Update", updateData);

  res.redirect("/");
};

const deleteUser = async (req, res) => {
  let { id } = req.params;

  const deleteData = await userModal.findByIdAndDelete({ _id: id });

  res.redirect("/");
};
module.exports = { localHost, userSubmit, editUser, updateUser, deleteUser };
