import React from 'react';
import { CheckCircle2, Info, Sparkles, X } from 'lucide-react';
import { useSkillSwap } from '../context/SkillSwapContext';

export default function ToastContainer() {
  const { toasts, removeToast } = useSkillSwap();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      {toasts.map((toast) => {
        return (
          <div
            key={toast.id}
            className="pointer-events-auto p-4 rounded-2xl bg-white border border-[#E9DDF3] shadow-xl flex items-start gap-3 animate-in slide-in-from-bottom-5 duration-300"
          >
            <div className="w-8 h-8 rounded-xl gradient-purple-pink text-white flex items-center justify-center shrink-0 shadow-2xs">
              {toast.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : toast.type === 'info' ? (
                <Info className="w-4 h-4" />
              ) : (
                <Sparkles className="w-4 h-4" />
              )}
            </div>

            <div className="flex-1 pr-2">
              <h5 className="text-xs font-bold text-[#29213B] leading-tight mb-0.5">
                {toast.title}
              </h5>
              <p className="text-xs text-[#777184] leading-relaxed">
                {toast.message}
              </p>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-gray-400 hover:text-gray-600 cursor-pointer p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
