import React from "react";
import { StatCard, StatsWrapper } from "./styles";
import { Heading3, Label } from "../../../../components";

type Stat = {
  value: React.ReactNode;
  label: React.ReactNode;
};

type StatsProps = {
  stats: Stat[];
  style?: React.CSSProperties;
};

export const Stats: React.FC<StatsProps> = ({ stats, style }) => (
  <StatsWrapper style={style}>
    {stats.map((stat, i) => (
      <StatCard key={i}>
        <Heading3>{stat.value}</Heading3>
        <Label>{stat.label}</Label>
      </StatCard>
    ))}
  </StatsWrapper>
);
