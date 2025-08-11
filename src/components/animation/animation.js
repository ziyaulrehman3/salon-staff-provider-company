export const fadeUp = {
  initial: {
    opacity: 0,
    y: 50,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.5,
    ease: "easeOut",
  },
  viewport: {
    amount: 0.5,
  },
};

export const fadeDown = {
  initial: {
    opacity: 0,
    y: -50,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.5,
    ease: "easeOut",
  },
  viewport: {
    amount: 0.5,
  },
};

export const fadeRight = {
  initial: {
    opacity: 0,
    x: -50,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
  transition: {
    duration: 0.5,
    ease: "easeOut",
  },
  viewport: {
    amount: 0.5,
  },
};

export const fadeLeft = {
  initial: {
    opacity: 0,
    x: 50,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
  transition: {
    duration: 0.5,
    ease: "easeOut",
  },
  viewport: {
    amount: 0.5,
  },
};
