export default function ContactRow({ contact }) {
  return (
    <>
      <tr>
        <td scope="col">{contact.name}</td>
        <td scope="col">{contact.email}</td>
        <td scope="col">{contact.phone}</td>
      </tr>
    </>
  );
}
