import styled from "styled-components";

export const PaginationWrapper = styled.div`
  margin: 40px 0;
  .pagination {
    display: flex;
    justify-content: center;
    gap: 0 10px;
    list-style: none;

    li {
      width: 36px;
      height: 36px;
      font-size: 18px;
      border: 1px solid #06b0c9;
      border-radius: 50%;
      color: #06b0c9;
      cursor: pointer;
      opacity: 0.6;
      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
      }

      &.selected {
        color: #fff;
        background-color: #06b0c9;
        border-color: transparent;
        opacity: 1;
      }

      &.disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
    }

    a {
      display: flex !important;
      justify-content: center;
      align-items: center;
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;
