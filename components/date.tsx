import { parseISO, format } from 'date-fns';

export default function Date({ theDate }: { theDate: string }) {
  const date = parseISO(theDate);
  return <time dateTime={theDate}>{format(date, 'LLLL d, yyyy')}</time>;
}