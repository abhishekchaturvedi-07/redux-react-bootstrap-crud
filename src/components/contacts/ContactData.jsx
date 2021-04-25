import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { deleteContact } from "../../redux/actions/ContactAction";
import { useDispatch } from "react-redux";
require("./contacts.scss");

const ContactData = ({ contact, selectAll }) => {
  const { id, name, phone, email } = contact;
  const dispatch = useDispatch();
  return (
    <tr key={id}>
      <td>
        <div className="custom-control custom-checkbox">
          <input
            checked={selectAll}
            type="checkbox"
            className="custom-control-input"
          />
          <label htmlFor="" className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar className="mr-2" name={name} size="41" round={true} />
        {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="actions">
        <Link to={`/contacts/edit/${id}`}>
          <span className="material-icons mr-2 edit">edit</span>
        </Link>
        <Link to="#">
          <span
            className="material-icons remove"
            onClick={() => dispatch(deleteContact(id))}
          >
            remove_circle
          </span>
        </Link>
      </td>
    </tr>
  );
};

export default ContactData;
