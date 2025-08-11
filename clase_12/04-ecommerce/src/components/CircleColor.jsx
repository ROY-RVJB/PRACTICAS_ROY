const CircleColor = ({ color = '#ffff' }) => {
    if (!color) {
        return <p>No tiene color</p>;
    }

    return (
        <div
            style={{
                borderRadius: "50%",
                border: "1px solid gray",
                backgroundColor: color,
                width: "30px",
                height: "30px"
            }}
        ></div>
    );
};

export default CircleColor;
