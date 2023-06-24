export const stateObj = {
  easy: {
    unsolved: true,
    solved: true,
    leetcode: true,
    codechef: true,
  },
  medium: {
    unsolved: true,
    solved: true,
    leetcode: true,
    codechef: true,
  },
  hard: {
    unsolved: true,
    solved: true,
    leetcode: true,
    codechef: true,
  },
};

export const filterData = [
  { label: "Solved", name: "solved" },
  { label: "Unsolved", name: "unsolved" },
  { label: "Leetcode", name: "leetcode" },
  { label: "CodeChef", name: "codechef" },
];

const cardBodyData = [
  {
    name: "name",
    solved: false,
    platform: "leetcode",
    url: "https://leetcode.com/problems/shuffle-the-array/",
  },
  {
    name: "name",
    solved: false,
    platform: "codechef",
    url: "https://leetcode.com/problems/shuffle-the-array/",
  },
  {
    name: "name",
    solved: false,
    platform: "codeforces",
    url: "https://leetcode.com/problems/shuffle-the-array/",
  },
  {
    name: "name",
    solved: false,
    platform: "leetcode",
    url: "https://leetcode.com/problems/shuffle-the-array/",
  },
  {
    name: "name",
    solved: false,
    platform: "leetcode",
    url: "https://leetcode.com/problems/shuffle-the-array/",
  },
  {
    name: "name",
    solved: false,
    platform: "leetcode",
    url: "https://leetcode.com/problems/shuffle-the-array/",
  },
  {
    name: "name",
    solved: false,
    platform: "leetcode",
    url: "https://leetcode.com/problems/shuffle-the-array/",
  },
];

export const cardDataObj = [
  { cardTitle: "Easy", cardType: "easy", body: cardBodyData },
  { cardTitle: "Medium", cardType: "medium", body: [] },
  { cardTitle: "Hard", cardType: "hard", body: [] },
];
