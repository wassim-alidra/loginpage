import React from 'react';

const InputField = ({ label, type = 'text', placeholder, value, onChange, icon: Icon, required = false }) => {
  return (
    <div className="input-group" style={{ marginBottom: '1.25rem' }}>
      {label && (
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.875rem', color: 'var(--text-main)' }}>
          {label} {required && <span style={{ color: '#ef4444' }}>*</span>}
        </label>
      )}
      <div style={{ position: 'relative' }}>
        {Icon && (
          <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
            <Icon size={18} />
          </div>
        )}
        <input
          type={type}
          className="premium-input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{ paddingLeft: Icon ? '40px' : '16px' }}
          required={required}
        />
      </div>
    </div>
  );
};

export default InputField;
