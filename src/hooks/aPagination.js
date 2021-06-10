import {useState} from 'react';

const usePagination = (initialState) => {
    const {itemsPerPage, Results, startFrom  } = initialState;

    const perPage = itemsPerPage ? itemsPerPage :10;

    const pages = Math.ceil(results.lenth / perPage)
}