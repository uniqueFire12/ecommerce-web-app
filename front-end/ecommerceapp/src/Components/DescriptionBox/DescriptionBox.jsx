import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='description-box'>
        <div className="description-box-navigator">
            <div className="description-box-nav-box">
                Description
            </div>
            <div className="description-box-nav-box fade">
                Reviews
            </div>
        </div>
        <div className="description-box-desc">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit cum, hic molestiae quo rerum alias accusantium non sed iusto doloribus quas temporibus voluptates? Sit sed exercitationem modi dignissimos dolorum optio rerum cumque distinctio fugiat quasi facilis ea, incidunt quaerat, unde sapiente, sint enim tenetur dicta suscipit atque explicabo blanditiis libero.</p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo autem est tempora modi, fugit vero sequi officiis quasi provident eligendi necessitatibus expedita tenetur beatae distinctio adipisci praesentium et magni nisi?
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox
