// import React, { useRef } from "react";
// import { useDispatch } from "react-redux";
// import { Formik, Form, Field, FieldArray } from "formik";
// import validationSchema from "../validations/schema/cardsSchema";
// import { addGroup } from "../redux/actions/flashaardActions";
// import { v4 as uuidv4 } from "uuid";
// import { Link } from "react-router-dom";

// const GroupForm = () => {
//   const dispatch = useDispatch();
//   const editRef = useRef(null); // Create a ref for the group name input field

//   const onSubmit = (values, { resetForm }) => {
//     const groupData = {
//       id: uuidv4(), // Generate UUID for group
//       groupName: values.groupName,
//       groupImage: values.groupImage,
//       groupDescription: values.groupDescription,
//       members: values.members.map((member) => ({
//         id: uuidv4(), // Generate UUID for each member
//         name: member.name,
//         image: member.image,
//         description: member.description,
//       })),
//     };

//     dispatch(addGroup(groupData));
//     resetForm();
//   };

//   return (
//     <div>
//       <h2>Add Group</h2>
//       <Formik
//         initialValues={{
//           groupName: "",
//           groupImage: "",
//           groupDescription: "",
//           members: [{ name: "", image: "", description: "" }],
//         }}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}
//       >
//         {({ values, errors, touched }) => (
//           <Form>
//             <div className="mb-4">
//               <label
//                 htmlFor="groupName"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Group Name:
//               </label>
//               <Field type="text" name="groupName" className="input" />
//               {touched.groupName && errors.groupName && (
//                 <div className="error">{errors.groupName}</div>
//               )}
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="groupImage"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Group Image:
//               </label>
//               <Field type="file" name="groupImage" className="input" />
//               {touched.groupImage && errors.groupImage && (
//                 <div className="error">{errors.groupImage}</div>
//               )}
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="groupDescription"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Group Description:
//               </label>
//               <Field as="textarea" name="groupDescription" className="input" />
//               {touched.groupDescription && errors.groupDescription && (
//                 <div className="error">{errors.groupDescription}</div>
//               )}
//             </div>

//             <FieldArray name="members">
//               {({ push, remove }) => (
//                 <div>
//                   {values.members.map((member, index) => (
//                     <div key={index}>
//                       <div className="mb-4">
//                         <label
//                           htmlFor={`members.${index}.name`}
//                           className="block text-sm font-medium text-gray-700"
//                         >
//                           Member Name:
//                         </label>
//                         <Field
//                           type="text"
//                           name={`members.${index}.name`}
//                           className="input"
//                           innerRef={editRef}
//                         />
//                       </div>
//                       <div className="mb-4">
//                         <label
//                           htmlFor={`members.${index}.image`}
//                           className="block text-sm font-medium text-gray-700"
//                         >
//                           Member Image:
//                         </label>
//                         <Field
//                           type="file"
//                           name={`members.${index}.image`}
//                           className="input"
//                         />
//                       </div>
//                       <div className="mb-4">
//                         <label
//                           htmlFor={`members.${index}.description`}
//                           className="block text-sm font-medium text-gray-700"
//                         >
//                           Member Description:
//                         </label>
//                         <Field
//                           as="textarea"
//                           name={`members.${index}.description`}
//                           className="input"
//                         />
//                       </div>
//                       <button type="button"  onClick={() => editRef.current.focus()} >
//                         Edit Member
//                       </button>
//                       <button type="button" onClick={() => remove(index)}>
//                         Remove Member
//                       </button>
//                     </div>
//                   ))}
//                   <button
//                     type="button"
//                     onClick={() =>
//                       push({ name: "", image: "", description: "" })
//                     }
//                   >
//                     Add Member
//                   </button>
//                 </div>
//               )}
//             </FieldArray>

//             <button type="submit">Submit</button>
//           </Form>
//         )}
//       </Formik>
//       <Link to="/displayCards">View</Link>
//     </div>
//   );
// };

// export default GroupForm;
//-------------------------------------------------------------------------------------------------------

import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, FieldArray, setFieldValue } from "formik";
import validationSchema from "../validations/schema/cardsSchema";
import { addGroup } from "../redux/actions/flashaardActions";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const GroupForm = () => {
  const dispatch = useDispatch();
  const editRef = useRef(null); // Create a ref for the group name input field

  const onSubmit = async (values, { resetForm }) => {
    const groupData = {
      id: uuidv4(),
      groupName: values.groupName,
      groupDescription: values.groupDescription,
      members: values.members.map((member) => ({
        id: uuidv4(),
        name: member.name,
        description: member.description,
      })),
    };

    // Access group image and member image files
    const groupImageFile = values.groupImage;
    const memberImages = values.members.map((member) => member.image);

    // Store image data in local storage (if files are selected)
    if (groupImageFile) {
      const groupImageBase64 = await readFileAsBase64(groupImageFile);
      groupData.groupImage = groupImageBase64;
    }

    for (let i = 0; i < memberImages.length; i++) {
      const imageFile = memberImages[i];
      if (imageFile) {
        const imageBase64 = await readFileAsBase64(imageFile);
        groupData.members[i].image = imageBase64;
      }
    }

    // Dispatch action to add group data with image information
    dispatch(addGroup(groupData));
    resetForm();
  };

  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  return (
    <div>
      <h2>Add Group</h2>
      <Formik
        initialValues={{
          groupName: "",
          groupImage: "",
          groupDescription: "",
          members: [{ name: "", image: "", description: "" }],
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            <div className="mb-4">
              <label
                htmlFor="groupName"
                className="block text-sm font-medium text-gray-700"
              >
                Group Name:
              </label>
              <Field type="text" name="groupName" className="input" />
              {touched.groupName && errors.groupName && (
                <div className="error">{errors.groupName}</div>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="groupImage"
                className="block text-sm font-medium text-gray-700"
              >
                Group Image:
              </label>
              <Field
                type="file"
                name="groupImage"
                className="input"
                onChange={(event) =>
                  setFieldValue("groupImage", event.currentTarget.files[0])
                }
              />
              {touched.groupImage && errors.groupImage && (
                <div className="error">{errors.groupImage}</div>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="groupDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Group Description:
              </label>
              <Field as="textarea" name="groupDescription" className="input" />
              {touched.groupDescription && errors.groupDescription && (
                <div className="error">{errors.groupDescription}</div>
              )}
            </div>

            <FieldArray name="members">
              {({ push, remove }) => (
                <div>
                  {values.members.map((member, index) => (
                    <div key={index}>
                      <div className="mb-4">
                        <label
                          htmlFor={`members.${index}.name`}
                          className="block text-sm font-medium text-gray-700"
                        >
                          Member Name:
                        </label>
                        <Field
                          type="text"
                          name={`members.${index}.name`}
                          className="input"
                          innerRef={editRef}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor={`members.${index}.image`}
                          className="block text-sm font-medium text-gray-700"
                        >
                          Member Image:
                        </label>
                        <Field
                          type="file"
                          name={`members.${index}.image`}
                          className="input"
                          onChange={(event) =>
                            setFieldValue(
                              `members.${index}.image`,
                              event.currentTarget.files[0]
                            )
                          }
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor={`members.${index}.description`}
                          className="block text-sm font-medium text-gray-700"
                        >
                          Member Description:
                        </label>
                        <Field
                          as="textarea"
                          name={`members.${index}.description`}
                          className="input"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => editRef.current.focus()}
                      >
                        Edit Member
                      </button>
                      <button type="button" onClick={() => remove(index)}>
                        Remove Member
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      push({ name: "", image: "", description: "" })
                    }
                  >
                    Add Member
                  </button>
                </div>
              )}
            </FieldArray>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      <Link to="/displayCards">View</Link>
    </div>
  );
};

export default GroupForm;
