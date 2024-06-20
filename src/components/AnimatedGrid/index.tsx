"use client";

import Grid from "animated-grid-lines";
import { StorybookProps as GridProps } from "animated-grid-lines/dist/Grid";

interface AnimatedGridProps extends GridProps {}

export default function AnimatedGrid(props: AnimatedGridProps) {
  const { ...rest } = props;
  return <Grid {...rest} />;
}
