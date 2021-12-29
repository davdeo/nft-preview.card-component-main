import React from 'react';
import './style.css';
import { NftCard } from '../../components';
import { IMAGE } from '../../assets/images';

export default function App() {
    return (
        <div className={'app'}>
            <NftCard
                item={{
                    id: 3429,
                    image: IMAGE.EQUILIBRIUM,
                    createdBy: { name: 'Jules Wyvern', avatar: IMAGE.AVATAR },
                    name: 'Equilibrium',
                    description: 'Our Equilibrium collection promotes balance and calm.',
                    remainingTime: new Date(),
                    value: 0.041
                }}
            />
        </div>
    );
}
