// import React, { useState, useContext } from "react";
// import ContactContext from "../../context/contact/contactContext";

// const ContactFilter = () => {
//   const contactContext = useContext(ContactContext);
//   const { filterContacts, clearFilter, filtered } = contactContext;

//   const [query, setQuery] = useState("");

//   const onChange = (e) => {
//     setQuery(e.target.value);
//     if (query !== "") {
//       filterContacts(query);
//     } else {
//       clearFilter();
//     }
//   };

//   return (
//     <form>
//       <input
//         type="text"
//         name="query"
//         id="query"
//         value={query}
//         onChange={onChange}
//       />
//     </form>
//   );
// };

// export default ContactFilter;

import React, { useRef, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef("");

  const { filterContacts, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  }, [filtered]);

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Filter Contacts..."
        ref={text}
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
