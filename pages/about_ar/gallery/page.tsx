import React from "react";

const YouTubeVideoPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl p-6 bg-red-50">
        <h1 className="text-4xl font-bold text-center text-green-500 mb-8">
        المعرض
        </h1>
        <h2 className="text-2xl font-bold text-center text-[#102F5C] mb-2">حملة رمضان 2025</h2>
        <h2 className="text-2xl font-bold text-center text-[#102F5C] mb-6">#عطاؤك_علّمني</h2>
        <div className="relative overflow-hidden rounded-lg aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/PTVJZIikQJg"
            title="YouTube video 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <h2 className="text-2xl font-bold text-center text-[#102F5C] mt-10">كيف تنظر المجتمعات إلى الوقف الخيري؟</h2>
        <div className="relative overflow-hidden rounded-lg aspect-video mt-6">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/IA1MhHzGyVU"
            title="YouTube video 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="text-2xl font-bold text-center text-[#102F5C] mt-10">اللّقاء الرّمضاني السّنوي</h2>
        <div className="relative overflow-hidden rounded-lg aspect-video mt-6">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/WeiR-FYucC4"
            title="YouTube video 3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="text-2xl font-bold text-center text-[#102F5C] mt-10">بلاد الشام.. هوية وهوى</h2>
        <div className="relative overflow-hidden rounded-lg aspect-video mt-6">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/XWeMNf__GBQ"
            title="YouTube video 3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="text-2xl font-bold text-center text-[#102F5C] mt-10">أعلام من طرابلس</h2>
        <div className="relative overflow-hidden rounded-lg aspect-video mt-6">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/x9BiJitveJM"
            title="YouTube video 3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YouTubeVideoPage;
