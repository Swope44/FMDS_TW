import KpiWidget from './KpiWidget';

export default function PowerBIWidget() {
  // Replace the URL with a real Power BI embed link
  const embedUrl = 'https://app.powerbi.com/view?r=YOUR_EMBED_TOKEN';
  return <KpiWidget title="Power BI Report" src={embedUrl} />;
}
