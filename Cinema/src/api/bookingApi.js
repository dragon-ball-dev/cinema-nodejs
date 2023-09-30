import axiosClient from "./axiosClient";
const BookTicketApi = {
    getDanhSachPhongVe: (maLichChieu) => {
        const path = `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
        return axiosClient.get(path);
    },

    postDatVe: (data) => {
        const path = `/QuanLyDatVe/DatVe`;

        return axiosClient.post(path, data);
    },

    postTaoLichChieu: (data) => {
        const path = `/QuanLyDatVe/TaoLichChieu`;
        return axiosClient.post(path, data);
    },
};

export default BookTicketApi;