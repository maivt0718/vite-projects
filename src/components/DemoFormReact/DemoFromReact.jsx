import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import InputCustom from "./InputCustom";
import { DatePicker } from "antd";
import ButtonCustom from "./ButtonCustom";
import EmployeeTable from "./EmployeeTable";
import * as yup from "yup";
import { NotificationContext } from "../../App";
import dayjs from "dayjs";


function DemoFromReact() {
  const [arrEmployee, setarrEmployee] = useState([]);
  const {
    handleSubmit,
    values,
    handleChange,
    setFieldValue,
    errors,
    handleBlur,
    touched,
    setValues,
    getFieldHelpers,
  } = useFormik({
    initialValues: {
      identification: "",
      email: "",
      phone: "",
      name: "",
      password: "",
      dob: null,
      gender: "",
    },
    onSubmit: (values, { resetForm }) => {
      setarrEmployee([...arrEmployee, values]);
      resetForm();
    },
    validationSchema: yup.object({
      email: yup.string().required("This field is required"),
      identification: yup
        .string()
        .required("This field is required")
        .min(4, "This fied is at least 4 digits")
        .max(8, "This fields is max at 8 digits")
        .matches(/[0-9]+$/),
      phone: yup
        .string()
        .required("This field is required")
        .matches(
          /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})/,
          "Plese input the phone in VN"
        ),
      password: yup
        .string()
        .required("This field is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Please input your password containing at least one upper case letter, one lower case letter,one number, and one special character"
        ),
      name: yup
        .string()
        .required("This field is required")
        .matches(/^[A-Za-z ]+$/, "Please input your name wihout nummbers"),
      dob: yup.string().required("Please input your DOB"),
      gender: yup.string().required("Please input your gender"),
    }),
  });
  const valueContext = useContext(NotificationContext);
  const deleteEmployee = (id) => {
    const newArr = [...arrEmployee];
    const index = newArr.findIndex((item, index) => {
      return item.identification == id;
    });
    if (index != -1) {
      newArr.splice(index, 1);
      setarrEmployee(newArr);
    } else {
      valueContext.handleNotification("error", "Error is occurring");
    }
  };

  const renderEmployee = (id) => {
    const employee = arrEmployee.find((item, index) => {
      return item.identification == id;
    });
    setValues(employee);
  };

  const updateEmployee = () => {
    console.log(values)
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="form">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <InputCustom
            label={"ID"}
            id={"identification"}
            placeholder={"Please input your ID"}
            name={"identification"}
            onChange={handleChange}
            value={values.identification}
            type="string"
            onBlur={handleBlur}
            error={errors.identification}
            touched={touched.identification}
          />
          <InputCustom
            label={"name"}
            id={"name"}
            placeholder={"Please input your name"}
            name={"name"}
            onChange={handleChange}
            value={values.name}
            type="text"
            onBlur={handleBlur}
            error={errors.name}
            touched={touched.name}
          />
          <InputCustom
            label={"email"}
            id={"email"}
            placeholder={"Please input your email"}
            name={"email"}
            onChange={handleChange}
            value={values.email}
            type="email"
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
          />
          <InputCustom
            label={"phone"}
            id={"phone"}
            placeholder={"Please input your phone"}
            name={"phone"}
            onChange={handleChange}
            value={values.phone}
            type="string"
            onBlur={handleBlur}
            error={errors.phone}
            touched={touched.phone}
          />
          <div>
            <label
              htmlFor="datepicker"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              DOB
            </label>
            <DatePicker
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              format={"DD-MM-YYYY"}
              onChange={(date, dateString) => {
                setFieldValue("dob", dateString);
              }}
              value={values.dob ? dayjs(values.dob, "DD-MM-YYYY") : null}
              id="datepicker"
              name="datepicker"
            />
            {errors.dob && touched.dob ? (
              <p className="text-red-600">{errors.dob}</p>
            ) : null}
          </div>

          <div className="">
            <label
              htmlFor="gender"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Gender
            </label>
            <select
              id="gender"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={handleChange}
              value={values.gender}
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="others">Others</option>
            </select>
            {errors.gender && touched.gender ? (
              <p className="text-red-600">{errors.gender}</p>
            ) : null}
          </div>
          <InputCustom
            label={"password"}
            id={"password"}
            placeholder={"Please input your password"}
            name={"password"}
            onChange={handleChange}
            value={values.password}
            type="password"
            classWrapper={"col-span-2"}
          />
        </div>
        <div className="space-x-5 text-center">
          <ButtonCustom content={"Add new employee"} type="submit" />
          <ButtonCustom content={"Reset"} bgColor="bg-black" />
          <ButtonCustom content={"Update"} onClick={updateEmployee} bgColor="bg-green-500" />
        </div>
      </form>
      <EmployeeTable
        data={arrEmployee}
        handleDelete={deleteEmployee}
        handleUpdate={renderEmployee}
      />
    </div>
  );
}

export default DemoFromReact;
