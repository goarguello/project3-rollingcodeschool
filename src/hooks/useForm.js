import { useEffect } from "react";
import { useState } from "react";

const useForm = (initialValues, submit, validations, id, p) => {
  const [arrCourses, setArrCourses] = useState([]);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // console.log(values);
  useEffect(() => {
    if (submitting) {
      if (Object.keys(errors).length === 0) {
        submit(values, id, p);
      }
      setSubmitting(false);
      setTimeout(() => {
        setErrors({});
      }, 3000);
    }
  }, [errors]);

  const handleChange = (e) => {
    const limit = 10;
    if (e.target.name == "phone") {
      setValues({
        ...values,
        [e.target.name]: e.target.value.slice(0, limit),
      });
    } else if (e.target.name == "courseInCharge") {
      if (e.target.checked) {
        setArrCourses([...arrCourses, e.target.value]);
        setValues({
          ...values,
          [e.target.name]: [...arrCourses, e.target.value],
        });
      } else {
        setArrCourses(arrCourses.filter((course) => course !== e.target.value));
        setValues({
          ...values,
          [e.target.name]: arrCourses.filter(
            (course) => course !== e.target.value
          ),
        });
      }
    } else if (e.target.name == "cuoteDay") {
      setValues({ ...values, [e.target.name]: e.target.checked });
    } else {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validations) {
      setErrors(validations(values));
    } else {
      setErrors({});
    }
    setSubmitting(true);
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
