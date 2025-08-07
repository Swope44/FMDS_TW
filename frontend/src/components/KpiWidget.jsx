export default function KpiWidget({ title, src, children }) {
  return (
    <div className="bg-white rounded shadow p-4 h-64 flex flex-col">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {src ? (
        <iframe
          src={src}
          title={title}
          className="flex-1 w-full border-0 rounded"
          allowFullScreen
        />
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-500">
          {children}
        </div>
      )}
    </div>
  );
}
