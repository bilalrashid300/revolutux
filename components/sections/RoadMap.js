import React from "react";
import RoadMapItem from "../RoadMapItem";
import { useTranslation } from "next-i18next";

const RoadMap = () => {
  const { t } = useTranslation();
  const data = [
    {
      isPointing: true,
      items: [t("p1_1"), t("p1_2"), t("p1_3"), t("p1_4"), t("p1_5"), t("p1_6")],
    },
    {
      isPointing: true,
      items: [t("p2_2"), t("p2_2")],
    },
    {
      isPointing: false,
      items: [t("p3_1"), t("p3_2"), t("p3_3"), t("p3_4"), t("p3_5"), t("p3_6")],
    },
    {
      isPointing: true,
      items: [t("p4_1"), t("p4_2"), t("p4_3")],
    },
    {
      isPointing: false,
      items: [t("p5_1"), t("p5_2"), t("p5_3"), t("p5_4"), t("p5_5")],
    },
  ];
  
  return (
    <section id="roadmap" className="px-2 md:px-24 py-24">
      <div className="flex flex-col justify-center items-center mb-14">
        <h1 className="text-xl md:text-xl font-semibold text-white">
          Revolutu<span className="text-[#AD53FC]">X</span>
        </h1>
        <h1 className="text-2xl md:text-4xl text-white font-semibold">
          {t("road_map")}
        </h1>
      </div>

      <main className="flex flex-wrap items-center justify-center">
        {/* </div> */}
        {data.map((item, idx) => (
          <RoadMapItem
            items={item.items}
            isPointing={item.isPointing}
            index={idx}
            key={idx}
          />
        ))}
      </main>
    </section>
  );
};

export default RoadMap;
