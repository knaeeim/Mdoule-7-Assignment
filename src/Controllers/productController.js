
exports.create = async (req, res) => {
    res.status(200).json({ status: "success", data: "product Create" });
};
  
  exports.read = async (req, res) => {
    res.status(200).json({ status: "success", data: "product Read" });
};
  
  exports.delete = async (req, res) => {
    res.status(200).json({ status: "success", data: "product delete" });
};
  
  exports.update = async (req, res) => {
    res.status(200).json({ status: "success", data: "product Update" });
};