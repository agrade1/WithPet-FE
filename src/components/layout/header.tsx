import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed flex w-full items-center justify-center border-b border-b-gray-200 bg-white">
      <nav className="w-wrapper flex h-[50px] items-center justify-between">
        <div className="flex w-[285px] items-center justify-between">
          <Link href="/" className="text-lg font-bold text-gray-900">
            WithPet
          </Link>
          <Link href="map" className="text-gray-300 hover:text-orange-300">
            지도
          </Link>
          <Link href="community" className="text-gray-300 hover:text-orange-300">
            커뮤니티
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/login"
            className="border-line-100 mx-2 rounded-md border-[1px] p-2 text-gray-900 hover:bg-black hover:text-white"
          >
            로그인
          </Link>
          <Link
            href="/signup"
            className="border-line-100 rounded-md border-[1px] p-2 text-gray-900 hover:bg-black hover:text-white"
          >
            회원가입
          </Link>
        </div>
      </nav>
    </header>
  );
}
