import React from 'react';
import { MapPin, ShoppingCart, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import Select from '../components/Select';
import { SharedFields } from './RegisterFarmer';
import { useNavigate } from 'react-router-dom';

const RegisterBuyer = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        firstName: '', lastName: '', phone: '', username: '', password: '', idType: '',
        deliveryAddress: '', city: '', preferredCategory: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Buyer Registration:', formData);
    };

    const wilayas = [
        { value: 'algiers', label: '16 - Algiers' },
        { value: 'oran', label: '31 - Oran' },
        { value: 'constantine', label: '25 - Constantine' },
        { value: 'blida', label: '09 - Blida' }
    ];

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
                    <h1 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '8px' }}>Buyer Registration</h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>Access premium crops and manage your inventory</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <SharedFields formData={formData} setFormData={setFormData} />

                    <div style={{ borderTop: '1px solid #E2E8F0', margin: '24px 0', paddingTop: '24px' }}>
                        <h3 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '16px' }}>Delivery & Preferences</h3>
                        <InputField
                            label="Delivery Address"
                            placeholder="Full address for orders"
                            icon={MapPin}
                            value={formData.deliveryAddress}
                            onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                            required
                        />
                        <Select
                            label="Wilaya / City"
                            options={wilayas}
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            required
                        />
                        <Select
                            label="Preferred Market Category (Optional)"
                            options={[
                                { value: 'vegetables', label: 'Vegetables' },
                                { value: 'fruits', label: 'Fruits' },
                                { value: 'grains', label: 'Grains & Cereals' },
                                { value: 'dairy', label: 'Dairy Products' }
                            ]}
                            value={formData.preferredCategory}
                            onChange={(e) => setFormData({ ...formData, preferredCategory: e.target.value })}
                        />
                    </div>

                    <PrimaryButton type="submit" icon={ShoppingCart}>
                        Create Buyer Account
                    </PrimaryButton>
                </form>
            </div>
        </div>
    );
};

export default RegisterBuyer;
