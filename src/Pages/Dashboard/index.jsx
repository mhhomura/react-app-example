import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    Header,
    Title,
    TopBarRight,
    LogoutButton,
    MainContent,
    Grid,
    Card,
    CardHeader,
    CardIcon,
    CardTitle,
    CardValue,
    CardFooter
} from './styles';

const Dashboard = () => {
    const navigate = useNavigate();

    const modules = [
        { title: 'Total Users', value: '1,234', icon: '👥', footer: '+12% from last month' },
        { title: 'Revenue', value: '$12,340', icon: '💰', footer: '+5% from last month' },
        { title: 'Active Sessions', value: '45', icon: '🖥️', footer: 'Currently live' },
        { title: 'Server Load', value: '78%', icon: '🚀', footer: 'Optimal performance' },
        { title: 'New Orders', value: '12', icon: '📦', footer: 'Pending processing' },
        { title: 'Feedback', value: '4.8/5', icon: '⭐', footer: 'Based on 200 reviews' }
    ];

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <Container>
            <Header>
                <Title>Modular Dashboard</Title>
                <TopBarRight>
                    <span>Welcome, Admin</span>
                    <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
                </TopBarRight>
            </Header>
            
            <MainContent>
                <h2 style={{ marginBottom: '1.5rem', color: '#333' }}>Overview</h2>
                <Grid>
                    {modules.map((mod, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{mod.title}</CardTitle>
                                <CardIcon>{mod.icon}</CardIcon>
                            </CardHeader>
                            <CardValue>{mod.value}</CardValue>
                            <CardFooter>{mod.footer}</CardFooter>
                        </Card>
                    ))}
                </Grid>
            </MainContent>
        </Container>
    );
};

export default Dashboard;
