const Modal = ({isOpen, onClose, children}) => {
    if(!isOpen) return null;

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-neutral-900 border-neutral-700 p-6 rounded-2xl shadow-2xl max-w-md w-full relative">
                <button onClick={onClose}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors">✕</button>
                <div className="mt-2 text-neutral-200">{children}</div>
            </div>
        </div>
    )
}
export default Modal;