// import axios from 'axios'
// import { accessToken, domain } from '../../configs/setting'
// import Swal from "sweetalert2";
// import { history } from '../../App'
// import { getInforTicketRoom } from './MovieAction'


// export const bookingTicket = (props) => {
//     let ticketForm = { ...ticket };
//     ticketForm.danhSachVe = ticketForm.danhSachVe.map(item =>
//       (({ maGhe, giaVe }) => ({ maGhe, giaVe }))(item)
//     );
//     axios({
//       method: "POST",
//       url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
//       data: ticketForm,
//       headers: { 'Authorization': 'Bearer ' + localStorage.getItem(accessToken)  }
//     })
//       .then(result => {
//         Swal.fire({
//           icon: "success",
//           text: "Đặt vé thành công!",
//           width: "400px",
//           padding: "0 0 20px 0"
//         }).then(() => {
//           if (props.history.location.prePage) {
//             props.history.push(props.history.location.prePage);
//           } else {
//             props.history.push("/");
//           }
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };
