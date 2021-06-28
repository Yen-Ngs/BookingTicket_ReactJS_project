import React, { useEffect } from "react";
import Axios from "axios";
import BookingTicketStep1 from "./BookingTicketStep1";
import BookingTicketStep2 from "./BookingTicketStep2";
import BookingTicketStep3 from "./BookingTicketStep3";
import Loading from "../../components/Loading/Loading";

export default function BookingTicket(props) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [chosenMovie, setchosenMovie] = React.useState({});
  const [step, setStep] = React.useState(1);
  const [numOfSeats, setNumOfSeats] = React.useState({});

  //Lấy số lượng ghế đã chọn ở bước 1 truyền sang bước 2
  const nextStep = (step, numOfSeats) => {
    setNumOfSeats(numOfSeats);
    setStep(step);
  };

  const backStep = () => {
    setStep(1);
  };
  const id = props.match.params.id;
  useEffect(() => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
    })
      .then(result => {
        setchosenMovie(result.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const renderStepPage = () => {
    switch (step) {
      case 1:
        return (
          <BookingTicketStep1
            id={id}
            history={props.history}
            prePage={props.history.location.prePage}
            chosenMovie={chosenMovie}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <BookingTicketStep2
            prePage={props.history.location.prePage}
            history={props.history}
            backStep={backStep}
            chosenMovie={chosenMovie}
            numOfSeats={numOfSeats}
          />
        );
      case 3:
        return <BookingTicketStep3 />;
      default:
        break;
    }
  };
  return (
    <div className="checkout text-white">
      <div className="step-checkout">
        <div className="step-checkout__left">
          <ul>
            {step === 1 ? (
              <li className={`${step}` === "1" ? "active" : ""}>
                <span className="mr-1">01</span>CHỌN LOẠI VÉ
              </li>
            ) : (
              <li
                onClick={backStep}
                style={{ cursor: "pointer" }}
                className={`${step}` === "1" ? "active" : ""}
              >
                <span className="mr-1">01</span>CHỌN LOẠI VÉ
              </li>
            )}
            <li className={`${step}` === "2" ? "active" : ""}>
              <span className="mr-1">02</span>CHỌN GHẾ & THANH TOÁN
            </li>
            <li className={`${step}` === "3" ? "active" : ""}>
              <span className="mr-1">03</span>KẾT QUẢ ĐẶT VÉ
            </li>
          </ul>
        </div>
      </div>
      <div className="blank d-none d-md-block" style={{ height: "80px" }}></div>
      {isLoading ? <Loading /> : renderStepPage()}
    </div>
  );
}