import { DollarSign, CheckCircle, Clock } from 'lucide-react';
import { useMemo } from 'react';
import { formatMoney } from '../Data/mocklogin';

export default function SummaryCards({invoices}) {

    const metrics = useMemo(()=>{
      return invoices.reduce(
        (acc, inv) => {
          acc.total += Number(inv.amount);
          if (inv.isPaid) acc.paid += Number(inv.amount);
          else acc.unpaid += Number(inv.amount);
          return acc;
        },
        {total:0, paid:0, unpaid:0 }
      );

    }, [invoices])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

      <div className="bg-white p-6 rounded-xl border border-slate-400 shadow-sm flex items-center gap-4">
        <div className="p-3 bg-slate-200 text-slate-600 rounded-full">
          <DollarSign className="w-6 h-6" />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500">Total Billed</p>
          <p className="text-2xl font-bold text-slate-900">
            {formatMoney(metrics.total)}
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
        <div className="p-3 bg-green-100 text-green-600 rounded-full">
          <CheckCircle className="w-6 h-6" />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500">Total Collected</p>
          <p className="text-2xl font-bold text-slate-900">
            {formatMoney(metrics.paid)}
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
        <div className="p-3 bg-amber-400 text-amber-600 rounded-full">
          <Clock className="w-6 h-6" />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500">
            Outstanding (Unpaid)
          </p>
          <p className="text-2xl font-bold text-slate-900">
            {formatMoney(metrics.unpaid)}
          </p>
        </div>
      </div>
    </div>
  );
}