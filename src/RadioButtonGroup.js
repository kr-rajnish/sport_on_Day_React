import React, { useState } from "react";

function RadioButtonGroup() {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="Monday"
          checked={selectedDay === "Monday"}
          onChange={handleDayChange}
        />
        Monday
      </label>

      <label>
        <input
          type="radio"
          value="Tuesday"
          checked={selectedDay === "Tuesday"}
          onChange={handleDayChange}
        />
        Tuesday
      </label>

      <label>
        <input
          type="radio"
          value="Wednesday"
          checked={selectedDay === "Wednesday"}
          onChange={handleDayChange}
        />
        Wednesday
      </label>

      {/* Add similar labels for other days */}
    </div>
  );
}

export default RadioButtonGroup;
