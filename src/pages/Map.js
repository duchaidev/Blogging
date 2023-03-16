import React from "react";
import TitleHeader from "../components/title/TitleHeader";
import MapList from "../modules/map/MapList";

const Map = () => {
  return (
    <div className="min-h-screen">
      <TitleHeader
        content={`Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học. Ví dụ: Để đi làm với vị trí "Lập trình viên Front-end" bạn nên tập trung vào lộ trình "Front-end".`}
      >
        Lộ trình
      </TitleHeader>
      <MapList></MapList>
    </div>
  );
};

export default Map;
