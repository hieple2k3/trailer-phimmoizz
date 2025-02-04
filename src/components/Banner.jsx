import IconRatingHalf from "../assets/rating-half.png";
import IconRating from "../assets/rating.png";
import ImgMovie from "../assets/cua-hang-anh-sang.jpg";
import IconPlay from "../assets/play-button.png";

const Banner = () => {
  return (
    <div className="md:h-[600px] h-[1000px] w-full bg-banner bg-cover bg-center bg-no-repeat relative mt-[75px]">
      <div className="w-full h-full bg-black/40 " />
      <div className="flex flex-col md:flex-row items-center justify-between absolute md:top-1/2 top-10 -translate-x-1/2 left-1/2 md:-translate-y-1/2 w-full ">
        <div className="md:w-[50%] w-full ">
          <div className="flex flex-col space-y-6 items-start p-10">
            <p className="bg-gradient-to-r from-red-600 to-red-300 py-2 px-6 rounded-xl font-bold">
              Hot Movie
            </p>
            <div className="flex flex-col space-y-4">
              <h1 className="text-[40px] font-bold text-white ">
                Cửa hàng ánh sáng
              </h1>
              <div className="flex items-center space-x-3">
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
              </div>
              <p className="text-white">
              Phim Cửa Hàng Ánh Sáng kể về một cửa hàng bán đèn bí ẩn, nơi người chết có thể trở về thế giới người sống và ngược lại. Tuy nhiên, không phải lúc nào việc này cũng mang lại hạnh phúc và an toàn cho những ai liên quan. Những bí mật và hiểm nguy đang chờ đợi họ khi bước vào cửa hàng này, tạo nên một câu chuyện hấp dẫn và gây cấn.
              </p>
            </div>

            <div className="flex items-center space-x-5">
              <button className="py-2 px-3 bg-gradient-to-r from-pink-500 to-pink-300  text-white border border-black font-bold rounded-xl">
                Chi tiết
              </button>
              <button className=" py-2 px-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold rounded-xl">
                Xem Phim
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] w-full flex items-center justify-center">
          <div className="w-[300px] h-[400px] relative group">
            <button className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img src={IconPlay} alt="play" className="w-16 h-16" />
            </button>
            <img
              src={ImgMovie}
              alt="banner"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;