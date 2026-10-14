import expertsData from "./data.jsx";
import Expert from "./Expert.jsx";

function ExpertsList() {
  return (
    <ul>
      {expertsData.map((item) => (
        <Expert key={item.id} expert={item} />
      ))}
    </ul>
  );
}

export default ExpertsList;



































































