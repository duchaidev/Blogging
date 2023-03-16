import React from "react";
import ThreeDot from "../../components/icon/ThreeDot";

const DetailBlog = () => {
  return (
    <div className="min-h-screen px-[15%]">
      <div>
        <h1 className="text-[40px] font-bold text-gray-200 mb-8">
          Ngành gì đang hot hiện nay? Top ngành nghề dự báo trở thành xu thế
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="w-[50px] h-[50px] rounded-full border-[3px] border-[#66FCF1] ">
              <img
                className="object-cover w-full h-full rounded-full"
                src="https://images.unsplash.com/photo-1678737171914-da88eb1fb7fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt="avt"
              />
            </div>
            <div className="text-white">
              <span>Le Duc Hai</span>
              <div>
                <p className="text-sm font-light text-gray-300 ">
                  16 ngày trước
                </p>
              </div>
            </div>
          </div>
          <div>
            <ThreeDot></ThreeDot>
          </div>
        </div>
      </div>
      <div className="mt-[30px]">
        <p className="text-sm italic font-normal leading-6 text-gray-400">
          Nếu bạn đang phân vân trong việc chọn ngành, chuyển ngành thì có thể
          tham khảo bài viết này để biết ngành gì đang hot hiện nay và top các
          ngành nghề được dự đoán sẽ trở thành xu thế nhé! (Lưu ý: thứ tự các
          ngành nghề không sắp xếp theo mức độ tăng/giảm dần mà là ngẫu nhiên)
        </p>
      </div>
      <div className="text-gray-200 entry-content">
        <h2>1. IT - Công nghệ thông tin</h2>
        <p>
          Mặc dù “IT - vua của mọi nghề” chỉ là câu nói đùa vui của các anh em
          trong ngành, thế nhưng thực tế thì IT vẫn sẽ là một trong những ngành
          nghề được dự đoán sẽ hot và được săn đón nhiều nhất trong những năm
          tới.
        </p>
        <img
          src="https://files.fullstack.edu.vn/f8-prod/blog_posts/6629/63fd6ae074d30.png"
          alt=""
        />
        <p>
          Để giải thích cho hiện tượng này, chúng ta sẽ cần liên tưởng đến tình
          hình chung toàn cầu, khi mà công nghệ ngày một phát triển và càng ngày
          càng có nhiều những phát minh, những phần mềm, sản phẩm công nghệ được
          ra đời nhằm phục vụ cho lợi ích của con người thì việc chúng ta phụ
          thuộc và cần tới các sản phẩm công nghệ là một điều chắc chắn. Vì thế,
          nhu cầu tuyển dụng cho ngành này cũng sẽ tăng cao. Tuy nhiên, có một
          điều cần phải lưu ý, đó chính là dù nhu cầu tăng cao nhưng không đồng
          nghĩa với việc tỷ lệ thất nghiệp giảm, bởi ngành cần người, nhưng là
          những người giỏi và thực sự có tài, vì thế nếu không trau dồi và cập
          nhật, học hỏi liên tục thì nguy cơ bị đào thải trong ngành IT vẫn rất
          cao, thậm chí còn cao hơn nhiều ngành khác.
        </p>
        <h2>2. Lĩnh vực y tế (sức khỏe, tâm lý)</h2>
        <img
          src="https://files.fullstack.edu.vn/f8-prod/blog_posts/6629/63fd6b46601a3.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default DetailBlog;
