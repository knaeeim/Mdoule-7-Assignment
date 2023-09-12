exports.create = async (req, res) => {
    res.status(200).json({ status: "success", data: "Comment Create" });
};
  
  exports.read = async (req, res) => {
    res.status(200).json({ status: "success", data: "Comment Read" });
};
  
  exports.delete = async (req, res) => {
    res.status(200).json({ status: "success", data: "comment delete" });
};
  
  exports.update = async (req, res) => {
    res.status(200).json({ status: "success", data: "comment updated" });
};