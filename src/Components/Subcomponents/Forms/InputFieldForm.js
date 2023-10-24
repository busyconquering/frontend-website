import React from "react";
import { ErrorMessage, useField } from "formik";

export default function InputFieldForm({ label, ...props }) {
  var [field, meta] = useField(props);
  // console.log(props);
  return (
    <div>
      <input
        className={`form-control shadow-none border-2 mt-2 mb-2 p-2 w-full h-12 ${
          meta.touched && meta.error && "is-invalid"
        }`}
        placeholder={label}
        {...props}
        {...field}
        autoComplete="off"
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className="error text-red-500"
      />
    </div>
  );
}
