import { Link } from "react-router-dom";

const Private = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Bạn cần đăng nhập để tiếp tục
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Vui lòng đăng nhập hoặc tạo tài khoản để tiếp tục sử dụng dịch vụ.
      </p>
      <div className="flex space-x-4">
        <Link to="/login">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
            Đăng nhập
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg shadow-md hover:bg-gray-400">
            Tạo tài khoản
          </button>
        </Link>
      </div>
      <Link to="/" className="mt-6 text-gray-500 hover:underline">
        Quay lại trang chủ
      </Link>
    </div>
  );
};

export default Private;