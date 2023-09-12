exports.create = async (req, res) => {
    res.status(200).json({ status: "success", data: "Message create" });
};
  
  exports.read = async (req, res) => {
    res.status(200).json({ status: "success", data: "Message read" });
};
  
  exports.delete = async (req, res) => {
    res.status(200).json({ status: "success", data: "Message delete" });
};
  
  exports.update = async (req, res) => {
    res.status(200).json({ status: "success", data: "Message update" });
};