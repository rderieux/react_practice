import { useState, useEffect } from "react";

import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";

const API_URL = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/`;

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [contacts, setContacts] = useState();

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error.message);
        }
        setContacts(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <>
      {selectedContactId ? (
        <ContactDetails contactId={selectedContactId} contacts={contacts} />
      ) : (
        <ContactList
          contacts={contacts}
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      )}
    </>
  );
}
