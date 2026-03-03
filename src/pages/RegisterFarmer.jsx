import React from 'react';
import { User, Phone, MapPin, Home, ArrowLeft, ArrowRight, Upload, Briefcase } from 'lucide-react';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import Select from '../components/Select';
import UploadBox from '../components/UploadBox';
import { useNavigate } from 'react-router-dom';

const SharedFields = ({ formData, setFormData }) => (
    <>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <InputField
                label="First Name"
                placeholder="John"
                icon={User}
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
            />
            <InputField
                label="Last Name"
                placeholder="Doe"
                icon={User}
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
            />
        </div>
        <InputField
            label="Phone Number"
            placeholder="+213 XXX XX XX XX"
            icon={Phone}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <InputField
                label="Username"
                placeholder="johndoe"
                icon={User}
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                required
            />
            <InputField
                label="Password"
                type="password"
                placeholder="••••••••"
                icon={Briefcase}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
            />
        </div>
        <div style={{ marginBottom: '1.25rem' }}>
            <Select
                label="Identity Type"
                options={[
                    { value: 'national_id', label: 'National ID Card' },
                    { value: 'passport', label: 'Passport' },
                    { value: 'drivers_license', label: 'Driver\'s License' }
                ]}
                value={formData.idType}
                onChange={(e) => setFormData({ ...formData, idType: e.target.value })}
                required
            />
            <UploadBox label="Upload ID Document" />
        </div>
    </>
);

const RegisterFarmer = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        firstName: '', lastName: '', phone: '', username: '', password: '', idType: '',
        farmName: '', farmAddress: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Farmer Registration:', formData);
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
                    <h1 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '8px' }}>Farmer Registration</h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>Complete your profile to start selling your produce</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <SharedFields formData={formData} setFormData={setFormData} />

                    <div style={{ borderTop: '1px solid #E2E8F0', margin: '24px 0', paddingTop: '24px' }}>
                        <h3 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '16px' }}>Agricultural Details</h3>
                        <InputField
                            label="Farm Name"
                            placeholder="Green Valleys Farm"
                            icon={Home}
                            value={formData.farmName}
                            onChange={(e) => setFormData({ ...formData, farmName: e.target.value })}
                            required
                        />
                        <InputField
                            label="Farm Address"
                            placeholder="Street name, Region"
                            icon={MapPin}
                            value={formData.farmAddress}
                            onChange={(e) => setFormData({ ...formData, farmAddress: e.target.value })}
                            required
                        />
                        <button type="button" style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: '600', fontSize: '0.875rem', cursor: 'pointer', padding: '8px 0', marginBottom: '16px' }}>
                            + Add another address
                        </button>
                    </div>

                    <PrimaryButton type="submit" icon={ArrowRight}>
                        Complete Registration
                    </PrimaryButton>
                </form>
            </div>
        </div>
    );
};

export default RegisterFarmer;
export { SharedFields };
