const cyberReindeer = require('./index')

test('5#. It returns the correct paths - Test 1', () => {
  expect(cyberReindeer('S..|...|..', 10)).toEqual([
    "S..|...|..",
    ".S.|...|..",
    "..S|...|..",
    "..S|...|..",
    "..S|...|..",
    "...S...*..",
    "...*S..*..",
    "...*.S.*..",
    "...*..S*..",
    "...*...S.."
  ])
})

test('5#. It returns the correct paths - Test 2', () => {
  expect(cyberReindeer('S.|.', 4)).toEqual([
    "S.|.",
    ".S|.",
    ".S|.",
    ".S|."
  ])
})

test('5#. It returns the correct paths - Test 3', () => {
  expect(cyberReindeer('S.|.|.', 7)).toEqual([
    "S.|.|.",
    ".S|.|.",
    ".S|.|.",
    ".S|.|.",
    ".S|.|.",
    "..S.*.",
    "..*S*."
  ])
})

test('5#. It returns the correct paths - Test 4', () => {
  expect(cyberReindeer('S.|..', 6)).toEqual([
    "S.|..",
    ".S|..",
    ".S|..",
    ".S|..",
    ".S|..",
    "..S.."
  ])
})

test('5#. It returns the correct paths - Test 5', () => {
  expect(cyberReindeer('S.|.|.|......|.||.........', 8)).toEqual([
    "S.|.|.|......|.||.........",
    ".S|.|.|......|.||.........",
    ".S|.|.|......|.||.........",
    ".S|.|.|......|.||.........",
    ".S|.|.|......|.||.........",
    "..S.*.*......*.**.........",
    "..*S*.*......*.**.........",
    "..*.S.*......*.**........."
  ])
})

