export default function Boton({ className = "", children, ...props }) {
  return (
    <button className={`boton-dorado ${className}`} {...props}>
      {children}
    </button>
  )
}
