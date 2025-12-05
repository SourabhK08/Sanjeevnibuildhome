import React from "react";
import Counter from "./Counter";

export default function GlassStats({ stats = [] }) {
  return (
   <>
    <div className="max-w-6xl mx-auto px-4 relative mt-8">
      <div
        // className=" bg-[#e51e2517] rounded-3xl p-4 flex justify-between items-center shadow-[0_0_40px_-10px_rgba(227,30,36,0.4)]
        className=" border dark:border-gray-400 rounded-xl p-4 flex justify-between items-center shadow-[0_0_10px_-10px_rgba(227,30,36,0.3)]
"
      >
        {stats.map((s) => (
          <div key={s.label} className="text-center px-4">
            <div className="text-2xl md:text-3xl font-bold text-black dark:text-white">
              <Counter
                end={s.value}
                duration={s.duration || 1800}
                compact={!!s.compact}
                plus={!!s.plus}
                separator={!!s.separator}
                className="inline-block"
              />
            </div>
            <div className="text-sm text-gray-900 dark:text-gray-200">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="max-w-6xl mx-auto px-4 relative mt-8">
      <div
         className=" bg-[#e51e2517] dark:bg-[#d36f748c] rounded-3xl p-4 flex justify-between items-center shadow-[0_0_40px_-10px_rgba(227,30,36,0.4)]
        
"
      >
        {stats.map((s) => (
          <div key={s.label} className="text-center px-4">
            <div className="text-2xl md:text-3xl font-bold text-black dark:text-white">
              <Counter
                end={s.value}
                duration={s.duration || 1800}
                compact={!!s.compact}
                plus={!!s.plus}
                separator={!!s.separator}
                className="inline-block"
              />
            </div>
            <div className="text-sm text-gray-900 dark:text-gray-200">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
   </>
  );
}
