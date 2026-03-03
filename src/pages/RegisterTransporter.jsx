import React from 'react';
import { Truck, CreditCard, Thermometer, ShieldCheck, ArrowLeft, ArrowRight } from 'lucide-react';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import UploadBox from '../components/UploadBox';
import { SharedFields } from './RegisterFarmer';
import { useNavigate } from 'react-router-dom';

const RegisterTransporter = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        firstName: '', lastName: '', phone: '', username: '', password: '', idType: '',
        truckModel: '', truckPlate: '', licenseNumber: '', coldStorage: 'no'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Transporter Registration:', formData);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '40px 20px' }}>
            <div className="glass-card fade-in" style={{ width: '100%', maxWidth: '600px', padding: '40px' }}>
                <div className="stepper">
                    <div className="step-dot"></div>
                    <div className="step-dot active"></div>
                </div>

                <div style={{ marginBottom: '32px' }}>
                    <button
                        onClick={() => navigate('/register/select')}
                        style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.875rem', padding: 0, marginBottom: '16px' }}
                    >
                        <ArrowLeft size={16} /> Back to Role Selection
                    </button>
                    <h1 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '8px' }}>Transporter Registration</h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>Join our logistics network and deliver fresh produce</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <SharedFields formData={formData} setFormData={setFormData} />

                    <div style={{ borderTop: '1px solid #E2E8F0', margin: '24px 0', paddingTop: '24px' }}>
                        <h3 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '16px' }}>Vehicle & License Info</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <InputField
                                label="Truck Model"
                                placeholder="Volvo FH16"
                                icon={Truck}
                                value={formData.truckModel}
                                onChange={(e) => setFormData({ ...formData, truckModel: e.target.value })}
                                required
                            />
                            <InputField
                                label="Plate Number"
                                placeholder="00000-123-16"
                                icon={CreditCard}
                                value={formData.truckPlate}
                                onChange={(e) => setFormData({ ...formData, truckPlate: e.target.value })}
                                required
                            />
                        </div>
                        <InputField
                            label="License Number"
                            placeholder="LIC-9988-7766"
                            icon={ShieldCheck}
                            value={formData.licenseNumber}
                            onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                            required
                        />

                        <div style={{ marginBottom: '1.25rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '500', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                                Cold Storage Capability
                            </label>
                            <div style={{ display: 'flex', gap: '24px' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                    <input
                                        type="radio"
                                        name="coldStorage"
                                        value="yes"
                                        checked={formData.coldStorage === 'yes'}
                                        onChange={(e) => setFormData({ ...formData, coldStorage: e.target.value })}
                                        style={{ accentColor: 'var(--primary)' }}
                                    />
                                    <span style={{ fontSize: '0.9375rem' }}>Available</span>
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                    <input
                                        type="radio"
                                        name="coldStorage"
                                        value="no"
                                        checked={formData.coldStorage === 'no'}
                                        onChange={(e) => setFormData({ ...formData, coldStorage: e.target.value })}
                                        style={{ accentColor: 'var(--primary)' }}
                                    />
                                    <span style={{ fontSize: '0.9375rem' }}>Not Available</span>
                                </label>
                            </div>
                        </div>

                        <UploadBox label="Upload Commercial Driver License (CDL)" />
                    </div>

                    <PrimaryButton type="submit" icon={ArrowRight}>
                        Confirm & Register
                    </PrimaryButton>
                </form>
            </div>
        </div>
    );
};

export default RegisterTransporter;
