import "./Table.css";

const Table = () => {
  return (
    <table className="table">
          <thead>
            <tr>
              <th colSpan="2">information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Name</th>
              <td>Josha Morgan</td>
            </tr>
            <tr>
              <th>Birthday</th>
              <td>Aug 12, 1986</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>120-240-9600</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>hello@josh.design</td>
            </tr>
          </tbody>
        </table>
  );
}

const Table2 = () => {
  return(
    <table className="table2"> 
      <tbody>
        <tr>
          <td><span>20+</span><p>years of experiences</p></td>
          <td><span>245</span><p>happy customers</p></td>
        </tr>
        <tr>
          <td><span>640</span><p>projects finished</p></td>
          <td><span>72+</span><p>digital awards</p></td>
        </tr>
      </tbody> 
    </table>
  );
}

export default Table;
export {Table2};