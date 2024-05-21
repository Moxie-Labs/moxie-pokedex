import React from 'react';

const Progress = ({ width, label }) => {
  return (
    <div>
      <div className="flex justify-between mb-1 mt-5">
        <span className="text-[14px] font-regular text-slate-300">{label}</span>
        <span className="text-sm font-medium text-slate-500">{width}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-1.5 ">
        <div
          style={{ width: width ? `${width % 100}%` : '45%' }}
          className={`bg-rose-500 h-1.5 rounded-full`}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
