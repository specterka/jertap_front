import Loader from "@/components/shared/Loader";
import { useMetaData } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    month: "Jan",
    rating_count: 0,
    avg_rating: 0,
  },
  {
    month: "Feb",
    rating_count: 0,
    avg_rating: 0,
  },
  {
    month: "March",
    rating_count: 0,
    avg_rating: 0,
  },
  {
    month: "April",
    rating_count: 0,
    avg_rating: 0,
  },
  {
    month: "May",
    rating_count: 0,
    avg_rating: 0,
  },
  {
    month: "June",
    rating_count: 0,
    avg_rating: 0,
  },
  {
    month: "July",
    rating_count: 0,
    avg_rating: 0,
  },
  {
    month: "August",
    rating_count: 0,
    avg_rating: 0,
  },
  {
    month: "Sept",
    rating_count: 0,
    avg_rating: 0,
  },
  {
    month: "Oct",
    rating_count: 0,
    avg_rating: 0,
  },
  {
    month: "Nov",
    rating_count: 0,
    avg_rating: 0,
  },
  {
    month: "Dec",
    rating_count: 0,
    avg_rating: 0,
  },
];

const BusinessReviewsGraph = () => {
  // Hooks
  const { businessId } = useParams();
  const [monthWiseData, isLoading] = useMetaData(
    API_ROUTER.GET_MONTHLY_RATINGS(businessId)
  );

  const UPDATED_GRAPH_DATA = useMemo(() => {
    if (monthWiseData) {
      return monthWiseData || data;
    } else data;
  }, [monthWiseData, data]);

  return isLoading ? (
    <Loader />
  ) : (
    <BarChart
      width={1400}
      height={500}
      data={UPDATED_GRAPH_DATA}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid stroke="transparent" />
      <XAxis dataKey="month" axisLine={{ stroke: "gray" }} />
      <YAxis
        yAxisId="right"
        orientation="left"
        stroke="#82ca9d"
        axisLine={{ stroke: "gray" }}
        tick={{ fill: "black" }}
      />
      <YAxis
        yAxisId="left"
        orientation="right"
        stroke="#8884d8"
        axisLine={{ stroke: "gray" }}
        tick={{ fill: "black" }}
      />
      <Tooltip />
      <Legend
        layout="horizontal"
        verticalAlign="top"
        align="center"
        payload={[
          { value: "Ratings", type: "square", color: "#0f4da2" }, // For rating_count
          { value: "Avg Rating", type: "square", color: "#ff7300" }, // For avg_rating
        ]}
      />
      <Bar
        yAxisId="right"
        dataKey="rating_count"
        fill="#0f4da2"
        radius={[10, 10, 0, 0]}
        barSize={30}
        label={{ position: "top", value: "Ratings", fill: "black" }} // Customize label for rating_count
      />

      <Bar
        yAxisId="left"
        dataKey="avg_rating"
        fill="#ff7300"
        radius={[10, 10, 0, 0]}
        barSize={30}
        label={{ position: "top", value: "Avg Rating", fill: "black" }}
      />
    </BarChart>
  );
};

export default BusinessReviewsGraph;
