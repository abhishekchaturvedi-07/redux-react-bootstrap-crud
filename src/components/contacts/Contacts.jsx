import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllContact,
  clearAllContact,
  deleteSelectedContact,
} from "../../redux/actions/ContactAction";
import ContactData from "./ContactData";

const Contacts = () => {
  const contactsData = useSelector((state) => state.contact.contacts);
  console.log(contactsData);
  const [selectAll, setSelectAll] = useState(false);
  const contacts = useSelector((state) => state.contact.contacts);
  const selectedContacts = useSelector(
    (state) => state.contact.selectedContacts
  );
  const dispatch = useDispatch();
  // dependecy for select All
  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllContact(contacts.map((contact) => contact.id)));
    } else {
      dispatch(clearAllContact());
    }
  }, [selectAll]);
  return (
    <div>
      {selectedContacts.length > 0 ? (
        <button
          className="btn btn-danger mb-3"
          onClick={() => dispatch(deleteSelectedContact())}
        >
          {" "}
          Delete All
        </button>
      ) : null}
      <table className="table shadow">
        <thead>
          <tr className="bg-heading text-white">
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  className="custom-control-input"
                  value={selectAll}
                  onClick={() => setSelectAll(!selectAll)}
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactsData.map((contact) => (
            <ContactData
              contact={contact}
              key={contact.id}
              selectAll={selectAll}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
