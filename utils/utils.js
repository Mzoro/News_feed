const compareTime = (obj_1, obj_2) => obj_1.time > obj_2.time ? -1 : 1

export const sortByTime = (arr) => arr.sort(compareTime)