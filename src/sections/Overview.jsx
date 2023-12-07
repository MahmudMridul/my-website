import React from "react";
import { basicInfo } from "../data/data";

export default function Overview() {
   const { name, designation, company, timeSpan } = basicInfo;
   return (
      <header>
         <h4 className="text-5xl text-center mt-7 font-bold">{name}</h4>
         <h5 className="text-2xl text-center mt-2 font-semibold">
            {designation} @ {company} || {timeSpan}
         </h5>
      </header>
   );
}
