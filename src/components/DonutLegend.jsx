const DonutLegend = ({ items }) => (
  <dl className="mt-6 space-y-3 text-sm">
    {items.map((item) => (
      <div key={item.label} className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          <span className="text-brand-text/70">{item.label}</span>
        </div>
        <span className="font-semibold text-brand-text">{item.value}%</span>
      </div>
    ))}
  </dl>
)

export default DonutLegend

