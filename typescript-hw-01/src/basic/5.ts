enum DayOfWeek {
 Monday,
 Tuesday,
 Wednesday,
 Thursday,
 Friday,
 Saturday,
 Sunday
}

let weekend: DayOfWeek[] = [DayOfWeek.Saturday, DayOfWeek.Sunday]

const isWeekend = (day: DayOfWeek): boolean => {
  return weekend.includes(day)
};

