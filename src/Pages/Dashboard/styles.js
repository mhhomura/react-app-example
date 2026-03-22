import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #f4f6f8;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.header`
    background: #ffffff;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const Title = styled.h1`
    color: #2473d1;
    font-size: 1.5rem;
    font-weight: 700;
`;

export const TopBarRight = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const LogoutButton = styled.button`
    background: #e74c3c;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.2s;

    &:hover {
        background: #c0392b;
    }
`;

export const MainContent = styled.main`
    padding: 2rem;
    flex: 1;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
`;

export const Card = styled.div`
    background: #ffffff;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0,0,0,0.1);
    }
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CardIcon = styled.div`
    font-size: 2rem;
    background: #eaf2fb;
    padding: 0.8rem;
    border-radius: 8px;
    color: #2473d1;
`;

export const CardTitle = styled.h3`
    color: #333;
    font-size: 1.1rem;
    font-weight: 600;
`;

export const CardValue = styled.p`
    font-size: 1.8rem;
    font-weight: 700;
    color: #2c3e50;
`;

export const CardFooter = styled.div`
    font-size: 0.85rem;
    color: #7f8c8d;
`;
