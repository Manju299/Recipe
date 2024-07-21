import Styles from "./container.module.css"

// eslint-disable-next-line react/prop-types
export default function Container({children}) {
  return (
    <div className={Styles.parent}>
        {children}
      
    </div>
  )
}

