import React from 'react';
 
function FilterButtons({ filter, setFilter }) {
  return (
    <div className="filter-buttons">
      <button 
        className={filter === 'all' ? 'active' : ''}
        onClick={() => setFilter('all')}
      >
        ທັງໝົດ
      </button>
      <button 
        className={filter === 'active' ? 'active' : ''}
        onClick={() => setFilter('active')}
      >
        ຍັງບໍ່ສຳເລັດ
      </button>
      <button 
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => setFilter('completed')}
      >
        ສຳເລັດແລ້ວ
      </button>
    </div>
  );
}
 
export default FilterButtons;