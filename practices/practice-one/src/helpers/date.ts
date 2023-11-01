type TTime = {
  time: string;
  suffix: string;
};

/**
 *  Handle get hour format
 * @param hours
 * @returns (01, 02,...)
 */
const getHourString = (hours: number): TTime => {
  const times = Array.from({ length: 24 }).map((_, index: number) => {
    const time: string = index < 10 ? `0${index}` : `${index}`;
    const suffix: string = index < 12 ? 'AM' : 'PM';

    return {
      time,
      suffix,
    };
  });

  return times[hours];
};

/**
 *  Handle get day minute
 * @param minute
 * @returns (01, 02,...)
 */
const getMinuteString = (minute: number): string => {
  const times = Array.from({ length: 60 }).map((_, index: number) =>
    index < 10 ? `0${index}` : `${index}`,
  );

  return times[minute];
};

const getMonthString = (month: number): string => {
  const months: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return months[month];
};

/**
 * Handle get day format
 * @param date
 * @returns (01, 02,...)
 */
const getDateString = (date: number): string => {
  const dates: string[] = Array.from({ length: 30 }).map((_, index: number) =>
    index < 10 ? `0${index + 1}` : `${index}`,
  );

  return dates[date - 1];
};

/**
 * Format date
 * @param date
 * @returns  "hh:mm (AM | PM) month - day - year"
 */
export const getTimeString = (date: Date) => {
  const hours: TTime = getHourString(date.getHours());
  const minute: string = getMinuteString(date.getMinutes());
  const year: number = date.getFullYear();
  const month: string = getMonthString(date.getMonth());
  const day: string = getDateString(date.getDate());

  return `${hours.time}:${minute} ${hours.suffix} ${month} - ${day} - ${year}`;
};
