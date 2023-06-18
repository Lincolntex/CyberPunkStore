import './ContentWrapper.css'

export const ContentWrapper = ({ children }) => {
    return (
        <div className="main-content-wrapper">
            {children}
        </div>
    )
}
