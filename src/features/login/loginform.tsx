// components/LoginForm.tsx
import Link from "next/link";

export default function LoginForm() {
  return (
    <section className="mx-auto mb-10 mt-8 w-full max-w-wrapper rounded-[28px] bg-[#FFFDF4]">
      <div className="mx-auto flex max-w-[620px] flex-col items-center py-24">
        {/* 타이틀 */}
        <div className="mb-7 flex items-baseline gap-3">
          <span className="font-semibold text-gray-900">WithPet</span>
          <span className="text-sm text-black">로그인</span>
        </div>

        {/* 폼 (기능 없음, 스타일만) */}
        <form className="w-full space-y-5">
          <label className="block">
            <span className="text-black">이메일</span>
            <input
              type="email"
              placeholder="이메일을 입력해주세요."
              className="w-full rounded-[12px] border border-line-light bg-white px-5 py-3 text-sm outline-none transition focus:border-line-strong focus:ring-2 focus:ring-orange-200"
            />
          </label>

          <label className="block">
            <span className="text-black">비밀번호</span>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요."
              className="w-full rounded-[12px] border border-line-light bg-white px-4 py-3 text-sm outline-none transition focus:border-line-strong focus:ring-2 focus:ring-orange-200"
            />
          </label>

          <div className="pt-1 text-center">
            <button
              type="button"
              className="inline-block rounded-full border border-line-light px-8 py-2 text-sm font-semibold text-gray-900 transition hover:bg-[#ff9806]"
            >
              로그인
            </button>
          </div>
        </form>

        {/* 구분선 */}
        <div className="mt-10 w-full">
          <div className="mx-auto h-px w-[78%] bg-black" />
        </div>

        {/* 하단 링크 */}
        <div className="mt-6 flex items-center justify-center gap-10 text-sm font-bold text-black">
          <Link href="#">아이디 찾기</Link>
          <Link href="#">비밀번호 찾기</Link>
          <Link href="/signup">회원가입</Link>
        </div>
      </div>
    </section>
  );
}
