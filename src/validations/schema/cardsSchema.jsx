// /*in this file we are setting the valadition schema rules for form for the user using the yup 
// so he can be able to give correct format of values while creating flashcard */

import * as Yup from "yup";

// const FlashCardSchema = Yup.object().shape({
//    groupid: Yup.string(),

//    groupname: Yup.string()
//      .max(20, "Must be less than 20 characters")
//      .min(5, "Group Name Must be More Than 5 Characters")
//      .required("Please , Enter Group Name !"),

//      groupdescription: Yup.string().max(300," Group Description Must be less than 300 characters"),
   
//      groupimg: Yup.mixed(),

//    cards:Yup.array().of(
//     Yup.object().shape({
//       candid: Yup.string(),
//       cardname: Yup.string()
//       .max(20, "Must be less than 20 characters")
//       .min(5, "Group Name Must be More Than 5 Characters")
//       .required("Input Required !"),
//       carddescription: Yup.string()
//      .max(20, "Must be less than 20 characters")
//      .max( 300," Group Description Must be less than 300 characters")
//      .required("Input Required !"),
//     })
//     ),
//   });

// export default FlashCardSchema;

const cardsSchema = Yup.object().shape({
  groupName: Yup.string().max(20, "Group Name Must be less than 20 characters").min(3, "Group Name Must be More Than 3 Characters").required('Group name is required'),
  groupImage: Yup.mixed(),
  groupDescription: Yup.string().max(300, "Group Name Must be less than 300 characters").min(20, "Group Name Must be More Than 20 Characters").required('Group description is required'),
  // cards: Yup.array().of(
  //   Yup.object().shape({
  //     name: Yup.string().max(20, "Card name Must be less than 300 characters").min(3, "Card name Must be More Than 20 Characters").required('Card nameis required'),
  //     image: Yup.mixed(),
  //     description: Yup.string().max(300, "Card description Must be less than 300 characters").min(20, "Card description Must be More Than 20 Characters").required('Card description is required')
  //   })
  // ),
});

export default cardsSchema;