import React from 'react';
import { DollarSign, CheckCircle2 } from 'lucide-react';

export const BudgetSection: React.FC = () => {
  const budgetItems = [
    { name: 'ESP-32 Microcontroller', qty: 2, unitPrice: '1,400.00', total: '2,800.00' },
    { name: 'SHT-30 Temp & Humidity Sensor', qty: 1, unitPrice: '960.00', total: '960.00' },
    { name: 'MQ-135 Ammonia Sensor', qty: 1, unitPrice: '590.00', total: '590.00' },
    { name: 'MQ-6 LPG Gas Sensor', qty: 1, unitPrice: '490.00', total: '400.00' },
    { name: 'Lithium Battery Cells', qty: 3, unitPrice: '490.00', total: '1,470.00' },
    { name: 'Battery Holder', qty: 1, unitPrice: '150.00', total: '150.00' },
    { name: '5V Buzzer Module', qty: 1, unitPrice: '180.00', total: '180.00' },
    { name: 'Custom 3D Design & Printing', qty: 1, unitPrice: '5,300.00', total: '5,300.00' },
    { name: '3S 12V BMS Board', qty: 1, unitPrice: '720.00', total: '720.00' },
    { name: 'LM2596 Buck Converter', qty: 1, unitPrice: '250.00', total: '250.00' },
    { name: 'Custom Printed Circuit Board (PCB)', qty: 1, unitPrice: '3,200.00', total: '3,200.00' },
    { name: 'Servo Motor (MG995)', qty: 1, unitPrice: '1,500.00', total: '1,500.00' },
  ];

  return (
    <section id="budget" className="py-24 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            <DollarSign className="w-3.5 h-3.5" />
            Project Financial Transparency
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Zone Hardware Budget
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Itemized component bill of materials for deploying one complete CluckNet environmental monitoring and control node.
          </p>
        </div>

        {/* Total Cost Highlight Banner */}
        <div className="bg-emerald-50 border border-emerald-200 p-6 sm:p-8 rounded-3xl mb-8 flex flex-col sm:flex-row items-center justify-between shadow-sm">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Verified Bill of Materials
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Total Deployment Cost Per Zone</h3>
          </div>
          <div className="mt-4 sm:mt-0 text-right">
            <div className="text-xs text-slate-500 font-semibold uppercase">Grand Total (LKR)</div>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-mono">17,520.00 LKR</div>
          </div>
        </div>

        {/* Itemized Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-700 uppercase font-mono font-bold border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">Components</th>
                  <th className="px-6 py-4 text-center">Quantity</th>
                  <th className="px-6 py-4 text-right">Unit Price (LKR)</th>
                  <th className="px-6 py-4 text-right">Total Amount (LKR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {budgetItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-3.5 font-semibold text-slate-900">{item.name}</td>
                    <td className="px-6 py-3.5 text-center font-mono text-slate-600">{item.qty}</td>
                    <td className="px-6 py-3.5 text-right font-mono text-slate-500">{item.unitPrice}</td>
                    <td className="px-6 py-3.5 text-right font-mono text-emerald-700 font-bold">{item.total}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-slate-50 font-bold border-t border-slate-200">
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-slate-900 uppercase tracking-wider text-right text-xs">Total Amount Per Zone</td>
                  <td className="px-6 py-4 text-right font-mono text-emerald-700 text-base sm:text-lg">17,520.00 LKR</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
