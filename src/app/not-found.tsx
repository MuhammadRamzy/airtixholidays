import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[100vh] flex flex-col items-center justify-center text-center p-4 bg-[#FAF9F6] text-primary-950 font-sans">
      <div className="max-w-md w-full bg-white border border-slate-200/80 rounded-3xl p-8 shadow-xl shadow-slate-200/50">
        <h1 className="font-display font-black text-6xl text-gold-500 mb-4 tracking-tighter">404</h1>
        <h2 className="font-display font-bold text-2xl mb-4">Destination Not Found</h2>
        <p className="text-sm text-slate-500 mb-8 font-medium">
          The flight route or page you are looking for has been moved, delayed, or no longer exists in our system.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center gap-2 bg-primary-950 hover:bg-teal-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-sm hover:shadow-lg w-full font-mono text-xs tracking-widest uppercase btn-active"
        >
          Return to Departures
        </Link>
      </div>
    </main>
  );
}
