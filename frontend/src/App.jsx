import LocalSiteWidget from './components/LocalSiteWidget';
import PowerBIWidget from './components/PowerBIWidget';
import DatabaseWidget from './components/DatabaseWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4">
        <h1 className="text-xl font-bold text-center">FMDS KPI Dashboard</h1>
      </header>
      <main className="p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <LocalSiteWidget />
        <PowerBIWidget />
        <DatabaseWidget />
      </main>
    </div>
  );
}
