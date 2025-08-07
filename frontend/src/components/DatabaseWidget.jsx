import { useEffect, useState } from 'react';
import KpiWidget from './KpiWidget';

export default function DatabaseWidget() {
  const [value, setValue] = useState(null);

  useEffect(() => {
    // Placeholder for fetching KPI data from a local API or database
    // fetch('/api/kpi').then(res => res.json()).then(data => setValue(data.value));
    setValue(42);
  }, []);

  return (
    <KpiWidget title="Database KPI">
      {value !== null ? (
        <span className="text-4xl font-bold">{value}</span>
      ) : (
        'Loading...'
      )}
    </KpiWidget>
  );
}
