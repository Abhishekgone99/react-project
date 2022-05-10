const ToursChild = (props) => {
    let TourList = props.data;
    let Title = props.heading;
    let functiondata = props.funcdata;
    let deleteFn = (id) => {
        functiondata(TourList.filter((item) => item.id !== id))
    }
    return (
        <div className="tourchild">
            <h1 style={{ textAlign: "center", fontSize: "50px" }}>{Title}</h1>
            {TourList.map((value) => {
                return (
                    <div className="collections">
                        <img src={value.poster} alt="" />
                        <h1>{value.title}</h1>
                        <p id='synopsis'>{value.synopsis}</p>
                        <button onClick={() => deleteFn(value.id)}>Not interested</button>
                    </div>
                )
            })
            }
        </div>
    );
}

export default ToursChild;