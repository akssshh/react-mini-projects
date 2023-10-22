import "./App.css";
import { useState } from "react";

function App() {
  // Define an array of FAQ items with their titles and answers
  const faqItems = [
    {
      title: "Why shouldn't we trust atoms?",
      answer: "They make up everything",
    },
    {
      title: "What do you call someone with no body and no nose?",
      answer: "Nobody knows.",
    },
    {
      title: "What's the object-oriented way to become wealthy?",
      answer: "Inheritance.",
    },
    {
      title: "How many tickles does it take to tickle an octopus?",
      answer: "Ten-tickles!",
    },
    {
      title: "What is: 1 + 1?",
      answer: "Depends on who you are asking.",
    },
  ];

  // Create a state variable to keep track of open items
  const [openItems, setOpenItems] = useState([]);

  // Function to toggle the open/closed state of an item
  const toggleItem = (index) => {
    if (openItems.includes(index)) {
      // If the item is open, close it
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      // If the item is closed, open it
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqItems.map((item, index) => (
          <div className={`faq ${openItems.includes(index) ? "active" : ""}`} key={index}>
            <h3 className="faq-title">{item.title}</h3>
            <p className={`faq-text ${openItems.includes(index) ? "active" : ""}`}>{item.answer}</p>
            <button
              className="faq-toggle"
              onClick={() => toggleItem(index)}
            >
              <i className={`fas ${openItems.includes(index) ? "fa-times" : "fa-chevron-down"}`}></i>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
