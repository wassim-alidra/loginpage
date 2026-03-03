import React from 'react';

const PrimaryButton = ({ children, onClick, type = 'button', icon: Icon, loading = false, disabled = false, variant = 'primary' }) => {
    const className = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
            disabled={disabled || loading}
            style={{ opacity: (disabled || loading) ? 0.7 : 1 }}
        >
            {loading ? (
                <span className="loader" style={{ width: '18px', height: '18px', border: '2px solid white', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></span>
            ) : (
                <>
                    {children}
                    {Icon && <Icon size={18} />}
                </>
            )}
            <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
        </button>
    );
};

export default PrimaryButton;
