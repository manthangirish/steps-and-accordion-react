import { useState } from "react";

//Accordion
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];
export default function Accordion() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <>
      <div className="accordion">
        {faqs.map((item, i) => (
          <AccordionItem
            num={i}
            title={item.title}
            key={item.title}
            curOpen={curOpen}
            setCurOpen={setCurOpen}
          >
            {item.text}
          </AccordionItem>
        ))}
        <AccordionItem
          num={4}
          title={"How to Learn React"}
          key={"react"}
          curOpen={curOpen}
          setCurOpen={setCurOpen}
        >
          {
            <ul>
              <li>Work through the official React tutorial.</li>
              <li>
                Read through the getting started sections of the official docs.
              </li>
              <li>Make a few simple projects from scratch on your own.</li>
              <li>
                Add the React Router package and create a multi-page application
                of your choosing.
              </li>
            </ul>
          }
        </AccordionItem>
      </div>
    </>
  );
}
function AccordionItem({ num, title, curOpen, setCurOpen, children }) {
  const isOpen = curOpen === num;
  function handleToggle() {
    setCurOpen(curOpen === num ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
