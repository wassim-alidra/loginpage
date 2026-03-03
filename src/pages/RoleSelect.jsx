import React from 'react';
import { Tractor, Truck, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import RadioGroup from '../components/RadioGroup';
import PrimaryButton from '../components/PrimaryButton';
import { useNavigate } from 'react-router-dom';

const RoleSelect = () => {
    const navigate = useNavigate();
    const [role, setRole] = React.useState('farmer');

    const roles = [
        {
            value: 'farmer',
            label: 'Farmer',
            description: 'Manage crops, track seeds, and sell your harvest directly.',
            icon: <Tractor size={24} />
        },
        {
            value: 'transporter',
            label: 'Transporter',
            description: 'Logistics and delivery tools for nationwide agriculture transport.',
            icon: <Truck size={24} />
        },
        {
            value: 'buyer',
            label: 'Buyer',
            description: 'Find premium produce and manage procurement for your business.',
            icon: <ShoppingBag size={24} />
        }
    ];

    const handleContinue = () => {
        navigate(`/register/${role}`);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px' }}>
            <div className="glass-card fade-in" style={{ width: '100%', maxWidth: '500px', padding: '40px' }}>
                <div className="stepper">
                    <div className="step-dot active"></div>
                    <div className="step-dot"></div>
                </div>

                <div style={{ marginBottom: '32px' }}>
                    <button
                        onClick={() => navigate('/login')}
                        style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.875rem', padding: 0, marginBottom: '16px' }}
                    >
                        <ArrowLeft size={16} /> Back to Login
                    </button>
                    <h1 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '8px' }}>Choose Account Type</h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>Select the role that best describes your activity</p>
                </div>

                <RadioGroup
                    options={roles}
                    value={role}
                    onChange={setRole}
                />

                <div style={{ marginTop: '32px' }}>
                    <PrimaryButton onClick={handleContinue} icon={ArrowRight}>
                        Continue to Registration
                    </PrimaryButton>
                </div>

                <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                    Need help deciding? <a href="#" style={{ color: 'var(--primary)', fontWeight: '500', textDecoration: 'none' }}>View role guide</a>
                </p>
            </div>
        </div>
    );
};

export default RoleSelect;
