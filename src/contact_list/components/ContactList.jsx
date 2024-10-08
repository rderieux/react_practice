import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function ContactList({
  contacts = [],
  selectedContactId,
  setSelectedContactId,
}) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="title">Contact List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
          {contacts.map((contact) => {
            return (
              <ContactRow
                key={contact.id}
                contact={contact}
                selectedContactId={selectedContactId}
                setSelectedContactId={setSelectedContactId}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}
