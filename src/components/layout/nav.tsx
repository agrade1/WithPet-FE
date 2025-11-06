export function MainNav() {
  return (
    <div className="flex h-12 w-full items-center justify-center border-b border-b-gray-300">
      <div className="flex h-full w-[542px] items-center justify-between">
        <a className="cursor-pointer text-gray-400 hover:font-bold hover:text-orange-400">
          내가 작성한 게시글
        </a>
        <a className="cursor-pointer text-gray-400 hover:font-bold hover:text-orange-400">
          좋아요 게시글
        </a>
        <a className="cursor-pointer text-gray-400 hover:font-bold hover:text-orange-400">
          관심 장소
        </a>
        <a className="cursor-pointer text-gray-400 hover:font-bold hover:text-orange-400">
          신고 게시글
        </a>
      </div>
    </div>
  );
}

export function SubNav() {
  return (
    <div className="flex h-12 w-full items-center justify-center border-b border-b-gray-300">
      <div className="flex h-full w-[424px] items-center justify-between">
        <a className="cursor-pointer text-gray-400 hover:font-bold hover:text-orange-400">전체</a>
        <a className="cursor-pointer text-gray-400 hover:font-bold hover:text-orange-400">
          자유게시판
        </a>
        <a className="cursor-pointer text-gray-400 hover:font-bold hover:text-orange-400">
          질문게시판
        </a>
        <a className="cursor-pointer text-gray-400 hover:font-bold hover:text-orange-400">
          정보공유
        </a>
      </div>
    </div>
  );
}
