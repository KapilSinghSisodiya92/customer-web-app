import { Calendar } from '@/components/booking/Calendar';
import { SlotPicker } from '@/components/booking/SlotPicker';
import { BookingSummary } from '@/components/booking/BookingSummary';

export default function BookPage() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-center text-gray-900">
          Book Appointment
        </h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          Select a date and time for your appointment
        </p>
      </div>
      <div className="space-y-6">
        <Calendar />
        <SlotPicker />
        <BookingSummary />
      </div>
    </>
  );
}

