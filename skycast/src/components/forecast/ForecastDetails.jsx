import { useParams } from "react-router-dom";

// PLACEHOLDER

function ForecastDetails() {

  const { timestamp } = useParams();

  return (

    <div className="p-4 text-center">

      <h1 className="text-2xl font-bold">Details for {timestamp}</h1>
      <p>Here you'll show more info about the selected day.</p>

    </div>
  );
}

export default ForecastDetails;
