/* eslint-disable react/prop-types */

const InvoiceItem = ({item}) => {


    return (
        <tr>
              <td>{item?.name}</td>
              <td>{item?.cartQuantity}</td>
              <td>{item.price}</td>
              <td>0</td>
            </tr>
    );
};

export default InvoiceItem;