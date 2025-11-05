"use client";

export default function MapAside() {
  return (
    <aside className="flex-col-between absolute left-[20px] top-1/2 z-[9999] h-full max-h-[calc(100%-40px)] w-full max-w-[450px] -translate-y-1/2 transform rounded-2xl border-4 border-line-light bg-white">
      <div className="flex h-full flex-col overflow-y-auto p-4">
        {/* 위치 찾기 */}
        <div>
          <div className="mb-2 flex items-center justify-between font-semibold text-gray-900">
            <h2 className="text-xl">위치 찾기</h2>
            <button className="text-base">현 위치</button>
          </div>

          <p className="mb-1 text-sm text-gray-400">시도/시군구 까지 입력이 필요합니다.</p>
          <div className="flex-between mb-4 gap-2">
            <select name="map1" id="" className="h-11 flex-1 rounded bg-gray-300 px-2">
              <option value="">시도</option>
            </select>
            <select name="map2" id="" className="h-11 flex-1 rounded bg-gray-300 px-2">
              <option value="">시군구</option>
            </select>
            <select name="map3" id="" className="h-11 flex-1 rounded bg-gray-300 px-2">
              <option value="">읍면동</option>
            </select>
          </div>

          {/* 카테고리 필터 */}
          <div className="mb-4 flex flex-wrap gap-2">
            {["병원", "카페", "미용실"].map((label) => (
              <button
                key={label}
                className="h-11 rounded bg-gray-300 px-3 py-1 font-medium hover:bg-line-light hover:text-gray-900"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* 매장 리스트 */}
        <div className="flex flex-col gap-3">
          <div className="rounded-xl bg-thumbnail-200 p-4 shadow-sm">
            <div className="flex-between mb-2">
              <p className="font-semibold text-gray-900">가게명</p>
              <button className="font-semibold text-gray-600">🩶</button>
            </div>
            <div className="flex-between">
              <p className="text-sm text-gray-600">업종</p>
              <button className="font-semibold text-gray-600">자세히</button>
            </div>
          </div>
          <div className="rounded-xl bg-thumbnail-200 p-4 shadow-sm">
            <div className="flex-between mb-2">
              <p className="font-semibold text-gray-900">가게명</p>
              <button className="font-semibold text-gray-600">❤️</button>
            </div>
            <div className="flex-col-between mt-5 gap-1">
              <p className="text-sm text-gray-500">전화번호 : 000-0000-0000</p>
              <p className="text-sm text-gray-500">주소 : 서울특별시 00로 00길 00-00</p>
              <div className="flex-between mt-1">
                <p className="text-sm text-gray-400">업종</p>
                <button className="font-semibold text-gray-600">접기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
