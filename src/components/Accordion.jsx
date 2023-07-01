import React, { useState } from "react";

function Accordion() {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? -1 : index);
  };

  return (
    <div className="flex mx-5 justify-center flex-col min-h-[500px] my-20">
      <div className={`collapse collapse-plus bg-neutral mb-5 ${activeItem === 0 ? "active" : ""}`}>
        <input type="radio" name="my-accordion-3" checked={activeItem === 0} onChange={() => handleItemClick(0)} />
        <div className="collapse-title text-xl font-medium">What is WorkNow?</div>
        <div className="collapse-content">
          <p>WorkNow is a final project for the PKS Digital School React JS Bootcamp Batch 4, created by Farrely Firenza</p>
        </div>
      </div>
      <div className={`collapse collapse-plus border mb-5 ${activeItem === 1 ? "active" : ""}`}>
        <input type="radio" name="my-accordion-3" checked={activeItem === 1} onChange={() => handleItemClick(1)} />
        <div className="collapse-title text-xl font-medium">What are the techstacks?</div>
        <div className="collapse-content">
          <p>Front-end basis technology (HTML,CSS,JavaScript), React for the Javscript library, TailwindCSS + DaisyUI for the CSS Framework and Components, and Axios for HTTPS library</p>
        </div>
      </div>
      <div className={`collapse collapse-plus bg-neutral mb-5 ${activeItem === 2 ? "active" : ""}`}>
        <input type="radio" name="my-accordion-3" checked={activeItem === 2} onChange={() => handleItemClick(2)} />
        <div className="collapse-title text-xl font-medium">Any info on the next project?</div>
        <div className="collapse-content">
          <p>Stay tune on my LinkedIn profile below! 👀</p>
        </div>
      </div>
      <div className={`collapse collapse-plus border mb-5 ${activeItem === 3 ? "active" : ""}`}>
        <input type="radio" name="my-accordion-3" checked={activeItem === 3} onChange={() => handleItemClick(3)} />
        <div className="collapse-title text-xl font-medium">What do you do?</div>
        <div className="collapse-content">
          <p>I am a Visual Designer who love to learn front-end engineering and moving forward to take a deep dive in this field.</p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
