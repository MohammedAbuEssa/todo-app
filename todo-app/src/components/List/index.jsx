import React, { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings/index';
import { Pagination } from '@mantine/core';

function List() {
  const listSettings = useContext(SettingsContext);

  const itemList = ["A", "B", "C"];

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * listSettings.itemsToShow;
  const endIndex = startIndex + listSettings.itemsToShow;
  const visibleItems = itemList.slice(startIndex, endIndex);
  const totalPages = Math.ceil(itemList.length / listSettings.itemsToShow);

  const handlePageChange = (page) => {
      setCurrentPage(page);
  };
    return (
      <div>
      {visibleItems.map((item, index) => (
          <div key={index}>{item}</div>
      ))}
      <Pagination
          total={totalPages}
          itemsPerPage={1}
          activePage={currentPage}
          onPageChange={handlePageChange}
      />
  </div>
    );
}

export default List;
