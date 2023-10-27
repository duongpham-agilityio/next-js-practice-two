"use client";
// import Lazy from "@/components/Lazy";
import { Suspense, lazy, useState } from "react";

const Lazy = lazy(() =>
  import("@/components/Lazy").then(
    (res) => new Promise((re) => setTimeout(() => re(res as never), 5000))
  )
);

const Detail = ({ params }: { params: { newId: string } }) => {
  const [isShowLazy, setIsShowLazy] = useState(false);
  return (
    <>
      <p>Detail: {params.newId}</p>
      <button onClick={() => setIsShowLazy((prev) => !prev)}>Show lazy</button>
      <Suspense fallback={<p>Loading...</p>}>{isShowLazy && <Lazy />}</Suspense>
    </>
  );
};

export default Detail;
