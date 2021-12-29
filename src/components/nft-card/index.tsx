import './style.css';

import React, { FunctionComponent } from 'react';

import { ICON } from '../../assets/images';
import { User, UserInformation } from '../user-information';

interface Item {
    name: string;
    id: number;
    image: string;
    description: string;
    value: number;
    remainingTime: Date;
    createdBy: User;
}

interface Props {
    item: Item;
}

export const NftCard: FunctionComponent<Props> = ({ item }: Props) => {
    console.log(item.image);
    return (
        <div className={'nft-card'}>
            <div className="item-image-wrapper">
                <a href="#">
                    <img src={item.image} alt="Item image" className={'item-image'} />
                </a>
            </div>
            <a href="#" className="title">{`${item.name} #${item.id}`}</a>
            <div className="description">{item.description}</div>
            <div className="selling-information">
                <div className="icon-text-container value">
                    <img src={ICON.ETHEREUM} alt="Ethereum icon" />
                    {`${item.value} ETH`}
                </div>
                <div className="icon-text-container remaining-time">
                    <img src={ICON.CLOCK} alt="Clock icon" />
                    {`${item.remainingTime.getDay()} days left`}
                </div>
            </div>
            <UserInformation user={item.createdBy} />
        </div>
    );
};
