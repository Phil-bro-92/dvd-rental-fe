import moment from "moment";
export default function IndvRental({ rental }) {
    return (
        <tr>
            <td>{rental.title}</td>
            <td>
                {moment(rental.rental_date).format("MMMM Do YYYY, h:mm:ss a")}
            </td>
            <td>
                {moment(rental.return_date).format("MMMM Do YYYY, h:mm:ss a")}
            </td>
            <td>{rental.rental_duration} days</td>
        </tr>
    );
}
