import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../../redux/actions/ContactAction";
import shortid from "shortid";
import { useHistory, useParams } from "react-router-dom";

const EditContact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  // for selecting the contact
  const contact = useSelector((state) => state.contact.contact);
  let history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
    }
    dispatch(getContact(id));
  }, [contact]);
  // update the contact
  const onUpdateContact = (e) => {
    e.preventDefault();
    const update_contact = Object.assign(contact, {
      name: name,
      phone: phone,
      email: email,
    });
    dispatch(updateContact(update_contact));
    console.log(update_contact);
    history.push("/");
  };
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-warning" type="submit">
            Update Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
