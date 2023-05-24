import React, { useState, useEffect } from "react";
import { VictoryChart, VictoryLine, VictoryAxis, VictoryLegend } from "victory";
import axios from "axios";

const Monitor = () => {
  const [performanceData, setPerformanceData] = useState([]);
  const [bestProtocol, setBestProtocol] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/monitor");
        console.log(response.data.statistic);
        setPerformanceData(response.data.statistic);
      } catch (error) {
        console.error("Error fetching performance data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const calculateProtocolPerformance = () => {
      const performanceStats = performanceData.map((data) => {
        const totalMessages = data.dataPoints.reduce(
          (total, dp) => total + dp.messageCount,
          0
        );
        return { protocol: data.protocol, totalMessages };
      });

      if (performanceStats.length === 0) {
        return;
      }

      const bestProtocol = performanceStats.reduce((prev, current) =>
        prev.totalMessages < current.totalMessages ? prev : current
      );

      setBestProtocol(bestProtocol);
    };

    calculateProtocolPerformance();
  }, [performanceData]);

  return (
    <div className="bg-gray-100 py-6">
      <div className="container mx-auto px-6">
        <h1 className="text-2xl font-bold mb-4">Performance Monitor</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4 relative">
            <VictoryChart height={300}>
              <VictoryAxis
                dependentAxis
                axisLabelComponent={<VictoryAxis.Label dy={-10} />}
                tickFormat={(tick) => tick}
                style={{
                  axisLabel: { padding: 30 },
                  tickLabels: { fontSize: 12, padding: 5 },
                }}
              />
              <VictoryAxis
                tickFormat={(tick) => tick}
                style={{
                  tickLabels: { fontSize: 12, padding: 5 },
                }}
              />
              {performanceData.map((data, index) => (
                <VictoryLine
                  key={index}
                  data={data.dataPoints}
                  x="nbrMsg"
                  y="messageCount"
                  style={{
                    data: {
                      stroke:
                        index === 0 ? "red" : index === 1 ? "blue" : "green",
                      strokeWidth: 2,
                    },
                  }}
                />
              ))}
            </VictoryChart>
            <div className="flex justify-end absolute top-0 right-0 mt-6">
              <div className="flex items-center">
                {performanceData.map((data, index) => (
                  <div className="flex items-center mr-4" key={index}>
                    <span
                      className="w-3 h-3 mr-1"
                      style={{
                        backgroundColor:
                          index === 0 ? "red" : index === 1 ? "blue" : "green",
                      }}
                    ></span>
                    <p>{data.protocol}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
            <div>
              <h2 className="text-lg font-bold mb-4">Statistics</h2>
              {bestProtocol && (
                <p>
                  The best performing protocol is{" "}
                  <strong>{bestProtocol.protocol}</strong> with a total of{" "}
                  {bestProtocol.totalMessages} messages.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitor;
