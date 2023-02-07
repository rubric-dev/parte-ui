export const Position = {
  TOP: 'TOP',
  TOP_LEFT: 'TOP_LEFT',
  TOP_RIGHT: 'TOP_RIGHT',
  BOTTOM: 'BOTTOM',
  BOTTOM_LEFT: 'BOTTOM_LEFT',
  BOTTOM_RIGHT: 'BOTTOM_RIGHT',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
} as const;

export type Position = keyof typeof Position;

export type Dimension = {
  left: number;
  top: number;
  height: number;
  width: number;
  transformOrigin: null | string;
};
