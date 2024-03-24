import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, FieldArray } from "formik";
import validationSchema from "../validations/schema/cardsSchema";
import { addGroup } from "../redux/actions/flashaardActions";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import {
  AiOutlineUpload,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlinePlus,
} from "react-icons/ai";

const CreateCard = () => {
  const dispatch = useDispatch();
  const onSubmit = (values, { resetForm }) => {
    const groupData = {
      id: uuidv4(), // Generate UUID for group
      groupName: values.groupName,
      groupImage: values.groupImage,
      groupDescription: values.groupDescription,
      cards: values.cards.map((member) => ({
        id: uuidv4(), // Generate UUID for each member
        name: member.name,
        image: member.image,
        description: member.description,
      })),
    };

    dispatch(addGroup(groupData));
    resetForm();
  };

  return (
    <div className=" p-2 pt-6 ">
      <Formik
        initialValues={{
          groupName: "",
          groupImage: "",
          groupDescription: "",
          cards: [{ name: "", image: "", description: "" }],
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched }) => (
          <Form>
            <div className="border-4 border-red-700 bg-white p-2 md:p-8 rounded-lg">
              <div className="lg:flex  gap-4 border w-full ">
                <div className="w-full lg:w-1/2 xl-1/3 p-2 my-2 border border-red-500">
                  <label
                    htmlFor="groupName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Create Group*
                  </label>
                  <Field
                    type="text"
                    name="groupName"
                    className="input w-full border-2"
                  />
                  {touched.groupName && errors.groupName && (
                    <small className="error text-red-600">{errors.groupName}</small>
                  )}
                </div>

                <div className=" w-1/2 lg:w-1/3 xl-1/5 border border-2 flex justify-center items-center">
                  <label
                    htmlFor="groupImage"
                    className="input border border-2 rounded-lg  font-semibold text-blue-500 py-2 px-4 cursor-pointer transition-colors  duration-300 hover:bg-blue-100"
                  >
                    <AiOutlineUpload className="mr-2 inline-block" /> Upload
                    Image
                  </label>
                  <Field
                    type="file"
                    name="groupImage"
                    className="input disabled:opacity-100 hidden"
                    id="groupImage"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2 xl-1/3 p-2 my-2 border border-red-500 p-2">
                <label
                  htmlFor="groupDescription"
                  className="block text-sm font-medium text-gray-700"
                >
                  Add Description
                </label>
                <Field
                  as="textarea"
                  name="groupDescription"
                  className="input border-2 w-full"
                />
                {touched.groupDescription && errors.groupDescription && (
                  <small className="error text-red-600">{errors.groupDescription}</small>
                )}
              </div>
            </div>
            <div className="flex border-4 border-red-700 bg-white md:p-8 rounded-lg mt-4">
              <FieldArray name="cards">
                {({ push, remove }) => (
                  <div className="w-full">
                    {values.cards.map((member, index) => (
                      <div
                        key={index}
                        className="flex border w-full p-2 my-2 gap-5 lg:flex-row md:flex-col flex-col"
                      >
                        <div>
                          <h2 className="text-lg flex justify-center font-medium border w-[30px] h-[30px] bg-red-500 rounded-full">
                            {index + 1}
                          </h2>
                        </div>
                        <div className=" w-full lg:w-1/2 xl-1/3 border border-red-500 p-2">
                          <label
                            htmlFor={`cards.${index}.name`}
                            className="block text-sm font-medium text-gray-700"
                          >
                            Enter Term
                          </label>
                          <Field
                            type="text"
                            name={`cards.${index}.name`}
                            className="input border-2 w-full"
                        
                          />
                      
                          {touched.cards?.[index]?.name &&
                            errors.cards?.[index]?.name && (
                              <small className="error text-red-600">
                                {errors.cards[index].name}
                              </small>
                            )}
                        </div>
                        <div className="w-full lg:w-1/2 xl-1/3 border border-red-500 p-2">
                          <label
                            htmlFor={`cards.${index}.description`}
                            className="block text-sm font-medium text-gray-700"
                          >
                            Enter Defination
                          </label>
                          <Field
                            as="textarea"
                            name={`cards.${index}.description`}
                            className="input border-2 w-full"
                          />
                          {touched.cards?.[index]?.description &&
                            errors.cards?.[index]?.description && (
                              <small className="error text-red-600">
                                {errors.cards[index].description}
                              </small>
                            )}
                        </div>
                        <div className="flex gap-2 items-center  w-full md:w-1/2 lg:w-1/4 xl-1/5 border border-red-600 p-2">
                          <div>
                            <label
                              htmlFor={`cards.${index}.image`}
                              className="input border border-blue-500 border-2 rounded-lg  text-blue-500  py-2 px-4 cursor-pointer transition-colors  duration-300 hover:bg-blue-100"
                            >
                              Image
                            </label>
                            <input
                              type="file"
                              name={`cards.${index}.image`}
                              id={`cards.${index}.image`}
                              className="hidden"
                            />
                        
                          </div>
                          <div className="text-2xl">
                            <AiOutlineEdit
                              type="button"
                              // onClick={}
                              className="transition-colors  duration-300 text-blue-500 border rounded hover:border-blue-500 hover:text-blue-500 m-1"
                            />

                            <AiOutlineDelete
                              type="button"
                              onClick={() => remove(index)}
                              className="transition-colors  duration-300 text-red-500 border rounded hover:border-red-500 hover:text-red-500 m-1"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="flex gap-2 text-blue-500"
                      onClick={() =>
                        push({ name: "", image: "", description: "" })
                      }
                    >
                      <span className="font-bold p-1">
                        <AiOutlinePlus className="font-bold" />
                      </span>
                      <b> Add More</b>
                    </button>
                  </div>
                )}
              </FieldArray>
            </div>
            <div className="text-center m-2 pt-5">
              <button
                type="submit"
                className="text-center bg-red-600 border-2 p-1 w-[150px] rounded-lg text-white duration-300 hover:text-red-700 hover:font-bold hover:bg-red-500 hover:border-red-700"
              >
                Create
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateCard;
