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

const MainPage = () => {

    const navigate = useNavigate();

    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleLogin = () => {
        if (!user || !user.includes('@')) {
            setError('Email must contain @');
            return;
        }
        setError('');
        navigate('/dashboard');
    };

    return (
        <Container>
            <CentralDiv>
                <DivBoll>
                    <img src={lock} alt="lock" />
                </DivBoll>
                <Content>
                    <div style={{ height: '15%', }}>
                        <Title>
                            <h1>Login Now</h1>
                        </Title>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', flex: '1', width: '100%', maxWidth: '28rem' }}>
                        {error && <p style={{ color: 'red', marginBottom: '10px', fontSize: '0.9rem' }}>{error}</p>}
                        
                        <Row style={{ width: '100%' }}>
                            <Input label="Email" placeholder="Enter Your Email" value={user} setState={setUser} type="text" id="user" />
                        </Row>
                        <Row style={{ width: '100%' }}>
                            <Input label="Password" placeholder="Enter Your Password" value={password} setState={setPassword} type="password" id="pass" />
                        </Row>
                        <Row style={{ width: '100%' }}>
                            <Button01 onClick={handleLogin}>Login</Button01>
                        </Row>
                        <Row style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <div 
                                style={{ cursor: 'pointer', color: '#3890E5', fontWeight: '600' }}
                                onClick={() => navigate('/signup')}
                            >
                                Don't have an account
                            </div>
                            <div style={{ cursor: 'pointer', color: '#3890E5', fontWeight: '600' }}>Forgot password?</div>
                        </Row>
                    </div>
                </Content>
            </CentralDiv>
        </Container>
    )
}

export default MainPage;