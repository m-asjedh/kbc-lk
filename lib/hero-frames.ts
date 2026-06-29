export const HERO_FRAME_COUNT = 201;

export function getHeroFramePath(frame: number) {
  return `/hero-images/ezgif-frame-${String(frame).padStart(3, "0")}.jpg`;
}
