import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices } from '@/app/lib/data';
 
export default async function LatestInvoices() { // Remove props
  const latestInvoices = await fetchLatestInvoices();
 
  return (
    <div
      className={clsx('flex items-center gap-2 p-4', lusitana.className)}
      role="status"
      aria-live="polite"
    >
      <ArrowPathIcon className="h-5 w-5 animate-spin" aria-hidden="true" />
      <span>Loading latest invoices…</span>
    </div>
  );
}