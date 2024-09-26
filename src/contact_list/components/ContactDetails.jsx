import "../Styling/contactDetails.css";

export default function ContactDetails({ contactId, contacts }) {
  const contact = contacts.find((contact) => contact.id === contactId);

  console.log(contact);
  if (!contact) {
    return <div>No contact selected</div>;
  }

  return (
    <>
      <h2>Contact Details</h2>
      <ul className="details">
        <li>Name: {contact.name}</li>
        <li>Username: {contact.username}</li>
        <li>Phone: {contact.phone}</li>
        <li>Website: {contact.website}</li>
        <h3>Address</h3>
        <li>Street: {contact.address.street}</li>
        <li>Suite: {contact.address.suite}</li>
        <li>City: {contact.address.city}</li>
        <li>Zip: {contact.address.zipcode}</li>
      </ul>
    </>
  );
}
