import React from 'react';

const RadioGroup = ({ label, options, value, onChange }) => {
    return (
        <div className="radio-group" style={{ marginBottom: '1.25rem' }}>
            {label && (
                <label style={{ display: 'block', marginBottom: '1rem', fontWeight: '600', fontSize: '1rem', color: 'var(--text-main)' }}>
                    {label}
                </label>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {options.map((opt) => (
                    <label
                        key={opt.value}
                        className={`role-card ${value === opt.value ? 'active' : ''}`}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            textAlign: 'left',
                            gap: '16px',
                            padding: '16px',
                            width: '100%',
                            cursor: 'pointer'
                        }}
                    >
                        <input
                            type="radio"
                            name="role"
                            value={opt.value}
                            checked={value === opt.value}
                            onChange={() => onChange(opt.value)}
                            style={{ display: 'none' }}
                        />
                        <div style={{
                            backgroundColor: value === opt.value ? 'var(--primary)' : 'var(--secondary)',
                            color: value === opt.value ? 'white' : 'var(--primary)',
                            padding: '12px',
                            borderRadius: '12px',
                            transition: 'all 0.3s ease'
                        }}>
                            {opt.icon}
                        </div>
                        <div>
                            <div style={{ fontWeight: '600', color: 'var(--text-main)' }}>{opt.label}</div>
                            <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{opt.description}</div>
                        </div>
                        <div style={{
                            marginLeft: 'auto',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            border: `2px solid ${value === opt.value ? 'var(--primary)' : '#CBD5E1'}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {value === opt.value && <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></div>}
                        </div>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default RadioGroup;
