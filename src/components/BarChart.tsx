import React from "react";

interface BarChartProps {
  height1: number;
  height2: number;
}

const BarChart: React.FC<BarChartProps> = ({ height1, height2 }) => {
  const maxHeight = Math.max(height1, height2);
  const calculatePercentage = (height: number) => {
    return (height / maxHeight) * 100 + "%";
  };
  return (
    <div className=" h-[25rem] grid grid-cols-2 gap-8 ">
      <div className="grid pt-10">
          <div
            className={`justify-self-end self-end w-14 bg-gradient-to-r from-[#d18c70] to-[#b36644]`}
            style={{ height: calculatePercentage(height1) }}
          >
            <div className={`-mt-5 -ml-24 w-20 p-1 h-10 rounded-md bg-[#b36644] text-white`}>
              <p className="text-[8px] text-center">Desired income</p>
              <p className="text-center text-sm">{`E${height1}/m`}</p>
            </div>
            <div className={`-mt-5 -ml-6 w-20 bg-[#b36644] h-[2px]`}></div>
          </div>
        </div>

        <div className="grid pt-10">
          <div
            className={`justify-self-end self-end w-14 bg-gradient-to-r from-[#625255] to-[#251b27]`}
            style={{ height: calculatePercentage(height2) }}
          >
            <div className={`-mt-5 -ml-24 w-20 p-1 h-10 rounded-md bg-[#251b27] text-white`}>
              <p className="text-[8px] text-center">Desired income</p>
              <p className="text-center text-sm">{`E${height2}/m`}</p>
            </div>
            <div className={`-mt-5 -ml-6 w-20 bg-[#251b27] h-[2px]`}></div>
          </div>
        </div>
    </div>
  );
};

export default BarChart;
