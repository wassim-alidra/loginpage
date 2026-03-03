import React from 'react';
import { User, Lock, ArrowRight } from 'lucide-react';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({ username: '', password: '' });

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login attempt:', formData);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px' }}>
            <div className="glass-card fade-in" style={{ width: '100%', maxWidth: '420px', padding: '40px' }}>
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <div style={{
                        width: '64px',
                        height: '64px',
                        backgroundColor: 'var(--secondary)',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px',
                        color: 'var(--primary)'
                    }}>
                        <Lock size={32} />
                    </div>
                    <h1 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '8px' }}>Welcome to AgriGov</h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>Secure access to national agriculture portal</p>
                </div>

                <form onSubmit={handleLogin}>
                    <InputField
                        label="Username"
                        placeholder="Enter your username"
                        icon={User}
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        required
                    />
                    <InputField
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        icon={Lock}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                    />

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.875rem' }}>
                            <input type="checkbox" style={{ accentColor: 'var(--primary)' }} />
                            <span style={{ color: 'var(--text-muted)' }}>Remember me</span>
                        </label>
                        <a href="#" style={{ fontSize: '0.875rem', color: 'var(--primary)', fontWeight: '500', textDecoration: 'none' }}>Forgot password?</a>
                    </div>

                    <PrimaryButton type="submit" icon={ArrowRight}>
                        Login to Portal
                    </PrimaryButton>
                </form>

                <div style={{ marginTop: '32px', textAlign: 'center', borderTop: '1px solid #E2E8F0', paddingTop: '24px' }}>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)' }}>
                        Don't have an account?{' '}
                        <button
                            onClick={() => navigate('/register/select')}
                            style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: '600', cursor: 'pointer', padding: 0 }}
                        >
                            Create Account
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
