import React from 'react';

const Select = ({ label, options, value, onChange, required = false }) => {
    return (
        <div className="select-group" style={{ marginBottom: '1.25rem' }}>
            {label && (
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                    {label} {required && <span style={{ color: '#ef4444' }}>*</span>}
                </label>
            )}
            <select
                className="premium-input"
                value={value}
                onChange={onChange}
                required={required}
                style={{ appearance: 'none', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%2364748b\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'m6 9 6 6 6-6\'/%3E%3C/svg%3E")' }}
            >
                <option value="" disabled>Select an option</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
