import Styles from "./innerComponent.module.css"
// eslint-disable-next-line react/prop-types
export default function InnerComponent({children}) {
  return (
    <div className={Styles.child}> 
        {children}
      
    </div>
  )
}
