export const validationRegisterMain = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "El nombre es obligatorio.";
  } else if (values.name.length < 2) {
    errors.name = "El nombre debe tener mínimo 3 caracteres.";
  } else if (values.name.length > 25) {
    errors.name = "El nombre no puede tener más de 25 caracteres.";
  }

  if (!values.email) {
    errors.email = "El email es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "El email no es válido";
  } else if (values.email.length > 50) {
    errors.email = "El email no debe poseer más de 50 caracteres";
  }

  if (!values.password) {
    errors.name = "La contraseña es obligatoria.";
  } else if (
    !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      values.password
    )
  ) {
    errors.password =
      "La contraseña no es válida. Debe contener una mayuscula, un número y un caracter especial.";
  } else if (values.password.length < 8) {
    errors.password = "La contraseña debe tener como mínimo 8 caracteres.";
  } else if (values.password.length > 30) {
    errors.password = "La contraseña no debe poseer más de 30 caracteres.";
  } else if (values.password !== values.password2) {
    errors.password = "Las contraseñas no coinciden.";
  }

  if (!values.phone) {
    errors.phone = "El número telefónico es obligatorio.";
  } else if (
    !/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
      values.phone
    )
  ) {
    errors.phone =
      "El número telefónico no es válido. Mínimo 5 caracteres y máximo 10.";
  } else if (values.phone.length < 5) {
    errors.password =
      "El número telefonico debe tener como mínimo 5 caracteres.";
  } else if (values.phone.length > 10) {
    errors.password =
      "El número telefonico no debe poseer más de 10 caracteres.";
  }

  if (!values.adress) {
    errors.adress = "La dirección es obligatoria.";
  } else if (values.adress <= 0) {
    errors.adress = "La dirección no es válida.";
  } else if (values.adress.length < 5) {
    errors.password = "La dirección debe tener como mínimo 5 caracteres.";
  } else if (values.adress.length > 25) {
    errors.password = "La dirección no debe poseer más de 25 caracteres.";
  }

  return errors;
};
export const validationRegister = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "El nombre es obligatorio.";
  } else if (values.name.length < 2) {
    errors.name = "El nombre debe tener mínimo 3 caracteres.";
  } else if (values.name.length > 25) {
    errors.name = "El nombre no puede tener más de 25 caracteres.";
  }

  if (!values.email) {
    errors.email = "El email es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "El email no es válido";
  } else if (values.email.length > 50) {
    errors.email = "El email no debe poseer más de 50 caracteres";
  }


  if (!values.phone) {
    errors.phone = "El número telefónico es obligatorio.";
  } else if (
    !/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
      values.phone
    )
  ) {
    errors.phone =
      "El número telefónico no es válido. Mínimo 5 caracteres y máximo 10.";
  } else if (values.phone.length < 5) {
    errors.password =
      "El número telefonico debe tener como mínimo 5 caracteres.";
  } else if (values.phone.length > 10) {
    errors.password =
      "El número telefonico no debe poseer más de 10 caracteres.";
  }

  if (!values.adress) {
    errors.adress = "La dirección es obligatoria.";
  } else if (values.adress <= 0) {
    errors.adress = "La dirección no es válida.";
  } else if (values.adress.length < 5) {
    errors.password = "La dirección debe tener como mínimo 5 caracteres.";
  } else if (values.adress.length > 25) {
    errors.password = "La dirección no debe poseer más de 25 caracteres.";
  }

  if (!values.courseInCharge) {
    errors.courseInCharge = "Las materias son obligatorias.";
  } else if (values.courseInCharge.length <= 0) {
    errors.courseInCharge = "Las materias son obligatorias.";
  }

  return errors;
};

export const validationLogin = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "El email es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "El email no es válido";
  } else if (values.email.length > 30) {
    errors.email = "El email no debe poseer más de 30 caracteres";
  }

  if (!values.password) {
    errors.password = "La contraseña es obligatoria";
  } else if (values.password.length < 8) {
    errors.password = "La contraseña debe tener como mínimo 8 caracteres";
  } else if (values.password.length > 30) {
    errors.password = "La contraseña no debe poseer más de 30 caracteres";
  }
  return errors;
};

export const validationAddAl = (values) => {
  let errors = {};
  // if (!values.nameCompleted) {
  //   errors.nameCompleted = "El nombre del alumno es obligatorio";
  // } else if (values.nameCompleted.length > 30) {
  //   errors.nameCompleted = "El nombre no debe poseer más de 30 caracteres";
  // }

  if (!values.curse) {
    errors.curse = "El curso es obligatorio";
  } else if (values.curse.length < 3) {
    errors.curse =
      "Seleccione el curso en el que se encuentra el alumno";
  }

  if (!values.phone) {
    errors.curse = "El telefono de contacto del alumno es obligatorio";
  } else if (values.curse.length > 10) {
    errors.curse = "El numero no debe contener más de 10 caracteres";
  }else if (values.curse.length < 5) {
    errors.curse = "El numero debe contener al menos 5 caracteres";
  }

  if (!values.adress) {
    errors.adress = "La dirección del alumno es obligatoria";
  } else if (values.adress.length > 30) {
    errors.adress = "La direccion no debe poseer más de 30 caracteres";
  }

  return errors;
};

export const validationSubject = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "El nombre de la materia es necesario.";
  } else if (!/^[\s\S]{0,20}$/.test(values.name)) {
    errors.name = "El nombre de la materia no es válido.";
  } else if (values.name.length <= 0) {
    errors.name = "El campo no puede estar vacío.";
  } else if (values.name.length > 20) {
    errors.name = "No puede tener más de 20 caracteres.";
  } else if (values.name.length < 3) {
    errors.name = "No puede tener menos de 3 caracteres.";
  }
  return errors;
};
