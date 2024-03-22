import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import validationSchema from '../validations/schema/cardsSchema';

const GroupForm = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Add Group</h2>
      <Formik
        initialValues={{
          groupName: '',
          groupImage: '',
          groupDescription: '',
          members: [{ name: '', image: '', description: '' }],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, errors, touched }) => (
          <Form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="groupName" className="block text-sm font-medium text-gray-700">
                Group Name:
              </label>
              <Field
                type="text"
                id="groupName"
                name="groupName"
                className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  touched.groupName && errors.groupName ? 'border-red-500' : ''
                }`}
              />
              {touched.groupName && errors.groupName && (
                <div className="text-red-500 mt-1">{errors.groupName}</div>
              )}
            </div>

            {/* Other form fields */}
            <FieldArray name="members">
              {({ push, remove }) => (
                <div>
                  {values.members.map((member, index) => (
                    <div key={index} className="mb-4">
                      <label htmlFor={`members.${index}.name`} className="block text-sm font-medium text-gray-700">
                        Member Name:
                      </label>
                      <Field
                        type="text"
                        id={`members.${index}.name`}
                        name={`members.${index}.name`}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                          touched.members?.[index]?.name && errors.members?.[index]?.name ? 'border-red-500' : ''
                        }`}
                      />
                      {touched.members?.[index]?.name && errors.members?.[index]?.name && (
                        <div className="text-red-500 mt-1">{errors.members[index].name}</div>
                      )}

                      {/* Add other member fields */}

                      <button type="button" onClick={() => remove(index)} className="mt-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md">
                        Remove
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={() => push({ name: '', image: '', description: '' })} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                    Add Member
                  </button>
                </div>
              )}
            </FieldArray>

            <button type="submit" className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default GroupForm;
