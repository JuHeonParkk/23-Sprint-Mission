export default function getPagination({
  currentPage,
  totalCount,
  pageSize,
  pageGroupSize = 5,
}) {
  const totalPages = Math.ceil(totalCount / pageSize); // 전체 페이지 수 계산

  const currentGroup = Math.ceil(currentPage / pageGroupSize); // 현재 페이지 그룹
  const startPage = (currentGroup - 1) * pageGroupSize + 1; // 페이지 그룹의 시작 페이지
  const endPage = Math.min(
    startPage + pageGroupSize - 1,
    Math.ceil(totalCount / pageSize),
  ); // 페이지 그룹의 끝 페이지 (전체 페이지 수를 넘지 않도록)

  const noPrev = currentPage === 1;
  const noNext = currentPage === totalPages;

  return { startPage, endPage, noPrev, noNext };
}
