exports.create = async (req, res) => {
    res.status(200).json({ status: "success", data: "portfolio Create" });
};
  
  exports.read = async (req, res) => {
    res.status(200).json({ status: "success", data: "portfolio Read" });
};
  
  exports.delete = async (req, res) => {
    res.status(200).json({ status: "success", data: "portfolio Delete" });
};
  
  exports.update = async (req, res) => {
    res.status(200).json({ status: "success", data: "portfolio Update" });
};