import React from "react";
import './BookingTicket.scss'

export default function BookingTicketStep1(props) {
  //Lọc loại ghế có trong danh sách ghế
  const typeSeat = [
    ...new Set(props.chosenMovie.danhSachGhe.map(item => item.loaiGhe))
  ];

  const initialSeat = [];

  typeSeat.forEach(function(element, index) {
    if (element === "Thuong") {
      initialSeat.push({
        type: element,
        num: 2,
        price: props.chosenMovie.danhSachGhe.find(
          item1 => item1.loaiGhe === element
        ).giaVe
      });
    } else {
      initialSeat.push({
        type: element,
        num: 0,
        price: props.chosenMovie.danhSachGhe.find(
          item1 => item1.loaiGhe === element
        ).giaVe
      });
    }
  });

  const [numOfSeats, setNumOfSeats] = React.useState(initialSeat);

  let totalCost = numOfSeats.reduce(
    (totalCost, seat) => totalCost + seat.price * seat.num,
    0
  );

  const returnDetailMoviePage = () => {
    if (props.history.location.prePage) {
      props.history.push(props.history.location.prePage);
    } else {
      props.history.push("/");
    }
  };

  const changeNumTicket = (key, plus) => {
    let tempNumOfSeats = [...numOfSeats];
    if (
      (plus && tempNumOfSeats[key].num > 9) ||
      (!plus && tempNumOfSeats[key].num === 0)
    ) {
      return;
    }
    plus ? tempNumOfSeats[key].num++ : tempNumOfSeats[key].num--;
    setNumOfSeats(tempNumOfSeats);
  };

  //Mỗi loại vé render ra 1 hàng để chọn số lượng
  const renderTicket = () => {
    let ticketArray = [];
    for (const key in numOfSeats) {
      ticketArray.push(
        <div key={key} className="ticket row m-0 align-items-center">
          <div className="ticket__type col-7 col-md-4 p-0">
            <span>
              Vé{" "}
              {numOfSeats[key].type === "Thuong"
                ? "Thường"
                : numOfSeats[key].type}
            </span>
            <span className="ticket__price--mobile d-block d-md-none">{`${numOfSeats[
              key
            ].price.toLocaleString()} đ`}</span>
          </div>
          <div className="ticket__price col-md-4 p-0 text-center">
            <span>{`${numOfSeats[key].price.toLocaleString()} đ`}</span>
          </div>
          <div className="ticket__num col-md-4 col-5 p-0">
            <button onClick={() => changeNumTicket(key, false)}>-</button>
            <span>{numOfSeats[key].num}</span>
            <button onClick={() => changeNumTicket(key, true)}>+</button>
          </div>
        </div>
      );
    }
    return ticketArray;
  };

  let tenRap = props.chosenMovie.thongTinPhim.tenCumRap.startsWith("BHD Star")
    ? [
        props.chosenMovie.thongTinPhim.tenCumRap.slice(0, 18),
        props.chosenMovie.thongTinPhim.tenCumRap.slice(20)
      ]
    : props.chosenMovie.thongTinPhim.tenCumRap.split(" - ");

  //Main return
  return (
    <>
      <div className="step-checkout--mobile">
        <div onClick={returnDetailMoviePage} className="backMobile">
          <img
            className="img-fluid"
            src="/img/cancel-arrow.png"
            alt="cancel-arrow"
          />
        </div>
        <div className="step-name">01. CHỌN LOẠI VÉ</div>
        <div></div>
      </div>
      <div
        className="checkout__top--mobile"
        style={{
          background: `url(${props.chosenMovie.thongTinPhim.hinhAnh}) no-repeat center`,
          backgroundSize: "cover"
        }}
      >
        <div className="checkout__top__overlay">
          <div className="detail-movie__info">
            <p className="ten-phim">
              <span className="age-type">C13</span>
              {props.chosenMovie.thongTinPhim.tenPhim}
            </p>
            <p className="time">120 phút - 8.7 IMDb - 2D/Digital</p>
          </div>
        </div>
      </div>
      <div className="checkout-content-1 row m-0 p-0">
        <div
          className="checkout__left col-3 p-0"
          style={{
            background: `url(${props.chosenMovie.thongTinPhim.hinhAnh}) no-repeat center`,
            backgroundSize: "cover"
          }}
        >
          <div className="checkout__left__overlay">
            <div className="back" onClick={returnDetailMoviePage}>
              <img src="/img/back.png" alt="back-arrow" />
            </div>
            <div className="detail-movie__info">
              <p className="ngay-chieu">
                {props.chosenMovie.thongTinPhim.ngayChieu}
              </p>
              <p className="ten-phim">
                <span className="age-type">C13</span>
                {props.chosenMovie.thongTinPhim.tenPhim}
              </p>
              <p className="time">120 phút - 8.7 IMDb - 2D/Digital</p>
            </div>
          </div>
        </div>
        <div className="checkout__right col-12 col-md-9">
          <div className="cinema">
            <div className="cinema__logo"></div>
            <div className="cinema__info">
              <p className="cinema__name">
                <span className="cinema__name__group">{tenRap[0]}</span> -{" "}
                {tenRap[1]}
              </p>
              <p className="cinema__time">
                {props.chosenMovie.thongTinPhim.ngayChieu} -{" "}
                {props.chosenMovie.thongTinPhim.gioChieu} -{" "}
                {props.chosenMovie.thongTinPhim.tenRap}
              </p>
            </div>
          </div>
          <div className="tickets">{renderTicket()}</div>
          <div className="chosen-ticket d-flex justify-content-between align-items-center">
            <div className="total-cost">
              <p>TỔNG TIỀN</p>
              <p>{totalCost.toLocaleString()} đ</p>
            </div>
            {numOfSeats.reduce((countSeat, seat) => countSeat + seat.num, 0) ? (
              <div
                onClick={() => props.nextStep(2, numOfSeats)}
                className="chosen-button"
              >
                CHỌN GHẾ
              </div>
            ) : (
              <div
                className="chosen-button"
                style={{
                  backgroundColor: "#afafaf",
                  cursor: "auto",
                  backgroundImage: "none"
                }}
              >
                CHỌN GHẾ
              </div>
            )}
          </div>
          <div className="contact ">
            <p className="text-white">
              Xin lưu ý, bạn không thể hủy hoặc thay đổi suất chiếu cho vé đã
              mua.
            </p>
            <div className="hotline text-white">
              <div>
                <span className="hotline__title">HOTLINE</span>
                <span className="hotline__cost">Phí cuộc gọi 1000VND/phút</span>
              </div>
              <div>
                <span className="hotline__phone text-white">1900 545 436</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}