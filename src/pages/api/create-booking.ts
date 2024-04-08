import dayjs from 'dayjs';

import { InputForm } from '../home';

export interface BookingInfo {
  id?: number;
  createdAt?: string;
  name: string;
  phone: string;
  location: string;
  date: string;
  time: string;
}

export const createBooking = async (bookingInfo: BookingInfo): Promise<BookingInfo> => {
  const response = await fetch('https://6612a1f253b0d5d80f660d6e.mockapi.io/health-check/booking', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookingInfo),
  });
  return response.json();
};

export const transformBookingInfo = (bookingInfo: InputForm): BookingInfo => {
  const { location, date, time } = bookingInfo;
  return {
    ...bookingInfo,
    location: location.label,
    date: dayjs(date).format('YYYY-MM-DD'),
    time: dayjs(time).format('HH:mm'),
  };
};
