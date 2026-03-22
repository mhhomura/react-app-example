import React from "react";
import lock from "../../Assets/svg/lock.svg";
import Input from "../../Components/Input";
import { Button01 } from "../../Styles/button";
import { useNavigate } from "react-router-dom";
import {
    Container,
    CentralDiv,
    DivBoll,
    Title,
    Content,
    Row
} from './styles';

const SignUp = () => {
    const navigate = useNavigate();

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleSignUp = () => {
        if (!email.includes('@')) {
            setError('Email must contain @');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        if (name.trim() === '') {
            setError('Name is required');
            return;
        }

        setError('');
        // For now, just navigate to dashboard on success simulation
        navigate('/dashboard');
    };

    return (
        <Container>
            <CentralDiv>
                <DivBoll>
                    <img src={lock} alt="lock" />
                </DivBoll>
                <Content>
                    <div style={{ height: '12%', }}>
                        <Title>
                            <h1>Sign Up</h1>
                        </Title>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', flex: '1', width: '100%', maxWidth: '28rem' }}>
                        {error && <p style={{ color: 'red', marginBottom: '10px', fontSize: '0.9rem' }}>{error}</p>}

                        <Row style={{ width: '100%', marginBottom: '1.5rem' }}>
                            <Input label="Name" placeholder="Enter Your Name" value={name} setState={setName} type="text" id="name" />
                        </Row>
                        <Row style={{ width: '100%', marginBottom: '1.5rem' }}>
                            <Input label="Email" placeholder="Enter Your Email" value={email} setState={setEmail} type="text" id="email" />
                        </Row>
                        <Row style={{ width: '100%', marginBottom: '1.5rem' }}>
                            <Input label="Password" placeholder="Enter Your Password" value={password} setState={setPassword} type="password" id="pass" />
                        </Row>
                        <Row style={{ width: '100%', marginBottom: '1.5rem' }}>
                            <Input label="Confirm Password" placeholder="Confirm Your Password" value={confirmPassword} setState={setConfirmPassword} type="password" id="confirm_pass" />
                        </Row>

                        <Row style={{ width: '100%' }}>
                            <Button01 onClick={handleSignUp}>Register</Button01>
                        </Row>

                        <Row style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <div
                                style={{ cursor: 'pointer', color: '#3890E5', fontWeight: '600' }}
                                onClick={() => navigate('/')}
                            >
                                Already have an account? Login
                            </div>
                        </Row>
                    </div>
                </Content>
            </CentralDiv>
        </Container>
    )
}

export default SignUp;
