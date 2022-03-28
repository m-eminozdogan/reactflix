import "./widgetLarge.css";

export default function WidgetLarge() {
  const Button = ({ type }) => {
    return <button className={"widgetLargeButton " + type}> {type} </button>;
  };
  return (
    <div className="widgetLarge">
      <h3 className="widgetLargeTitle">Latest Transactions</h3>

      <table className="widgetLargeTable">
        <tbody>
          <tr className="widgetLargeTr">
            <th className="widgetLargeTh">Customer</th>
            <th className="widgetLargeTh">Date</th>
            <th className="widgetLargeTh">Amount</th>
            <th className="widgetLargeTh">Status</th>
          </tr>
          <tr className="widgetLargeTr">
            <td className="widgetLargeUser">
              <img
                src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="widgetLargeImg"
              />
              <span className="widgetLargeName">Hakan Akkuş</span>
            </td>
            <td className="widgetLargeDate">19 Feb 2020</td>
            <td className="widgetLargeAmount">$1000.00</td>
            <td className="widgetLargeStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLargeTr">
            <td className="widgetLargeUser">
              <img
                src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="widgetLargeImg"
              />
              <span className="widgetLargeName">Hakan Akkuş</span>
            </td>
            <td className="widgetLargeDate">19 Feb 2020</td>
            <td className="widgetLargeAmount">$1000.00</td>
            <td className="widgetLargeStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLargeTr">
            <td className="widgetLargeUser">
              <img
                src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="widgetLargeImg"
              />
              <span className="widgetLargeName">Hakan Akkuş</span>
            </td>
            <td className="widgetLargeDate">19 Feb 2020</td>
            <td className="widgetLargeAmount">$1000.00</td>
            <td className="widgetLargeStatus">
              <Button type="Pending" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
