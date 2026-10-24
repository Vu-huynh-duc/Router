import { useEffect, useState } from 'react';
import styles from './Modal.module.scss';
function Modal({ onRequestClose,
                isOpen = false,
                closeTimeoutMS = 250,
                overlayClassName = false,
                className = false,
                bodyOpenClassName = false,
                shouldCloseOnOverlayClick= true,
                shouldCloseOnEse=true,
                children }) {
    const [shouldRender, setShouldRender] = useState(isOpen);
    const [isVisible, setIsVisible] = useState(false);

    console.log(shouldRender)

    useEffect(() => {
        let frameId;
        let timeoutId;
        if (isOpen) {
            setShouldRender(true);
            
            frameId = requestAnimationFrame(() => {
                setIsVisible(true)
            })
        } else {
            setIsVisible(false)
            timeoutId = setTimeout(() => {
                setShouldRender(false);
            },closeTimeoutMS)
        }
        return () => {
            cancelAnimationFrame(frameId);
            clearTimeout(timeoutId);
        }

    }, [isOpen, closeTimeoutMS])
          
    
    useEffect(() => {
        if (!isOpen || !shouldCloseOnEse) return
        
        const handleClose = (e) => {
            if (e.code === 'Escape') {
                onRequestClose?.();
            }
        };
        document.body.addEventListener('keyup', handleClose)
        return () => {
            document.body.removeEventListener('keyup', handleClose)
        }        
    },[onRequestClose, shouldCloseOnEse, isOpen])
    
    
    useEffect(() => {
        if (!isOpen || !bodyOpenClassName) return;
        
        document.body.classList.add(bodyOpenClassName)
        return () => document.body.classList.remove(bodyOpenClassName)
    },[bodyOpenClassName, isOpen])
    
    if (!shouldRender) return null;
    return (
        
        <div className={styles.modal}
             style={{ '--modal-duration': `${closeTimeoutMS}ms` }}
        >
            
            <div className={`${styles.overlay} 
                             ${overlayClassName ? overlayClassName : ""} 
                             ${isVisible ? styles.visible : ''}`} 
                 onClick={shouldCloseOnOverlayClick ? onRequestClose : undefined}
            >
            </div>            
            <div className={`${styles.inner}
                             ${className ? className : ""}
                             ${isVisible ? styles.visible : ""}
                            
                            `}>
                <button
                    className={styles.closeBtn}
                    onClick={onRequestClose}
                    aria-label="Đóng modal"
                >
                    &times;
                </button>
                {children}
            </div>            
        </div>
    );
}

export default Modal;
