exports.create = async (req, res) => {
    res.status(200).json({ status: "success", data: "blog Created" });
};
  
  exports.read = async (req, res) => {
    res.status(200).json({ status: "success", data: "blog read" });
};
  
  exports.delete = async (req, res) => {
    res.status(200).json({ status: "success", data: "Blog delete" });
};
  
  exports.update = async (req, res) => {
    res.status(200).json({ status: "success", data: "blog updated" });
};
  
  