import { useSelector, useDispatch } from "react-redux";
import * as action from "./redux/redux-contacts/reduxphone-actions";
import {
  filterContacts,
  getFilter,
} from "./redux/redux-contacts/reduxphone-types";
import Section from "./components/Sections/Sections";
import Addcontact from "./components/Addcontact/Addcontact";
import ConctactsList from "./components/Contact/ConctactList";
import Filter from "./components/Filter/Filte.js";
import { nanoid } from "nanoid";

const App = () => {
  const contacts = useSelector(filterContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const formSubmitHandler = (data) => {
    let isUniqueName = contacts.find((elem) => elem.name.includes(data.name));
    if (!isUniqueName) {
      const userId = { id: nanoid() };
      dispatch(action.addContacts([...contacts, { ...userId, ...data }]));
    } else {
      alert({
        title: "Alert",
        text: `${isUniqueName.name} is already in contacts`,
      });
    }
  };
  const handleChange = (event) => {
    const { value } = event.currentTarget;
    dispatch(action.addfilterContacts(value));
  };

  const deleteContact = (contactId) => {
    dispatch(action.deleteContacts(contactId));
  };

  return (
    <>
      <Section title="PhoneBook">
        <Addcontact onSubmit={formSubmitHandler} />
      </Section>
      <Section title="Contact">
        <Filter value={filter} onChange={handleChange} />
        <ConctactsList contacts={contacts} deleteContact={deleteContact} />
      </Section>
    </>
  );
};
export default App;
