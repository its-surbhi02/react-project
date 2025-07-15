import { useState } from "react";

const Section = ({ title, discription, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h1 className=" font-bold text-xl">{title}</h1>
      {!isVisible ? (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline">
          Show
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer underline">
          Hide
        </button>
      )}

      {isVisible && <p>{discription}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div>
      <h1 className="font-bold text-3xl p-2 m-2">Instamart page</h1>
      <Section
        isVisible={visibleSection === "about"}
        setIsVisible={() =>
          visibleSection === "about"
            ? setVisibleSection(null)
            : setVisibleSection("about")
        }
        title={"About Instamart"}
        discription={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, non repudiandae, tenetur voluptatibus deserunt omnis animi sint, exercitationem magnam maiores ratione. Illum, expedita itaque voluptates fugit at cum odit velit tenetur natus molestias incidunt officia. Id doloremque dolorem magni, obcaecati, voluptate deserunt, animi quidem deleniti totam repudiandae saepe quos assumenda ipsum placeat accusamus numquam architecto. Eos totam natus obcaecati esse exercitationem deserunt laboriosam."
        }
      />
      <Section
        isVisible={visibleSection === "contact"}
        setIsVisible={() =>
          visibleSection === "contact"
            ? setVisibleSection(null)
            : setVisibleSection("contact")
        }
        title={"Contact Instamart"}
        discription={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, non repudiandae, tenetur voluptatibus deserunt omnis animi sint, exercitationem magnam maiores ratione. Illum, expedita itaque voluptates fugit at cum odit velit tenetur natus molestias incidunt officia. Id doloremque dolorem magni, obcaecati, voluptate deserunt, animi quidem deleniti totam repudiandae saepe quos assumenda ipsum placeat accusamus numquam architecto. Eos totam natus obcaecati esse exercitationem deserunt laboriosam."
        }
      />
      <Section
        isVisible={visibleSection === "career"}
        setIsVisible={() =>
          visibleSection === "career"
            ? setVisibleSection(null) // ✅ collapse on hide
            : setVisibleSection("career")
        }
        title={"Career"}
        discription={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, non repudiandae, tenetur voluptatibus deserunt omnis animi sint, exercitationem magnam maiores ratione. Illum, expedita itaque voluptates fugit at cum odit velit tenetur natus molestias incidunt officia. Id doloremque dolorem magni, obcaecati, voluptate deserunt, animi quidem deleniti totam repudiandae saepe quos assumenda ipsum placeat accusamus numquam architecto. Eos totam natus obcaecati esse exercitationem deserunt laboriosam."
        }
      />
    </div>
  );
};
export default Instamart;
