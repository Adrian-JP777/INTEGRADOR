export default function Tarjeta({ className = "", children }) {
  return (
    <div className={`bg-white rounded-2xl shadow-suave ${className}`}>
      {children}
    </div>
  )
}
