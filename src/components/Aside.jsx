import React, { useState } from 'react';
import BrandLogo from '../containers/LearnerDashboardHeader/BrandLogo';

import AccordionItem from './Accodion/AccordionItem';

export const Aside = () => {
    const asideList = [
        { id: 1, header : '대시보드', icon : 'ri-home-5-fill', subNav : [] },
        { id: 2, header : '교과 과정', icon : 'ri-book-2-fill', subNav : ['나의강좌', '청강신청'] },
        { id: 3, header : '비교과 과정', icon : 'ri-book-shelf-fill', subNav : ['나의강좌', '강좌목록'] },
        { id: 4, header : '자율강좌', icon : 'ri-book-open-fill', subNav : [] },
        { id: 5, header : '이용안내', icon : 'ri-chat-smile-fill', subNav : [] }
    ];
    const [active, setActive] = useState(null);
    
    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }
    
    return (
    <>
        <BrandLogo />
        <ul className="fe-nav">
        { asideList.map((item, index) => {
                return (
                    <AccordionItem key={index} active={active} handleToggle={handleToggle} subNavList={item} />
                )
            })
        }
            
            
        </ul>
    </>
    );
  };

export default Aside;
