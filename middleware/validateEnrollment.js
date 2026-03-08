const validateEnrollment = (req, res, next) => {
  const { student_name, course_id } = req.body;
  if (!student_name) {
    return res.status(400).json({
      error: "student name is required",
    });
  }

  if (!course_id) {
    return res.status(400).json({
      error: "course id is required",
    });
  }
  next();
};

export default validateEnrollment;
