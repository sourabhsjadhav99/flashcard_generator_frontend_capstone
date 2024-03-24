
import * as Yup from "yup";

const cardsSchema = Yup.object().shape({
  groupName: Yup.string().max(20, "Group Name Must be less than 20 characters").min(3, "Group Name Must be More Than 2 Characters").required('Group name is required'),
  groupImage: Yup.mixed(),
  groupDescription: Yup.string().max(300, "Group Name Must be less than 300 characters").min(20, "Group Name Must be More Than 20 Characters").required('Group description is required'),
  cards: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().max(20, "Card name Must be less than 20 characters").min(3, "Card name Must be More Than 2 Characters").required('Card nameis required'),
      image: Yup.mixed(),
      description: Yup.string().max(300, "Card description Must be less than 300 characters").min(20, "Card description Must be More Than 20 Characters").required('Card description is required')
    })
  ),
});

export default cardsSchema;