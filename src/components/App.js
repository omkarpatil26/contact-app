import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    {
      id: "1",
      name: "omkar",
      mail: "omi@gmail.com",
    },
    {
      id: "2",
      name: "patil",
      mail: "patil@gmail.com",
    },
  ];
  return (
    <>
      <div className="ui container">
        <Header />
        <AddContact />
        <ContactList contacts={contacts} />
      </div>
    </>
  );
}
export default App;
