import styles from "./Button.module.scss"

const Button = ({children, onClick= () => {}, bordered = false, rounded = false, 
    primary=false, disabled=false, loading=false, size = "medium", 
    href=null, className="", ...passProps}) => {
    
    const canClick = !disabled && !loading
    const BtnOrA = href ? "a" : "button"
    
    return <BtnOrA {...passProps} href = {href} onClick = {canClick ? onClick : ()=> {}}
                    className={`
                                ${className}
                                ${styles.btn}
                                ${styles[size]}
                                ${bordered ? styles.bordered : ""}
                                ${rounded ? styles.rounded : ""}
                                ${primary ? styles.primary : ""}
                                ${disabled ? styles.disable: ""}
                                ${loading ? styles.loading : ""}
                                
                             `}
            >{children}
            </BtnOrA>
}

export default Button