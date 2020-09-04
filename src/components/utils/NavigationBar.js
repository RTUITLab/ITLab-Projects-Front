import React from 'react';
import Paginator from './Paginator';

export default function NavigationBar(props) {
  return (
    <div className="navigationBar">
      <Paginator loadRepositoriesPage={props.loadRepositoriesPage} pagesCount={props.pagesCount} />
    </div>
  );
}
