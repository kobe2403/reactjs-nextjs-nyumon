function Item(props:any) {
    const th:object = {
        width: "100px",
    };

    const td:object = {
        textAlign: "right",
        width: "150px",
    };

    let d:Date = new Date(Date.parse(props.value.created));
    let f:string = d.getMonth() + "/" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes();

    return (
        <tr>
            <th style={th}>No, {props.index}</th>
            <td>{props.value.message}</td>
            <td style={td}>{f}</td>
        </tr>
    );
}

export default Item;