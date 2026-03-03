import React from 'react';
import { Upload, FileText, CheckCircle } from 'lucide-react';

const UploadBox = ({ label, value, onChange, accept = '.pdf,.jpg,.jpeg,.png' }) => {
    const [fileName, setFileName] = React.useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            if (onChange) onChange(file);
        }
    };

    return (
        <div className="upload-group" style={{ marginBottom: '1.25rem' }}>
            {label && (
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                    {label}
                </label>
            )}
            <div
                style={{
                    border: '2px dashed #E2E8F0',
                    borderRadius: 'var(--radius-lg)',
                    padding: '24px',
                    textAlign: 'center',
                    backgroundColor: '#F8FAFC',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    position: 'relative'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary-light)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E2E8F0'}
            >
                <input
                    type="file"
                    accept={accept}
                    onChange={handleFileChange}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0,
                        cursor: 'pointer'
                    }}
                />
                {fileName ? (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                        <div style={{ color: 'var(--primary)', backgroundColor: 'var(--secondary)', padding: '10px', borderRadius: '50%' }}>
                            <CheckCircle size={24} />
                        </div>
                        <span style={{ fontSize: '0.875rem', color: 'var(--text-main)', fontWeight: '500' }}>{fileName}</span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Click to change file</span>
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                        <div style={{ color: 'var(--primary-light)', backgroundColor: 'var(--secondary)', padding: '10px', borderRadius: '50%' }}>
                            <Upload size={24} />
                        </div>
                        <span style={{ fontSize: '0.875rem', color: 'var(--text-main)', fontWeight: '500' }}>Upload Document</span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>PDF, JPG, or PNG (Max. 5MB)</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UploadBox;
