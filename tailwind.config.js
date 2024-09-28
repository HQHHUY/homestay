/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'], // Tailwind sẽ quét các tệp HTML và JS để tìm các lớp CSS
  theme: {
    container: {
      padding: {
        DEFAULT: '15px', // Đặt padding mặc định cho container là 15px
      },
    },
    screens: {
      // Sửa lại đúng là 'screens'
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      // Sửa lại đúng là 'fontFamily'
      primary: ['DM Serif Display', 'serif'], // Định nghĩa font chính
      secondary: ['Jost', 'sans-serif'], // Định nghĩa font phụ
    },
    backgroundImage: {
      // Định nghĩa các hình nền
      hero: 'url(/assets/hero/bg.jpg)',
      grid: 'url(/assets/grid.png)',
    },
    extend: {
      colors: {
        // Mở rộng thêm các màu sắc tùy chỉnh
        primary: {
          DEFAULT: '#292f36', // Màu chính
          hover: '#343e4a', // Màu khi hover
        },
        secondary: '#4d5053', // Màu phụ
        accent: {
          DEFAULT: '#cda274', // Màu nhấn
          secondary: '#f4f0ec', // Màu nhấn phụ
          hover: '#b88c5d', // Màu nhấn khi hover
        },
      },
    },
  },
  plugins: [], // Nếu cần sử dụng plugin, thêm vào đây
}
