'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Event = {
  id: number;
  title: string;
  description: string;
  image: string;
  speaker: string;
  date: string;
  time: string;
  registrations: number;
  link?: string;
};

const events: Event[] = [
  {
    id: 1,
    title: 'Masterclass #1 - Job Switch Workshop',
    description: 'A workshop on transitioning careers and switching jobs successfully.',
    image: '/images/events/jobSwitch2.png',
    speaker: 'Manohar Batra',
    date: '2026-03-28',
    time: '11:00 AM',
    registrations: 39,
    link: 'https://topmate.io/manohar',
  },
  {
    id: 2,
    title: 'Masterclass #2 - Impact of AI on IT Jobs',
    description: 'Exploring the impact of artificial intelligence on the information technology job market.',
    image: '/images/events/jobMarket1.png',
    speaker: 'Manohar Batra',
    date: '2026-04-04',
    time: '11:00 AM',
    registrations: 20,
    link: 'https://topmate.io/manohar/2028342?coupon_code=BATCH2',
  },
];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<'past' | 'future'>('future');
  const router = useRouter();

  const now = new Date();

  const pastEvents = events.filter((event) => new Date(event.date) < now);
  const futureEvents = events.filter((event) => new Date(event.date) >= now);

  const displayedEvents = activeTab === 'past' ? pastEvents : futureEvents;

  const handleClick = (event: Event, isPast: boolean) => {
    if (event.link) {
      window.open(event.link, '_blank'); // open recording / registration link
    } else {
      // fallback (future use)
      alert(isPast ? 'Recording not available yet' : 'Register flow coming soon');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Events (Past Events recordings are found in Job Switch Course)</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('past')}
          className={`px-4 py-2 rounded ${
            activeTab === 'past' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Past Events
        </button>

        <button
          onClick={() => setActiveTab('future')}
          className={`px-4 py-2 rounded ${
            activeTab === 'future' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Future Events
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedEvents.map((event) => {
          const isPast = new Date(event.date) < now;

          return (
            <div key={event.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                width={400}
                height={200}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">
                  {event.title}
                </h3>

                <p className="text-gray-500 text-sm mb-3">
                  By {event.speaker}
                </p>

                <p className="text-gray-700 text-sm">
                  Starts on: {event.time}, {event.date}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-500">
                    👥 {event.registrations} Registered
                  </span>

                  <button
                    onClick={() => handleClick(event, isPast)}
                    className={`px-5 py-2 rounded-lg font-medium text-white ${
                      isPast
                        ? 'bg-gray-700 hover:bg-gray-800'
                        : 'bg-teal-600 hover:bg-teal-700'
                    }`}
                  >
                    {isPast ? 'Watch Recording' : 'Register Now'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}