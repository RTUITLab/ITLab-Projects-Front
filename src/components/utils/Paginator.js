import React from 'react';
import ReactPaginate from 'react-paginate';

export default class Paginator extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick(data) {
    const { selected } = data;
    this.props.loadRepositoriesPage(selected + 1);
  }

  render() {
    return (
      <div className="paginator">
        <ReactPaginate
          previousLabel="Предыдущая"
          nextLabel="Следующая"
          breakLabel="..."
          pageCount={this.props.pagesCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          subContainerClassName="pages pagination"

          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    );
  }
}
